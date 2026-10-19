import type { Dictionary } from '../i18n/es';
import { routes } from '../i18n/utils';
import type { Screenshot as BaseScreenshot } from './projects';

import lightCatalogo from '../assets/projects/project-explosive/light-catalogo.webp';
import lightInicio from '../assets/projects/project-explosive/light-inicio.webp';
import lightProgreso from '../assets/projects/project-explosive/light-progreso.webp';
import lightProximaSerie from '../assets/projects/project-explosive/light-proxima-serie.webp';
import lightRegistrarSerie from '../assets/projects/project-explosive/light-registrar-serie.webp';
import mobileAjustes from '../assets/projects/project-explosive/mobile-ajustes.webp';
import mobileCatalogo from '../assets/projects/project-explosive/mobile-catalogo.webp';
import mobileInicio from '../assets/projects/project-explosive/mobile-inicio.webp';
import mobileNuevoCiclo from '../assets/projects/project-explosive/mobile-nuevo-ciclo.webp';
import mobileProgreso from '../assets/projects/project-explosive/mobile-progreso.webp';
import mobileProximaSerie from '../assets/projects/project-explosive/mobile-proxima-serie.webp';
import mobileRegistrarSerie from '../assets/projects/project-explosive/mobile-registrar-serie.webp';
import webInicio from '../assets/projects/project-explosive/web-inicio.webp';
import webProgreso from '../assets/projects/project-explosive/web-progreso.webp';
import webProximaSerie from '../assets/projects/project-explosive/web-proxima-serie.webp';

export type ScreenId = keyof Dictionary['explosive']['screens'];
export type DemoId = keyof Dictionary['case']['features']['demos']['items'];

/** Screen recordings (animated WebP in public/, converted from the app repo's docs/gifs) with a still frame for reduced motion. */
const demo = (id: DemoId, file: string) => ({
	id,
	src: `/projects/project-explosive/${file}.webp`,
	still: `/projects/project-explosive/${file}-still.webp`,
});

type Screenshot = BaseScreenshot<ScreenId>;

export const explosive = {
	key: 'explosive' as const,
	tone: 'warm' as const,
	caseUrl: routes.explosive,
	liveUrl: 'https://project-explosive.expo.app',
	liveHost: 'project-explosive.expo.app',
	repoUrl: 'https://github.com/AngelRodriguez2003/my-bilbo-app',
	cover: { web: webProgreso, mobile: mobileInicio },
	/** Modal screenshots. */
	web: [
		{ id: 'inicio', image: webInicio },
		{ id: 'proximaSerie', image: webProximaSerie },
		{ id: 'progreso', image: webProgreso },
	] satisfies Screenshot[],
	mobile: [
		{ id: 'inicio', image: mobileInicio },
		{ id: 'proximaSerie', image: mobileProximaSerie },
		{ id: 'progreso', image: mobileProgreso },
		{ id: 'registrarSerie', image: mobileRegistrarSerie },
		{ id: 'catalogo', image: mobileCatalogo },
	] satisfies Screenshot[],
	hero: [mobileInicio, mobileProximaSerie, mobileProgreso],
	demos: [
		demo('registrarSerie', 'registrar-serie'),
		demo('anadirEjercicio', 'anadir-ejercicio'),
		demo('progreso', 'progreso'),
		demo('tema', 'tema'),
		demo('login', 'login'),
	],
	steps: [mobileCatalogo, mobileNuevoCiclo, mobileRegistrarSerie],
	galleryDark: [
		{ id: 'inicio', image: mobileInicio },
		{ id: 'proximaSerie', image: mobileProximaSerie },
		{ id: 'progreso', image: mobileProgreso },
		{ id: 'registrarSerie', image: mobileRegistrarSerie },
		{ id: 'catalogo', image: mobileCatalogo },
		{ id: 'nuevoCiclo', image: mobileNuevoCiclo },
		{ id: 'ajustes', image: mobileAjustes },
	] satisfies Screenshot[],
	galleryLight: [
		{ id: 'inicio', image: lightInicio },
		{ id: 'proximaSerie', image: lightProximaSerie },
		{ id: 'progreso', image: lightProgreso },
		{ id: 'registrarSerie', image: lightRegistrarSerie },
		{ id: 'catalogo', image: lightCatalogo },
	] satisfies Screenshot[],
};
