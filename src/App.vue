<template>
  <MainLayout>
    <Hero />
    <CompanyIntro />
    <Services />
    <Projects />
     <Gallery />
    <Contact />
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from './layouts/MainLayout.vue'
import Hero from './components/Hero.vue'
import CompanyIntro from './components/CompanyIntro.vue'
import Services from './components/Services.vue'
import Projects from './components/Projects.vue'
import Gallery from './components/Gallery.vue'
import Contact from './components/Contact.vue'
</script>