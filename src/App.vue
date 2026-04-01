<template>
  <MainLayout>
    <Hero />
    <CompanyIntro />
    <Services />
    <Projects />
     <Gallery />
     <References />
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
import References from './components/References.vue'
import Contact from './components/Contact.vue'
</script>