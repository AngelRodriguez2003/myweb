import type { ImageMetadata } from 'astro';
import type { Dictionary } from '../i18n/es';

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
import webProximaSerie from '../assets/projects/project-explosive/web-proxima-serie.webp';

export type ScreenId = keyof Dictionary['explosive']['screens'];

export interface Screenshot {
	id: ScreenId;
	image: ImageMetadata;
}

export const explosive = {
	liveUrl: 'https://project-explosive.expo.app',
	liveHost: 'project-explosive.expo.app',
	repoUrl: 'https://github.com/AngelRodriguez2003/my-bilbo-app',
	cover: { web: webProximaSerie, mobile: mobileInicio },
	/** Modal screenshots. Only one web capture exists for now; add the rest (Inicio, Progreso, Catálogo) here. */
	web: [{ id: 'proximaSerie', image: webProximaSerie }] satisfies Screenshot[],
	mobile: [
		{ id: 'inicio', image: mobileInicio },
		{ id: 'proximaSerie', image: mobileProximaSerie },
		{ id: 'progreso', image: mobileProgreso },
		{ id: 'registrarSerie', image: mobileRegistrarSerie },
		{ id: 'catalogo', image: mobileCatalogo },
	] satisfies Screenshot[],
	hero: [mobileInicio, mobileProximaSerie, mobileProgreso],
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
