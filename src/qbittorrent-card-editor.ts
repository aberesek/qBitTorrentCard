import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';

interface Config {
  type: string;
  entity?: string;
  title?: string;
  refresh_interval?: number;
}

@customElement('qbittorrent-card-editor')
export class QBittorrentCardEditor extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public config!: Config;

  setConfig(config: Config) {
    this.config = config;
  }

  private _valueChanged(ev: CustomEvent | Event) {
    if (!this.config) {
      return;
    }
    const target = ev.target as any;
    let value: any;
    let field: string;

    // Ha CustomEvent (ha-entity-picker, ha-textfield change)
    if (ev instanceof CustomEvent && ev.detail?.value !== undefined) {
      value = ev.detail.value;
      field = target.configValue;
    } 
    // Ha input esemény (ha-textfield input)
    else if (ev.type === 'input') {
      value = target.value;
      field = target.configValue;
    }
    // Ha change esemény (ha-switch)
    else {
      value = target.checked !== undefined ? target.checked : target.value;
      field = target.configValue;
    }

    if (this.config[field as keyof Config] === value) {
      return;
    }

    const newConfig: Config = { ...this.config };
    if (value === undefined || value === '') {
      delete newConfig[field as keyof Config];
    } else {
      if (field === 'refresh_interval') {
        newConfig.refresh_interval = parseInt(String(value), 10);
      } else if (field === 'title') {
        newConfig.title = String(value);
      } else if (field === 'entity') {
        newConfig.entity = String(value);
      }
    }

    const event = new CustomEvent('config-changed', {
      detail: { config: newConfig },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  render() {
    if (!this.hass || !this.config) {
      return html``;
    }

    return html`
      <div class="card-config">
        <div class="config-row">
          <ha-entity-picker
            label="Entity"
            .hass=${this.hass}
            .value=${this.config.entity || ''}
            .configValue=${'entity'}
            @value-changed=${this._valueChanged}
            .includeDomains=${['sensor', 'switch', 'button']}
            allow-custom-entity
            required
          ></ha-entity-picker>
        </div>

        <div class="config-row">
          <ha-textfield
            label="Title"
            .configValue=${'title'}
            .value=${this.config.title || 'qBittorrent Downloads'}
            @change=${this._valueChanged}
            @input=${this._valueChanged}
          ></ha-textfield>
        </div>

        <div class="config-row">
          <ha-textfield
            label="Refresh Interval (seconds)"
            type="number"
            .configValue=${'refresh_interval'}
            .value=${String(this.config.refresh_interval || 30)}
            @change=${this._valueChanged}
            @input=${this._valueChanged}
            min="5"
            step="1"
          ></ha-textfield>
        </div>
      </div>
    `;
  }

  static styles = css`
    .card-config {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 16px;
    }

    .config-row {
      display: flex;
      flex-direction: column;
    }

    ha-textfield {
      width: 100%;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'qbittorrent-card-editor': QBittorrentCardEditor;
  }
}

