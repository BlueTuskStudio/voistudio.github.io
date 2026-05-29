import '../css/style.css';
import { initShell } from './shell.js';
import { initHeroCanvas } from './hero.js';
import { initReveal } from './reveal.js';
import { initContactForm, initNewsletterForm } from './forms.js';
import { initScrollProgress, initParallax, initKonami } from './scroll-fx.js';
import { renderGames, wireFooterGameLinks } from './renderers/games.js';
import { renderFAQ } from './renderers/faq.js';
import { renderCommunity } from './renderers/community.js';
import { loadDevlog } from './renderers/devlog.js';
import { applyI18n } from './i18n.js';

function renderAll() {
  renderGames();
  renderFAQ();
  renderCommunity();
  applyI18n();
}

initShell({
  onLangChange: () => {
    renderAll();
    // Devlog re-render (already loaded, just swap labels + content)
    loadDevlog();
  }
});

initHeroCanvas();
renderAll();
wireFooterGameLinks();
initContactForm();
initNewsletterForm();
loadDevlog();
initReveal();
initScrollProgress();
initParallax();
initKonami();
