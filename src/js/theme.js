const ICON_DARK = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/>';
const ICON_LIGHT = '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>';

export function getTheme() {
  return document.documentElement.getAttribute('data-theme') || 'dark';
}

export function setTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  try { localStorage.setItem('bts-theme', t); } catch (e) {}
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', t === 'dark' ? '#07090f' : '#fafbfd');
  const icon = document.getElementById('themeIcon');
  if (icon) icon.innerHTML = t === 'dark' ? ICON_DARK : ICON_LIGHT;
}

export function initTheme() {
  setTheme(getTheme());
  const btn = document.getElementById('themeBtn');
  if (btn) {
    btn.addEventListener('click', () => setTheme(getTheme() === 'dark' ? 'light' : 'dark'));
  }
}
