<template>
  <header class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <div class="container navbar-inner">
      <a href="#top" class="brand" aria-label="Vargeloğlu İnşaat ana sayfa">
        <img src="../assets/logo.png" alt="Vargeloğlu İnşaat" class="brand-logo" />
      </a>

      <nav class="desktop-nav" :aria-label="t.nav.home">
        <a v-for="item in navLinks" :key="item.href" :href="item.href" class="nav-link">
          {{ t.nav[item.key] }}
        </a>
      </nav>

      <a href="#iletisim" class="nav-cta">{{ t.nav.cta }}</a>

      <button class="lang-toggle" @click="toggleLocale" :aria-label="`Switch to ${current === 'tr' ? 'English' : 'Türkçe'}`">
        <span :class="{ active: current === 'tr' }">TR</span>
        <span :class="{ active: current === 'en' }">EN</span>
      </button>

      <button
        type="button"
        class="burger"
        :class="{ 'burger--open': isOpen }"
        :aria-expanded="isOpen"
        @click="isOpen = !isOpen"
        aria-label="Menü"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <Transition name="mobile-menu">
      <nav v-if="isOpen" class="mobile-nav" aria-label="Mobil navigasyon">
        <a
          v-for="(item, index) in navLinks"
          :key="item.href"
          :href="item.href"
          class="mobile-nav-link"
          @click="isOpen = false"
        >
          <span class="mobile-nav-num">{{ String(index + 1).padStart(2, '0') }}</span>
          {{ t.nav[item.key] }}
        </a>

        <a href="#iletisim" class="mobile-nav-cta" @click="isOpen = false">
          {{ t.nav.cta }} →
        </a>
      </nav>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { useLocale } from '../composables/useLocale'

const { t, current, toggleLocale } = useLocale()

const isOpen = ref(false)
const isScrolled = ref(false)

function onScroll() {
  isScrolled.value = window.scrollY > 60
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

const navLinks = [
  { key: 'home' as const, href: '#top' },
  { key: 'services' as const, href: '#faaliyetlerimiz' },
  { key: 'projects' as const, href: '#projeler' },
  { key: 'gallery' as const, href: '#galeri' },
  { key: 'references' as const, href: '#referanslar' },
]
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  padding: 14px 0;
  transition: background 0.4s, padding 0.4s, box-shadow 0.4s;
}

.navbar--scrolled {
  padding: 10px 0;
  background: rgba(10, 13, 18, 0.95);
  backdrop-filter: blur(20px);
  box-shadow: 0 1px 0 var(--color-border);
}

.navbar-inner {
  display: flex;
  align-items: center;
  gap: 16px;
}

.brand { display: flex; align-items: center; flex-shrink: 0; }

.brand-logo {
  width: 220px;
  height: auto;
  object-fit: contain;
  display: block;
}

@media (max-width: 900px) {
  .brand-logo { width: 160px; }
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 2px;
  margin-left: auto;
}

.nav-link {
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 0.88rem;
  font-weight: 500;
  color: rgba(255,255,255,0.7);
  transition: color 0.2s, background 0.2s;
}

.nav-link:hover {
  color: #fff;
  background: rgba(255,255,255,0.06);
}

.nav-cta {
  flex-shrink: 0;
  padding: 9px 20px;
  border-radius: 6px;
  background: var(--color-gold);
  color: var(--color-dark);
  font-size: 0.88rem;
  font-weight: 700;
  transition: background 0.2s, transform 0.2s;
  white-space: nowrap;
}

.nav-cta:hover {
  background: var(--color-gold-light);
  transform: translateY(-1px);
}

.lang-toggle {
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 3px;
  border: 1.5px solid var(--color-gold);
  border-radius: 8px;
  background: #0a0d12;
  cursor: pointer;
  flex-shrink: 0;
}

.lang-toggle span {
  padding: 5px 10px;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.45);
  border-radius: 5px;
  transition: background 0.2s, color 0.2s;
  line-height: 1;
}

.lang-toggle span.active {
  background: var(--color-gold);
  color: #0a0d12;
}

.lang-toggle:hover span:not(.active) {
  color: rgba(255, 255, 255, 0.8);
}

.burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  padding: 8px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: transparent;
  flex-shrink: 0;
}

.burger span {
  display: block;
  height: 1.5px;
  background: #fff;
  border-radius: 2px;
  transition: transform 0.3s, opacity 0.3s;
}

.burger--open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.burger--open span:nth-child(2) { opacity: 0; }
.burger--open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

.mobile-nav {
  position: absolute;
  top: 100%; left: 0; right: 0;
  background: rgba(10, 13, 18, 0.98);
  backdrop-filter: blur(20px);
  border-top: 1px solid var(--color-border);
  padding: 16px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 0;
  border-bottom: 1px solid var(--color-border);
  font-size: 1rem;
  font-weight: 500;
  color: rgba(255,255,255,0.8);
}

.mobile-nav-num {
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--color-gold);
  font-variant-numeric: tabular-nums;
}

.mobile-nav-cta {
  margin-top: 12px;
  padding: 14px 20px;
  border-radius: 8px;
  background: var(--color-gold);
  color: var(--color-dark);
  font-weight: 700;
  text-align: center;
}

.mobile-menu-enter-active,
.mobile-menu-leave-active { transition: opacity 0.25s, transform 0.25s; }
.mobile-menu-enter-from,
.mobile-menu-leave-to { opacity: 0; transform: translateY(-8px); }

@media (max-width: 900px) {
  .desktop-nav, .nav-cta { display: none; }
  .burger { display: flex; }
  .lang-toggle {
    margin-left: auto;
    padding: 1px;
    border-radius: 5px;
    border-width: 1px;
    width: fit-content;
  }
  .lang-toggle span {
    padding: 2px 4px;
    font-size: 0.62rem;
    border-radius: 3px;
    letter-spacing: 0.05em;
  }
  .navbar-inner {
    gap: 8px;
  }
}
</style>