import type { Project } from './projects';

import mobileCaso from '../assets/projects/portfolio/mobile-caso.webp';
import mobileInicio from '../assets/projects/portfolio/mobile-inicio.webp';
import mobileMenu from '../assets/projects/portfolio/mobile-menu.webp';
import mobileTemaClaro from '../assets/projects/portfolio/mobile-tema-claro.webp';
import webCaso from '../assets/projects/portfolio/web-caso.webp';
import webExperiencia from '../assets/projects/portfolio/web-experiencia.webp';
import webInicio from '../assets/projects/portfolio/web-inicio.webp';
import webTemaClaro from '../assets/projects/portfolio/web-tema-claro.webp';

/** This site. Screenshots were taken from the dev server (/es/, dark theme unless noted). */
export const portfolio: Project = {
	key: 'portfolio',
	tone: 'base',
	repoUrl: 'https://github.com/AngelRodriguez2003/myweb',
	cover: { web: webInicio, mobile: mobileInicio },
	web: [
		{ id: 'inicio', image: webInicio },
		{ id: 'experiencia', image: webExperiencia },
		{ id: 'caso', image: webCaso },
		{ id: 'temaClaro', image: webTemaClaro },
	],
	mobile: [
		{ id: 'inicio', image: mobileInicio },
		{ id: 'menu', image: mobileMenu },
		{ id: 'temaClaro', image: mobileTemaClaro },
		{ id: 'caso', image: mobileCaso },
	],
};
