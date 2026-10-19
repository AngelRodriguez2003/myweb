// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	i18n: {
		locales: ['en', 'es'],
		defaultLocale: 'en',
		routing: {
			prefixDefaultLocale: false,
		},
	},
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Bricolage Grotesque',
			cssVariable: '--font-display',
			weights: [500, 700, 800],
			styles: ['normal'],
			subsets: ['latin', 'latin-ext'],
			fallbacks: ['sans-serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Instrument Sans',
			cssVariable: '--font-body',
			weights: [400, 500, 600],
			styles: ['normal'],
			subsets: ['latin', 'latin-ext'],
			fallbacks: ['sans-serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'JetBrains Mono',
			cssVariable: '--font-mono',
			weights: [400, 500],
			styles: ['normal'],
			subsets: ['latin', 'latin-ext'],
			fallbacks: ['monospace'],
		},
	],
});
