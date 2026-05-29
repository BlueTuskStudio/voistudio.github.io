export function initNav() {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  if (!nav || !toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 24);

    const toTop = document.getElementById('toTop');
    if (toTop) toTop.classList.toggle('show', window.scrollY > 600);

    // Active link based on section in viewport — only when same-page anchors exist
    const sections = document.querySelectorAll('section[id]');
    if (!sections.length) return;
    const y = window.scrollY + 120;
    let current = '';
    sections.forEach(s => { if (s.offsetTop <= y) current = s.id; });
    menu.querySelectorAll('a[href^="#"]').forEach(a => {
      const h = a.getAttribute('href');
      a.classList.toggle('active', h === '#' + current);
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

export function initBackToTop() {
  const btn = document.getElementById('toTop');
  if (!btn) return;
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}
