export function initNotice() {
  const el = document.getElementById('notice');
  if (!el) return;
  try {
    if (!localStorage.getItem('bts-notice')) {
      setTimeout(() => el.classList.add('show'), 1200);
    }
  } catch (e) {}
  document.getElementById('noticeOk')?.addEventListener('click', () => {
    el.classList.remove('show');
    try { localStorage.setItem('bts-notice', '1'); } catch (e) {}
  });
}
