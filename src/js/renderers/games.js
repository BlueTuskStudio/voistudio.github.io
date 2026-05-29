import { t, pickLang, getLang } from '../i18n.js';
import { GAMES, SITE } from '../data.js';
import { openModal, openInfoModal, openLightbox, closeAllModals } from '../modal.js';
import { observeReveal } from '../reveal.js';

const BADGE_CLASS = { wip: 'badge-wip', soon: 'badge-soon', live: 'badge-live' };

export function renderGames() {
  const list = document.getElementById('gamesList');
  if (!list) return;
  list.innerHTML = '';

  GAMES.forEach((g, idx) => {
    const i = pickLang(g.i18n);
    const slug = g.slug || g.id;
    const reverse = idx % 2 === 1;
    const article = document.createElement('article');
    article.className = 'game-feature reveal' + (reverse ? ' game-feature--reverse' : '');
    article.setAttribute('data-game', g.id);

    article.innerHTML = `
      <button class="game-feature__media" type="button" aria-label="View ${i.title} details">
        <img src="${g.thumb}" alt="${i.title}" loading="lazy">
        <span class="game-feature__media-zoom">↗</span>
      </button>
      <div class="game-feature__text">
        <p class="game-feature__eyebrow">
          <span class="badge ${BADGE_CLASS[g.status]}">${t('badge.' + g.status)}</span>
          <span class="game-feature__meta">${i.meta}</span>
        </p>
        <h3 class="game-feature__title">${i.title}</h3>
        <p class="game-feature__tagline">${i.tagline}</p>
        <ul class="game-feature__features">
          ${i.features.slice(0, 3).map(f => `<li>${f}</li>`).join('')}
        </ul>
        <div class="game-feature__actions">
          <button class="btn btn-primary game-feature__quick-view" type="button">${t('games.detailsLink')}</button>
          <a href="/games/${slug}/" class="btn btn-ghost">${t('games.viewFullPage')}</a>
        </div>
      </div>
    `;

    const open = () => openGameModal(g);
    article.querySelector('.game-feature__media').addEventListener('click', open);
    article.querySelector('.game-feature__quick-view').addEventListener('click', open);
    list.appendChild(article);
    observeReveal(article);
  });
}

export function openGameModal(g) {
  const i = pickLang(g.i18n);
  const slug = g.slug || g.id;

  const modal = document.getElementById('modal');
  if (!modal) return;

  const heroImg = modal.querySelector('.modal-hero img');
  if (heroImg) heroImg.src = g.thumb;

  document.getElementById('modalTitle').textContent = i.title;
  document.getElementById('modalDesc').textContent = i.desc;
  document.getElementById('modalMeta').innerHTML =
    `<span>● ${i.meta}</span><span>● ${i.eta}</span>`;

  const trailerSlot = document.getElementById('trailerSlot');
  if (g.trailer) {
    trailerSlot.innerHTML = `
      <div class="trailer-block" id="trailerBlock">
        <div class="trailer-play">
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="6,4 20,12 6,20"/></svg>
        </div>
        <div class="trailer-label">${t('modal.trailerLabel')}</div>
      </div>`;
    trailerSlot.querySelector('#trailerBlock').addEventListener('click', () => openInfoModal('trailer'));
  } else {
    trailerSlot.innerHTML = '';
  }

  const gal = document.getElementById('modalGallery');
  gal.innerHTML = '';
  g.screenshots.forEach((src, idx) => {
    const thumb = document.createElement('div');
    thumb.className = 'gallery-thumb';
    thumb.innerHTML = `<img src="${src}" alt="" loading="lazy">`;
    thumb.addEventListener('click', () => openLightbox(g.screenshots, idx));
    gal.appendChild(thumb);
  });

  document.getElementById('modalFeatures').innerHTML =
    i.features.map(f => `<li>${f}</li>`).join('');

  document.getElementById('modalPlatforms').innerHTML =
    g.platforms.map(p => `<span class="platform-pill">${p}</span>`).join('');

  const subj = encodeURIComponent(`${i.title} — playtest signup`);
  document.getElementById('modalActions').innerHTML = `
    <a href="/games/${slug}/" class="btn btn-primary">${t('games.viewFullPage')}</a>
    <a href="mailto:${SITE.email}?subject=${subj}" class="btn btn-ghost">${t('modal.playtestCta')}</a>
    <button class="btn btn-ghost" type="button" data-close-modal>${t('modal.close')}</button>
  `;
  document.getElementById('modalActions')
    .querySelector('[data-close-modal]')
    .addEventListener('click', closeAllModals);

  openModal('modal');
}

export function wireFooterGameLinks() {
  document.querySelectorAll('[data-open-game]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const id = el.getAttribute('data-open-game');
      const g = GAMES.find(x => x.id === id || x.slug === id);
      if (g) openGameModal(g);
    });
  });
}
