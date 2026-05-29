import { t, pickLang } from './i18n.js';
import { INFO } from './data.js';

let installed = false;
let lastFocused = null;

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

function lockScroll(on) {
  document.body.style.overflow = on ? 'hidden' : '';
}

function trapFocus(e) {
  if (e.key !== 'Tab') return;
  const open = document.querySelector('.modal-backdrop.open .modal');
  if (!open) return;
  const items = Array.from(open.querySelectorAll(FOCUSABLE)).filter(el => el.offsetParent !== null);
  if (!items.length) return;
  const first = items[0], last = items[items.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

export function installModals() {
  if (installed) return;
  installed = true;

  document.querySelectorAll('[data-close-modal]').forEach(el =>
    el.addEventListener('click', closeAllModals)
  );

  document.querySelectorAll('.modal-backdrop').forEach(m => {
    m.addEventListener('click', (e) => { if (e.target === m) closeAllModals(); });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (document.getElementById('lightbox')?.classList.contains('open')) {
      closeLightbox();
    } else {
      closeAllModals();
    }
  });

  // Lightbox nav
  const lb = document.getElementById('lightbox');
  if (lb) {
    document.getElementById('lbClose')?.addEventListener('click', closeLightbox);
    document.getElementById('lbPrev')?.addEventListener('click', () => stepLightbox(-1));
    document.getElementById('lbNext')?.addEventListener('click', () => stepLightbox(1));
    lb.addEventListener('click', (e) => { if (e.target === lb) closeLightbox(); });
    document.addEventListener('keydown', (e) => {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'ArrowLeft')  stepLightbox(-1);
      if (e.key === 'ArrowRight') stepLightbox(1);
    });
  }

  // [data-info] buttons (privacy/terms/etc.)
  document.querySelectorAll('[data-info]').forEach(b =>
    b.addEventListener('click', () => openInfoModal(b.getAttribute('data-info')))
  );

  document.addEventListener('keydown', trapFocus);
}

export function closeAllModals() {
  const wasOpen = document.querySelector('.modal-backdrop.open');
  document.querySelectorAll('.modal-backdrop.open').forEach(m => m.classList.remove('open'));
  if (!document.getElementById('lightbox')?.classList.contains('open')) lockScroll(false);
  if (wasOpen && lastFocused) { try { lastFocused.focus(); } catch (e) {} lastFocused = null; }
}

export function openModal(id) {
  const m = document.getElementById(id);
  if (!m) return;
  lastFocused = document.activeElement;
  m.classList.add('open');
  lockScroll(true);
  // Move focus into the modal for keyboard + screen-reader users
  requestAnimationFrame(() => {
    const target = m.querySelector('.modal-close, [data-close-modal], ' + FOCUSABLE);
    if (target) try { target.focus(); } catch (e) {}
  });
}

export function openInfoModal(key) {
  const data = INFO[key];
  if (!data) return;
  document.getElementById('infoTitle').textContent = pickLang(data.title);
  document.getElementById('infoBody').innerHTML = pickLang(data.body);
  openModal('infoModal');
}

// ── Lightbox ──────────────────────────────────────────────────
let lbItems = [], lbIdx = 0;

export function openLightbox(items, idx = 0) {
  lbItems = items;
  lbIdx = idx;
  renderLightbox();
  document.getElementById('lightbox').classList.add('open');
  lockScroll(true);
}

function stepLightbox(delta) {
  if (!lbItems.length) return;
  lbIdx = (lbIdx + delta + lbItems.length) % lbItems.length;
  renderLightbox();
}

function renderLightbox() {
  const inner = document.querySelector('#lightbox .lightbox-inner');
  if (!inner) return;
  inner.querySelector('img')?.remove();
  const img = document.createElement('img');
  img.src = lbItems[lbIdx];
  img.alt = '';
  inner.appendChild(img);
  let cap = inner.querySelector('.lb-caption');
  if (!cap) {
    cap = document.createElement('div');
    cap.className = 'lb-caption';
    inner.appendChild(cap);
  }
  cap.textContent = `${lbIdx + 1} / ${lbItems.length}`;
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  if (!document.querySelector('.modal-backdrop.open')) lockScroll(false);
}
