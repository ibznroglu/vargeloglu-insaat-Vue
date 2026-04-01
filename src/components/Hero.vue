<template>
  <section id="top" class="hero">
    <div class="container hero-inner">
      <div class="hero-content">
        <span class="hero-label">1985’ten bugüne güvenilir uygulama</span>

        <h1>Hafriyat ve altyapı işlerinde güvenilir çözüm ortağınız</h1>

        <p>
          Vargeloğlu İnşaat olarak altyapı, hafriyat ve çevre düzenleme işlerinde
          planlı, temiz ve zamanında teslim odaklı çalışıyoruz.
        </p>

        <div class="hero-actions">
          <a href="#projeler" class="btn-primary">Projeleri Gör</a>
          <a href="#iletisim" class="btn-secondary">İletişim</a>
        </div>
      </div>

      <div class="hero-image">
        <img :src="slides[currentIndex].src" :alt="slides[currentIndex].alt" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

import slide01 from '../assets/slider/slide-01.jpg'
import slide02 from '../assets/slider/slide-02.jpg'
import slide03 from '../assets/slider/slide-03.jpg'
import slide04 from '../assets/slider/slide-04.jpg'
import slide05 from '../assets/slider/slide-05.jpg'

const slides = [
  { src: slide04, alt: 'Hafriyat çalışması' },
  { src: slide01, alt: 'Peyzaj ve çevre düzenleme çalışması' },
  { src: slide02, alt: 'Yapı çevresi uygulama alanı' },
  { src: slide03, alt: 'Modern proje çevre düzenleme görünümü' },
  { src: slide05, alt: 'Gölet çevresi uygulama alanı' },
]

const currentIndex = ref(0)
let intervalId: number | undefined

onMounted(() => {
  intervalId = window.setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % slides.length
  }, 3500)
})

onBeforeUnmount(() => {
  if (intervalId) window.clearInterval(intervalId)
})
</script>

<style scoped>
.hero {
  padding: 20px 0 28px;
  background: #f7f4ee;
}

.hero-inner {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.02fr);
  gap: 32px;
  align-items: center;
  padding: 22px;
  border-radius: 24px;
  background:
    radial-gradient(circle at top right, rgba(200, 155, 93, 0.1), transparent 28%),
    rgba(255, 255, 255, 0.68);
  border: 1px solid rgba(15, 23, 32, 0.08);
  box-shadow: 0 16px 36px rgba(15, 23, 32, 0.05);
}

.hero-label {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  background: rgba(200, 155, 93, 0.14);
  color: #a67c45;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.04em;
}

.hero-content h1 {
  margin-top: 12px;
  max-width: 11.5ch;
  font-size: clamp(2.1rem, 3.2vw, 3.2rem);
  line-height: 1.02;
  letter-spacing: -0.05em;
  color: #0f1720;
}

.hero-content p {
  margin-top: 14px;
  max-width: 52ch;
  color: #5b6570;
  font-size: 0.98rem;
  line-height: 1.72;
}

.hero-actions {
  display: flex;
  gap: 12px;
  margin-top: 22px;
}

.btn-primary,
.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 18px;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 700;
}

.btn-primary {
  background: #c89b5d;
  color: #0f1720;
}

.btn-secondary {
  background: #fff;
  border: 1px solid #ddd;
  color: #0f1720;
}

.hero-image {
  position: relative;
  overflow: hidden;
  border-radius: 20px;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 20px;
  transition: opacity 0.35s ease;
}

/* çok hafif premium dokunuş */
.hero-image::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 20px;
  box-shadow: inset 0 0 0 1px rgba(15, 23, 32, 0.04);
}

@media (max-width: 900px) {
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 22px;
    padding: 18px;
  }

  .hero-content h1 {
    max-width: none;
    font-size: clamp(1.85rem, 7vw, 2.7rem);
  }

  .hero-image {
    min-height: 280px;
    padding: 12px;
  }

  .hero-image img {
    max-height: 250px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding-top: 12px;
  }

  .hero-actions {
    flex-direction: column;
  }
}
</style>