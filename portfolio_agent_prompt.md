# Build Prompt — Bilingual Developer Portfolio (EN primary / AR secondary)

> Paste this entire file as the opening instruction to your coding agent (Claude Code, Cursor, etc.).

---

## 1. Role & Goal

You are a senior frontend engineer. Build a **static, bilingual (English + Arabic), single-page portfolio website** for a backend-focused Senior Full Stack Developer.

The site's job is to convert a recruiter or engineering manager in the GCC / Middle East market within 30 seconds. It must load fast, look intentional and modern, and put the **work history front and centre** — the projects are the strongest asset and must dominate the page.

**No backend. No database. No CMS. No auth.** Static output only.

---

## 2. Hard Constraints

1. **Do not invent any content.** Every fact, metric, technology, date, and link must come from Section 6 of this document. If you feel a section looks thin, leave it thin — do not fabricate. Specifically: do **not** add Vue.js, React, Docker, AWS, Kubernetes, CI/CD, or any cloud platform to the skills list. They are not part of this person's verified stack.
2. **English is the default language.** Arabic is a fully supported secondary language with correct RTL.
3. Maximum **one page** (single scrolling page with anchor navigation). No multi-page routing except the language route.
4. Performance budget: **Lighthouse 95+ on Performance, Accessibility, Best Practices, SEO** (mobile). Total JS shipped under 50 KB gzipped.
5. No heavy animation libraries, no jQuery, no Bootstrap, no UI kit that ships megabytes.

---

## 3. Tech Stack

**Use:**
- **Astro** + **TypeScript** + **Tailwind CSS**
- Zero client-side JS by default; add small vanilla `<script>` islands only for: theme toggle, language toggle, mobile nav, scroll-spy.
- Content stored in **two typed data files**: `src/content/en.ts` and `src/content/ar.ts`, both conforming to one shared TypeScript interface so translations can never drift structurally.

**Alternative if Astro is unavailable:** Vite + React + TypeScript + Tailwind, statically built. Same constraints apply.

**Deploy target:** static build output deployable to Vercel, Netlify, or GitHub Pages with no server runtime.

---

## 4. Internationalization Requirements

- Routes: `/` (English, default) and `/ar` (Arabic).
- Set `<html lang="en" dir="ltr">` and `<html lang="ar" dir="rtl">` respectively.
- **Use Tailwind logical properties throughout** (`ps-*`, `pe-*`, `ms-*`, `me-*`, `text-start`, `text-end`, `border-s`, `border-e`). Never use `left`/`right` for layout that must mirror. The Arabic version must be a true mirror, not English layout with Arabic text pasted in.
- Language toggle is visible in the header on both versions, labelled **"العربية"** on the English site and **"English"** on the Arabic site. It preserves the current scroll anchor when switching.
- Arabic typography: use a proper Arabic webfont (**IBM Plex Sans Arabic**, **Cairo**, or **Noto Sans Arabic** via `next/font`-equivalent self-hosting or `@fontsource`). Do not render Arabic in a Latin font fallback. Increase `line-height` for Arabic (approx. 1.8) — Arabic script needs more vertical breathing room than Latin.
- Numbers, dates, technology names, and URLs stay in **Latin characters** in the Arabic version (this is the professional norm in the region). Do not convert `5,000,000` to Arabic-Indic numerals.
- `hreflang` alternate tags linking the two versions.

---

## 5. Page Structure (in this exact order)

### 5.1 Header (sticky, minimal)
Name on the start side; anchor nav (`Work`, `Skills`, `About`, `Contact`); language toggle; dark/light theme toggle. Collapses to a simple mobile menu under `md`.

### 5.2 Hero
- Name, professional title, one-line positioning statement.
- Location + "Open to remote roles" availability line.
- Two buttons: **primary → "Download CV"**, secondary → "Get in touch" (mailto).
- Small inline row of links: GitHub, Email, Phone.
- No stock photography, no illustration, no avatar placeholder. Typography-led.

### 5.3 Selected Work — **the centrepiece of the site**
This section must be visually the heaviest and most detailed part of the page. Render the four entries from Section 6.4 as **large cards in a single column** (not a cramped 3-up grid — these deserve space).

Each card contains:
- **Project/company logo icon** (see Section 7 for how to source it)
- Project name + role
- Date range
- Short description
- A metric badge where one exists (e.g. `5,000,000+ learners`, `70+ pharmacies`) — style these as the most eye-catching element on the card
- 4–6 highlight bullets
- Tech tag chips
- **Link buttons: website and LinkedIn** where available, opening in a new tab with `rel="noopener noreferrer"` and an accessible label (e.g. "Visit iStoria website — opens in new tab")

**Ordering:** iStoria first (flagship), then One Studio, then Darent, then CapTab. iStoria's card should be visually the largest / most detailed.

### 5.4 Skills
Grouped by category as plain, scannable text or chips. Six groups exactly as given in Section 6.5. Keep it compact — this section supports the work section, it does not compete with it.

### 5.5 About
Short professional summary paragraph + Education + Languages.

### 5.6 Contact / CV
- Email, phone, GitHub, location.
- A second, prominent **"Download CV (PDF)"** button.
- Note that the CV is available in English.

### 5.7 Footer
Name, current year, "Built with Astro" line. Keep it one line.

---

## 6. Content (verbatim — use exactly this, translate nothing else)

### 6.1 Identity

| Field | English | العربية |
|---|---|---|
| Name | Mohammed Ayman Musabeh | محمد أيمن مصبح |
| Title | Senior Full Stack Developer | مطوّر Full Stack أول |
| Subtitle | Backend Architecture · Laravel & PHP | هندسة الأنظمة الخلفية · Laravel و PHP |
| Location | Deir al-Balah, Palestine | دير البلح، فلسطين |
| Availability | Open to remote roles (GCC & international) | متاح للعمل عن بُعد (دول الخليج ودولياً) |

### 6.2 Contact
- Email: `mhmd.musabeh@gmail.com`
- Phone: `+970 597 669 248`
- GitHub: `https://github.com/phpMuhammed`

### 6.3 Hero positioning line

**EN:** "I design and build the backends behind products that reach millions — six years of Laravel and PHP architecture across ed-tech, marketplaces and B2B SaaS."

**AR:** «أبني الأنظمة الخلفية التي تقف خلف منتجات يستخدمها الملايين — ست سنوات في هندسة Laravel و PHP عبر منتجات التعليم الإلكتروني والأسواق الرقمية وبرمجيات الأعمال.»

### 6.4 Work entries

---

**1. iStoria — English-Learning Platform** *(FLAGSHIP — largest card)*
- Role EN: Backend Developer · Role AR: مطوّر Backend
- Dates: 2020 – 2024
- Metric badge: `5,000,000+ learners` / `+5,000,000 متعلّم`
- Website: `https://www.istoria.sa/`
- LinkedIn: `https://www.linkedin.com/company/istoria-app`
- Description EN: "Consumer ed-tech platform serving the Saudi and Arabic-speaking market. Four years of continuous backend ownership as the product grew into one of the largest English-learning apps in the region."
- Description AR: «منصّة تعليمية موجّهة للسوق السعودي والناطقين بالعربية. أربع سنوات من الملكية التقنية المتواصلة للـ Backend حتى أصبح المنتج من أكبر تطبيقات تعلّم الإنجليزية في المنطقة.»
- Highlights EN:
  - Architected and maintained the Laravel/PHP backend and RESTful API layer powering the mobile and web clients
  - Designed the relational data model in MySQL/PostgreSQL and evolved it safely across four years through disciplined migrations, indexing and query optimization
  - Kept response times stable as traffic scaled using Redis caching strategies, queue-driven background processing and targeted performance optimization
  - Implemented authentication, authorization and rate limiting to secure a high-volume public API
  - Delivered bilingual Arabic/English content handling and media-heavy lesson delivery with full RTL support
  - Balanced continuous feature delivery against production stability for millions of active users
- Highlights AR:
  - تصميم وصيانة الـ Backend بلغة Laravel/PHP وطبقة الـ RESTful API التي تُشغّل تطبيقات الهاتف والويب
  - تصميم نموذج البيانات العلائقي على MySQL/PostgreSQL وتطويره بأمان عبر أربع سنوات من خلال migrations منضبطة وفهرسة وتحسين للاستعلامات
  - الحفاظ على استقرار زمن الاستجابة مع نمو حجم الاستخدام عبر استراتيجيات التخزين المؤقت بـ Redis والمعالجة الخلفية عبر الطوابير وتحسين الأداء الموجّه
  - تنفيذ المصادقة والصلاحيات وتحديد معدّل الطلبات لحماية واجهة برمجية عامة عالية الحِمل
  - دعم المحتوى ثنائي اللغة (عربي/إنجليزي) وتسليم الدروس الغنيّة بالوسائط مع دعم كامل لاتجاه RTL
  - الموازنة بين التسليم المستمر للمزايا واستقرار بيئة الإنتاج لملايين المستخدمين النشطين
- Tech tags: `Laravel` `PHP` `MySQL` `PostgreSQL` `Redis` `REST API` `Queues` `Caching` `Performance Optimization` `PHPUnit`

---

**2. One Studio**
- Role EN: Full Stack Software Engineer (Vibe Coder Engineer) · Role AR: مهندس برمجيات Full Stack
- Dates: June 2024 – July 2026
- Metric badge: *(none)*
- Website: *(none)*
- LinkedIn: `https://www.linkedin.com/company/onestudio-co`
- Description EN: "Multi-project product engineering team. Delivered several client-facing products from requirements and system design through to release."
- Description AR: «فريق هندسي متعدّد المشاريع. تسليم عدّة منتجات موجّهة للعملاء بدءاً من تحليل المتطلبات وتصميم النظام وحتى الإطلاق.»
- Highlights EN:
  - Delivered multiple client-facing products, taking features from requirements and system design through implementation, review and release
  - Pioneered an AI-assisted development workflow (Cursor AI, Claude AI, GitHub Copilot) paired with disciplined engineering practice
  - Acted as a senior technical voice in code review, technical documentation and mentoring across shared Laravel codebases
  - Worked in Agile/Scrum using Jira, converting Figma design handoffs into production frontend and API work
- Highlights AR:
  - تسليم عدّة منتجات موجّهة للعملاء، ونقل المزايا من المتطلبات وتصميم النظام إلى التنفيذ والمراجعة والإطلاق
  - تأسيس منهجية تطوير مدعومة بالذكاء الاصطناعي (Cursor AI و Claude AI و GitHub Copilot) مقترنة بممارسات هندسية منضبطة
  - القيام بدور تقني قيادي في مراجعة الكود والتوثيق التقني وإرشاد الفريق عبر قواعد كود Laravel المشتركة
  - العمل ضمن منهجية Agile/Scrum باستخدام Jira وتحويل تصاميم Figma إلى واجهات وواجهات برمجية في الإنتاج
- Tech tags: `Laravel` `PHP` `Agile/Scrum` `Jira` `Figma` `Cursor AI` `GitHub Copilot`

---

**3. Darent — Property Booking Marketplace**
- Role EN: Backend Developer (as part of the One Studio team) · Role AR: مطوّر Backend (ضمن فريق One Studio)
- Dates: ~8 months
- Metric badge: `Saudi market` / `السوق السعودي`
- Website: `https://darent.com/en`
- LinkedIn: `https://www.linkedin.com/company/darent`
- Description EN: "Saudi marketplace platform for property listings, bookings and short-term stays — a domain with heavy availability, pricing and transactional complexity."
- Description AR: «منصّة سعودية لعرض العقارات والحجوزات والإقامات قصيرة الأمد — مجال يتّسم بتعقيد عالٍ في إدارة التوفّر والتسعير والمعاملات.»
- Highlights EN:
  - Built backend functionality covering property listings, bookings and short-term stays
  - Integrated HyperPay for regional online payments and Twilio Verify for OTP authentication
  - Integrated Firebase and MoEngage for notifications and user engagement
  - Delivered a fully bilingual Arabic/English experience with Spatie Translatable and rich media handling via Spatie Media Library, including RTL content
  - Implemented search with Laravel Scout, background processing with Laravel Queues and Scheduler, and observability with Laravel Telescope
- Highlights AR:
  - بناء وظائف الـ Backend الخاصة بعرض العقارات والحجوزات والإقامات قصيرة الأمد
  - دمج بوابة HyperPay للمدفوعات الإلكترونية الإقليمية و Twilio Verify للمصادقة عبر رمز التحقق
  - دمج Firebase و MoEngage للإشعارات وتفاعل المستخدمين
  - تقديم تجربة ثنائية اللغة بالكامل عبر Spatie Translatable وإدارة وسائط غنية عبر Spatie Media Library مع دعم محتوى RTL
  - تنفيذ البحث عبر Laravel Scout والمعالجة الخلفية عبر Laravel Queues و Scheduler والمراقبة عبر Laravel Telescope
- Tech tags: `Laravel` `HyperPay` `Twilio Verify` `Firebase` `MoEngage` `Laravel Scout` `Spatie` `MySQL`

---

**4. CapTab — Pharmacy Management Platform**
- Role EN: Backend Developer · Role AR: مطوّر Backend
- Dates: 2023 – Present
- Sub-label EN: "B2B SaaS, built alongside full-time engagements" · AR: «منتج SaaS للأعمال، طُوّر بالتوازي مع العمل بدوام كامل»
- Metric badge: `70+ pharmacies` / `+70 صيدلية`
- Website: `https://new.captabapp.com`
- LinkedIn: *(none)*
- Description EN: "Offline-first pharmacy management platform used by independent pharmacies across Palestine and the region."
- Description AR: «منصّة لإدارة الصيدليات تعمل بمبدأ Offline-First، تستخدمها صيدليات مستقلّة في فلسطين والمنطقة.»
- Highlights EN:
  - Designed and built the platform end to end, from data modeling and backend architecture through to API and admin interfaces
  - Engineered the offline-first architecture and data synchronization model that lets pharmacies keep trading through unstable connectivity and power outages, then reconcile cleanly once back online
  - Applied Domain-Driven Design, SOLID principles and design patterns to keep a business-critical domain maintainable as the customer base grew
  - Built RESTful APIs with Sanctum authentication and role-based authorization via Filament Shield, with back-office panels in FilamentPHP
  - Protected stock- and revenue-critical logic with TDD using Pest PHP and PHPUnit
- Highlights AR:
  - تصميم وبناء المنصّة بالكامل، من نمذجة البيانات وهندسة الـ Backend وحتى الواجهات البرمجية ولوحات الإدارة
  - هندسة معمارية Offline-First ونموذج مزامنة للبيانات يتيح للصيدليات مواصلة العمل رغم انقطاع الإنترنت والكهرباء، ثم مطابقة البيانات بسلاسة عند عودة الاتصال
  - تطبيق Domain-Driven Design ومبادئ SOLID وأنماط التصميم للحفاظ على قابلية صيانة مجال عمل حسّاس مع نمو قاعدة العملاء
  - بناء واجهات RESTful API مع مصادقة Sanctum وصلاحيات قائمة على الأدوار عبر Filament Shield ولوحات إدارة بـ FilamentPHP
  - حماية المنطق الحسّاس للمخزون والإيرادات عبر TDD باستخدام Pest PHP و PHPUnit
- Tech tags: `Laravel` `Offline-First` `DDD` `FilamentPHP` `Sanctum` `Pest PHP` `Redis` `PostgreSQL`

---

### 6.5 Skills (six groups — do not add to these)

1. **Architecture & Design** — System Design, Scalable Architecture, Backend Architecture, Domain-Driven Design (DDD), Event-Driven Architecture, API Design, MVC, SOLID Principles, Design Patterns, Authentication & Authorization, Rate Limiting
2. **Backend** — PHP, Laravel, RESTful APIs, OOP, Eloquent ORM, Laravel Sanctum, Queues, Scheduler, Scout, Telescope, FilamentPHP, Filament Shield, Spatie Media Library, Spatie Translatable
3. **Databases & Performance** — MySQL, PostgreSQL, Database Design, Data Modeling, Query Optimization, Indexing, Migrations & Seeders, Redis, Caching Strategies, Queue Management, Performance Optimization, Scalability
4. **Testing & Quality** — Test-Driven Development (TDD), Pest PHP, PHPUnit, Unit / Feature / Integration Testing, Code Review
5. **Frontend, DevOps & Tools** — JavaScript, HTML5, CSS3, Bootstrap, Vite, Git, GitHub, Nginx, Composer, Postman, Jira, VS Code, Figma design handoff, Cursor AI, Claude AI, GitHub Copilot
6. **Integrations & Ways of Working** — HyperPay, Twilio Verify, Firebase, MoEngage, Payment Gateway Integration, Agile/Scrum, Mentoring, Technical Documentation, Problem Solving, Stakeholder Communication

Arabic group labels: «الهندسة والتصميم» · «الأنظمة الخلفية» · «قواعد البيانات والأداء» · «الاختبار والجودة» · «الواجهات والأدوات» · «التكاملات وأسلوب العمل»
*(Keep the individual technology names in Latin script in both versions.)*

### 6.6 About / Summary

**EN:** "Software Engineer with 6+ years of experience designing, building and scaling production web platforms, specializing in Laravel and PHP backend architecture with full stack delivery ownership. Strong in system design, RESTful API design, Domain-Driven Design and Test-Driven Development, with hands-on depth in MySQL, PostgreSQL, Redis caching, queue management and query optimization. Experienced with regional payment and engagement providers and bilingual Arabic/English product delivery across the GCC."

**AR:** «مهندس برمجيات بخبرة تتجاوز ست سنوات في تصميم وبناء وتوسيع منصّات ويب في بيئات الإنتاج، متخصّص في هندسة الأنظمة الخلفية بـ Laravel و PHP مع ملكية كاملة لدورة التسليم. خبرة قوية في تصميم الأنظمة وتصميم واجهات RESTful API و Domain-Driven Design و Test-Driven Development، وعمق عملي في MySQL و PostgreSQL والتخزين المؤقت بـ Redis وإدارة الطوابير وتحسين الاستعلامات. خبرة في التكامل مع مزوّدي الدفع والتفاعل الإقليميين وتسليم منتجات ثنائية اللغة في دول الخليج.»

### 6.7 Education
- **EN:** Bachelor of Science in Software Engineering — Islamic University of Gaza, 2019
- **AR:** بكالوريوس هندسة برمجيات — الجامعة الإسلامية بغزة، 2019

### 6.8 Languages
- **EN:** Arabic — Native · English — Professional working proficiency
- **AR:** العربية — اللغة الأم · الإنجليزية — إتقان مهني

---

## 7. Project Icons — implementation instruction

Do **not** download, copy, or bundle any company logo files, and do not generate imitations of them.

Implement icons in this order of preference:

1. Look for a local file at `public/logos/{slug}.svg` or `.png` (slugs: `istoria`, `onestudio`, `darent`, `captab`). The site owner will drop real logo assets there.
2. If absent, fall back to a **generated lettermark**: the project's first letter in a rounded square, using a per-project accent colour defined in the content file. Render this as inline SVG or styled HTML — no image request, no layout shift.

Build the fallback so it looks deliberate, not broken — a clean monogram is perfectly acceptable on a developer portfolio. Ship the site fully working with lettermarks only; real logos are a drop-in upgrade.

Also add small inline SVG icons (from **Lucide**, inlined at build time — do not ship the whole icon library) for: external link, LinkedIn, GitHub, email, phone, download, sun/moon, globe.

---

## 8. CV Download

- The PDF lives at `public/cv/Mohammed_Ayman_Musabeh_Senior_Full_Stack_Developer_CV.pdf`.
- Link it with the `download` attribute so it saves rather than opening in the browser tab.
- Two entry points: the hero (primary button) and the contact section.
- Label EN: **"Download CV"** · AR: **«تحميل السيرة الذاتية»**
- On the Arabic page, keep the same English PDF and add a small note: «السيرة الذاتية متاحة بالإنجليزية».
- If the file is missing at build time, **fail the build with a clear error** rather than shipping a dead link.

---

## 9. Design Direction

- **Typography-led, not decoration-led.** This is a backend engineer's portfolio: it should read as precise and confident, not as a design showcase.
- Latin font: **Inter**, **Geist**, or **IBM Plex Sans**, self-hosted with `font-display: swap`. Pair with a monospace (**JetBrains Mono** or **IBM Plex Mono**) used *only* for tech tags, metric badges and dates — this small touch signals "engineer" instantly.
- Colour: one restrained neutral base (near-black `#111` / off-white) plus **one** accent colour. Deep navy or a muted teal suits this profile. No gradients across large surfaces, no glassmorphism.
- Generous whitespace and a max content width of ~880–960px. Long-form readability matters more than filling the viewport.
- **Dark mode** via `prefers-color-scheme` with a manual toggle persisted in `localStorage`.
- Motion: subtle fade-and-rise on scroll for work cards only, via CSS + `IntersectionObserver`. Must respect `prefers-reduced-motion: reduce` and disable entirely when set.
- The metric badges (`5,000,000+ learners`, `70+ pharmacies`) are the visual hooks of the page — give them real weight.
- Fully responsive from 320px up. Test the Arabic version at every breakpoint, not just the English one.

---

## 10. Accessibility & SEO

- Semantic landmarks (`header`, `main`, `section`, `footer`), one `h1`, logical heading order.
- All interactive elements keyboard-reachable with a visible focus ring. "Skip to content" link.
- Colour contrast ≥ 4.5:1 for body text in **both** themes.
- Per-language `<title>` and `<meta name="description">`, Open Graph + Twitter card tags, `hreflang` alternates, `sitemap.xml`, `robots.txt`.
- **JSON-LD `Person` schema** on the English page with name, jobTitle, email, address, `sameAs` (GitHub), and `alumniOf`.
- Generate a static OG image (1200×630) with the name and title rendered as text.

---

## 11. Deliverables

1. Complete Astro project, ready to `npm install && npm run dev`.
2. `src/content/en.ts` and `src/content/ar.ts` with a shared TypeScript interface, so all copy is editable in one place without touching components.
3. `README.md` covering: how to run, how to edit content, how to swap the CV PDF, how to drop in real logo files, and how to deploy.
4. `public/logos/README.txt` listing the exact filenames expected.

---

## 12. Acceptance Criteria — verify before you report done

- [ ] `npm run build` succeeds with zero errors and zero TypeScript errors
- [ ] `/` renders in English LTR; `/ar` renders in Arabic RTL as a genuine mirror
- [ ] Language toggle works in both directions and preserves the scroll anchor
- [ ] All 6 external links open correctly in a new tab: iStoria site, iStoria LinkedIn, One Studio LinkedIn, Darent site, Darent LinkedIn, CapTab site
- [ ] "Download CV" downloads the PDF from both the hero and the contact section
- [ ] Work section order is iStoria → One Studio → Darent → CapTab, with iStoria visually dominant
- [ ] Lettermark fallback renders cleanly for all four projects with no logo files present
- [ ] Lighthouse mobile: Performance ≥ 95, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95
- [ ] Keyboard-only navigation reaches every link and button with a visible focus indicator
- [ ] No content appears anywhere on the site that is not present in Section 6 of this document
