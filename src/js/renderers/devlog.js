import { t, getLang } from '../i18n.js';
import { openModal, closeAllModals } from '../modal.js';
import { SITE } from '../data.js';

let POSTS = [];
let activeTag = 'ALL';
let searchQuery = '';

// ── Tiny markdown parser ───────────────────────────────────────
// Supports: ## headers, **bold**, *italic*, [text](url), `code`,
// - bulleted lists, and blank-line-separated paragraphs.
function escape(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function inline(s) {
  return s
    .replace(/`([^`]+?)`/g, (_, c) => `<code>${escape(c)}</code>`)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|\s)\*(?!\s)(.+?)\*(?=\s|[.,!?;:]|$)/g, '$1<em>$2</em>')
    .replace(/\[(.+?)\]\(([^)]+?)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
}
function parseMd(md) {
  const lines = md.replace(/\r\n/g, '\n').split('\n');
  const out = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    if (/^##\s+/.test(line)) {
      out.push(`<h2>${inline(line.replace(/^##\s+/, ''))}</h2>`);
      i++; continue;
    }
    if (/^###\s+/.test(line)) {
      out.push(`<h3>${inline(line.replace(/^###\s+/, ''))}</h3>`);
      i++; continue;
    }
    if (/^\s*$/.test(line)) { i++; continue; }
    if (/^\s*-\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*-\s+/.test(lines[i])) {
        items.push(`<li>${inline(lines[i].replace(/^\s*-\s+/, ''))}</li>`);
        i++;
      }
      out.push(`<ul>${items.join('')}</ul>`);
      continue;
    }
    // paragraph: gather until blank line / header / list
    const para = [];
    while (i < lines.length && lines[i].trim() !== '' &&
           !/^##\s+/.test(lines[i]) && !/^\s*-\s+/.test(lines[i])) {
      para.push(lines[i]);
      i++;
    }
    out.push(`<p>${inline(para.join(' '))}</p>`);
  }
  return out.join('\n');
}

// ── Frontmatter (YAML-lite for our needs: en: | ... vi: | ...) ──
function parseFrontmatter(src) {
  const m = src.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
  if (!m) return { en: src.trim(), vi: '' };
  const block = m[1];
  const result = {};
  // Match `en: |` or `vi: |` followed by an indented block.
  const blockRe = /(en|vi):\s*\|\s*\n((?:[ \t].*\n?|\n)*)/g;
  let bm;
  while ((bm = blockRe.exec(block + '\n')) !== null) {
    const key = bm[1];
    const raw = bm[2].replace(/\n$/, '');
    // Strip the common leading indent (assumes 2-space indent).
    const stripped = raw.replace(/^(  )/gm, '');
    result[key] = stripped.trim();
  }
  if (!result.en) result.en = '';
  if (!result.vi) result.vi = '';
  return result;
}

// ── Excerpt: first non-header paragraph, ~160 chars ────────────
function excerpt(html) {
  const m = html.match(/<p>([\s\S]+?)<\/p>/);
  if (!m) return '';
  let text = m[1].replace(/<[^>]+>/g, '').trim();
  if (text.length > 160) text = text.slice(0, 157).trimEnd() + '…';
  return text;
}

// ── Public: load + render ──────────────────────────────────────
export async function loadDevlog() {
  const list = document.getElementById('devlogList');
  if (!list) return;
  list.innerHTML = `<div class="devlog-empty">${t('devlog.loading')}</div>`;

  try {
    const idxRes = await fetch('/devlog/index.json');
    const index = await idxRes.json();
    const posts = await Promise.all(index.map(async (entry) => {
      try {
        const res = await fetch(`/devlog/${entry.slug}.md`);
        const raw = await res.text();
        const fm = parseFrontmatter(raw);
        const words = (fm.en || '').split(/\s+/).filter(Boolean).length;
        return {
          ...entry,
          readMin: Math.max(1, Math.round(words / 200)),
          contentHtml: { en: parseMd(fm.en), vi: parseMd(fm.vi || fm.en) },
        };
      } catch (e) {
        return { ...entry, contentHtml: { en: '', vi: '' } };
      }
    }));
    POSTS = posts.sort((a, b) => b.date.localeCompare(a.date));
  } catch (e) {
    list.innerHTML = `<div class="devlog-empty">Couldn't load devlog.</div>`;
    return;
  }

  renderToolbar();
  renderList();
}

function renderToolbar() {
  const toolbar = document.getElementById('devlogToolbar');
  if (!toolbar) return;
  const tags = ['ALL', ...Array.from(new Set(POSTS.map(p => p.tag)))];

  toolbar.innerHTML = `
    <input type="search" class="devlog-search" id="devlogSearch"
           placeholder="${t('devlog.search')}" value="${searchQuery}">
    <div class="devlog-filter" id="devlogFilter"></div>
    <a class="devlog-rss" href="/rss.xml" target="_blank" rel="noopener" title="${t('devlog.rss')}">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4v3c8.3 0 15 6.7 15 15h3C22 12.6 14.4 4 4 4Zm0 6v3c4.4 0 8 3.6 8 8h3c0-6.1-4.9-11-11-11Zm2 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/></svg>
      RSS
    </a>
  `;
  const filter = toolbar.querySelector('#devlogFilter');
  tags.forEach(tag => {
    const chip = document.createElement('button');
    chip.className = 'filter-chip' + (tag === activeTag ? ' active' : '');
    chip.textContent = tag === 'ALL' ? t('devlog.filterAll') : tag;
    chip.addEventListener('click', () => {
      activeTag = tag;
      renderToolbar();
      renderList();
    });
    filter.appendChild(chip);
  });
  const search = toolbar.querySelector('#devlogSearch');
  search.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    renderList();
  });
}

function renderList() {
  const list = document.getElementById('devlogList');
  if (!list) return;
  const lang = getLang();
  const q = searchQuery.toLowerCase();

  const filtered = POSTS.filter(p => {
    if (activeTag !== 'ALL' && p.tag !== activeTag) return false;
    if (!q) return true;
    const haystack = [
      p.title.en, p.title.vi,
      p.contentHtml.en, p.contentHtml.vi,
      p.tag, p.date
    ].join(' ').toLowerCase();
    return haystack.includes(q);
  });

  if (!filtered.length) {
    list.innerHTML = `<div class="devlog-empty">${t('devlog.empty')}</div>`;
    return;
  }

  list.innerHTML = '';
  filtered.forEach(p => {
    const item = document.createElement('button');
    item.type = 'button';
    item.className = 'devlog-item';
    item.setAttribute('aria-label', `Open post: ${p.title[lang] || p.title.en}`);
    const readLbl = lang === 'vi' ? `${p.readMin} phút đọc` : `${p.readMin} min read`;
    item.innerHTML = `
      <div class="devlog-date">${p.date}</div>
      <div class="devlog-body">
        <h3>${p.title[lang] || p.title.en}</h3>
        <p>${excerpt(p.contentHtml[lang] || p.contentHtml.en)}</p>
      </div>
      <div class="devlog-tag">${p.tag}<span class="devlog-read">${readLbl}</span></div>
    `;
    item.addEventListener('click', () => openPostModal(p));
    list.appendChild(item);
  });
}

function openPostModal(post) {
  const lang = getLang();
  const title = post.title[lang] || post.title.en;
  const content = post.contentHtml[lang] || post.contentHtml.en;

  const modal = document.getElementById('postModal');
  if (!modal) return;
  const readLbl = lang === 'vi' ? `${post.readMin} phút đọc` : `${post.readMin} min read`;
  document.getElementById('postMeta').innerHTML =
    `<span>● ${post.date}</span><span>● ${post.tag}</span><span>● ${readLbl}</span>`;
  document.getElementById('postTitle').textContent = title;
  document.getElementById('postContent').innerHTML = content;

  const shareUrl = `${SITE.baseUrl}/#devlog`;
  const shareText = encodeURIComponent(`${title} — Blue Tusk Studio devlog`);
  document.getElementById('postShare').innerHTML = `
    <span class="share-label">${t('modal.share')}</span>
    <a class="share-btn" target="_blank" rel="noopener"
       href="https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(shareUrl)}">X</a>
    <a class="share-btn" target="_blank" rel="noopener"
       href="https://reddit.com/submit?title=${shareText}&url=${encodeURIComponent(shareUrl)}">Reddit</a>
    <a class="share-btn" target="_blank" rel="noopener"
       href="mailto:?subject=${shareText}&body=${encodeURIComponent(shareUrl)}">Email</a>
    <button class="share-btn" type="button" id="copyLinkBtn">${t('modal.copyLink')}</button>
  `;
  const copyBtn = document.getElementById('copyLinkBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(shareUrl);
        copyBtn.textContent = t('modal.copied');
        setTimeout(() => { copyBtn.textContent = t('modal.copyLink'); }, 1600);
      } catch (e) {}
    });
  }

  document.getElementById('postClose')?.addEventListener('click', closeAllModals, { once: true });
  openModal('postModal');
}
