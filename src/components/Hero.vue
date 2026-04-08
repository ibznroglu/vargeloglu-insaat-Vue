<template>
  <section id="top" class="hero">
    <div class="hero-bg">
      <transition name="slide-fade">
        <img
          :key="currentIndex"
          :src="slides[currentIndex].src"
          :alt="`slide-${currentIndex}`"
          class="hero-bg-img"
        />
      </transition>
      <div class="hero-overlay"></div>
    </div>

    <div class="container hero-inner">
      <div class="hero-content">
        <p class="kicker">{{ t.hero.kicker }}</p>

        <h1 class="hero-title">
          <span>{{ t.hero.title1 }}</span>
          <em>{{ t.hero.titleEm }}</em>
        </h1>

        <p class="hero-desc">{{ t.hero.desc }}</p>

        <div class="hero-actions">
          <a href="#projeler" class="btn-gold">{{ t.hero.btnProjects }}</a>
          <a href="#iletisim" class="btn-ghost">{{ t.hero.btnContact }}</a>
        </div>

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

      <div class="hero-stats">
        <div class="stat-card">
          <span class="stat-num">40+</span>
          <span class="stat-label">{{ t.hero.stat1Label }}</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-card">
          <span class="stat-num">20+</span>
          <span class="stat-label">{{ t.hero.stat2Label }}</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-card">
          <span class="stat-num">11+</span>
          <span class="stat-label">{{ t.hero.stat3Label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useLocale } from '../composables/useLocale'
import slide01 from '../assets/slider/slide1.webp'
import slide02 from '../assets/slider/slide2.webp'
import slide03 from '../assets/slider/slide3.webp'
import slide04 from '../assets/slider/slide4.webp'
import slide05 from '../assets/slider/slide5.webp'

const { t } = useLocale()

const slides = [
  { src: slide04 },
  { src: slide01 },
  { src: slide02 },
  { src: slide03 },
  { src: slide05 },
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

.slide-fade-enter-active,
.slide-fade-leave-active { transition: opacity 1.2s ease; }
.slide-fade-enter-from,
.slide-fade-leave-to { opacity: 0; }

.hero-inner {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 48px;
  padding-top: 80px;
}

.hero-content {
  max-width: 680px;
}

.hero-title {
  margin-top: 20px;
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 4vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  color: #fff;
  letter-spacing: -0.02em;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.hero-title span {
  display: block;
}

.hero-title em {
  display: block;
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

.hero-stats {
  display: flex;
  align-items: center;
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(12px);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 20px 32px;
  width: fit-content;
  max-width: 100%;
  overflow-x: auto;
}

.stat-card {
  display: flex;
  flex-direction: column;
  padding: 0 32px;
  text-align: center;
}

.stat-card:first-child { padding-left: 0; }

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
  white-space: normal;
  text-align: center;
  max-width: 80px;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: var(--color-border);
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .hero { min-height: 100svh; }
  .hero-stats {
    padding: 12px 16px;
    width: 100%;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .stat-card {
    padding: 0;
    flex: 1;
    align-items: center;
  }
  .stat-num { font-size: 1.3rem; }
  .stat-label {
    font-size: 0.58rem;
    letter-spacing: 0;
    max-width: 60px;
  }
  .stat-divider { height: 24px; }
}
</style>