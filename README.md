# Syrian Cuisine – MediaMagnet Production Website

En komplett, modern och responsiv webbplats för **Syrian Cuisine / Syrisk Restaurang** byggd enligt **MediaMagnets Master Website Architecture**.

## 🚀 Teknisk Stack
- **Frontend:** React 18, TypeScript, Vite
- **Routing:** `react-router-dom` (Multi-route med SPA-stöd)
- **Styling:** Handbyggd Vanilla CSS med CSS Variables, flexbox/grid och keyframe-animationer (`frontend/src/styles/global.css`)
- **Ikoner:** `lucide-react`
- **SEO & Metadata:** Open Graph, Twitter Cards, Schema.org JSON-LD (`Restaurant`), `robots.txt`, `sitemap.xml`, `llms.txt`

## 📁 Projektstruktur
```text
syrian-cuisine-website/
├── README.md
├── .gitignore
├── vercel.json
└── frontend/
    ├── package.json
    ├── vite.config.ts
    ├── tsconfig.json
    ├── index.html
    ├── public/
    │   ├── favicon.svg
    │   ├── robots.txt
    │   ├── sitemap.xml
    │   ├── llms.txt
    │   ├── 404.html
    │   └── images/
    └── src/
        ├── main.tsx
        ├── App.tsx
        ├── components/
        │   ├── Layout.tsx
        │   ├── Header.tsx
        │   ├── Footer.tsx
        │   ├── PageHero.tsx
        │   ├── PageMeta.tsx
        │   ├── ScrollToTop.tsx
        │   ├── PageTransition.tsx
        │   ├── ReviewsRail.tsx
        │   └── ReservationForm.tsx
        ├── content/
        │   ├── siteContent.ts
        │   ├── menu.ts
        │   ├── reviews.ts
        │   └── gallery.ts
        ├── pages/
        │   ├── HomePage.tsx
        │   ├── MenuPage.tsx
        │   ├── AboutPage.tsx
        │   ├── GalleryPage.tsx
        │   ├── ContactPage.tsx
        │   └── NotFoundPage.tsx
        └── styles/
            └── global.css
```

## 🛠️ Kom igång lokalt

```bash
cd frontend
npm install
npm run dev
```

Webbplatsen startas normalt på `http://localhost:5173`.

## 📦 Bygg för produktion

```bash
cd frontend
npm run build
```

## 🌐 Driftsättning på Vercel
Projektet är förkonfigurerat med `vercel.json` i roten så att alla undersidor och SPA-routing fungerar direkt.
MediaMagnet-kreditering är integrerad i footern med länk till [MediaMagnet](https://mediamagnet-three.vercel.app/).
