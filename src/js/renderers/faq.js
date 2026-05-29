import { pickLang } from '../i18n.js';
import { FAQ } from '../data.js';

export function renderFAQ() {
  const list = document.getElementById('faqList');
  if (!list) return;
  list.innerHTML = '';
  FAQ.forEach((f, i) => {
    const item = document.createElement('div');
    item.className = 'faq-item';
    item.innerHTML = `
      <button class="faq-q" aria-expanded="false" aria-controls="faq-a-${i}">
        <span>${pickLang(f.q)}</span>
        <span class="plus" aria-hidden="true"></span>
      </button>
      <div class="faq-a" id="faq-a-${i}" role="region">
        <div class="faq-a-inner">${pickLang(f.a)}</div>
      </div>
    `;
    const btn = item.querySelector('.faq-q');
    const ans = item.querySelector('.faq-a');
    btn.addEventListener('click', () => {
      const open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      ans.style.maxHeight = open ? ans.scrollHeight + 'px' : '0';
    });
    list.appendChild(item);
  });
}
