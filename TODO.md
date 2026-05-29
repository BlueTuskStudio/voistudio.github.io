# Blue Tusk Studio — Sổ tay & việc cần làm

> File này để ghi nhớ việc tùy chọn + cách thêm/sửa nội dung sau này.
> Cứ tick `[x]` khi xong, thêm dòng mới khi cần.

Web đang chạy: **https://bluetuskstudio.com** (Cloudflare Workers, auto-deploy mỗi lần `git push origin main`).

---

## ✅ Đã xong
- [x] Dựng site đầy đủ (Vite multi-page, i18n EN/VI, dark/light, devlog Markdown, SEO)
- [x] Deploy Cloudflare + custom domain `bluetuskstudio.com` + HTTPS
- [x] Auto-deploy khi push `main`

## ⏳ Tùy chọn — làm khi rảnh (không gấp)

- [ ] **Thêm `www.bluetuskstudio.com`**
  Cloudflare → Worker `bluetuskstudio` → Settings → Domains & Routes → Add → Custom Domain → gõ `www` vào ô Subdomain.
  (Tùy chọn) Thêm Redirect Rule cho `www` → root để chuẩn SEO.

- [ ] **Asset thật** (thay placeholder SVG)
  - Bỏ ảnh game vào `public/assets/screenshots/<game>/` (giữ tên `1.png` `2.png`... hoặc đổi đường dẫn trong data)
  - Sửa đường dẫn `thumb` + `screenshots` của từng game trong `src/js/data.js`
  - Trailer: hiện là placeholder mở info modal. Khi có video → nhúng iframe YouTube vào (sửa renderer `src/js/renderers/games.js` chỗ `trailer-block`)
  - Mascot/logo: hiện là SVG cái ngà trong nav/footer/loader + `public/assets/og-image.svg`

- [ ] **Newsletter thật**
  - Đăng ký https://buttondown.email (free) → lấy username
  - Mở `src/js/forms.js` → đổi `provider: 'none'` thành `provider: 'buttondown'` và điền `username`
  - (Hoặc ConvertKit: `provider: 'convertkit'` + `formId`)

- [ ] **Social links thật** (khi có)
  - Sửa trong `src/js/data.js`:
    - `COMMUNITY[]` — set `live: true` + `url` cho Discord / X / YouTube / itch.io
    - `SITE.github` nếu đổi
  - Footer social icons: `src/partials/footer.html` (các thẻ `data-comm="x|yt|discord"` đang mở modal "coming soon" → đổi thành link thật)

- [ ] **Featured logos** — thay tên placeholder (IndieDB, itch.io...) trong `index.html` mục `.featured-track` bằng nơi thật sự nhắc đến studio

---

## 📝 Cách thêm nội dung sau này

### Thêm bài Devlog
1. Tạo file `public/devlog/YYYY-MM-DD-slug.md` theo mẫu (frontmatter song ngữ):
   ```
   ---
   en: |
     Nội dung tiếng Anh. Hỗ trợ ## heading, **bold**, *italic*, `code`, [link](url), - bullet.
   vi: |
     Nội dung tiếng Việt.
   ---
   ```
2. Thêm 1 entry vào `public/devlog/index.json`:
   ```json
   { "slug": "2026-06-01-ten-bai", "date": "2026-06-01", "tag": "Sand Coloring",
     "title": { "en": "English title", "vi": "Tiêu đề tiếng Việt" } }
   ```
3. `git push origin main` → tự lên web. (Bài tự sắp xếp mới nhất trước, tự tính reading time.)

### Thêm Game mới
1. Thêm object vào `GAMES` trong `src/js/data.js` (copy 1 game có sẵn, đổi `id`, `slug`, `i18n`, ảnh).
2. Bỏ screenshots vào `public/assets/screenshots/<slug>/`.
3. Tạo trang riêng `games/<slug>/index.html` (copy `games/untitled/index.html`, đổi `data-game-slug`, title, meta OG).
4. Đăng ký page trong `vite.config.js` → `rollupOptions.input` (thêm 1 dòng trỏ tới file html mới).
5. `git push origin main`.

### Sửa text / dịch
- Mọi text UI nằm trong `src/js/i18n.js` (object `DICT.en` và `DICT.vi`). Sửa theo cặp key.

---

## 🚀 Quy trình deploy
```bash
npm run dev      # chạy local http://localhost:5173
npm run build    # build ra dist/ (test trước khi push)
git add -A && git commit -m "..." && git push origin main   # → Cloudflare tự deploy
```

## 🗺️ Bản đồ file nhanh
```
index.html              Trang chủ (entry)
games/<slug>/index.html Trang game riêng
public/                 File phục vụ nguyên trạng (devlog .md, assets, sitemap, rss, 404, robots)
src/css/style.css       Toàn bộ CSS (design tokens ở đầu file)
src/js/data.js          Dữ liệu games / FAQ / community / info modals / SITE
src/js/i18n.js          Từ điển dịch EN/VI
src/js/forms.js         Contact + Newsletter (đổi provider ở đây)
src/js/renderers/       Render games / devlog / faq / community
src/partials/           nav / footer / modals (chèn runtime)
vite.config.js          Khai báo các trang để build
wrangler.toml           Cấu hình deploy Cloudflare (assets → dist)
```
