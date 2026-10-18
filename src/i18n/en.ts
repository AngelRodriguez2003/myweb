import type { Dictionary } from './es';

const en: Dictionary = {
	meta: {
		title: 'Angel Rodriguez — Mobile & Frontend Engineer',
		description:
			'Portfolio of Angel Rodriguez, front-end and mobile developer. React Native and web apps that are fast, stable and ship themselves.',
		caseTitle: 'Project Explosive — Case study · Angel Rodriguez',
		caseDescription:
			'Project Explosive case study: an app for training with the Bilbo method on iOS, Android and web from a single codebase.',
	},
	a11y: {
		skip: 'Skip to content',
		home: 'Angel Rodriguez, home',
		mainNav: 'Main',
		themeToLight: 'Switch to light theme',
		themeToDark: 'Switch to dark theme',
		openMenu: 'Open menu',
		closeMenu: 'Close menu',
		language: 'Language',
		switchLanguage: 'Switch language to Spanish',
	},
	nav: {
		about: 'About',
		skills: 'Skills',
		experience: 'Experience',
		projects: 'Projects',
		contact: 'Contact',
	},
	hero: {
		status: 'Open to work · Colombia and remote',
		statusShort: 'Available · Colombia and remote',
		role: 'Mobile & Frontend Engineer',
		lead: 'I build React Native and web apps that are fast, stable and ship themselves.',
		ctaProjects: 'See projects',
		ctaContact: 'Get in touch',
		photoAlt: 'Photo of Angel Rodriguez',
		stack: ['React Native · Expo', 'React · TypeScript', 'CI/CD with EAS'],
		terminal: {
			passed: 'passed',
			published: 'published',
			done: 'Done. No manual steps.',
		},
	},
	stats: [
		{ value: '3+ years', label: 'building apps in production' },
		{ value: '5+ apps', label: 'white-label on a single product' },
		{ value: 'iOS + Android', label: 'published on the App Store and Play Store' },
		{ value: 'Fintech', label: 'payments, payouts and ISO 27001' },
	],
	about: {
		label: '01 / about me',
		title: 'What you don’t see gets built too.',
		paragraphs: [
			'I’m a front-end developer with 3+ years building mobile and web apps for a payments fintech. I work with React Native, Expo, React and TypeScript.',
			'What I enjoy most isn’t always on screen: an app that talks well to the backend, that’s fast and stable, and where every release reaches the stores with no manual steps.',
		],
	},
	skills: {
		label: '02 / skills',
		title: 'My toolbox',
		groups: [
			{ name: 'Mobile', items: ['React Native', 'Expo', 'Expo Router', 'App Store', 'Play Store'] },
			{ name: 'Web', items: ['React', 'TypeScript', 'Tailwind CSS'] },
			{ name: 'Data & state', items: ['API integration', 'Supabase', 'Zustand'] },
			{
				name: 'CI/CD & infrastructure',
				items: ['GitHub Actions', 'EAS Build', 'EAS Update', 'AWS', 'PM2', 'Nginx'],
			},
		],
	},
	experience: {
		label: '03 / experience',
		title: 'Where I’ve done it',
		jobs: [
			{
				dates: 'JAN 2023 — SEP 2026',
				company: 'Cobru',
				kind: 'Payments fintech',
				duration: '3 years, 8 months',
				role: 'Front-end Developer',
				summary:
					'Built and maintained Cobru’s web dashboard and mobile app, plus at least 5 white-label solutions built on the same product.',
				bullets: [
					'Shipped new features in React and React Native, including per-brand configurable flows and permissions for the white-label solutions.',
					'Integrated APIs and financial services, such as payment payouts and other money operations.',
					'Automated builds and deployments with GitHub Actions and EAS Build/Update, and deployed services on AWS with PM2 and Nginx.',
					'Published and maintained the apps on the App Store and Play Store.',
					'Took part in security reviews and ISO 27001 and ISO 9001 audits.',
				],
			},
		],
	},
	projects: {
		label: '04 / projects',
		title: 'What I build on my own',
		details: 'See details',
		try: 'Try it',
		nextTitle: 'Next project',
		nextBody: 'In progress. New projects will show up here.',
		modal: {
			close: 'Close',
			view: 'View',
			web: 'Web',
			mobile: 'Mobile',
			show: 'Show',
			what: 'WHAT IT DOES',
			how: 'HOW IT’S BUILT',
			tryWeb: 'Try it on the web',
			fullCase: 'See full case study',
			code: 'See code on GitHub',
			screenshotOf: 'Project Explosive screenshot',
		},
	},
	explosive: {
		chips: ['iOS · Android · Web', 'Personal project'],
		stack: 'React Native · Expo · Supabase',
		tagline: 'My app for training with the Bilbo method: it works out the weight for each session and shows my progress.',
		browserAlt: 'Project Explosive in the browser',
		phoneAlt: 'Project Explosive on a phone',
		intro: 'I built it for my own Bilbo method training, without the complexity of generic gym apps.',
		what: [
			'Calculates the weight for each session.',
			'Projects the end of the cycle.',
			'Works offline and syncs across devices.',
		],
		how: ['One codebase for iOS, Android and web.', 'Jest tests and CI on every PR.', 'Ships itself when merged to main.'],
		screens: {
			inicio: { title: 'Home', desc: 'Exercises and active cycles.' },
			proximaSerie: { title: 'Next set', desc: 'Today’s weight and the cycle projection.' },
			progreso: { title: 'Progress', desc: 'Reps per session.' },
			registrarSerie: { title: 'Log a set', desc: 'You only enter the reps.' },
			catalogo: { title: 'Catalog', desc: '509 exercises with filters.' },
			nuevoCiclo: { title: 'New cycle', desc: '' },
			ajustes: { title: 'Settings', desc: '' },
		},
	},
	contact: {
		label: '05 / contact',
		title: ['Shall we build', 'something together?'],
		body: 'I’m available for web and mobile front-end roles, in Colombia or remote.',
	},
	footer: {
		made: 'Built with Astro · ES / EN',
	},
	case: {
		back: 'Back to portfolio',
		crumb: 'case study / project-explosive',
		chips: ['Personal project', 'Live on the web'],
		lead: 'An app for training with the Bilbo method. I built it for myself, and it runs on iOS, Android and web from the same code.',
		tryWeb: 'Try it on the web',
		code: 'See code on GitHub',
		facts: [
			{ term: 'ROLE', value: 'Design and development' },
			{ term: 'PLATFORMS', value: 'iOS · Android · Web' },
			{ term: 'STACK', value: 'Expo · TypeScript · Supabase' },
			{ term: 'LANGUAGES', value: 'Spanish and English' },
		],
		heroAlts: [
			'Home screen with exercises and their cycles',
			'Exercise detail with the next set and the cycle projection',
			'Chart of reps per session',
		],
		problem: {
			label: '01 / the problem',
			title: ['One single set.', 'A lot of math.'],
			paragraphs: [
				'The Bilbo method is one explosive set per exercise. It starts at around 50% of your 1RM, for 27 to 35 reps, and each session adds a fixed weight increment. The cycle ends when the set drops to about 15 reps.',
				'Tracking that in a notebook or a generic gym app is awkward, so I built my own: it tells me what weight is due today, how my reps are trending and how many sessions are left in the cycle.',
			],
		},
		steps: {
			label: '02 / how it works',
			title: 'Three steps, no mental math',
			items: [
				{
					step: 'STEP 01',
					title: 'Pick the exercise',
					body: 'From a catalog with photos, search and muscle-group filters, or create it by hand.',
					alt: 'Exercise catalog with search and filters',
				},
				{
					step: 'STEP 02',
					title: 'Start the cycle',
					body: 'From your 1RM the app calculates 50% rounded to the increment, or you start with a manual weight. In kg or lb.',
					alt: 'Form to start a cycle from the 1RM',
				},
				{
					step: 'STEP 03',
					title: 'Log the set',
					body: 'The app suggests the weight; you only enter the reps and it projects the end of the cycle.',
					alt: 'Logging a set with the suggested weight',
				},
			],
		},
		tech: {
			label: '03 / technical decisions',
			title: 'What the screenshots don’t show',
			items: [
				{
					title: 'Offline first',
					body: 'Everything is stored on the device and an account is optional. Without a connection, the app works the same.',
				},
				{
					title: 'Sync without duplicates',
					body: 'With Supabase, every record carries its last-modified date and the most recent one wins. Sample exercises use fixed ids so they don’t duplicate across devices.',
				},
				{
					title: 'One codebase, three platforms',
					body: 'Expo Router with typed routes; the web build is a static export published on EAS Hosting.',
				},
				{
					title: 'Tested logic',
					body: 'Jest covers the method’s calculations, data merging, backups, the catalog and the user session.',
				},
				{
					title: 'Your backup, your call',
					body: 'Export and import all your progress as JSON, merging with or replacing what you already have.',
				},
				{
					title: 'Custom design',
					body: 'A “forge” palette of charcoal and ember, with light and dark themes and native modules like expo-glass-effect.',
				},
			],
			terminal: {
				title: 'It deploys itself',
				columns: [
					{
						file: 'ci.yml',
						when: 'on every PR',
						lines: ['types with tsc', 'tests with Jest', 'web build'],
						last: null,
					},
					{
						file: 'deploy-prod.yml',
						when: 'on merge to main',
						lines: ['tests', 'production build'],
						last: 'eas deploy --prod',
					},
					{
						file: 'supabase-keepalive.yml',
						when: 'Mondays and Thursdays',
						lines: ['database ping'],
						last: null,
						note: 'keeps the free plan active',
					},
				],
			},
		},
		gallery: {
			label: '04 / gallery',
			title: 'Every screen',
			dark: 'DARK THEME',
			light: 'LIGHT THEME',
			lightSuffix: 'in light theme',
		},
		cta: {
			title: 'Try it in your browser.',
			body: 'No install and no account needed: your data stays in your browser.',
			open: 'Open Project Explosive',
			back: 'Back to portfolio',
		},
	},
};

export default en;
