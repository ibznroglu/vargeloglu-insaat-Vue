<template>
  <header class="navbar">
    <div class="container navbar-inner">
      <a href="#top" class="brand" aria-label="Vargeloğlu İnşaat ana sayfa">

        <span class="brand-copy">
          <span class="brand-title">Vargeloğlu İnşaat</span>
          <span class="brand-subtitle">HAFRİYAT</span>
        </span>
      </a>

      <nav class="nav desktop-nav" aria-label="Ana navigasyon">
        <a v-for="item in navItems" :key="item.href" :href="item.href">
          {{ item.label }}
        </a>
      </nav>

      <button
        type="button"
        class="menu-button"
        :aria-expanded="isOpen"
        aria-controls="mobile-nav"
        :aria-label="isOpen ? 'Menüyü kapat' : 'Menüyü aç'"
        @click="isOpen = !isOpen"
      >
        <span></span>
        <span></span>
      </button>
    </div>

    <nav v-if="isOpen" id="mobile-nav" class="mobile-nav" aria-label="Mobil navigasyon">
      <a
        v-for="item in navItems"
        :key="item.href"
        :href="item.href"
        @click="isOpen = false"
      >
        {{ item.label }}
      </a>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

const navItems = [
  { label: 'Anasayfa', href: '#top' },
  { label: 'Faaliyetlerimiz', href: '#faaliyetlerimiz' },
  { label: 'Projeler', href: '#projeler' },
  { label: 'İletişim', href: '#iletisim' },
]
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(247, 244, 238, 0.92);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(15, 23, 32, 0.08);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 78px;
  gap: 20px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  min-width: 0;
}

.brand-copy {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.brand-title {
  color: #0f1720;
  font-size: 1.12rem;
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.03em;
}

.brand-subtitle {
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  margin-top: 4px;
  min-height: 22px;
  padding: 0 8px;
  border-radius: 999px;
  background: rgba(200, 155, 93, 0.14);
  color: #a67c45;
  font-size: 0.64rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.nav {
  display: flex;
  align-items: center;
  gap: 6px;
}

.nav a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 0 14px;
  border-radius: 999px;
  color: #24303b;
  font-size: 0.92rem;
  font-weight: 650;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;
}

.nav a:hover {
  background: #ebe4d9;
  color: #0f1720;
  transform: translateY(-1px);
}

.menu-button {
  display: none;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 1px solid rgba(15, 23, 32, 0.1);
  border-radius: 14px;
  background: #ffffff;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
}

.menu-button span {
  display: block;
  width: 18px;
  height: 2px;
  border-radius: 999px;
  background: #0f1720;
}

.mobile-nav {
  display: none;
}

@media (max-width: 768px) {
  .navbar-inner {
    min-height: 72px;
  }

  .desktop-nav {
    display: none;
  }

  .menu-button {
    display: inline-flex;
  }

  .mobile-nav {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0 16px 16px;
  }

  .mobile-nav a {
    display: flex;
    align-items: center;
    min-height: 46px;
    padding: 0 14px;
    border-radius: 14px;
    background: #ffffff;
    border: 1px solid rgba(15, 23, 32, 0.08);
    color: #24303b;
    font-size: 0.92rem;
    font-weight: 650;
  }

  .brand-mark {
    width: 44px;
    height: 44px;
    border-radius: 14px;
  }

  .brand-title {
    font-size: 1rem;
  }

  .brand-subtitle {
    font-size: 0.6rem;
    letter-spacing: 0.14em;
  }
}
</style>