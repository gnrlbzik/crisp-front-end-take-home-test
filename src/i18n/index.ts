
import type { I18nStringsDefinition, I18nLocale } from '../types';

const i18nStrings: I18nStringsDefinition = {
  'en_US': {
    'default': 'No i18n string reference was found.',
    'fetching_data': 'Fetching data.',
  },
  'es_MX': {
    'default': 'No se encontró ninguna referencia de cadena i18n.',
    'fetching_data': 'Recuperacion de datos.',
  },
};

export function getContentString(textId: string = 'default', locale: I18nLocale = 'en_US',) {
  const i18nString = i18nStrings[locale][textId || 'default'];

  return i18nString;
}

const defaultExport = {
  get: getContentString
};

export default defaultExport;
