# Wowstack — Frontend

Vite + React 19 (JSX) + CSS Modules. Feature-first, alias-driven, SEO/AEO-ready.

## Folder map
```
frontend/
├── index.html                # base head + Organization JSON-LD
├── public/                   # static, served as-is
│   ├── robots.txt            # auto-generated on build
│   ├── sitemap.xml           # auto-generated on build
│   ├── llms.txt              # AEO: summary for AI answer engines
│   ├── manifest.webmanifest  # PWA
│   ├── favicon.svg · og/     # icons & social images
│   └── .well-known/          # security.txt
├── scripts/                  # build-time SEO generators
└── src/
    ├── main.jsx              # entry: providers + router
    ├── app/                  # App shell + context providers
    ├── router/               # route table (lazy) + <AppRoutes>
    ├── pages/                # one folder per route; owns its sections
    │   └── Home/sections/    # page-local sections (Hero, Faq, …)
    ├── features/             # cross-page feature modules (contact, blog, …)
    ├── components/
    │   ├── ui/               # atoms: Button, Container, Section
    │   ├── layout/           # Navbar, Footer
    │   └── common/           # ScrollToTop, etc.
    ├── seo/                  # ⭐ SEO + AEO layer (see docs/SEO.md)
    ├── services/api/         # data access (wraps Supabase)
    ├── lib/                  # supabase client + pure utils
    ├── hooks/                # reusable hooks
    ├── store/                # global state (add when needed)
    ├── styles/               # tokens + reset + global (CSS)
    ├── data/                 # static content (services list, …)
    ├── config/               # env access
    ├── constants/            # non-secret constants
    └── assets/               # images, icons, fonts, videos
```

## Conventions
- **CSS Modules only** for components: `Foo.jsx` + `Foo.module.css`, `import styles`.
- **Design tokens** in `src/styles/variables.css`; never hard-code colors/spacing.
- **Aliases** (`@components`, `@seo`, …) — see `vite.config.js` / `jsconfig.json`.
- **Every page renders `<Seo>`** with `pageMeta` + relevant JSON-LD.
- **No data fetching in UI components** — go through `services/api/`.

## Scripts
```bash
npm run dev            # start dev server
npm run build          # generate SEO files, then build
npm run preview        # preview the production build
npm run lint           # oxlint
npm run seo:generate   # regenerate robots.txt + sitemap.xml
```
