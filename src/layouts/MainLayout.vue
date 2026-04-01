<template>
  <div class="layout">
    <Navbar />

    <main class="site-main">
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
  background: #f7f4ee;
}

.site-main {
  width: 100%;
  min-height: 100vh;
  padding-top: 0;
}

@media (min-width: 1024px) {
  .site-main {
    padding-top: 0;
  }
}
</style>