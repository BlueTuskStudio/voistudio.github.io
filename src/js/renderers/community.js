import { t, pickLang, getLang } from '../i18n.js';
import { COMMUNITY, COMMUNITY_ICONS } from '../data.js';
import { openInfoModal } from '../modal.js';

export function renderCommunity() {
  const grid = document.getElementById('communityGrid');
  if (!grid) return;
  grid.innerHTML = '';
  COMMUNITY.forEach(c => {
    const a = document.createElement('a');
    a.className = 'community-card';
    a.href = c.live ? c.url : '#';
    if (c.live) {
      a.target = '_blank';
      a.rel = 'noopener';
    } else {
      a.addEventListener('click', (e) => { e.preventDefault(); openInfoModal('soon'); });
    }
    a.innerHTML = `
      <div class="icon">${COMMUNITY_ICONS[c.icon] || ''}</div>
      <h4>${c.label}</h4>
      <p>${pickLang(c.desc)}</p>
      <span class="arrow">${c.live ? t('community.open') : t('soon')}</span>
    `;
    grid.appendChild(a);
  });
}
