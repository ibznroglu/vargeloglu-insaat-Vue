# Vargeloğlu İnşaat — Kurumsal Web Sitesi

![Vue](https://img.shields.io/badge/Vue-3.x-42b883?logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.x-646cff?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

Vargeloğlu İnşaat firmasının modern, hızlı ve mobil uyumlu kurumsal web sitesi. Vue 3, TypeScript ve Vite ile geliştirilmiştir.

## 🚀 Özellikler

- **Vue 3 Composition API** ile bileşen tabanlı mimari
- **TypeScript** ile tip güvenli geliştirme
- **PhotoSwipe 5** ile tam ekran galeri deneyimi
- Scroll animasyonları (Intersection Observer API)
- Mobil öncelikli (mobile-first) responsive tasarım
- WhatsApp hızlı iletişim butonu
- Google Fonts entegrasyonu (Inter + Playfair Display)
- Karanlık tema, gold aksan renk paleti

## 🛠️ Teknolojiler

| Teknoloji | Versiyon |
|-----------|----------|
| Vue | ^3.5.30 |
| TypeScript | ~5.9.3 |
| Vite | ^8.0.1 |
| PhotoSwipe | ^5.4.4 |
| @vitejs/plugin-vue | ^6.0.5 |

## 📦 Kurulum

Node.js **>= 20.19.0** gereklidir.

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build al
npm run build

# Build önizleme
npm run preview
```

## 📁 Proje Yapısı

```
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── gallery/        # Galeri görselleri (.jpg, .png, .webp)
│   ├── components/
│   │   ├── Navbar.vue
│   │   ├── Footer.vue
│   │   ├── Hero.vue
│   │   ├── About.vue
│   │   ├── Services.vue
│   │   ├── Gallery.vue
│   │   ├── Contact.vue
│   │   └── WhatsAppButton.vue
│   ├── data/
│   │   └── gallery.ts      # Galeri görseli otomatik import
│   ├── layouts/
│   │   └── MainLayout.vue
│   ├── App.vue
│   ├── main.ts
│   └── style.css
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## 🖼️ Galeri Görseli Ekleme

`src/assets/gallery/` klasörüne `.jpg`, `.jpeg`, `.png` veya `.webp` formatında görsel eklemeniz yeterlidir. Görseller dosya adına göre alfabetik/numerik sırayla otomatik olarak yüklenir.

## 🌐 Deployment (Vercel)

Bu proje Vercel'e otomatik olarak deploy edilmek üzere yapılandırılmıştır.

1. Repoyu Vercel'e bağlayın
2. Framework olarak **Vite** seçin (otomatik algılanır)
3. Build komutu: `npm run build`
4. Output dizini: `dist`
5. **Deploy** butonuna tıklayın

Her `main` branch push'unda otomatik deploy tetiklenir.

## 📄 Lisans

Bu proje [MIT Lisansı](./LICENSE) ile lisanslanmıştır.

---

© 2026 Vargeloğlu İnşaat. Tüm hakları saklıdır.