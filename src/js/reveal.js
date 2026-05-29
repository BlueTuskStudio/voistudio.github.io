let revealIo;
let countIo;

export function initReveal() {
  revealIo = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        revealIo.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => revealIo.observe(el));

  // Stagger direct children of grids/lists marked with .stagger
  document.querySelectorAll('.stagger').forEach(group => {
    Array.from(group.children).forEach((child, i) => {
      child.style.setProperty('--reveal-delay', (i * 80) + 'ms');
      child.classList.add('reveal-child');
      revealIo.observe(child);
    });
  });

  countIo = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.getAttribute('data-count'), 10);
      const dur = 900;
      const start = performance.now();
      const easeOut = x => 1 - Math.pow(1 - x, 3);
      const tick = (now) => {
        const p = Math.min(1, (now - start) / dur);
        el.textContent = Math.round(easeOut(p) * target);
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      };
      requestAnimationFrame(tick);
      countIo.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(el => countIo.observe(el));
}

export function observeReveal(el) {
  if (revealIo) revealIo.observe(el);
}
