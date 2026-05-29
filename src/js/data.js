export const GAMES = [
  {
    id: 'sand',
    slug: 'sand-coloring',
    icon: '🏖️',
    status: 'wip',
    platforms: ['iOS', 'Android'],
    thumb: '/assets/screenshots/sand-coloring/1.svg',
    screenshots: [
      '/assets/screenshots/sand-coloring/1.svg',
      '/assets/screenshots/sand-coloring/2.svg',
      '/assets/screenshots/sand-coloring/3.svg',
      '/assets/screenshots/sand-coloring/4.svg',
    ],
    trailer: true,
    i18n: {
      en: {
        title: 'Sand Coloring', meta: 'Casual · Relaxing',
        tagline: 'Connect dots, reveal patterns, paint with sand.',
        desc: 'A relaxing sand-art coloring game. Trace numbered dots, watch intricate patterns emerge in colored sand, and unlock a growing library of designs. Built for unwinding after a long day.',
        features: [
          'Hundreds of hand-picked patterns across themes',
          'Satisfying particle effects with every stroke',
          'Daily challenges and offline mode',
          'Zero ads in the gameplay — promise'
        ],
        eta: 'Soft launch — late 2026'
      },
      vi: {
        title: 'Sand Coloring', meta: 'Casual · Thư giãn',
        tagline: 'Nối điểm, hé lộ hoa văn, tô bằng cát.',
        desc: 'Game tô tranh cát thư giãn. Nối các điểm đánh số, ngắm hoa văn tinh xảo hiện ra bằng cát màu, và mở khóa thư viện thiết kế ngày càng lớn. Thiết kế để xả stress sau ngày dài.',
        features: [
          'Hàng trăm hoa văn chọn lọc theo nhiều chủ đề',
          'Hiệu ứng particle đã tay với mỗi nét vẽ',
          'Thử thách hàng ngày và chế độ offline',
          'Không quảng cáo trong gameplay — hứa'
        ],
        eta: 'Soft launch — cuối 2026'
      }
    }
  },
  {
    id: 'untitled',
    slug: 'untitled',
    icon: '🎮',
    status: 'soon',
    platforms: ['Mobile (TBA)'],
    thumb: '/assets/screenshots/untitled/1.svg',
    screenshots: [
      '/assets/screenshots/untitled/1.svg',
      '/assets/screenshots/untitled/2.svg',
      '/assets/screenshots/untitled/3.svg',
      '/assets/screenshots/untitled/4.svg',
    ],
    trailer: false,
    i18n: {
      en: {
        title: 'Untitled Project', meta: 'TBA',
        tagline: 'Something new is brewing. Stay tuned.',
        desc: "Early prototype of a puzzle game we cannot say much about yet. The core loop is fun. The art direction is being figured out. That's about all we can share for now.",
        features: [
          'One-handed friendly',
          "New mechanic we haven't seen elsewhere",
          'Built for short sessions, designed to come back to'
        ],
        eta: 'Concept phase'
      },
      vi: {
        title: 'Dự Án Chưa Đặt Tên', meta: 'TBA',
        tagline: 'Có gì đó mới đang ủ. Theo dõi nhé.',
        desc: 'Prototype sớm của một game giải đố mà chúng tôi chưa thể nói nhiều. Core loop đã vui. Hướng art đang được tìm. Đó là tất cả những gì có thể chia sẻ lúc này.',
        features: [
          'Chơi một tay được',
          'Cơ chế mới chưa thấy ở đâu',
          'Thiết kế cho phiên ngắn, dễ quay lại'
        ],
        eta: 'Giai đoạn concept'
      }
    }
  }
];

export const FAQ = [
  { q: { en: 'When can I play Sand Coloring?', vi: 'Khi nào được chơi Sand Coloring?' },
    a: { en: "We're aiming for a soft launch on Android in late 2026, followed by iOS shortly after. Sign up for the newsletter at the bottom of the page to get a heads-up.",
         vi: 'Chúng tôi nhắm soft launch trên Android vào cuối 2026, iOS ngay sau đó. Đăng ký newsletter ở cuối trang để nhận thông báo sớm.' } },
  { q: { en: 'Are you hiring?', vi: 'Studio có tuyển không?' },
    a: { en: "Not formally — Blue Tusk Studio is a one-person shop right now. That said, if you're a 2D artist or audio designer who likes small projects, drop us a line. We collaborate on a per-project basis.",
         vi: 'Chưa chính thức — Blue Tusk hiện là studio một người. Tuy nhiên, nếu bạn là họa sĩ 2D hay audio designer thích dự án nhỏ, cứ liên hệ. Chúng tôi hợp tác theo dự án.' } },
  { q: { en: 'Will your games have ads or in-app purchases?', vi: 'Game có quảng cáo hay in-app purchase không?' },
    a: { en: "Our preference is one-time purchases or a single optional cosmetic pack. We won't inject mid-gameplay ads or pay-to-progress systems. That's a hard line.",
         vi: 'Chúng tôi thích mua một lần hoặc một gói cosmetic tùy chọn. Sẽ không nhét quảng cáo giữa gameplay hay hệ thống pay-to-progress. Đó là giới hạn cứng.' } },
  { q: { en: 'What engine do you use?', vi: 'Studio dùng engine gì?' },
    a: { en: 'Unity, currently. We pick tools that let one developer ship — that may change as the studio grows.',
         vi: 'Unity, hiện tại. Chúng tôi chọn công cụ giúp một dev ship được — có thể đổi khi studio lớn lên.' } },
  { q: { en: 'Do you accept press inquiries?', vi: 'Có nhận liên hệ báo chí không?' },
    a: { en: "Yes, absolutely. Email us at quanganh01082002@gmail.com — see the Press Kit section above for what's ready to go.",
         vi: 'Có, tất nhiên. Email cho chúng tôi tại quanganh01082002@gmail.com — xem mục Press Kit ở trên để biết sẵn có gì.' } },
  { q: { en: 'Can I support the studio?', vi: 'Làm sao để ủng hộ studio?' },
    a: { en: 'The best support right now is playing the games when they launch and telling someone you liked them. Newsletter signups also help us gauge interest.',
         vi: 'Cách ủng hộ tốt nhất bây giờ là chơi game khi ra mắt và kể cho bạn bè. Đăng ký newsletter cũng giúp chúng tôi đo mức quan tâm.' } }
];

export const COMMUNITY = [
  { id: 'discord', live: false, label: 'Discord', icon: 'discord',
    desc: { en: 'Behind-the-scenes chat, early builds, occasional polls. Server opens with first playtest.',
            vi: 'Trò chuyện hậu trường, build sớm, polls thỉnh thoảng. Server mở cùng playtest đầu tiên.' } },
  { id: 'x', live: false, label: 'X / Twitter', icon: 'x',
    desc: { en: 'Daily-ish screenshots, gifs, and tiny rants about game design.',
            vi: 'Screenshot, gif và những lời cằn nhằn nhỏ về game design — gần như hàng ngày.' } },
  { id: 'yt', live: false, label: 'YouTube', icon: 'yt',
    desc: { en: 'Devlog videos, trailers, and the occasional process breakdown.',
            vi: 'Video devlog, trailer, và đôi khi là breakdown quá trình.' } },
  { id: 'reddit', live: true, url: 'https://reddit.com/r/IndieDev', label: 'r/IndieDev', icon: 'reddit',
    desc: { en: 'We post devlog highlights on Reddit when something feels share-worthy.',
            vi: 'Chúng tôi đăng các đoạn devlog nổi bật trên Reddit khi có gì đáng chia sẻ.' } },
  { id: 'github', live: true, url: 'https://github.com/VoiStudio', label: 'GitHub', icon: 'github',
    desc: { en: 'A few open-source utilities and our website source live here.',
            vi: 'Vài tiện ích open-source và source của website này nằm ở đây.' } },
  { id: 'itch', live: false, label: 'itch.io', icon: 'itch',
    desc: { en: 'Where our prototypes and free games will land, eventually.',
            vi: 'Nơi các prototype và game free của chúng tôi sẽ đáp xuống, một ngày nào đó.' } }
];

export const COMMUNITY_ICONS = {
  discord: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.32 4.78a19.79 19.79 0 0 0-4.89-1.52.07.07 0 0 0-.08.04c-.21.38-.45.87-.61 1.26a18.27 18.27 0 0 0-5.48 0c-.17-.4-.41-.88-.62-1.26a.08.08 0 0 0-.08-.04A19.74 19.74 0 0 0 3.67 4.78a.07.07 0 0 0-.03.03A20.27 20.27 0 0 0 .07 18.42a.08.08 0 0 0 .03.05 19.9 19.9 0 0 0 6 3.03.08.08 0 0 0 .09-.03c.46-.63.87-1.3 1.23-2a.08.08 0 0 0-.04-.1 13.1 13.1 0 0 1-1.87-.89.08.08 0 0 1 0-.13c.13-.1.25-.2.37-.3a.08.08 0 0 1 .08-.01 14.2 14.2 0 0 0 12.07 0 .08.08 0 0 1 .08.01c.12.1.24.2.37.3a.08.08 0 0 1 0 .13 12.3 12.3 0 0 1-1.87.89.08.08 0 0 0-.04.1c.37.7.78 1.37 1.23 2a.08.08 0 0 0 .09.03 19.84 19.84 0 0 0 6.02-3.03.08.08 0 0 0 .03-.05 20.13 20.13 0 0 0-3.58-13.61.06.06 0 0 0-.04-.03ZM8.02 16.07c-1.19 0-2.17-1.09-2.17-2.43 0-1.34.96-2.43 2.17-2.43 1.21 0 2.19 1.1 2.17 2.43 0 1.34-.96 2.43-2.17 2.43Zm8 0c-1.19 0-2.17-1.09-2.17-2.43 0-1.34.96-2.43 2.17-2.43 1.21 0 2.19 1.1 2.17 2.43 0 1.34-.96 2.43-2.17 2.43Z"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 3h3.2l-7 8 8.2 10h-6.4l-5-6.5L4.8 21H1.6l7.5-8.6L1.2 3h6.6l4.5 6 5.2-6Zm-1.1 16h1.8L7.7 5H5.7l10.7 14Z"/></svg>',
  yt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.6-.46-5.3a2.74 2.74 0 0 0-1.93-1.93C18.9 4.3 12 4.3 12 4.3s-6.9 0-8.6.47A2.74 2.74 0 0 0 1.46 6.7C1 8.4 1 12 1 12s0 3.6.46 5.3a2.74 2.74 0 0 0 1.93 1.93c1.7.47 8.6.47 8.6.47s6.9 0 8.6-.47a2.74 2.74 0 0 0 1.94-1.93C23 15.6 23 12 23 12ZM9.8 15.3V8.7l5.7 3.3-5.7 3.3Z"/></svg>',
  reddit: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-1.1-.9-2-2-2-.5 0-1 .2-1.4.5-1.5-1-3.4-1.6-5.4-1.7l.9-4.3 3 .7c0 .8.7 1.4 1.5 1.4S20 5.9 20 5.1s-.7-1.5-1.5-1.5c-.6 0-1.1.3-1.3.8L13.6 4l-1 4.8c-2 .1-3.9.7-5.4 1.7-.4-.3-.9-.5-1.4-.5-1.1 0-2 .9-2 2 0 .8.5 1.5 1.2 1.8 0 .2-.1.4-.1.6 0 3.1 3.6 5.6 8.1 5.6s8.1-2.5 8.1-5.6c0-.2 0-.4-.1-.6.7-.3 1.2-1 1.2-1.8ZM7 13.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5S7 14.3 7 13.5Zm8.6 4.1c-1 .9-2.3 1.3-3.6 1.3s-2.6-.4-3.6-1.3c-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0 .8.7 1.8 1 2.9 1s2.1-.3 2.9-1c.2-.2.5-.2.7 0 .2.2.2.5 0 .7Zm-.1-2.6c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5Z"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.66.5 12.03c0 5.08 3.29 9.39 7.86 10.92.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.34-1.27-1.7-1.27-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.16 1.18A11 11 0 0 1 12 6.8c.97 0 1.96.13 2.88.39 2.2-1.49 3.16-1.18 3.16-1.18.62 1.59.23 2.77.11 3.06.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A10.53 10.53 0 0 0 23.5 12.03C23.5 5.66 18.35.5 12 .5Z"/></svg>',
  itch: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.5 4.5C2.5 5.1 1 7 1 7.6v1c0 1.2 1.2 2.3 2.3 2.3 1.3 0 2.4-1.1 2.4-2.4 0 1.3 1 2.4 2.4 2.4 1.3 0 2.3-1.1 2.3-2.4 0 1.3 1.1 2.4 2.4 2.4h.4c1.3 0 2.4-1.1 2.4-2.4 0 1.3 1 2.4 2.3 2.4 1.4 0 2.4-1.1 2.4-2.4 0 1.3 1.1 2.4 2.4 2.4C22.8 11 24 9.9 24 8.6v-1c0-.6-1.5-2.5-2.5-3.1-3-.2-5.4-.2-9.5-.2s-5.5 0-9.5.2Zm5 5.5c-.4.7-1.2 1.3-2.1 1.3-.8 0-1.7-.5-2-1.2-.4.7-1.2 1.2-2 1.2H2.3c-.2 1.9-.2 3.8-.1 5.7v.5C2.4 19.6 4.1 20 7.4 20c.7 0 1.4 0 2.1-.1 1.8 0 2.5-.6 2.5-.6s.7.6 2.5.6c.7.1 1.4.1 2.1.1 3.3 0 5-.4 5.2-2.5v-.5c.1-1.9.1-3.8-.1-5.7h-.1c-.8 0-1.6-.5-2-1.2-.3.7-1.2 1.2-2 1.2-.9 0-1.7-.6-2.1-1.3-.5.8-1.3 1.3-2.2 1.3h-.4c-1 0-1.8-.5-2.3-1.3Zm.7 4.6h5.7c.6 0 1.1.4 1.1 1 0 .6-.5 1.1-1.1 1.1h-1.6c-.3.5-1.1.8-2.2.8s-1.9-.4-2.2-.8H7.5c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1 1.1-1Z"/></svg>'
};

export const INFO = {
  privacy: {
    title: { en: 'Privacy', vi: 'Riêng tư' },
    body: {
      en: `<h3>Plain English</h3>
           <p>This website does not collect personal information. There are no analytics scripts, no tracking pixels, no third-party cookies, and no advertising network on this page.</p>
           <h3>What we store</h3>
           <ul><li>Your language preference and theme choice — saved only in your own browser's localStorage.</li><li>Nothing else.</li></ul>
           <h3>Forms</h3>
           <p>The contact form opens your email client with a pre-filled message. We only see what you choose to send. The newsletter form may POST to a third-party email provider if one is configured (see README) — otherwise it's a UI placeholder.</p>
           <h3>Third parties</h3>
           <p>Google Fonts is loaded from fonts.googleapis.com. They may receive your IP address. If you'd rather not, you can block third-party fonts at the browser level.</p>`,
      vi: `<h3>Nói thẳng</h3>
           <p>Website này không thu thập thông tin cá nhân. Không có script analytics, không tracking pixel, không cookie bên thứ ba, không mạng quảng cáo nào trên trang này.</p>
           <h3>Chúng tôi lưu gì</h3>
           <ul><li>Lựa chọn ngôn ngữ và theme của bạn — lưu trong localStorage của trình duyệt bạn.</li><li>Không gì khác.</li></ul>
           <h3>Biểu mẫu</h3>
           <p>Form liên hệ mở ứng dụng email của bạn với nội dung điền sẵn. Chúng tôi chỉ thấy những gì bạn chọn gửi đi. Form newsletter có thể POST đến dịch vụ email bên thứ ba nếu được cấu hình (xem README) — nếu không thì chỉ là UI placeholder.</p>
           <h3>Bên thứ ba</h3>
           <p>Google Fonts được tải từ fonts.googleapis.com. Họ có thể nhận IP của bạn. Nếu không muốn, bạn có thể chặn font bên thứ ba ở mức trình duyệt.</p>`
    }
  },
  terms: {
    title: { en: 'Terms', vi: 'Điều khoản' },
    body: {
      en: `<h3>The short version</h3>
           <p>Be excellent to each other. Don't try to break, scrape, or weaponize this site. We don't make any warranty about content accuracy — devlog plans change, ETAs slip, that's life.</p>
           <h3>Trademarks</h3>
           <p>"Blue Tusk Studio", the studio mark, and game names are property of the studio. Press kit assets may be used in editorial coverage.</p>
           <h3>Liability</h3>
           <p>The site is provided as-is. We're not responsible for what other sites linked from here do.</p>`,
      vi: `<h3>Bản ngắn gọn</h3>
           <p>Cư xử tử tế với nhau. Đừng cố phá, scrape hay vũ khí hóa site này. Chúng tôi không bảo hành về độ chính xác của nội dung — kế hoạch devlog thay đổi, ETA trượt, đời là vậy.</p>
           <h3>Thương hiệu</h3>
           <p>"Blue Tusk Studio", mark studio, và tên game thuộc về studio. Asset từ press kit có thể dùng cho mục đích editorial.</p>
           <h3>Trách nhiệm</h3>
           <p>Site được cung cấp nguyên trạng. Chúng tôi không chịu trách nhiệm cho các site khác được link từ đây.</p>`
    }
  },
  soon: {
    title: { en: 'Coming soon', vi: 'Sắp ra mắt' },
    body: {
      en: `<p>This channel isn't open yet. We'll launch it alongside the first playtest of Sand Coloring.</p>
           <p>If you want a heads-up the moment it goes live, subscribe to the newsletter at the bottom of the page.</p>`,
      vi: `<p>Kênh này chưa mở. Chúng tôi sẽ ra mắt cùng playtest đầu tiên của Sand Coloring.</p>
           <p>Nếu muốn biết ngay khi mở, đăng ký newsletter ở cuối trang.</p>`
    }
  },
  trailer: {
    title: { en: 'Trailer', vi: 'Trailer' },
    body: {
      en: `<p>The trailer isn't public yet — we're cutting it. We'll embed it here the moment it lands.</p>
           <p>Want first access? Hit the playtest button on the game card, or join the newsletter.</p>`,
      vi: `<p>Trailer chưa công khai — chúng tôi đang dựng. Sẽ embed vào đây ngay khi có.</p>
           <p>Muốn xem trước? Bấm nút playtest trên card game, hoặc đăng ký newsletter.</p>`
    }
  }
};

export const SITE = {
  email: 'quanganh01082002@gmail.com',
  github: 'https://github.com/VoiStudio',
  baseUrl: 'https://bluetuskstudio.com'
};
