const DICT = {
  en: {
    'a11y.skip': 'Skip to content',
    'nav.games': 'Games', 'nav.about': 'About', 'nav.devlog': 'Devlog',
    'nav.roadmap': 'Roadmap', 'nav.community': 'Community',
    'nav.press': 'Press', 'nav.faq': 'FAQ', 'nav.contact': 'Contact',
    'nav.values': 'Values', 'nav.home': 'Home',

    'hero.label': 'Independent Game Studio',
    'hero.line1': 'We Make', 'hero.line2': 'Games.',
    'hero.tagline': 'Small team. Big ideas. We craft mobile games with satisfying mechanics and clean aesthetics.',
    'hero.cta1': 'See Our Games →', 'hero.cta2': 'Get in Touch',
    'hero.scroll': 'Scroll',

    'featured.label': 'Featured in / Awards',

    'manifesto.label': 'Our promise',
    'manifesto.line1': 'Small games.',
    'manifesto.line2': 'Big feelings.',
    'manifesto.body': "No dark patterns, no chasing trends — just careful work on games we'd genuinely want to play. We'd rather ship one tiny thing we love than ten things we don't.",

    'hc.nl.title': 'Get the devlog',
    'hc.nl.body':  'Short, occasional updates when something interesting ships. No spam.',
    'hc.nl.cta':   'Subscribe →',
    'hc.press.title': 'Press & creators',
    'hc.press.body':  'Logos, screenshots, fact sheet — everything you need to cover us.',
    'hc.press.cta':   'Press kit →',
    'hc.play.title': 'Join playtest',
    'hc.play.body':  'Get early access to Sand Coloring and shape the final build.',
    'hc.play.cta':   'Sign up →',

    'finalCta.label': 'Last thing',
    'finalCta.line1': 'Make something with us.',
    'finalCta.line2': 'Or just say hi.',
    'finalCta.body':  'If a single line in this site sparked anything — a question, a collab idea, a pitch, a "hey nice work" — we\'d love to hear it. We read everything.',
    'finalCta.cta1':  'Drop us a line →',
    'finalCta.cta2':  'Open contact form',

    'games.label': 'Portfolio', 'games.title': 'Our Games',
    'games.sub': 'A small but growing collection. Every project is built around a single feeling we want the player to have.',
    'games.detailsLink': 'Details →',
    'games.viewFullPage': 'View full page →',

    'about.label': 'About', 'about.title': 'Who We Are',
    'about.p1': 'Blue Tusk Studio is an independent mobile game studio focused on crafting casual games with satisfying mechanics and polished feels.',
    'about.p2': 'We believe the best games are simple to understand, hard to put down — and always look good doing it. Every line of code, every animation curve, every tap should feel right.',
    'about.p3': "Right now we're a one-person shop based in Vietnam, working out of pure curiosity and stubbornness.",
    'about.stat1': 'Game in dev', 'about.stat2': 'Founded',
    'about.stat3': 'Developer',  'about.stat4': 'Ideas',

    'values.label': 'What We Believe', 'values.title': 'A Few Hard Rules',
    'values.sub': 'Our compass for every design decision. Boring, but we mean them.',
    'values.v1.title': 'Feel over features',
    'values.v1.body': 'One mechanic done with great haptics, audio, and motion beats five half-baked systems. Always.',
    'values.v2.title': 'Respect the player',
    'values.v2.body': "No dark patterns, no forced ads, no fake scarcity. If we want their money, we'll ask honestly.",
    'values.v3.title': 'Ship small, ship often',
    'values.v3.body': "A small game that exists is worth more than a perfect one that never launches. We ship.",
    'values.v4.title': 'Build in public',
    'values.v4.body': 'Devlogs, screenshots, mistakes. The process is part of the story — we share it openly.',

    'process.label': 'How We Work',
    'process.title': 'From Spark to Ship',
    'process.sub': 'A loose three-phase rhythm. We jump back and forth, but the order rhymes.',
    'process.p1.title': 'Spark & Sketch',
    'process.p1.body': 'A new idea lives as a paper sketch for a week. If it still excites us, it earns a prototype.',
    'process.p2.title': 'Prototype & Playtest',
    'process.p2.body': 'Smallest possible playable build. Real hands on the screen as early as possible — feedback shapes the rest.',
    'process.p3.title': 'Polish & Ship',
    'process.p3.body': "We don't say 'done' until the haptics, sound, and motion all land. Then we ship — and learn.",

    'devlog.label': 'Devlog', 'devlog.title': "What We're Working On",
    'devlog.sub': 'Short notes from the build. Honest, occasionally messy.',
    'devlog.filterAll': 'All',
    'devlog.search': 'Search devlog…',
    'devlog.rss': 'RSS feed',
    'devlog.empty': 'Nothing matches that.',
    'devlog.loading': 'Loading…',

    'roadmap.label': 'Roadmap', 'roadmap.title': "Where We're Headed",
    'roadmap.sub': 'A loose plan. Reality always edits it, but the direction holds.',
    'roadmap.done': 'Shipped',
    'roadmap.done.1': 'Studio identity & branding',
    'roadmap.done.2': 'Website v1 launched',
    'roadmap.done.3': 'Sand Coloring — core prototype',
    'roadmap.now': 'In progress',
    'roadmap.now.1': 'Sand Coloring — content pipeline',
    'roadmap.now.2': 'Tap & particle polish pass',
    'roadmap.now.3': 'Closed playtesting (Q3 2026)',
    'roadmap.next': 'Up next',
    'roadmap.next.1': 'Soft launch on Android',
    'roadmap.next.2': 'iOS TestFlight build',
    'roadmap.next.3': 'Untitled puzzle prototype',
    'roadmap.later': 'Someday',
    'roadmap.later.1': 'Multi-platform release',
    'roadmap.later.2': 'Original soundtrack',
    'roadmap.later.3': 'A second hire?',

    'community.label': 'Community', 'community.title': 'Find Us Around the Web',
    'community.sub': "We hang out in a few places. Come say hi — we don't bite.",
    'community.open': 'Open →',

    'collab.label': 'Open Collaborations', 'collab.title': 'Work With Us',
    'collab.heading': "We're a tiny team — and that's where you come in.",
    'collab.body': "We don't have full-time roles open, but we collaborate per-project with artists, sound designers, and composers whose work we love. If that's you, send a portfolio and we'll be in touch the next time the puzzle pieces fit.",
    'collab.tag1': '2D Artists', 'collab.tag2': 'Sound Designers',
    'collab.tag3': 'Composers', 'collab.tag4': 'Marketing / PR', 'collab.tag5': 'Localizers',
    'collab.cta': 'Send portfolio →',

    'press.label': 'Press Kit', 'press.title': 'For Press & Creators',
    'press.sub': 'Everything you need to write about us. Reach out anytime — we love talking shop.',
    'press.c1.title': 'Logos & Marks', 'press.c1.body': 'SVG + PNG variants on light and dark backgrounds. Safe areas included.', 'press.c1.cta': 'Request →',
    'press.c2.title': 'Screenshots',  'press.c2.body': 'High-resolution captures from our current projects, ready for embeds.', 'press.c2.cta': 'Request →',
    'press.c3.title': 'Fact Sheet',   'press.c3.body': 'Studio bio, key people, and quick facts in plain text — copy & paste friendly.', 'press.c3.cta': 'View below ↓',
    'press.c4.title': 'Interviews',   'press.c4.body': 'Happy to chat for podcasts, YouTube features, or written pieces. Drop us a line.', 'press.c4.cta': 'Reach out →',
    'press.fact.title': 'Fact Sheet',
    'press.fact.studio': 'Studio', 'press.fact.founded': 'Founded',
    'press.fact.based': 'Based in', 'press.fact.based.v': 'Vietnam',
    'press.fact.team': 'Team size', 'press.fact.team.v': '1 (and growing)',
    'press.fact.focus': 'Focus', 'press.fact.focus.v': 'Mobile, casual, satisfying mechanics',
    'press.fact.engine': 'Engine', 'press.fact.web': 'Website', 'press.fact.contact': 'Contact',

    'faq.label': 'FAQ', 'faq.title': 'Frequently Asked',

    'contact.label': 'Contact', 'contact.title': 'Say Hello',
    'contact.sub': 'Press, playtesting, collabs, or just a friendly ping — we read everything.',
    'contact.name': 'Your name', 'contact.email': 'Email',
    'contact.topic': 'Topic',
    'contact.topic.general': 'General hello',
    'contact.topic.press': 'Press inquiry',
    'contact.topic.playtest': 'Playtest signup',
    'contact.topic.collab': 'Collaboration',
    'contact.topic.bug': 'Bug report',
    'contact.message': 'Message', 'contact.send': 'Send via email →',
    'contact.emailLabel': 'Email', 'contact.replyLabel': 'Response time',
    'contact.replyBody': "Usually within 2–3 business days. Faster if it's about Sand Coloring.",

    'nl.title': 'Get the devlog in your inbox',
    'nl.body': 'Occasional updates when something interesting ships. No spam, ever.',
    'nl.btn': 'Subscribe',
    'nl.sending': 'Sending…',
    'nl.success': '✓ Subscribed. Talk soon.',

    'footer.brand': 'Independent mobile game studio. Crafting casual games with satisfying mechanics and clean aesthetics.',
    'footer.studio': 'Studio', 'footer.games': 'Games', 'footer.connect': 'Connect',
    'footer.whatsNext': "What's next",
    'footer.privacy': 'Privacy', 'footer.terms': 'Terms',
    'footer.madeIn': 'Made with care in 🇻🇳',
    'footer.rights': 'All rights reserved.',

    'notice.body': 'No cookies, no trackers, no analytics. Just a static site. This message will only show once.',
    'notice.ok': 'Got it',

    'modal.close': 'Close',
    'modal.playtestCta': 'Join playtest →',
    'modal.trailerLabel': 'Watch trailer',
    'modal.share': 'Share',
    'modal.copyLink': 'Copy link',
    'modal.copied': '✓ Copied',

    'badge.wip': 'In Development', 'badge.soon': 'Coming Soon', 'badge.live': 'Available Now',

    'form.fillAll': 'Please fill in every field.',
    'form.badEmail': "That email doesn't look right.",
    'form.opening': 'Opening your email client…',
    'form.fallback': 'Thanks! If nothing happened, email us directly.',
    'form.networkErr': 'Network error. Try again, or email us directly.',
    'soon': 'Coming soon ✨'
  },
  vi: {
    'a11y.skip': 'Bỏ qua đến nội dung',
    'nav.games': 'Trò chơi', 'nav.about': 'Về studio', 'nav.devlog': 'Nhật ký',
    'nav.roadmap': 'Lộ trình', 'nav.community': 'Cộng đồng',
    'nav.press': 'Báo chí', 'nav.faq': 'Hỏi đáp', 'nav.contact': 'Liên hệ',
    'nav.values': 'Giá trị', 'nav.home': 'Trang chủ',

    'hero.label': 'Studio Game Độc Lập',
    'hero.line1': 'Chúng tôi làm', 'hero.line2': 'Game.',
    'hero.tagline': 'Đội nhỏ. Ý tưởng lớn. Chúng tôi làm game mobile với cơ chế đã tay và thẩm mỹ tối giản.',
    'hero.cta1': 'Xem game của chúng tôi →', 'hero.cta2': 'Liên hệ',
    'hero.scroll': 'Cuộn',

    'featured.label': 'Được nhắc đến tại',

    'manifesto.label': 'Cam kết của chúng tôi',
    'manifesto.line1': 'Game nhỏ.',
    'manifesto.line2': 'Cảm xúc lớn.',
    'manifesto.body': 'Không dark pattern, không chạy theo trend — chỉ là công việc cẩn thận trên những game chúng tôi thật sự muốn chơi. Thà ship một thứ nhỏ mà yêu hơn mười thứ không.',

    'hc.nl.title': 'Nhận devlog',
    'hc.nl.body':  'Cập nhật ngắn thỉnh thoảng khi có gì đáng kể được ship. Không spam.',
    'hc.nl.cta':   'Đăng ký →',
    'hc.press.title': 'Báo chí & creator',
    'hc.press.body':  'Logo, screenshot, fact sheet — mọi thứ bạn cần để viết về chúng tôi.',
    'hc.press.cta':   'Press kit →',
    'hc.play.title': 'Tham gia playtest',
    'hc.play.body':  'Truy cập sớm Sand Coloring và định hình build cuối cùng.',
    'hc.play.cta':   'Đăng ký →',

    'finalCta.label': 'Một điều cuối',
    'finalCta.line1': 'Cùng làm gì đó.',
    'finalCta.line2': 'Hoặc chỉ chào thôi cũng được.',
    'finalCta.body':  'Nếu một dòng nào đó trên site này khơi gợi điều gì — một câu hỏi, ý hợp tác, lời pitch, hay "wow đẹp đấy" — chúng tôi rất muốn nghe. Chúng tôi đọc hết.',
    'finalCta.cta1':  'Gửi cho chúng tôi →',
    'finalCta.cta2':  'Mở form liên hệ',

    'games.label': 'Portfolio', 'games.title': 'Các Game Của Chúng Tôi',
    'games.sub': 'Bộ sưu tập nhỏ nhưng đang lớn dần. Mỗi dự án được xây quanh một cảm giác duy nhất chúng tôi muốn người chơi có.',
    'games.detailsLink': 'Chi tiết →',
    'games.viewFullPage': 'Xem trang đầy đủ →',

    'about.label': 'Về studio', 'about.title': 'Chúng Tôi Là Ai',
    'about.p1': 'Blue Tusk Studio là một studio game mobile độc lập, tập trung vào việc tạo ra những game casual với cơ chế đã tay và cảm giác mượt mà.',
    'about.p2': 'Chúng tôi tin rằng game hay nhất là dễ hiểu, khó bỏ xuống — và phải đẹp. Mỗi dòng code, mỗi đường cong animation, mỗi cú chạm đều phải đúng cảm giác.',
    'about.p3': 'Hiện tại chúng tôi là studio một người ở Việt Nam, làm việc bằng sự tò mò và lì lợm thuần túy.',
    'about.stat1': 'Game đang phát triển', 'about.stat2': 'Thành lập',
    'about.stat3': 'Lập trình viên',        'about.stat4': 'Ý tưởng',

    'values.label': 'Niềm tin của chúng tôi', 'values.title': 'Vài Nguyên Tắc Không Đổi',
    'values.sub': 'Kim chỉ nam cho mọi quyết định thiết kế. Nhàm chán, nhưng chúng tôi nghiêm túc.',
    'values.v1.title': 'Cảm giác hơn tính năng',
    'values.v1.body': 'Một cơ chế làm tốt với haptic, âm thanh, chuyển động xịn — đáng giá hơn năm hệ thống nửa vời. Luôn luôn.',
    'values.v2.title': 'Tôn trọng người chơi',
    'values.v2.body': 'Không dark pattern, không ép xem quảng cáo, không khan hiếm giả. Nếu cần tiền, chúng tôi sẽ hỏi thẳng.',
    'values.v3.title': 'Ship nhỏ, ship đều',
    'values.v3.body': 'Một game nhỏ đã ra mắt còn quý hơn một game hoàn hảo không bao giờ ra. Chúng tôi luôn ship.',
    'values.v4.title': 'Xây dựng công khai',
    'values.v4.body': 'Devlog, screenshot, cả những sai lầm. Quá trình là một phần của câu chuyện — chúng tôi chia sẻ thẳng.',

    'process.label': 'Cách Chúng Tôi Làm',
    'process.title': 'Từ Ý Tưởng Đến Khi Ship',
    'process.sub': 'Một nhịp ba pha lỏng lẻo. Chúng tôi nhảy qua lại, nhưng thứ tự luôn vần.',
    'process.p1.title': 'Ý Tưởng & Phác Thảo',
    'process.p1.body': 'Một ý tưởng mới sống trên giấy nháp một tuần. Nếu vẫn còn hấp dẫn, nó được làm prototype.',
    'process.p2.title': 'Prototype & Playtest',
    'process.p2.body': 'Build chơi được nhỏ nhất có thể. Bàn tay thật trên màn hình càng sớm càng tốt — feedback định hình phần còn lại.',
    'process.p3.title': 'Đánh Bóng & Ship',
    'process.p3.body': 'Chúng tôi không nói "xong" cho đến khi haptic, âm thanh và chuyển động đều đúng. Rồi ship — và học.',

    'devlog.label': 'Nhật ký', 'devlog.title': 'Chúng Tôi Đang Làm Gì',
    'devlog.sub': 'Ghi chú ngắn từ quá trình build. Thật thà, thỉnh thoảng lộn xộn.',
    'devlog.filterAll': 'Tất cả',
    'devlog.search': 'Tìm trong devlog…',
    'devlog.rss': 'RSS feed',
    'devlog.empty': 'Không có gì khớp.',
    'devlog.loading': 'Đang tải…',

    'roadmap.label': 'Lộ trình', 'roadmap.title': 'Chúng Tôi Đang Hướng Tới',
    'roadmap.sub': 'Một kế hoạch lỏng. Thực tế luôn chỉnh sửa nó, nhưng hướng đi không đổi.',
    'roadmap.done': 'Đã xong',
    'roadmap.done.1': 'Định danh & branding studio',
    'roadmap.done.2': 'Website v1 đã ra mắt',
    'roadmap.done.3': 'Sand Coloring — prototype lõi',
    'roadmap.now': 'Đang làm',
    'roadmap.now.1': 'Sand Coloring — pipeline nội dung',
    'roadmap.now.2': 'Tinh chỉnh tap & particle',
    'roadmap.now.3': 'Playtest kín (Q3 2026)',
    'roadmap.next': 'Tiếp theo',
    'roadmap.next.1': 'Soft launch trên Android',
    'roadmap.next.2': 'Build iOS TestFlight',
    'roadmap.next.3': 'Prototype game giải đố mới',
    'roadmap.later': 'Một ngày nào đó',
    'roadmap.later.1': 'Phát hành đa nền tảng',
    'roadmap.later.2': 'Soundtrack riêng',
    'roadmap.later.3': 'Tuyển thêm người thứ hai?',

    'community.label': 'Cộng đồng', 'community.title': 'Tìm Chúng Tôi Quanh Web',
    'community.sub': 'Chúng tôi quanh quẩn ở vài chỗ. Ghé chào nhé — chúng tôi không cắn đâu.',
    'community.open': 'Mở →',

    'collab.label': 'Hợp tác mở', 'collab.title': 'Làm Việc Với Chúng Tôi',
    'collab.heading': 'Chúng tôi là team siêu nhỏ — và đó là chỗ bạn xuất hiện.',
    'collab.body': 'Chúng tôi không có vị trí full-time, nhưng hợp tác theo dự án với họa sĩ, sound designer, composer mà chúng tôi yêu thích tác phẩm. Nếu đó là bạn, gửi portfolio và chúng tôi sẽ liên lạc khi mảnh ghép phù hợp.',
    'collab.tag1': 'Họa sĩ 2D', 'collab.tag2': 'Sound Designer',
    'collab.tag3': 'Composer', 'collab.tag4': 'Marketing / PR', 'collab.tag5': 'Bản địa hóa',
    'collab.cta': 'Gửi portfolio →',

    'press.label': 'Báo chí', 'press.title': 'Cho Báo Chí & Creator',
    'press.sub': 'Mọi thứ bạn cần để viết về chúng tôi. Cứ liên hệ — chúng tôi thích trò chuyện.',
    'press.c1.title': 'Logo & Mark', 'press.c1.body': 'Phiên bản SVG + PNG trên nền sáng và tối. Đã có safe area.', 'press.c1.cta': 'Yêu cầu →',
    'press.c2.title': 'Screenshot',  'press.c2.body': 'Ảnh chụp độ phân giải cao từ các dự án hiện tại, sẵn sàng cho embed.', 'press.c2.cta': 'Yêu cầu →',
    'press.c3.title': 'Fact Sheet',  'press.c3.body': 'Tiểu sử studio, thành viên, thông tin nhanh dạng text — dễ copy/paste.', 'press.c3.cta': 'Xem bên dưới ↓',
    'press.c4.title': 'Phỏng vấn',   'press.c4.body': 'Sẵn lòng trò chuyện cho podcast, YouTube hay bài viết. Cứ nhắn nhé.', 'press.c4.cta': 'Liên hệ →',
    'press.fact.title': 'Fact Sheet',
    'press.fact.studio': 'Studio', 'press.fact.founded': 'Thành lập',
    'press.fact.based': 'Trụ sở', 'press.fact.based.v': 'Việt Nam',
    'press.fact.team': 'Đội ngũ', 'press.fact.team.v': '1 (và đang lớn)',
    'press.fact.focus': 'Tập trung', 'press.fact.focus.v': 'Mobile, casual, cơ chế đã tay',
    'press.fact.engine': 'Engine', 'press.fact.web': 'Website', 'press.fact.contact': 'Liên hệ',

    'faq.label': 'Hỏi đáp', 'faq.title': 'Câu Hỏi Thường Gặp',

    'contact.label': 'Liên hệ', 'contact.title': 'Chào Nhé',
    'contact.sub': 'Báo chí, playtest, hợp tác, hay chỉ chào thân mật — chúng tôi đọc hết.',
    'contact.name': 'Tên của bạn', 'contact.email': 'Email',
    'contact.topic': 'Chủ đề',
    'contact.topic.general': 'Chào hỏi',
    'contact.topic.press': 'Báo chí',
    'contact.topic.playtest': 'Đăng ký playtest',
    'contact.topic.collab': 'Hợp tác',
    'contact.topic.bug': 'Báo lỗi',
    'contact.message': 'Tin nhắn', 'contact.send': 'Gửi qua email →',
    'contact.emailLabel': 'Email', 'contact.replyLabel': 'Thời gian phản hồi',
    'contact.replyBody': 'Thường trong 2–3 ngày làm việc. Nhanh hơn nếu là về Sand Coloring.',

    'nl.title': 'Nhận devlog qua email',
    'nl.body': 'Cập nhật thỉnh thoảng khi có gì đáng kể được ship. Không spam, bao giờ.',
    'nl.btn': 'Đăng ký',
    'nl.sending': 'Đang gửi…',
    'nl.success': '✓ Đã đăng ký. Hẹn gặp sớm.',

    'footer.brand': 'Studio game mobile độc lập. Làm game casual với cơ chế đã tay và thẩm mỹ tối giản.',
    'footer.studio': 'Studio', 'footer.games': 'Game', 'footer.connect': 'Kết nối',
    'footer.whatsNext': 'Tiếp theo là gì',
    'footer.privacy': 'Riêng tư', 'footer.terms': 'Điều khoản',
    'footer.madeIn': 'Làm bằng tâm tại 🇻🇳',
    'footer.rights': 'Bản quyền đã đăng ký.',

    'notice.body': 'Không cookie, không tracker, không analytics. Chỉ là một trang tĩnh. Thông báo này chỉ hiện một lần.',
    'notice.ok': 'Đã hiểu',

    'modal.close': 'Đóng',
    'modal.playtestCta': 'Đăng ký playtest →',
    'modal.trailerLabel': 'Xem trailer',
    'modal.share': 'Chia sẻ',
    'modal.copyLink': 'Copy link',
    'modal.copied': '✓ Đã copy',

    'badge.wip': 'Đang phát triển', 'badge.soon': 'Sắp ra mắt', 'badge.live': 'Đã có',

    'form.fillAll': 'Vui lòng điền đầy đủ các trường.',
    'form.badEmail': 'Email này có vẻ chưa đúng.',
    'form.opening': 'Đang mở ứng dụng email của bạn…',
    'form.fallback': 'Cảm ơn! Nếu không có gì xảy ra, hãy email trực tiếp cho chúng tôi.',
    'form.networkErr': 'Lỗi mạng. Thử lại, hoặc email trực tiếp cho chúng tôi.',
    'soon': 'Sắp có ✨'
  }
};

export function getLang() {
  return document.documentElement.getAttribute('data-lang') || 'en';
}

export function setLang(l) {
  document.documentElement.setAttribute('data-lang', l);
  document.documentElement.setAttribute('lang', l);
  try { localStorage.setItem('bts-lang', l); } catch (e) {}
}

export function t(key) {
  const lang = getLang();
  return (DICT[lang] && DICT[lang][key]) || (DICT.en[key] || key);
}

export function applyI18n(root = document) {
  root.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t(el.dataset.i18n);
    if (v) el.textContent = v;
  });
}

export function pickLang(obj) {
  const lang = getLang();
  if (obj == null) return obj;
  if (typeof obj === 'string') return obj;
  return obj[lang] || obj.en || Object.values(obj)[0];
}
