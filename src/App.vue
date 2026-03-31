<template>
  <MainLayout>
    <Hero />
    <About />
    <Services />
    <Contact />
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from './layouts/MainLayout.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import Contact from './components/Contact.vue'
</script>