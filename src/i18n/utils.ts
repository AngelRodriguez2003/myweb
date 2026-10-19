import en from './en';
import es from './es';

export const languages = { en: 'EN', es: 'ES' } as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

const dictionaries = { es, en };

/** Pages that exist in both languages, keyed by a stable id. */
export const routes = {
	home: { en: '/', es: '/es/' },
	explosive: { en: '/projects/project-explosive/', es: '/es/proyectos/project-explosive/' },
} as const;

export type RouteId = keyof typeof routes;

export function toLang(locale: string | undefined): Lang {
	return locale === 'es' ? 'es' : defaultLang;
}

export function useTranslations(lang: Lang) {
	return dictionaries[lang];
}

export function otherLang(lang: Lang): Lang {
	return lang === 'es' ? 'en' : 'es';
}
