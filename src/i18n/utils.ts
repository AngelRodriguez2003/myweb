import en from './en';
import es from './es';

export const languages = { es: 'ES', en: 'EN' } as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

const dictionaries = { es, en };

/** Pages that exist in both languages, keyed by a stable id. */
export const routes = {
	home: { es: '/', en: '/en/' },
	explosive: { es: '/proyectos/project-explosive/', en: '/en/projects/project-explosive/' },
} as const;

export type RouteId = keyof typeof routes;

export function toLang(locale: string | undefined): Lang {
	return locale === 'en' ? 'en' : defaultLang;
}

export function useTranslations(lang: Lang) {
	return dictionaries[lang];
}

export function otherLang(lang: Lang): Lang {
	return lang === 'es' ? 'en' : 'es';
}
