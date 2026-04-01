<template>
  <section id="top" class="hero">
    <div class="container hero-inner">
      <div class="hero-content">
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
  background: #f7f4ee;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.hero-content h1 {
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.1;
  letter-spacing: -0.04em;
  color: #0f1720;
}

.hero-content p {
  margin-top: 16px;
  color: #5b6570;
  line-height: 1.7;
  max-width: 520px;
}

.hero-actions {
  margin-top: 24px;
  display: flex;
  gap: 12px;
}

.btn-primary,
.btn-secondary {
  padding: 12px 20px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.9rem;
}

.btn-primary {
  background: #c89b5d;
  color: #0f1720;
}

.btn-secondary {
  border: 1px solid #ddd;
  color: #0f1720;
}

.hero-image img {
  width: 100%;
  border-radius: 18px;
  object-fit: cover;
  transition: opacity 0.35s ease;
}

/* mobile */
@media (max-width: 768px) {
  .hero {
    padding-top: 100px;
  }

  .hero-inner {
    grid-template-columns: 1fr;
  }

  .hero-actions {
    flex-direction: column;
  }
}
</style>