import { LitElement } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
interface Config {
    type: string;
    entity?: string;
    title?: string;
    refresh_interval?: number;
}
export declare class QBittorrentCardEditor extends LitElement {
    hass: HomeAssistant;
    config: Config;
    setConfig(config: Config): void;
    private _valueChanged;
    render(): import("lit").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'qbittorrent-card-editor': QBittorrentCardEditor;
    }
}
export {};
