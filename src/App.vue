<template>
  <MainLayout>
    <HeroSlider />
    <HomeQuickOverview />
    <About />
    <Services />
    <Contact />
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from './layouts/MainLayout.vue'
import HeroSlider from './components/HeroSlider.vue'
import HomeQuickOverview from './components/HomeQuickOverview.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import Contact from './components/Contact.vue'
</script>