const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  const update = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
    bar.style.width = pct + '%';
  };
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  update();
}

export function initParallax() {
  if (reduceMotion) return;
  const layers = Array.from(document.querySelectorAll('[data-parallax]'));
  if (!layers.length) return;
  let ticking = false;
  const apply = () => {
    const y = window.scrollY;
    for (const el of layers) {
      const speed = parseFloat(el.dataset.parallax) || 0.1;
      el.style.transform = `translate3d(0, ${y * speed}px, 0)`;
    }
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(apply); ticking = true; }
  }, { passive: true });
  apply();
}

// On-brand easter egg: Konami code → confetti-ish particle burst.
export function initKonami() {
  const seq = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let pos = 0;
  window.addEventListener('keydown', (e) => {
    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    pos = (key === seq[pos]) ? pos + 1 : (key === seq[0] ? 1 : 0);
    if (pos === seq.length) { pos = 0; burst(); }
  });
}

function burst() {
  if (reduceMotion) return;
  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:9999';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = innerWidth * dpr; canvas.height = innerHeight * dpr;
  ctx.scale(dpr, dpr);

  const colors = ['#4f8ef7', '#7eb3ff', '#eef2f9', '#4fd18b', '#f7c14f'];
  const parts = Array.from({ length: 140 }, () => ({
    x: innerWidth / 2,
    y: innerHeight / 2,
    vx: (Math.random() - 0.5) * 16,
    vy: (Math.random() - 0.5) * 16 - 4,
    r: Math.random() * 4 + 2,
    c: colors[(Math.random() * colors.length) | 0],
    life: 1,
    rot: Math.random() * Math.PI,
  }));

  // Brief toast
  const toast = document.createElement('div');
  toast.textContent = '↑↑↓↓←→←→ B A — you found it. Now go make a game.';
  toast.style.cssText =
    'position:fixed;left:50%;top:24%;transform:translateX(-50%);z-index:10000;' +
    'font-family:"Space Mono",monospace;font-size:0.8rem;letter-spacing:1px;color:#eef2f9;' +
    'background:rgba(7,9,15,0.85);border:1px solid rgba(79,142,247,0.4);padding:12px 18px;' +
    'border-radius:10px;backdrop-filter:blur(8px);box-shadow:0 8px 28px -10px rgba(79,142,247,0.5)';
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.transition = 'opacity .5s'; toast.style.opacity = '0'; }, 2600);
  setTimeout(() => toast.remove(), 3200);

  let frame = 0;
  const tick = () => {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    let alive = false;
    for (const p of parts) {
      p.vy += 0.35;            // gravity
      p.vx *= 0.99;
      p.x += p.vx; p.y += p.vy;
      p.life -= 0.012;
      p.rot += 0.1;
      if (p.life > 0 && p.y < innerHeight + 20) {
        alive = true;
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.c;
        ctx.fillRect(-p.r, -p.r, p.r * 2, p.r * 2);
        ctx.restore();
      }
    }
    frame++;
    if (alive && frame < 240) requestAnimationFrame(tick);
    else canvas.remove();
  };
  requestAnimationFrame(tick);
}
