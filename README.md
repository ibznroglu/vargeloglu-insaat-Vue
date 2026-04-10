# Vargeloğlu İnşaat — Corporate Website

![Vue](https://img.shields.io/badge/Vue-3.x-42b883?logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.x-646cff?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

Modern, fast and mobile-friendly corporate website for Vargeloğlu İnşaat. Built with Vue 3, TypeScript and Vite.

## 🚀 Features

- **Vue 3 Composition API** component-based architecture
- **TypeScript** for type-safe development
- **TR/EN multilingual support** — persistent language preference via localStorage
- **PhotoSwipe 5** fullscreen gallery with category filtering
- **Mobile slider** with swipe support for gallery
- **Skeleton loader** for gallery images
- **Scroll progress bar**
- **404 page**
- **Google Analytics** integration
- **SEO** meta tags, Open Graph & Twitter Card
- Scroll animations (Intersection Observer API)
- Mobile-first responsive design
- WhatsApp quick contact button
- Google Fonts integration (Inter + Playfair Display)
- Dark theme with gold accent color palette

## 🛠️ Tech Stack

| Technology | Version |
|-----------|----------|
| Vue | ^3.5.30 |
| TypeScript | ~5.9.3 |
| Vite | ^8.0.1 |
| PhotoSwipe | ^5.4.4 |
| @vitejs/plugin-vue | ^6.0.5 |

## 📦 Installation

Node.js **>= 20.19.0** is required.

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure
```
├── public/
│   ├── favicon.png
│   ├── og-image.jpg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   │   ├── gallery/
│   │   │   ├── altyapi/         # Infrastructure & drainage images
│   │   │   ├── beton/           # Concrete & site works images
│   │   │   ├── tas-duvar/       # Stone masonry images
│   │   │   └── cevre-duzenleme/ # Landscaping images
│   │   ├── slider/              # Hero slider images
│   │   ├── project-companies/   # Project images
│   │   └── reference-companies/ # Reference logos
│   ├── components/
│   │   ├── Navbar.vue
│   │   ├── Footer.vue
│   │   ├── Hero.vue
│   │   ├── CompanyIntro.vue
│   │   ├── Services.vue
│   │   ├── Projects.vue
│   │   ├── Gallery.vue
│   │   ├── References.vue
│   │   ├── Contact.vue
│   │   ├── WpButton.vue
│   │   ├── ScrollToTop.vue
│   │   ├── ScrollProgress.vue
│   │   └── NotFound.vue
│   ├── composables/
│   │   └── useLocale.ts         # Language management composable
│   ├── i18n/
│   │   ├── tr.ts                # Turkish translations
│   │   └── en.ts                # English translations
│   ├── data/
│   │   └── gallery.ts           # Gallery image auto-import by category
│   ├── layouts/
│   │   └── MainLayout.vue
│   ├── App.vue
│   ├── main.ts
│   └── style.css
├── index.html
├── vite.config.ts
├── vercel.json
├── tsconfig.json
└── package.json
```
## 🌍 Multilingual Support

The site supports TR/EN languages. Language preference is saved in `localStorage` and persists on page reload. To add new translations, edit `src/i18n/tr.ts` and `src/i18n/en.ts`.

## 🖼️ Adding Gallery Images

Gallery images are organized by category. Add images to the corresponding folder:

| Folder | Category |
|--------|----------|
| `src/assets/gallery/altyapi/` | Infrastructure & Drainage |
| `src/assets/gallery/beton/` | Concrete & Site Works |
| `src/assets/gallery/tas-duvar/` | Stone Masonry |
| `src/assets/gallery/cevre-duzenleme/` | Landscaping |

Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`. Images are automatically loaded in numeric order by filename.

## 🌐 Deployment (Vercel)

This project is configured for automatic deployment to Vercel.

1. Connect your repo to Vercel
2. Select **Vite** as framework (auto-detected)
3. Build command: `npm run build`
4. Output directory: `dist`
5. Click **Deploy**

Every push to `main` branch triggers an automatic deployment.

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

© 2026 Vargeloğlu İnşaat. All rights reserved.