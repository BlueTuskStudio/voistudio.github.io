import '../css/style.css';
import { initShell } from './shell.js';
import { initReveal } from './reveal.js';
import { initScrollProgress } from './scroll-fx.js';
import { applyI18n, pickLang, getLang, t } from './i18n.js';
import { GAMES, SITE } from './data.js';
import { openLightbox, openInfoModal } from './modal.js';

const BADGE_CLASS = { wip: 'badge-wip', soon: 'badge-soon', live: 'badge-live' };

function renderGameDetail() {
  const slug = document.body.getAttribute('data-game-slug');
  const game = GAMES.find(g => g.slug === slug);
  if (!game) {
    document.body.innerHTML = '<p style="padding: 100px; text-align: center;">Game not found.</p>';
    return;
  }

  const i = pickLang(game.i18n);
  document.title = `${i.title} — Blue Tusk Studio`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', i.tagline);

  // Hero
  setText('#gameMeta', `${i.meta} · ${t('badge.' + game.status)}`);
  setText('#gameTitle', i.title);
  setText('#gameTagline', i.tagline);

  // CTAs
  const ctas = document.getElementById('gameCtas');
  if (ctas) {
    const subj = encodeURIComponent(`${i.title} — playtest signup`);
    ctas.innerHTML = `
      <a href="mailto:${SITE.email}?subject=${subj}" class="btn btn-primary">${t('modal.playtestCta')}</a>
      ${game.trailer ? `<button class="btn btn-ghost" type="button" id="watchTrailer">${t('modal.trailerLabel')} →</button>` : ''}
    `;
    ctas.querySelector('#watchTrailer')?.addEventListener('click', () => openInfoModal('trailer'));
  }

  // Trailer
  const trailerSlot = document.getElementById('gameTrailer');
  if (trailerSlot && game.trailer) {
    trailerSlot.innerHTML = `
      <div class="trailer-block">
        <div class="trailer-play"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="6,4 20,12 6,20"/></svg></div>
        <div class="trailer-label">${t('modal.trailerLabel')}</div>
      </div>`;
    trailerSlot.querySelector('.trailer-block').addEventListener('click', () => openInfoModal('trailer'));
  }

  // Gallery
  const gal = document.getElementById('gameGallery');
  if (gal) {
    gal.innerHTML = '';
    game.screenshots.forEach((src, idx) => {
      const div = document.createElement('div');
      div.className = 'gallery-thumb';
      div.innerHTML = `<img src="${src}" alt="" loading="lazy">`;
      div.addEventListener('click', () => openLightbox(game.screenshots, idx));
      gal.appendChild(div);
    });
  }

  // Features
  const feats = document.getElementById('gameFeatures');
  if (feats) feats.innerHTML = i.features.map(f => `<li>${f}</li>`).join('');

  // Platforms + ETA
  const meta2 = document.getElementById('gameMeta2');
  if (meta2) {
    meta2.innerHTML = `
      <div style="margin-bottom: 18px;">
        <strong style="font-family: 'Space Mono', monospace; font-size: 0.7rem; letter-spacing: 2px; text-transform: uppercase; color: var(--muted); display: block; margin-bottom: 10px;">Platforms</strong>
        <div class="modal-platforms">${game.platforms.map(p => `<span class="platform-pill">${p}</span>`).join('')}</div>
      </div>
      <div>
        <strong style="font-family: 'Space Mono', monospace; font-size: 0.7rem; letter-spacing: 2px; text-transform: uppercase; color: var(--muted); display: block; margin-bottom: 10px;">ETA</strong>
        <span style="color: var(--text); font-size: 0.95rem;">${i.eta}</span>
      </div>
    `;
  }

  // Set badge in nav-ish position (none here) and OG meta
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDesc  = document.querySelector('meta[property="og:description"]');
  if (ogTitle) ogTitle.setAttribute('content', `${i.title} — Blue Tusk Studio`);
  if (ogDesc)  ogDesc.setAttribute('content', i.tagline);
}

function setText(sel, value) {
  const el = document.querySelector(sel);
  if (el) el.textContent = value;
}

initShell({ onLangChange: renderGameDetail });
renderGameDetail();
initReveal();
initScrollProgress();
applyI18n();
