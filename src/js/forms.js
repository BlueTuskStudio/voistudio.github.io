import { t } from './i18n.js';
import { SITE } from './data.js';

// ─────────────────────────────────────────────────────────────
// Newsletter provider config
//
// To enable a real backend, change `provider` from 'none' and fill the
// matching settings. Default is 'none' — the form shows a success message
// but does not send anywhere (useful while building out the studio brand).
// ─────────────────────────────────────────────────────────────
export const NEWSLETTER = {
  provider: 'none', // 'buttondown' | 'convertkit' | 'none'
  buttondown: {
    // Sign up at https://buttondown.email, then put your username here.
    // The embed endpoint does not require an API key.
    username: 'your-username'
  },
  convertkit: {
    // ConvertKit form ID (from your form's settings → embed code).
    formId: 'your-form-id'
  }
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function postNewsletter(email) {
  const cfg = NEWSLETTER;
  if (cfg.provider === 'buttondown') {
    return fetch(`https://buttondown.com/api/emails/embed-subscribe/${cfg.buttondown.username}`, {
      method: 'POST',
      mode: 'no-cors', // Buttondown embed endpoint doesn't return CORS — opaque success is fine
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ email })
    });
  }
  if (cfg.provider === 'convertkit') {
    return fetch(`https://app.convertkit.com/forms/${cfg.convertkit.formId}/subscriptions`, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ email_address: email })
    });
  }
  // 'none' — simulated success after a brief tick
  return new Promise(r => setTimeout(r, 350));
}

export function initContactForm() {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (!form || !status) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name    = form.cName.value.trim();
    const email   = form.cEmail.value.trim();
    const topic   = form.cTopic.value;
    const message = form.cMessage.value.trim();

    if (!name || !email || !message) {
      status.textContent = t('form.fillAll');
      status.classList.add('error');
      return;
    }
    if (!EMAIL_RE.test(email)) {
      status.textContent = t('form.badEmail');
      status.classList.add('error');
      return;
    }
    status.classList.remove('error');
    status.textContent = t('form.opening');
    const subject = `[${topic}] from ${name}`;
    const body = `From: ${name} <${email}>\n\n${message}`;
    window.location.href =
      `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setTimeout(() => { status.textContent = t('form.fallback'); }, 800);
  });
}

export function initNewsletterForm() {
  const form = document.getElementById('newsletterForm');
  const status = document.getElementById('nlStatus');
  const input = document.getElementById('nlEmail');
  if (!form || !status || !input) return;
  const btn = form.querySelector('button');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = input.value.trim();
    if (!EMAIL_RE.test(email)) {
      status.textContent = t('form.badEmail');
      status.classList.add('error');
      return;
    }
    status.classList.remove('error');
    status.textContent = t('nl.sending');
    if (btn) btn.disabled = true;
    try {
      await postNewsletter(email);
      status.textContent = t('nl.success');
      form.reset();
    } catch (err) {
      status.textContent = t('form.networkErr');
      status.classList.add('error');
    } finally {
      if (btn) btn.disabled = false;
    }
  });
}
