<template>
  <section id="top" class="hero-slider">
    <div
      class="slider-shell"
      @mouseenter="pauseAutoplay"
      @mouseleave="resumeAutoplay"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
    >
      <div class="slides-track" :style="trackStyle">
        <article
          v-for="(slide, index) in slides"
          :key="slide.id"
          class="slide"
          :aria-hidden="currentIndex !== index"
        >
          <img
            class="slide-image"
            :src="slide.image"
            :alt="slide.alt"
            loading="eager"
            decoding="async"
          />

          <div class="slide-overlay"></div>

          <div class="slide-content container">
            <div class="slide-panel">
              <span class="slide-kicker">{{ slide.kicker }}</span>
              <h1>{{ slide.title }}</h1>
              <p>{{ slide.description }}</p>

              <div class="slide-actions">
                <a class="btn btn-primary" href="#iletisim">İletişime Geçin</a>
                <a class="btn btn-secondary" href="#projeler">Projeleri İnceleyin</a>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div class="slider-controls container">
        <div class="controls-left">
          <button
            type="button"
            class="nav-button"
            aria-label="Önceki slayt"
            @click="goToPrevious"
          >
            ‹
          </button>

          <button
            type="button"
            class="nav-button"
            aria-label="Sonraki slayt"
            @click="goToNext"
          >
            ›
          </button>
        </div>

        <div class="controls-right" role="tablist" aria-label="Slider göstergeleri">
          <button
            v-for="(slide, index) in slides"
            :key="`${slide.id}-dot`"
            type="button"
            class="dot"
            :class="{ active: currentIndex === index }"
            :aria-label="`${index + 1}. slayta git`"
            :aria-selected="currentIndex === index"
            @click="goToSlide(index)"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

import slide01 from '../assets/slider/slide-01.jpg'
import slide02 from '../assets/slider/slide-02.jpg'
import slide03 from '../assets/slider/slide-03.jpg'
import slide04 from '../assets/slider/slide-04.jpg'
import slide05 from '../assets/slider/slide-05.jpg'

type SlideItem = {
  id: number
  image: string
  alt: string
  kicker: string
  title: string
  description: string
}

const slides: SlideItem[] = [
  {
    id: 1,
    image: slide01,
    alt: 'Doğal peyzaj ve gölet çevresinde tamamlanmış çevre düzenleme çalışması',
    kicker: 'Kurumsal Proje Uygulamaları',
    title: 'Peyzaj, altyapı ve çevre düzenlemede güçlü saha deneyimi',
    description:
      'Vargeloğlu İnşaat; estetik, işlev ve dayanıklılığı aynı projede buluşturan uygulamalar geliştirir.',
  },
  {
    id: 2,
    image: slide02,
    alt: 'Yapı çevresi yürüme yolu ve çevre düzenleme uygulaması',
    kicker: 'Nitelikli Uygulama',
    title: 'Yapı çevresinde detay odaklı ve kontrollü uygulama yaklaşımı',
    description:
      'Dış mekân, ulaşım aksı ve peyzaj alanlarında kaliteli malzeme ve temiz işçilik anlayışıyla ilerliyoruz.',
  },
  {
    id: 3,
    image: slide03,
    alt: 'Modern konut veya site projesi çevresinde altyapı ve çevre düzenleme görünümü',
    kicker: 'Büyük Ölçekli Projeler',
    title: 'Konut ve yaşam alanlarında planlı, güvenilir ve profesyonel süreç yönetimi',
    description:
      'Proje koordinasyonu, uygulama disiplini ve zamanında teslim odağıyla kurumsal çözüm sunuyoruz.',
  },
  {
    id: 4,
    image: slide04,
    alt: 'Sahada çalışan ekskavatör ile hafriyat uygulaması',
    kicker: 'Hafriyat ve Altyapı',
    title: 'Sahada güçlü ekipman, doğru planlama ve yüksek operasyon kabiliyeti',
    description:
      'Kazı, dolgu, tesviye ve altyapı hazırlık süreçlerinde kontrollü ve güvenli saha yönetimi sağlıyoruz.',
  },
  {
    id: 5,
    image: slide05,
    alt: 'Gölet çevresinde tamamlanmış altyapı ve çevre düzenleme uygulaması',
    kicker: 'Anahtar Teslim Yaklaşım',
    title: 'Estetik görünüm ile mühendislik disiplinini aynı projede birleştiriyoruz',
    description:
      'İşveren beklentisini merkeze alan, düzenli raporlama ve sürdürülebilir kalite anlayışıyla çalışıyoruz.',
  },
]

const currentIndex = ref(0)
const autoplayInterval = 5500

let timerId: number | null = null
let touchStartX = 0
let touchEndX = 0

const trackStyle = computed(() => ({
  transform: `translateX(-${currentIndex.value * 100}%)`,
}))

function goToSlide(index: number) {
  currentIndex.value = index
  restartAutoplay()
}

function goToNext() {
  currentIndex.value = (currentIndex.value + 1) % slides.length
  restartAutoplay()
}

function goToPrevious() {
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length
  restartAutoplay()
}

function startAutoplay() {
  stopAutoplay()

  timerId = window.setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % slides.length
  }, autoplayInterval)
}

function stopAutoplay() {
  if (timerId !== null) {
    window.clearInterval(timerId)
    timerId = null
  }
}

function restartAutoplay() {
  startAutoplay()
}

function pauseAutoplay() {
  stopAutoplay()
}

function resumeAutoplay() {
  startAutoplay()
}

function onTouchStart(event: TouchEvent) {
  touchStartX = event.changedTouches[0]?.clientX ?? 0
}

function onTouchEnd(event: TouchEvent) {
  touchEndX = event.changedTouches[0]?.clientX ?? 0

  const deltaX = touchStartX - touchEndX
  const swipeThreshold = 40

  if (deltaX > swipeThreshold) {
    goToNext()
    return
  }

  if (deltaX < -swipeThreshold) {
    goToPrevious()
  }
}

onMounted(() => {
  startAutoplay()
})

onBeforeUnmount(() => {
  stopAutoplay()
})
</script>

<style scoped>
.hero-slider {
  position: relative;
  padding: 20px 20px 0;
  background:
    radial-gradient(circle at top left, rgba(200, 155, 93, 0.12), transparent 24%),
    linear-gradient(180deg, #f7f4ee 0%, #f5f1ea 100%);
}

.slider-shell {
  position: relative;
  overflow: hidden;
  border-radius: 32px;
  min-height: min(78vh, 760px);
  background: #0f1720;
  box-shadow:
    0 24px 60px rgba(15, 23, 32, 0.12),
    0 12px 30px rgba(15, 23, 32, 0.08);
}

.slides-track {
  display: flex;
  height: 100%;
  transition: transform 0.55s ease;
  will-change: transform;
}

.slide {
  position: relative;
  width: 100%;
  min-width: 100%;
  min-height: min(78vh, 760px);
}

.slide-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(15, 23, 32, 0.82) 0%, rgba(15, 23, 32, 0.48) 38%, rgba(15, 23, 32, 0.22) 68%, rgba(15, 23, 32, 0.18) 100%),
    linear-gradient(180deg, rgba(15, 23, 32, 0.08) 0%, rgba(15, 23, 32, 0.22) 100%);
}

.slide-content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  height: 100%;
  padding-top: 64px;
  padding-bottom: 110px;
}

.slide-panel {
  max-width: 620px;
  padding: 32px;
  border-radius: 28px;
  background: rgba(15, 23, 32, 0.34);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
}

.slide-kicker {
  display: inline-flex;
  align-items: center;
  min-height: 38px;
  padding: 0 14px;
  border-radius: 999px;
  background: rgba(200, 155, 93, 0.16);
  color: #f3ddc0;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.slide-panel h1 {
  margin-top: 18px;
  color: #ffffff;
  font-size: clamp(2rem, 4vw, 4rem);
  line-height: 1.02;
  letter-spacing: -0.05em;
}

.slide-panel p {
  margin-top: 18px;
  max-width: 58ch;
  color: rgba(255, 255, 255, 0.84);
  font-size: 1rem;
  line-height: 1.8;
}

.slide-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 22px;
  border-radius: 999px;
  font-size: 0.96rem;
  font-weight: 800;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: var(--color-primary);
  color: #0f1720;
}

.btn-primary:hover {
  background: #d3a66b;
}

.btn-secondary {
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.12);
}

.slider-controls {
  position: absolute;
  right: 0;
  bottom: 26px;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.controls-left {
  display: flex;
  gap: 10px;
}

.nav-button {
  display: inline-grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
  font-size: 1.7rem;
  line-height: 1;
  backdrop-filter: blur(10px);
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;
}

.nav-button:hover {
  transform: translateY(-1px);
  background: rgba(255, 255, 255, 0.18);
}

.controls-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.dot {
  width: 12px;
  height: 12px;
  padding: 0;
  border: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.34);
  transition:
    width 0.2s ease,
    background-color 0.2s ease,
    transform 0.2s ease;
}

.dot.active {
  width: 34px;
  background: var(--color-primary);
}

@media (max-width: 1023px) {
  .hero-slider {
    padding: 96px 16px 0;
  }

  .slider-shell,
  .slide {
    min-height: 72vh;
  }

  .slide-content {
    align-items: flex-end;
    padding-top: 40px;
    padding-bottom: 96px;
  }

  .slide-panel {
    max-width: 100%;
    padding: 24px;
    border-radius: 24px;
  }

  .slide-panel p {
    font-size: 0.96rem;
    line-height: 1.7;
  }
}

@media (max-width: 768px) {
  .hero-slider {
    padding-top: 92px;
  }

  .slider-shell,
  .slide {
    min-height: 68vh;
    border-radius: 24px;
  }

  .slide-overlay {
    background:
      linear-gradient(180deg, rgba(15, 23, 32, 0.28) 0%, rgba(15, 23, 32, 0.82) 100%);
  }

  .slide-content {
    padding-top: 28px;
    padding-bottom: 92px;
  }

  .slide-panel {
    padding: 20px;
    border-radius: 20px;
  }

  .slide-kicker {
    min-height: 34px;
    font-size: 0.78rem;
  }

  .slide-panel h1 {
    font-size: clamp(1.7rem, 7vw, 2.6rem);
    line-height: 1.06;
  }

  .slide-panel p {
    margin-top: 14px;
    font-size: 0.92rem;
    line-height: 1.65;
  }

  .slide-actions {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }

  .slider-controls {
    bottom: 18px;
  }

  .nav-button {
    width: 46px;
    height: 46px;
    font-size: 1.5rem;
  }

  .controls-right {
    gap: 8px;
  }

  .dot {
    width: 10px;
    height: 10px;
  }

  .dot.active {
    width: 28px;
  }
}

@media (max-width: 480px) {
  .hero-slider {
    padding-inline: 12px;
    padding-top: 88px;
  }

  .slider-shell,
  .slide {
    min-height: 64vh;
    border-radius: 20px;
  }

  .slide-content {
    padding-bottom: 84px;
  }

  .slide-panel {
    padding: 18px;
  }

  .slider-controls {
    gap: 12px;
  }
}
</style>