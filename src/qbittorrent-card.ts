import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';
import { getTranslation, TranslationData } from './translations';

interface Torrent {
  name: string;
  state: string;
  progress: number;
  size: number;
  dlspeed: number;
  upspeed: number;
  eta: string;
  category: string;
  hash: string;
}

interface Config {
  type: string;
  entity?: string;
  title?: string;
  show_speed?: boolean;
  show_eta?: boolean;
  refresh_interval?: number;
}

@customElement('qbittorrent-card')
export class QBittorrentCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: Config;
  @state() private _torrents: Torrent[] = [];
  @state() private _loading = false;
  @state() private _error: string | null = null;
  private _refreshInterval?: number;
  private _translations: TranslationData | null = null;

  static getConfigElement() {
    return document.createElement('qbittorrent-card-editor');
  }

  static getStubConfig(): Config {
    return {
      type: 'custom:qbittorrent-card',
      title: 'qBittorrent Letöltések',
      entity: 'sensor.qBittorrent_state',
      show_speed: true,
      show_eta: true,
      refresh_interval: 30
    };
  }

  setConfig(config: Config) {
    if (!config.entity) {
      throw new Error('Entity is required');
    }
    this._config = {
      ...config,
      type: 'custom:qbittorrent-card',
      title: config.title || 'qBittorrent Downloads',
      show_speed: config.show_speed !== false,
      show_eta: config.show_eta !== false,
      refresh_interval: config.refresh_interval || 30
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this._loadTorrents();
    if (this._config?.refresh_interval) {
      this._refreshInterval = window.setInterval(
        () => this._loadTorrents(),
        this._config.refresh_interval! * 1000
      );
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._refreshInterval) {
      clearInterval(this._refreshInterval);
    }
  }

  protected updated(changedProps: PropertyValues) {
    if (changedProps.has('hass') && this.hass) {
      // Frissítsd a fordítást, ha változott a nyelv
      const locale = this.hass.locale?.language || 'en';
      this._translations = getTranslation(locale);
    }
    
    if (changedProps.has('hass') && this.hass && this._config?.entity) {
      const entity = this.hass.states[this._config.entity];
      if (entity && changedProps.get('hass')) {
        const oldHass = changedProps.get('hass') as HomeAssistant;
        const oldEntity = oldHass?.states[this._config.entity];
        if (!oldEntity || oldEntity.last_updated !== entity.last_updated) {
          this._loadTorrents();
        }
      }
    }
  }

  private async _loadTorrents() {
    if (!this.hass || !this._config?.entity) {
      return;
    }

    this._loading = true;
    this._error = null;

    try {
      

      let deviceId = "";
      //let deviceId = await getDeviceId(this.hass, "qbittorent");
      //deviceId = "b9f666143937a6ea1cd59723aae679df";

      const entity = this.hass.states[this._config.entity];
      deviceId = await this.getDeviceId("sensor.qbittorrent_status") ?? "";
      console.error('Device ID:' + deviceId);

      const response: any = await this.hass.callWS({
        type: "call_service",
        domain: "qbittorrent",
        service: "get_torrents",
        service_data: {torrent_filter: 'all', device_id: deviceId},
        return_response: true
      });

      console.error(JSON.stringify(response, null, 2));

      let torrentsData: any[] = [];
      torrentsData = Object.entries(response.response.torrents).map(
        ([name, info]) => ({
          name,
          info
        })
      );

      // Feldolgozzuk a torrent adatokat
      if (Array.isArray(torrentsData) && torrentsData.length > 0) {
        this._torrents = torrentsData.map((t: any) => ({
          name: t.name || t.title || 'Unknown',
          state: t.info.status || 'unknown',
          progress: parseFloat(t.info.percent_done),
          size: t.size || t.total_size || 0,
          dlspeed: t.dlspeed || t.download_speed || 0,
          upspeed: t.upspeed || t.upload_speed || 0,
          eta: t.info.eta  || '',
          category: t.category || '',
          hash: t.hash || ''
        }));
      } else {
        this._torrents = [];
      }
    } catch (error: any) {
      console.error('Error loading torrents:', error);
      this._error = error.message || this._localize('failed_to_load');
      this._torrents = [];
    } finally {
      this._loading = false;
    }
  }

  private async getDeviceId(entityId: string) {
    try {
      // Közvetlen lekérdezés az Entity Registry-ből
      const entityInfo = await this.hass.callWS<EntityRegistryEntry>({
        type: "config/entity_registry/get",
        entity_id: entityId,
      });
      return entityInfo.device_id;
    } catch (err) {
      console.error("Nem sikerült lekérni a device_id-t:", err);
      return null;
    }
  }

  private _formatBytes(bytes: number): string {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  }

  private _formatSpeed(bytesPerSecond: number): string {
    return this._formatBytes(bytesPerSecond) + '/s';
  }

  private _formatETA(seconds: number): string {
    if (seconds <= 0 || seconds === 8640000) return '∞';
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    if (minutes > 0) {
      return `${minutes}m ${secs}s`;
    }
    return `${secs}s`;
  }

  private _getTranslations(): TranslationData {
    if (!this._translations) {
      const locale = this.hass?.locale?.language || 'en';
      this._translations = getTranslation(locale);
    }
    return this._translations;
  }

  private _getStateLabel(state: string): string {
    const t = this._getTranslations();
    return t.states[state] || state;
  }

  private _getStateColor(state: string): string {
    const colorMap: Record<string, string> = {
      'downloading': 'var(--primary-color)',
      'seeding': 'var(--success-color)',
      'uploading': 'var(--success-color)',
      'stalledUP': 'var(--secondary-text-color)',
      'pausedDL': 'var(--warning-color)',
      'pausedUP': 'var(--warning-color)',
      'queuedDL': 'var(--info-color)',
      'queuedUP': 'var(--info-color)',
      'checkingDL': 'var(--info-color)',
      'checkingUP': 'var(--info-color)',
      'error': 'var(--error-color)',
      'unknown': 'var(--disabled-color)'
    };
    return colorMap[state] || 'var(--disabled-color)';
  }

  private _localize(key: keyof TranslationData['ui']): string {
    const t = this._getTranslations();
    return t.ui[key];
  }

  render() {
    if (!this._config) {
      return html`<div class="error">${this._localize('config_error')}</div>`;
    }

    return html`
      <ha-card>
        <div class="card-header">
          <div class="header-title">${this._config.title}</div>
          ${this._loading ? html`<ha-circular-progress size="small"></ha-circular-progress>` : ''}
        </div>
        
        ${this._error ? html`
          <div class="error-message">
            <ha-icon icon="mdi:alert-circle"></ha-icon>
            ${this._error}
          </div>
        ` : ''}

        ${this._torrents.length === 0 && !this._loading ? html`
          <div class="empty-state">
            <ha-icon icon="mdi:download-off"></ha-icon>
            <p>${this._localize('no_downloads')}</p>
          </div>
        ` : ''}

        <div class="torrent-list">
          ${this._torrents.map(torrent => html`
            <div class="torrent-item">
              <div class="torrent-header">
                <div class="torrent-name" title="${torrent.name}">${torrent.name}</div>
                <div class="torrent-state" style="color: ${this._getStateColor(torrent.state)}">
                  ${this._getStateLabel(torrent.state)}
                </div>
              </div>
              
              <div class="torrent-progress">
                <div class="progress-bar">
                  <div 
                    class="progress-fill" 
                    style="width: ${torrent.progress}%; background-color: ${this._getStateColor(torrent.state)}"
                  ></div>
                </div>
                <div class="progress-text">${Math.round(torrent.progress)}%</div>
              </div>

              ${torrent.eta != "None" ?
              html`
                <div class="torrent-info">
                <span>${this._localize('remaining_time')} ${torrent.eta}</span>
                </div>
                `:''
              }
            </div>
          `)}
        </div>
      </ha-card>
    `;
  }

  static styles = css`
    :host {
      display: block;
    }

    ha-card {
      padding: 16px;
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }

    .header-title {
      font-size: 1.2em;
      font-weight: 500;
      color: var(--primary-text-color);
    }

    .error-message {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px;
      background-color: var(--error-color);
      color: var(--text-primary-color);
      border-radius: 4px;
      margin-bottom: 16px;
    }

    .empty-state {
      text-align: center;
      padding: 40px 20px;
      color: var(--secondary-text-color);
    }

    .empty-state ha-icon {
      font-size: 48px;
      margin-bottom: 16px;
      opacity: 0.5;
    }

    .torrent-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .torrent-item {
      padding: 8px;
      background-color: var(--card-background-color);
      transition: box-shadow 0.2s;
    }

    .torrent-item2 {
      padding: 16px;
      background-color: var(--card-background-color);
      border-radius: 8px;
      border: 1px solid var(--divider-color);
      transition: box-shadow 0.2s;
    }

    .torrent-item:hover {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .torrent-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 4px;
      gap: 12px;
    }

    .torrent-name {
      flex: 1;
      font-weight: 500;
      color: var(--primary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 0.95em;
    }

    .torrent-state {
      font-size: 0.85em;
      font-weight: 500;
      white-space: nowrap;
      padding: 4px 8px;
      border-radius: 4px;
      background-color: var(--card-background-color);
    }

    .torrent-progress {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 8px;
    }

    .progress-bar {
      flex: 1;
      height: 8px;
      background-color: var(--divider-color);
      border-radius: 4px;
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      transition: width 0.3s ease;
      border-radius: 4px;
    }

    .progress-text {
      font-size: 0.85em;
      font-weight: 500;
      color: var(--secondary-text-color);
      min-width: 40px;
      text-align: right;
    }

    .torrent-info {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      margin-top: 8px;
    }

    .info-item {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 0.85em;
      color: var(--secondary-text-color);
    }

    .info-item ha-icon {
      width: 16px;
      height: 16px;
    }

    .error {
      padding: 16px;
      color: var(--error-color);
      text-align: center;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'qbittorrent-card': QBittorrentCard;
  }
}


interface EntityRegistryEntry {
  device_id: string | null;
  entity_id: string;
  // ide írhatsz mást is, ha kell: area_id, platform, stb.
}