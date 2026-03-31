<template>
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="#top" aria-label="Vargeloğlu İnşaat ana sayfa">
        <span class="brand-mark">V</span>
        <span class="brand-text">
          <span class="brand-name">Vargeloğlu İnşaat</span>
          <span class="brand-tag">Güvenle yükselen yapılar</span>
        </span>
      </a>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-controls="site-navigation"
        :aria-label="isMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav
        id="site-navigation"
        class="nav"
        :class="{ 'nav-open': isMenuOpen }"
        aria-label="Ana navigasyon"
      >
        <a href="#hakkimizda" @click="closeMenu">Hakkımızda</a>
        <a href="#hizmetler" @click="closeMenu">Hizmetler</a>
        <a href="#iletisim" @click="closeMenu">İletişim</a>
        <a class="nav-cta" href="#iletisim" @click="closeMenu">Teklif Al</a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(18px);
  background: rgba(15, 23, 32, 0.72);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 78px;
  gap: 24px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  min-width: 0;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--color-primary), #e3bf88);
  color: var(--color-heading);
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  box-shadow: 0 12px 30px rgba(200, 155, 93, 0.25);
  flex-shrink: 0;
}

.brand-text {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.brand-name {
  color: var(--color-white);
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.brand-tag {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.78rem;
  line-height: 1.2;
}

.menu-toggle {
  display: none;
  width: 48px;
  height: 48px;
  padding: 0;
  border: 0;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.08);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;
}

.menu-toggle:hover {
  background: rgba(255, 255, 255, 0.14);
}

.menu-toggle span {
  width: 20px;
  height: 2px;
  border-radius: 999px;
  background: var(--color-white);
  display: block;
}

.nav {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav a {
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.96rem;
  font-weight: 500;
  padding: 12px 14px;
  border-radius: 999px;
  transition:
    color 0.2s ease,
    background-color 0.2s ease,
    transform 0.2s ease;
}

.nav a:hover {
  color: var(--color-white);
  background: rgba(255, 255, 255, 0.08);
}

.nav-cta {
  background: var(--color-primary);
  color: var(--color-heading) !important;
  font-weight: 700 !important;
  padding-inline: 18px !important;
  box-shadow: 0 12px 30px rgba(200, 155, 93, 0.22);
}

.nav-cta:hover {
  background: #d6ab70 !important;
  transform: translateY(-1px);
}

@media (max-width: 900px) {
  .menu-toggle {
    display: inline-flex;
  }

  .nav {
    position: absolute;
    top: calc(100% + 12px);
    left: var(--container-padding);
    right: var(--container-padding);
    display: none;
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
    padding: 14px;
    border-radius: 22px;
    background: rgba(15, 23, 32, 0.96);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 24px 60px rgba(15, 23, 32, 0.3);
  }

  .nav.nav-open {
    display: flex;
  }

  .nav a {
    width: 100%;
    padding: 14px 16px;
    border-radius: 14px;
  }

  .nav-cta {
    text-align: center;
  }

  .brand-tag {
    display: none;
  }
}

@media (max-width: 640px) {
  .header-inner {
    min-height: 72px;
  }

  .brand-mark {
    width: 42px;
    height: 42px;
    border-radius: 12px;
  }

  .brand-name {
    font-size: 0.95rem;
  }
}
</style>