<template>
  <header class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <div class="container navbar-inner">

      <a href="#top" class="brand">
        <span class="brand-icon">V</span>
        <span class="brand-copy">
          <span class="brand-title">Vargeloğlu İnşaat</span>
          <span class="brand-sub">HAFRİYAT - ALTYAPI</span>
        </span>
      </a>

      <nav class="desktop-nav">
        <a
          v-for="navItem in navItems"
          :key="navItem.href"
          :href="navItem.href"
          class="nav-link"
        >
          {{ navItem.label }}
        </a>
      </nav>

      <a href="#iletisim" class="nav-cta">İletişime Geç</a>

      <button
        type="button"
        class="burger"
        :class="{ 'burger--open': isOpen }"
        @click="isOpen = !isOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </div>

    <Transition name="mobile-menu">
      <nav v-if="isOpen" class="mobile-nav">
        <a
          v-for="(navItem, idx) in navItems"
          :key="navItem.href"
          :href="navItem.href"
          class="mobile-nav-link"
          @click="isOpen = false"
        >
          <span class="mobile-nav-num">{{ getNum(idx) }}</span>
          {{ navItem.label }}
        </a>
        <a href="#iletisim" class="mobile-nav-cta" @click="isOpen = false">
          İletişime Geç
        </a>
      </nav>
    </Transition>

  </header>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

interface NavItem {
  label: string
  href: string
}

const isOpen = ref(false)
const isScrolled = ref(false)

const navItems: NavItem[] = [
  { label: 'Anasayfa', href: '#top' },
  { label: 'Faaliyetler', href: '#faaliyetlerimiz' },
  { label: 'Projeler', href: '#projeler' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Referanslar', href: '#referanslar' },
]

function getNum(idx: number): string {
  return String(idx + 1).padStart(2, '0')
}

function onScroll(): void {
  isScrolled.value = window.scrollY > 60
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  transition: background 0.4s ease, padding 0.4s ease, box-shadow 0.4s ease;
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
  gap: 32px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.brand-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: var(--color-gold);
  color: var(--color-dark);
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.brand-copy {
  display: flex;
  flex-direction: column;
}

.brand-title {
  color: #fff;
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.brand-sub {
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: var(--color-gold);
  text-transform: uppercase;
  margin-top: 3px;
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
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.2s, background 0.2s;
}

.nav-link:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.06);
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
  margin-left: auto;
  cursor: pointer;
}

.burger span {
  display: block;
  height: 1.5px;
  background: #fff;
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.burger--open span:nth-child(1) {
  transform: translateY(6.5px) rotate(45deg);
}

.burger--open span:nth-child(2) {
  opacity: 0;
}

.burger--open span:nth-child(3) {
  transform: translateY(-6.5px) rotate(-45deg);
}

.mobile-nav {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
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
  color: rgba(255, 255, 255, 0.8);
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
.mobile-menu-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 900px) {
  .desktop-nav,
  .nav-cta {
    display: none;
  }

  .burger {
    display: flex;
  }
}
</style>
