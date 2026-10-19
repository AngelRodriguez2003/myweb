const es = {
	meta: {
		title: 'Angel Rodriguez — Mobile & Frontend Engineer',
		description:
			'Portafolio de Angel Rodriguez, desarrollador front-end y mobile. Apps en React Native y web rápidas, estables y que se despliegan solas.',
		caseTitle: 'Project Explosive — Caso de estudio · Angel Rodriguez',
		caseDescription:
			'Caso de estudio de Project Explosive: una app para entrenar con el método Bilbo en iOS, Android y web desde el mismo código.',
	},
	a11y: {
		skip: 'Saltar al contenido',
		home: 'Angel Rodriguez, inicio',
		mainNav: 'Principal',
		themeToLight: 'Cambiar a tema claro',
		themeToDark: 'Cambiar a tema oscuro',
		openMenu: 'Abrir menú',
		closeMenu: 'Cerrar menú',
		language: 'Idioma',
		switchLanguage: 'Cambiar idioma a inglés',
	},
	nav: {
		about: 'Sobre mí',
		skills: 'Habilidades',
		experience: 'Experiencia',
		projects: 'Proyectos',
		contact: 'Contacto',
	},
	hero: {
		status: 'Disponible para trabajar · Colombia y remoto',
		statusShort: 'Disponible · Colombia y remoto',
		role: 'Mobile & Frontend Engineer',
		lead: 'Construyo apps en React Native y web que son rápidas, estables y se despliegan solas.',
		ctaProjects: 'Ver proyectos',
		ctaContact: 'Contactarme',
		photoAlt: 'Foto de Angel Rodriguez',
		stack: ['React Native · Expo', 'React · TypeScript', 'CI/CD con EAS'],
		terminal: {
			passed: 'passed',
			published: 'published',
			done: 'Listo. Sin pasos manuales.',
		},
	},
	stats: [
		{ value: '3+ años', label: 'construyendo apps en producción' },
		{ value: '5+ apps', label: 'white-label sobre un mismo producto' },
		{ value: 'iOS + Android', label: 'publicadas en App Store y Play Store' },
		{ value: 'Fintech', label: 'pagos, dispersión e ISO 27001' },
	],
	about: {
		label: '01 / sobre mí',
		title: 'Lo que no se ve también se construye.',
		paragraphs: [
			'Soy desarrollador front-end con más de 3 años creando apps móviles y web para una fintech de pagos. Trabajo con React Native, Expo, React y TypeScript.',
			'Lo que más disfruto no siempre está en la pantalla: que la app hable bien con el backend, que sea rápida y estable, y que cada versión llegue a las tiendas sin pasos manuales.',
		],
	},
	techMarquee: {
		label: 'Tecnologías que he usado',
	},
	skills: {
		label: '02 / habilidades',
		title: 'Mi caja de herramientas',
		groups: [
			{ name: 'Mobile', items: ['React Native', 'Expo', 'Expo Router', 'App Store', 'Play Store'] },
			{ name: 'Web', items: ['React', 'TypeScript', 'Tailwind CSS'] },
			{ name: 'Datos y estado', items: ['Integración de APIs', 'Supabase', 'Zustand'] },
			{
				name: 'CI/CD e infraestructura',
				items: ['GitHub Actions', 'EAS Build', 'EAS Update', 'AWS', 'PM2', 'Nginx'],
			},
		],
	},
	experience: {
		label: '03 / experiencia',
		title: 'Dónde lo he hecho',
		jobs: [
			{
				dates: 'ENE 2023 — SEP 2026',
				company: 'Cobru',
				kind: 'Fintech de pagos',
				duration: '3 años y 8 meses',
				role: 'Desarrollador Front-end',
				summary:
					'Desarrollo y mantenimiento del panel web y la app móvil de Cobru, y de al menos 5 soluciones white-label construidas sobre el mismo producto.',
				bullets: [
					'Construí nuevas funcionalidades en React y React Native, incluyendo flujos y permisos configurables por marca para las soluciones white-label.',
					'Integré APIs y servicios financieros, como dispersión de pagos y otras operaciones de dinero.',
					'Automaticé builds y despliegues con GitHub Actions y EAS Build/Update, y desplegué servicios en AWS con PM2 y Nginx.',
					'Publiqué y mantuve las apps en App Store y Play Store.',
					'Participé en revisiones de seguridad y en auditorías ISO 27001 e ISO 9001.',
				],
			},
		],
	},
	projects: {
		label: '04 / proyectos',
		title: 'Lo que construyo por mi cuenta',
		details: 'Ver detalles',
		try: 'Probar',
		nextTitle: 'Próximo proyecto',
		nextBody: 'En construcción. Aquí irán apareciendo los siguientes.',
		modal: {
			close: 'Cerrar',
			view: 'Vista',
			web: 'Web',
			mobile: 'Móvil',
			show: 'Ver',
			what: 'QUÉ HACE',
			how: 'CÓMO ESTÁ HECHA',
			tryWeb: 'Probar en la web',
			fullCase: 'Ver caso completo',
			code: 'Ver código en GitHub',
			screenshotOf: 'Captura de Project Explosive',
			stack: 'TECNOLOGÍAS',
		},
	},
	explosive: {
		chips: ['iOS · Android · Web', 'Proyecto personal'],
		stack: 'React Native · Expo · TypeScript · Supabase',
		tagline:
			'Mi app para entrenar con el método Bilbo: calcula el peso de cada sesión, muestra cómo avanzo y sincroniza el móvil con el ordenador.',
		browserAlt: 'Project Explosive en el navegador',
		phoneAlt: 'Project Explosive en el celular',
		intro: 'La hice para mi propio entrenamiento con el método Bilbo, sin la complejidad de las apps de gimnasio genéricas.',
		what: [
			'Calcula el peso de cada sesión y proyecta el final del ciclo.',
			'Gráfica de progreso con el 1RM estimado.',
			'Catálogo de 509 ejercicios con foto, buscador y filtros.',
			'Cuenta opcional con correo y contraseña para sincronizar dispositivos.',
			'Tema claro y oscuro, en español e inglés.',
		],
		how: [
			'Un solo código para iOS, Android y web con Expo Router.',
			'Offline primero: estado en Zustand guardado en el dispositivo.',
			'Supabase Auth y Postgres con políticas RLS.',
			'Tests con Jest, CI en cada PR y deploy automático al mergear.',
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
			inicio: { title: 'Inicio', desc: 'Ejercicios y ciclos en marcha.' },
			proximaSerie: { title: 'Próxima serie', desc: 'El peso de hoy y la proyección del ciclo.' },
			progreso: { title: 'Progreso', desc: 'Repeticiones por sesión.' },
			registrarSerie: { title: 'Registrar serie', desc: 'Solo apuntas las repeticiones.' },
			catalogo: { title: 'Catálogo', desc: '509 ejercicios con filtros.' },
			nuevoCiclo: { title: 'Nuevo ciclo', desc: '' },
			ajustes: { title: 'Ajustes', desc: '' },
		},
	},
	contact: {
		label: '05 / contacto',
		title: ['¿Construimos', 'algo juntos?'],
		body: 'Estoy disponible para roles de front-end web y mobile, en Colombia o en remoto.',
	},
	footer: {
		made: 'Hecho con Astro · ES / EN',
	},
	case: {
		back: 'Volver al portafolio',
		crumb: 'caso de estudio / project-explosive',
		chips: ['Proyecto personal', 'Publicada en la web'],
		lead: 'Una app para entrenar con el método Bilbo. La hice para mí y funciona en iOS, Android y web desde el mismo código.',
		tryWeb: 'Probar en la web',
		code: 'Ver código en GitHub',
		facts: [
			{ term: 'ROL', value: 'Diseño y desarrollo' },
			{ term: 'PLATAFORMAS', value: 'iOS · Android · Web' },
			{ term: 'STACK', value: 'React Native · Expo · Supabase' },
			{ term: 'IDIOMAS', value: 'Español e inglés' },
		],
		heroAlts: [
			'Pantalla de inicio con los ejercicios y sus ciclos',
			'Detalle del ejercicio con la próxima serie y la proyección del ciclo',
			'Gráfica de repeticiones por sesión',
		],
		problem: {
			label: '01 / el problema',
			title: ['Una sola serie.', 'Muchas cuentas.'],
			paragraphs: [
				'El método Bilbo es una sola serie explosiva por ejercicio. Empieza en torno al 50 % del 1RM, con 27 a 35 repeticiones, y cada sesión suma un incremento fijo de peso. El ciclo termina cuando la serie cae a unas 15 repeticiones.',
				'Llevar eso en una libreta o en una app de gimnasio genérica es incómodo, así que construí la mía: me dice qué peso toca hoy, cómo evolucionan las repeticiones y cuántas sesiones le quedan al ciclo.',
			],
		},
		steps: {
			label: '02 / cómo funciona',
			title: 'Tres pasos, sin cuentas a mano',
			items: [
				{
					step: 'PASO 01',
					title: 'Elige el ejercicio',
					body: 'Desde un catálogo con foto, buscador y filtros por grupo muscular, o creándolo a mano.',
					alt: 'Catálogo de ejercicios con buscador y filtros',
				},
				{
					step: 'PASO 02',
					title: 'Arranca el ciclo',
					body: 'Desde tu 1RM la app calcula el 50 % redondeado al incremento, o empiezas con un peso manual. En kg o lb.',
					alt: 'Formulario para iniciar un ciclo desde el 1RM',
				},
				{
					step: 'PASO 03',
					title: 'Registra la serie',
					body: 'La app propone el peso; solo apuntas las repeticiones y ella proyecta el final del ciclo.',
					alt: 'Registro de una serie con el peso sugerido',
				},
			],
		},
		features: {
			label: '03 / qué incluye',
			title: 'Más que una calculadora',
			items: [
				{
					tag: 'Supabase Auth',
					title: 'Cuenta opcional',
					body: 'Inicias sesión con correo y contraseña y el móvil y el ordenador ven lo mismo. Sin cuenta, todo se queda en el dispositivo.',
				},
				{
					tag: 'tema',
					title: 'Claro y oscuro',
					body: 'Sigue el tema del sistema o lo eliges en Ajustes. Las dos versiones salen de la misma paleta «forja» de carbón y brasa.',
				},
				{
					tag: 'i18next',
					title: 'Español e inglés',
					body: 'Detecta el idioma del teléfono con expo-localization. Traduce también los nombres del catálogo y el formato de las fechas.',
				},
				{
					tag: 'react-native-svg',
					title: 'Progreso a la vista',
					body: 'Gráfica propia de repeticiones o peso por sesión, animada con Reanimated, con el 1RM estimado (Epley) y la línea de fin de ciclo.',
				},
				{
					tag: 'catálogo',
					title: '509 ejercicios con foto',
					body: 'Buscador y filtros por grupo muscular. Si falta alguno, lo creas a mano.',
				},
				{
					tag: 'ajustes',
					title: 'A tu medida',
					body: 'Kg o lb y el incremento por sesión configurables. Los ajustes viajan con tu cuenta, igual que el progreso.',
				},
			],
			demos: {
				title: 'En acción',
				note: 'Grabado en el simulador de iOS con datos de ejemplo.',
				items: {
					registrarSerie: {
						caption: 'Registrar una serie',
						alt: 'Se abre Press banca, se registra la serie y la proyección se actualiza con el siguiente peso',
					},
					anadirEjercicio: {
						caption: 'Añadir del catálogo',
						alt: 'Se abre el catálogo, se filtra por espalda, se busca «remo» y se añade el ejercicio',
					},
					progreso: {
						caption: 'Progreso por ejercicio',
						alt: 'En Progreso se cambia de ejercicio y se pasa de repeticiones a peso por sesión',
					},
					tema: {
						caption: 'Tema claro y oscuro',
						alt: 'En Ajustes se cambia al tema claro, se recorren las pantallas y se vuelve al oscuro',
					},
					login: {
						caption: 'Cuenta para sincronizar',
						alt: 'Pantalla de cuenta con correo y contraseña para iniciar sesión o crear una cuenta',
					},
				},
			},
			stack: {
				title: 'Stack',
				groups: [
					{ name: 'App', items: ['React Native', 'Expo SDK 57', 'Expo Router', 'React 19', 'TypeScript'] },
					{ name: 'Datos', items: ['Zustand', 'AsyncStorage', 'Supabase Auth', 'Postgres + RLS'] },
					{ name: 'Interfaz', items: ['react-native-svg', 'Reanimated', 'expo-image', 'React Compiler'] },
					{ name: 'Idiomas', items: ['i18next', 'react-i18next', 'expo-localization'] },
					{ name: 'Calidad y deploy', items: ['Jest', 'ESLint', 'GitHub Actions', 'EAS Hosting'] },
				],
			},
		},
		tech: {
			label: '04 / decisiones técnicas',
			title: 'Lo que no se ve en las capturas',
			items: [
				{
					title: 'Offline primero',
					body: 'El estado vive en Zustand y se guarda en el dispositivo. Sin conexión la app funciona igual, y los cambios suben en la siguiente sincronización.',
				},
				{
					title: 'Sincronización sin duplicados',
					body: 'Gana el cambio más reciente por registro, no por dispositivo. Cada pasada baja antes de subir, con un cursor en el reloj del dispositivo y otro en el del servidor, y los borrados son lógicos para que viajen.',
				},
				{
					title: 'Un código, tres plataformas',
					body: 'Expo Router con rutas tipadas y React Compiler. La web sale como export estático y se publica en EAS Hosting.',
				},
				{
					title: 'Tests de la lógica',
					body: 'Unos 75 tests con Jest cubren los cálculos del método, la fusión de datos, las copias de seguridad, el catálogo y la sesión de usuario.',
				},
				{
					title: 'Respaldo en tus manos',
					body: 'Exporta e importa todo el progreso en un JSON, fusionando o reemplazando lo que ya tienes.',
				},
				{
					title: 'Datos protegidos',
					body: 'Políticas RLS en Postgres: cada cuenta solo lee y escribe sus filas. Al cerrar sesión, la app sube lo pendiente antes de limpiar el dispositivo.',
				},
			],
			terminal: {
				title: 'Se despliega sola',
				columns: [
					{
						file: 'ci.yml',
						when: 'en cada PR',
						lines: ['tipos con tsc', 'tests con Jest', 'build web'],
						last: null,
					},
					{
						file: 'deploy-prod.yml',
						when: 'al mergear a main',
						lines: ['tests', 'build de producción'],
						last: 'eas deploy --prod',
					},
					{
						file: 'supabase-keepalive.yml',
						when: 'lunes y jueves',
						lines: ['ping a la base de datos'],
						last: null,
						note: 'mantiene activo el plan gratuito',
					},
				],
			},
		},
		gallery: {
			label: '05 / galería',
			title: 'Todas las pantallas',
			dark: 'TEMA OSCURO',
			light: 'TEMA CLARO',
			lightSuffix: 'en tema claro',
		},
		cta: {
			title: 'Pruébala en tu navegador.',
			body: 'No necesitas instalar nada ni crear una cuenta: tus datos se quedan en tu navegador.',
			open: 'Abrir Project Explosive',
			back: 'Volver al portafolio',
		},
	},
};

export type Dictionary = typeof es;

export default es;
