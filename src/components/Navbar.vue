<template>
  <nav class="nav">
    <div class="logo">Vargeloğlu İnşaat</div>

    <ul class="menu" :class="{ open: isOpen }">
      <li>Hakkımızda</li>
      <li>Hizmetler</li>
      <li>Projeler</li>
      <li>İletişim</li>
    </ul>

    <button class="toggle" @click="isOpen = !isOpen">
      ☰
    </button>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isOpen = ref(false)
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: #111;
  color: white;
}

.menu {
  display: flex;
  gap: 20px;
  list-style: none;
}

.toggle {
  display: none;
  background: none;
  color: white;
  font-size: 24px;
  border: none;
}

/* Mobile */
@media (max-width: 768px) {
  .menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: #111;
    padding: 20px;
  }

  .menu.open {
    display: flex;
  }

  .toggle {
    display: block;
  }
}
</style>