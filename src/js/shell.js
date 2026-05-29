import navHtml from '../partials/nav.html?raw';
import footerHtml from '../partials/footer.html?raw';
import modalsHtml from '../partials/modals.html?raw';

import { applyI18n, setLang, getLang } from './i18n.js';
import { initTheme } from './theme.js';
import { initNav, initBackToTop } from './nav.js';
import { initNotice } from './notice.js';
import { installModals, openInfoModal } from './modal.js';

/**
 * Mount shared chrome (nav, footer, modals, notice, back-to-top) and wire
 * cross-cutting UI behaviors. Returns a `rerender()` callback the page
 * should invoke when language changes (so dynamic content updates).
 */
export function initShell({ onLangChange } = {}) {
  // Inject partials into their slots, or append to body if no slot exists.
  injectInto('[data-shell="nav"]', navHtml, 'beforeend', true);
  injectInto('[data-shell="footer"]', footerHtml, 'beforeend', true);
  injectInto('[data-shell="modals"]', modalsHtml, 'beforeend', true);

  // Theme + language toggles
  initTheme();

  const langBtn = document.getElementById('langBtn');
  if (langBtn) {
    langBtn.textContent = getLang() === 'en' ? 'VI' : 'EN';
    langBtn.addEventListener('click', () => {
      const next = getLang() === 'en' ? 'vi' : 'en';
      setLang(next);
      langBtn.textContent = next === 'en' ? 'VI' : 'EN';
      applyI18n();
      if (onLangChange) onLangChange();
    });
  }

  initNav();
  initBackToTop();
  initNotice();
  installModals();

  // Social "coming soon" placeholders (data-comm)
  document.querySelectorAll('[data-comm]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('data-comm');
      // Allow real links through; only intercept "#"-style placeholders.
      if (a.getAttribute('href') === '#' || !a.getAttribute('href')) {
        e.preventDefault();
        openInfoModal('soon');
      }
    });
  });

  // Year stamp
  const yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  // Add copy-link anchors to section titles
  document.querySelectorAll('.section-title.has-anchor').forEach(t => {
    const section = t.closest('section');
    if (!section || !section.id) return;
    if (t.querySelector('.section-anchor')) return;
    const a = document.createElement('a');
    a.className = 'section-anchor';
    a.href = '#' + section.id;
    a.textContent = '#';
    a.setAttribute('aria-label', 'Copy link to section: ' + section.id);
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const url = location.origin + location.pathname + '#' + section.id;
      try { navigator.clipboard.writeText(url); } catch (err) {}
      const original = a.textContent;
      a.textContent = '✓ copied';
      setTimeout(() => { a.textContent = original; }, 1400);
      history.replaceState(null, '', '#' + section.id);
    });
    t.appendChild(a);
  });

  applyI18n();

  // Hide loader once shell is up
  const loader = document.getElementById('loader');
  if (loader) setTimeout(() => loader.classList.add('done'), 250);
}

function injectInto(selector, html, position, createIfMissing) {
  let el = document.querySelector(selector);
  if (!el && createIfMissing) {
    el = document.createElement('div');
    el.setAttribute('data-shell', selector.match(/data-shell="(.+?)"/)[1]);
    document.body.appendChild(el);
  }
  if (el) el.insertAdjacentHTML(position, html);
}
