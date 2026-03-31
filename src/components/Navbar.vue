<template>
  <div class="nav-system">
    <a class="brand-plaque" href="#top" aria-label="Vargeloğlu İnşaat Hafriyat ana sayfa">
      <span class="brand-symbol" aria-hidden="true">
        <svg viewBox="0 0 88 88" role="presentation">
          <defs>
            <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#e2c08d" />
              <stop offset="100%" stop-color="#b88a4a" />
            </linearGradient>
          </defs>

          <rect x="6" y="6" width="76" height="76" rx="24" fill="url(#brandGradient)" />
          <rect x="15" y="15" width="58" height="58" rx="17" fill="none" stroke="rgba(15,23,32,0.18)" />

          <path
            d="M24 27 L38 61 L44 61 L58 27"
            fill="none"
            stroke="#0f1720"
            stroke-width="6.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />

          <path
            d="M28 50 L60 50"
            fill="none"
            stroke="rgba(15,23,32,0.22)"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </span>

      <span class="brand-copy">
        <span class="brand-title">Vargeloğlu İnşaat</span>
        <span class="brand-subtitle">Hafriyat</span>
      </span>
    </a>

    <nav class="desktop-dock" aria-label="Ana navigasyon">
      <a
        v-for="item in navItems"
        :key="item.label"
        :href="item.href"
        class="dock-link"
      >
        <span class="dock-label">{{ item.label }}</span>
      </a>
    </nav>

    <button
      class="mobile-trigger"
      type="button"
      :aria-expanded="isMenuOpen"
      aria-controls="mobile-navigation"
      :aria-label="isMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'"
      @click="toggleMenu"
    >
      <span class="trigger-icon" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <span>Menü</span>
    </button>

    <transition name="overlay-fade">
      <div v-if="isMenuOpen" class="mobile-overlay" @click="closeMenu">
        <div class="mobile-sheet" @click.stop>
          <div class="sheet-head">
            <div class="sheet-brand">
              <span class="sheet-brand-title">Vargeloğlu İnşaat</span>
              <span class="sheet-brand-subtitle">Hafriyat</span>
            </div>

            <button
              class="sheet-close"
              type="button"
              aria-label="Menüyü kapat"
              @click="closeMenu"
            >
              ×
            </button>
          </div>

          <nav id="mobile-navigation" class="mobile-nav" aria-label="Mobil navigasyon">
            <a
              v-for="item in navItems"
              :key="item.label"
              :href="item.href"
              @click="closeMenu"
            >
              {{ item.label }}
            </a>
          </nav>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const navItems = [
  { label: 'Anasayfa', href: '#top' },
  { label: 'Faaliyetlerimiz', href: '#faaliyetlerimiz' },
  { label: 'Projeler', href: '#projeler' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Referanslar', href: '#referanslar' },
  { label: 'İletişim', href: '#iletisim' },
]

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<style scoped>
.nav-system {
  pointer-events: none;
}

.brand-plaque,
.desktop-dock,
.mobile-trigger,
.mobile-overlay {
  pointer-events: auto;
}

.brand-plaque {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;
  display: inline-flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px 12px 12px;
  border-radius: 24px;
  background: rgba(15, 23, 32, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    0 18px 45px rgba(15, 23, 32, 0.18),
    0 8px 20px rgba(15, 23, 32, 0.12);
  backdrop-filter: blur(16px);
  max-width: calc(100vw - 110px);
}

.brand-symbol {
  display: inline-flex;
  width: 64px;
  height: 64px;
  flex-shrink: 0;
}

.brand-symbol svg {
  width: 100%;
  height: 100%;
  display: block;
}

.brand-copy {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.brand-title {
  color: #ffffff;
  font-size: 1.02rem;
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.03em;
}

.brand-subtitle {
  margin-top: 6px;
  color: rgba(226, 192, 141, 0.95);
  font-size: 0.74rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

.desktop-dock {
  position: fixed;
  top: 50%;
  right: 22px;
  z-index: 999;
  display: none;
  flex-direction: column;
  gap: 10px;
  transform: translateY(-50%);
}

.dock-link {
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  min-height: 48px;
  padding: 0 18px;
  border-radius: 999px;
  background: rgba(15, 23, 32, 0.88);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 16px 34px rgba(15, 23, 32, 0.14);
  backdrop-filter: blur(14px);
  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.dock-link:hover {
  transform: translateX(-4px);
  background: rgba(15, 23, 32, 0.96);
  border-color: rgba(226, 192, 141, 0.28);
  box-shadow: 0 18px 38px rgba(15, 23, 32, 0.2);
}

.dock-label {
  color: rgba(255, 255, 255, 0.88);
  font-size: 0.92rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  white-space: nowrap;
}

.mobile-trigger {
  position: fixed;
  right: 18px;
  bottom: 18px;
  z-index: 1001;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 58px;
  padding: 0 18px;
  border: 0;
  border-radius: 999px;
  background: #0f1720;
  color: #ffffff;
  box-shadow:
    0 18px 40px rgba(15, 23, 32, 0.24),
    0 8px 18px rgba(15, 23, 32, 0.14);
  font-size: 0.95rem;
  font-weight: 800;
  letter-spacing: -0.01em;
}

.trigger-icon {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
}

.trigger-icon span {
  display: block;
  width: 18px;
  height: 2px;
  border-radius: 999px;
  background: currentColor;
}

.mobile-overlay {
  position: fixed;
  inset: 0;
  z-index: 1002;
  display: flex;
  align-items: flex-end;
  padding: 20px;
  background: rgba(10, 15, 21, 0.34);
  backdrop-filter: blur(10px);
}

.mobile-sheet {
  width: 100%;
  border-radius: 28px;
  background: linear-gradient(180deg, #101821 0%, #18212b 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.26);
  overflow: hidden;
}

.sheet-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 20px 14px;
}

.sheet-brand {
  display: flex;
  flex-direction: column;
}

.sheet-brand-title {
  color: #ffffff;
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: -0.03em;
}

.sheet-brand-subtitle {
  margin-top: 4px;
  color: rgba(226, 192, 141, 0.9);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.sheet-close {
  width: 42px;
  height: 42px;
  border: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  font-size: 1.5rem;
  line-height: 1;
}

.mobile-nav {
  display: grid;
  gap: 10px;
  padding: 0 20px 20px;
}

.mobile-nav a {
  display: flex;
  align-items: center;
  min-height: 56px;
  padding: 0 16px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.92);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;
}

.mobile-nav a:hover {
  transform: translateX(2px);
  background: rgba(255, 255, 255, 0.08);
}

.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: opacity 0.2s ease;
}

.overlay-fade-enter-from,
.overlay-fade-leave-to {
  opacity: 0;
}

@media (min-width: 1024px) {
  .desktop-dock {
    display: flex;
  }

  .mobile-trigger {
    display: none;
  }
}

@media (max-width: 1023px) {
  .brand-plaque {
    top: 16px;
    left: 16px;
    padding: 10px 14px 10px 10px;
    max-width: calc(100vw - 110px);
  }

  .brand-symbol {
    width: 54px;
    height: 54px;
  }

  .brand-title {
    font-size: 0.92rem;
  }

  .brand-subtitle {
    font-size: 0.68rem;
    letter-spacing: 0.16em;
  }
}

@media (max-width: 560px) {
  .brand-plaque {
    max-width: calc(100vw - 92px);
    border-radius: 20px;
  }

  .brand-symbol {
    width: 48px;
    height: 48px;
  }

  .brand-title {
    font-size: 0.86rem;
  }

  .brand-subtitle {
    font-size: 0.64rem;
  }

  .mobile-trigger {
    right: 14px;
    bottom: 14px;
    min-height: 54px;
    padding: 0 16px;
  }

  .mobile-overlay {
    padding: 14px;
  }

  .mobile-sheet {
    border-radius: 24px;
  }
}
</style>