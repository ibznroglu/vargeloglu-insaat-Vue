<template>
  <section id="top" class="hero">
    <!-- Slider arkaplan -->
    <div class="hero-bg">
      <transition name="slide-fade">
        <img
          :key="currentIndex"
          :src="slides[currentIndex].src"
          :alt="slides[currentIndex].alt"
          class="hero-bg-img"
        />
      </transition>
      <div class="hero-overlay"></div>
    </div>

    <!-- İçerik -->
    <div class="container hero-inner">
      <div class="hero-content">
        <p class="kicker">1985'ten bugüne güvenilir uygulama</p>

        <h1 class="hero-title">
          Hafriyat ve altyapı<br />
          işlerinde güvenilir<br />
          <em>çözüm ortağınız</em>
        </h1>

        <p class="hero-desc">
          Vargeloğlu İnşaat olarak altyapı, hafriyat ve çevre düzenleme işlerinde
          planlı, temiz ve zamanında teslim odaklı çalışıyoruz.
        </p>

        <div class="hero-actions">
          <a href="#projeler" class="btn-gold">Projeleri Gör →</a>
          <a href="#iletisim" class="btn-ghost">İletişim</a>
        </div>

        <!-- Slider dots -->
        <div class="hero-dots">
          <button
            v-for="(_, i) in slides"
            :key="i"
            class="dot"
            :class="{ 'dot--active': i === currentIndex }"
            @click="goTo(i)"
            :aria-label="`Slayt ${i + 1}`"
          />
        </div>
      </div>

      <!-- İstatistikler -->
      <div class="hero-stats">
        <div class="stat-card">
          <span class="stat-num">40+</span>
          <span class="stat-label">Yıllık Tecrübe</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-card">
          <span class="stat-num">50+</span>
          <span class="stat-label">Tamamlanan Proje</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-card">
          <span class="stat-num">11+</span>
          <span class="stat-label">Prestijli Referans</span>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="hero-scroll">
      <div class="scroll-line"></div>
      <span>Aşağı Kaydır</span>
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

function goTo(i: number) {
  currentIndex.value = i
  if (intervalId) window.clearInterval(intervalId)
  startAuto()
}

function startAuto() {
  intervalId = window.setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % slides.length
  }, 4500)
}

onMounted(startAuto)
onBeforeUnmount(() => { if (intervalId) window.clearInterval(intervalId) })
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  min-height: 680px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  background: var(--color-dark);
}

/* Background slider */
.hero-bg {
  position: absolute;
  inset: 0;
}

.hero-bg-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    rgba(10, 13, 18, 0.88) 0%,
    rgba(10, 13, 18, 0.6) 50%,
    rgba(10, 13, 18, 0.3) 100%
  );
}

/* Slide transition */
.slide-fade-enter-active { transition: opacity 1.2s ease; }
.slide-fade-leave-active { transition: opacity 1.2s ease; }
.slide-fade-enter-from { opacity: 0; }
.slide-fade-leave-to { opacity: 0; }

/* Inner layout */
.hero-inner {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 48px;
  padding-top: 80px;
}

/* Content */
.hero-content {
  max-width: 680px;
}

.hero-title {
  margin-top: 20px;
  font-family: var(--font-display);
  font-size: clamp(2.6rem, 5.5vw, 5rem);
  font-weight: 800;
  line-height: 1.05;
  color: #fff;
  letter-spacing: -0.02em;
}

.hero-title em {
  font-style: italic;
  color: var(--color-gold);
}

.hero-desc {
  margin-top: 24px;
  max-width: 52ch;
  font-size: 1.05rem;
  line-height: 1.75;
  color: rgba(255,255,255,0.65);
}

.hero-actions {
  display: flex;
  gap: 14px;
  margin-top: 36px;
  flex-wrap: wrap;
}

.btn-gold {
  display: inline-flex;
  align-items: center;
  height: 50px;
  padding: 0 28px;
  border-radius: 6px;
  background: var(--color-gold);
  color: var(--color-dark);
  font-size: 0.95rem;
  font-weight: 700;
  transition: background 0.2s, transform 0.2s;
}

.btn-gold:hover {
  background: var(--color-gold-light);
  transform: translateY(-2px);
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  height: 50px;
  padding: 0 28px;
  border-radius: 6px;
  border: 1px solid rgba(255,255,255,0.25);
  color: rgba(255,255,255,0.85);
  font-size: 0.95rem;
  font-weight: 600;
  transition: border-color 0.2s, color 0.2s;
}

.btn-ghost:hover {
  border-color: rgba(255,255,255,0.6);
  color: #fff;
}

/* Dots */
.hero-dots {
  display: flex;
  gap: 8px;
  margin-top: 40px;
}

.dot {
  width: 28px;
  height: 3px;
  border-radius: 2px;
  background: rgba(255,255,255,0.25);
  border: none;
  padding: 0;
  transition: background 0.3s, width 0.3s;
  cursor: pointer;
}

.dot--active {
  background: var(--color-gold);
  width: 48px;
}

/* Stats bar */
.hero-stats {
  display: flex;
  align-items: center;
  gap: 0;
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(12px);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 20px 32px;
  width: fit-content;
}

.stat-card {
  display: flex;
  flex-direction: column;
  padding: 0 32px;
  text-align: center;
}

.stat-card:first-child {
  padding-left: 0;
}

.stat-num {
  font-family: var(--font-display);
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--color-gold);
  line-height: 1;
}

.stat-label {
  margin-top: 4px;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: rgba(255,255,255,0.5);
  text-transform: uppercase;
  white-space: nowrap;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: var(--color-border);
  flex-shrink: 0;
}

/* Scroll indicator */
.hero-scroll {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.scroll-line {
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, var(--color-gold), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}

@keyframes scrollPulse {
  0%, 100% { opacity: 1; transform: scaleY(1); transform-origin: top; }
  50% { opacity: 0.4; }
}

.hero-scroll span {
  font-size: 0.68rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.4);
}

@media (max-width: 768px) {
  .hero {
    min-height: 100svh;
  }
  .hero-stats {
    padding: 16px 20px;
    gap: 0;
  }
  .stat-card {
    padding: 0 16px;
  }
  .stat-num {
    font-size: 1.6rem;
  }
  .hero-scroll { display: none; }
}
</style>