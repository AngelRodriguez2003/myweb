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
	techMarquee: {
		label: 'Technologies I’ve worked with',
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
			stack: 'TECHNOLOGIES',
		},
	},
	explosive: {
		chips: ['iOS · Android · Web', 'Personal project'],
		stack: 'React Native · Expo · TypeScript · Supabase',
		tagline:
			'My app for training with the Bilbo method: it works out the weight for each session, shows my progress and syncs my phone with my computer.',
		browserAlt: 'Project Explosive in the browser',
		phoneAlt: 'Project Explosive on a phone',
		intro: 'I built it for my own Bilbo method training, without the complexity of generic gym apps.',
		what: [
			'Calculates the weight for each session and projects the end of the cycle.',
			'Progress chart with an estimated 1RM.',
			'Catalog of 509 exercises with photos, search and filters.',
			'Optional email and password account to sync devices.',
			'Light and dark themes, in Spanish and English.',
		],
		how: [
			'One codebase for iOS, Android and web with Expo Router.',
			'Offline first: Zustand state saved on the device.',
			'Supabase Auth and Postgres with RLS policies.',
			'Jest tests, CI on every PR and automatic deploys on merge.',
		],
		tech: [
			'React Native',
			'Expo',
			'Expo Router',
			'TypeScript',
			'Zustand',
			'Supabase',
			'i18next',
			'Reanimated',
			'Jest',
			'GitHub Actions',
			'EAS Hosting',
		],
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
			{ term: 'STACK', value: 'React Native · Expo · Supabase' },
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
		features: {
			label: '03 / what’s inside',
			title: 'More than a calculator',
			items: [
				{
					tag: 'Supabase Auth',
					title: 'Optional account',
					body: 'Sign in with email and password and your phone and computer show the same data. Without an account, everything stays on the device.',
				},
				{
					tag: 'theme',
					title: 'Light and dark',
					body: 'Follows the system theme, or you pick one in Settings. Both come from the same “forge” palette of charcoal and ember.',
				},
				{
					tag: 'i18next',
					title: 'Spanish and English',
					body: 'Detects the phone’s language with expo-localization. It also translates the catalog’s exercise names and the date format.',
				},
				{
					tag: 'react-native-svg',
					title: 'Progress at a glance',
					body: 'A custom chart of reps or weight per session, animated with Reanimated, with the estimated 1RM (Epley) and the end-of-cycle line.',
				},
				{
					tag: 'catalog',
					title: '509 exercises with photos',
					body: 'Search and filter by muscle group. If one is missing, you create it yourself.',
				},
				{
					tag: 'settings',
					title: 'Your way',
					body: 'Kg or lb and a configurable per-session increment. Settings travel with your account, just like your progress.',
				},
			],
			demos: {
				title: 'In action',
				note: 'Recorded in the iOS simulator with sample data.',
				items: {
					registrarSerie: {
						caption: 'Logging a set',
						alt: 'Bench press is opened, a set is logged and the projection updates with the next weight',
					},
					anadirEjercicio: {
						caption: 'Adding from the catalog',
						alt: 'The catalog is opened, filtered by back, searched for “row” and the exercise is added',
					},
					progreso: {
						caption: 'Progress per exercise',
						alt: 'In Progress the exercise is switched and the chart goes from reps to weight per session',
					},
					tema: {
						caption: 'Light and dark theme',
						alt: 'In Settings the light theme is turned on, the screens are browsed and it switches back to dark',
					},
					login: {
						caption: 'Account to sync',
						alt: 'Account screen with email and password to sign in or create an account',
					},
				},
			},
			stack: {
				title: 'Stack',
				groups: [
					{ name: 'App', items: ['React Native', 'Expo SDK 57', 'Expo Router', 'React 19', 'TypeScript'] },
					{ name: 'Data', items: ['Zustand', 'AsyncStorage', 'Supabase Auth', 'Postgres + RLS'] },
					{ name: 'UI', items: ['react-native-svg', 'Reanimated', 'expo-image', 'React Compiler'] },
					{ name: 'Languages', items: ['i18next', 'react-i18next', 'expo-localization'] },
					{ name: 'Quality and deploy', items: ['Jest', 'ESLint', 'GitHub Actions', 'EAS Hosting'] },
				],
			},
		},
		tech: {
			label: '04 / technical decisions',
			title: 'What the screenshots don’t show',
			items: [
				{
					title: 'Offline first',
					body: 'State lives in Zustand and is saved on the device. Offline, the app works the same, and changes go up on the next sync.',
				},
				{
					title: 'Sync without duplicates',
					body: 'The most recent change wins per record, not per device. Each pass pulls before it pushes, with one cursor on the device’s clock and another on the server’s, and deletes are soft so they can travel.',
				},
				{
					title: 'One codebase, three platforms',
					body: 'Expo Router with typed routes and the React Compiler. The web build is a static export published on EAS Hosting.',
				},
				{
					title: 'Tested logic',
					body: 'About 75 Jest tests cover the method’s calculations, data merging, backups, the catalog and the user session.',
				},
				{
					title: 'Your backup, your call',
					body: 'Export and import all your progress as JSON, merging with or replacing what you already have.',
				},
				{
					title: 'Protected data',
					body: 'Postgres RLS policies: each account only reads and writes its own rows. On sign-out, the app pushes anything pending before clearing the device.',
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
			label: '05 / gallery',
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
