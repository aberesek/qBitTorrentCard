import huTranslations from './hu.json';
import enTranslations from './en.json';

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

const translations: Record<string, TranslationData> = {
  hu: huTranslations as TranslationData,
  en: enTranslations as TranslationData
};

export function getTranslation(locale: string): TranslationData {
  const lang = locale.split('-')[0].toLowerCase();
  return translations[lang] || translations['en'];
}
