import { LitElement, PropertyValues } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
interface Config {
    type: string;
    entity?: string;
    title?: string;
    show_speed?: boolean;
    show_eta?: boolean;
    refresh_interval?: number;
}
export declare class QBittorrentCard extends LitElement {
    hass: HomeAssistant;
    private _config;
    private _torrents;
    private _loading;
    private _error;
    private _refreshInterval?;
    private _translations;
    static getConfigElement(): import("./qbittorrent-card-editor").QBittorrentCardEditor;
    static getStubConfig(): Config;
    setConfig(config: Config): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected updated(changedProps: PropertyValues): void;
    private _loadTorrents;
    private getDeviceId;
    private _formatBytes;
    private _formatSpeed;
    private _formatETA;
    private _getTranslations;
    private _getStateLabel;
    private _getStateColor;
    private _localize;
    render(): import("lit").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qbittorrent-card': QBittorrentCard;
    }
}
export {};
