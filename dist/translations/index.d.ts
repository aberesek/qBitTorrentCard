export interface TranslationData {
    states: Record<string, string>;
    ui: {
        no_downloads: string;
        remaining_time: string;
        config_error: string;
        entity_not_found: string;
        failed_to_load: string;
    };
}
export declare function getTranslation(locale: string): TranslationData;
