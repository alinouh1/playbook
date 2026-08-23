# Growth Station — Launch Playbook 2026

مشروع React (Vite + Tailwind v4 + React Router) لعرض خطة إطلاق Growth Station،
بتصميم "محطة القطار": شريط نحاسي (rail) في الشريط الجانبي يمثل خط سير المحطات
الأربعة، وكل قسم هو محطة على الخط.

## التشغيل محليًا

```bash
npm install
npm run dev
```

يفتح المشروع على http://localhost:5173

## البناء للإنتاج

```bash
npm run build
npm run preview
```

## البنية

- `src/components/Sidebar.jsx` — القائمة الجانبية (خط المحطات)
- `src/components/TopBar.jsx`, `SectionHeader.jsx`, `CopyButton.jsx`
- `src/pages/` — الصفحات الخمس: Landing, Positioning, Goals, Audience, Plan
- `src/index.css` — نظام الألوان والخطوط (Tailwind v4 `@theme`)

## نظام التصميم

- ألوان: `ink` (أخضر غامق) / `paper` (خلفية دافئة) / `signal` (برتقالي التنبيه) / `brass` (خط السكة)
- خطوط: Cairo (عناوين) · Inter (نصوص) · IBM Plex Mono (أكواد وتوقيتات)
# playbook
