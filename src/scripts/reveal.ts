// Adds .is-visible to [data-reveal] elements the first time they scroll into view.
const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduced || !('IntersectionObserver' in window)) {
	targets.forEach((el) => el.classList.add('is-visible'));
} else {
	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				entry.target.classList.add('is-visible');
				observer.unobserve(entry.target);
			}
		},
		{ rootMargin: '0px 0px -10% 0px', threshold: 0.15 },
	);
	targets.forEach((el) => observer.observe(el));
}
