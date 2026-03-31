<template>
  <div class="layout">
    <Navbar />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
</script>

<style scoped>
.layout {
  min-height: 100vh;
  background: var(--color-bg);
}

main {
  width: 100%;
}
</style>