// Scroll-triggered reveals. Elements with [data-reveal] or .split-line fade/slide in once.
// CSS only animates under prefers-reduced-motion: no-preference, so this is harmless otherwise.
const targets = document.querySelectorAll<HTMLElement>('[data-reveal], [data-reveal-group]');

if (!('IntersectionObserver' in window)) {
  targets.forEach((el) => el.classList.add('is-in'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  targets.forEach((el) => io.observe(el));
}
