<template>
  <section id="projeler" class="projects">
    <div class="container">
      <div class="projects-head">
        <p class="kicker reveal">{{ t.projects.kicker }}</p>
        <h2 class="projects-title reveal reveal-delay-1">{{ t.projects.title }}</h2>
      </div>

      <div class="projects-grid">
        <article
          v-for="(project, i) in projects"
          :key="i"
          class="project-card reveal"
          :class="`reveal-delay-${(i % 3) + 1}`"
        >
          <div class="project-img-wrap">
            <img :src="project.image" :alt="project.title" class="project-img" />
            <div class="project-overlay">
              <span class="project-period-badge">{{ project.period }}</span>
            </div>
          </div>
          <div class="project-body">
            <h3>{{ project.title }}</h3>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLocale } from '../composables/useLocale'

import carya from '../assets/project-companies/regnum-carya.jpg'
import caryaGolf from '../assets/project-companies/carya-golf.jpg'
import bodrumGolf from '../assets/project-companies/bodrum-regnum-golf.jpg'
import ankaraGolf from '../assets/project-companies/ankara-regnum-golf.jpg'
import regnumCrown from '../assets/project-companies/regnum-the-crown.jpg'
import caja from '../assets/project-companies/caja-maxx.jpg'
import kiris from '../assets/project-companies/maxx-kiris.webp'
import belvil from '../assets/project-companies/belvil.webp'
import zeugma from '../assets/project-companies/zeugma.webp'
import otium from '../assets/project-companies/otium.jpg'
import calista from '../assets/project-companies/calista-resort.jpg'
import ela from '../assets/project-companies/ela-quality-resort.jpg'
import susesi from '../assets/project-companies/susesi.jpg'
import zeynep from '../assets/project-companies/zeynep-golf.jpg'
import asatKuzey from '../assets/project-companies/asat-kuzey.webp'
import antalyaOsb from '../assets/project-companies/antalya-osb2.jpg'
import asatKonyaalti from '../assets/project-companies/asat-konyaalti.webp'
import kirkgoz from '../assets/project-companies/kirkgoz.jpg'
import karapinar from '../assets/project-companies/karapinar.webp'

const { t } = useLocale()
import { computed } from 'vue'

const projects = computed(() => [
  { title: t.value.projects.items[0],  period: '',          image: carya },
  { title: t.value.projects.items[1],  period: '2007-2008', image: caryaGolf },
  { title: t.value.projects.items[2],  period: '',          image: bodrumGolf },
  { title: t.value.projects.items[3],  period: '',          image: ankaraGolf },
  { title: t.value.projects.items[4],  period: '',          image: regnumCrown },
  { title: t.value.projects.items[5],  period: '',          image: caja },
  { title: t.value.projects.items[6],  period: '',          image: kiris },
  { title: t.value.projects.items[7],  period: '',          image: belvil },
  { title: t.value.projects.items[8],  period: '',          image: zeugma },
  { title: t.value.projects.items[9],  period: '',          image: otium },
  { title: t.value.projects.items[10], period: '2005-2006', image: calista },
  { title: t.value.projects.items[11], period: '2006-2007', image: ela },
  { title: t.value.projects.items[12], period: '2006-2007', image: susesi },
  { title: t.value.projects.items[13], period: '2010-2011', image: zeynep },
  { title: t.value.projects.items[14], period: '',          image: asatKuzey },
  { title: t.value.projects.items[15], period: '',          image: asatKonyaalti },
  { title: t.value.projects.items[16], period: '',          image: antalyaOsb },
  { title: t.value.projects.items[17], period: '',          image: kirkgoz },
  { title: t.value.projects.items[18], period: '',          image: karapinar },
])
</script>

<style scoped>
.projects {
  padding: 100px 0;
  background: var(--color-dark-2);
  position: relative;
}

.projects::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--color-gold-muted), transparent);
}

.projects-head {
  margin-bottom: 52px;
}

.projects-title {
  margin-top: 16px;
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  font-weight: 800;
  color: var(--color-heading);
  letter-spacing: -0.02em;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}

.project-card {
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--color-dark-3);
  border: 1px solid var(--color-border);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 48px rgba(0,0,0,0.4);
  border-color: var(--color-border-gold);
}

.project-img-wrap {
  position: relative;
  overflow: hidden;
}

.project-img {
  width: 100%;
  aspect-ratio: 16/10;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.project-card:hover .project-img {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(10,13,18,0.7) 0%, transparent 50%);
  display: flex;
  align-items: flex-end;
  padding: 16px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-period-badge {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--color-gold);
  background: rgba(10,13,18,0.7);
  padding: 4px 10px;
  border-radius: 4px;
}

.project-body {
  padding: 12px 14px;
}

.project-body h3 {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--color-heading);
  letter-spacing: -0.01em;
  line-height: 1.3;
}

@media (max-width: 1200px) {
  .projects-grid { grid-template-columns: repeat(4, 1fr); }
}

@media (max-width: 900px) {
  .projects-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 600px) {
  .projects-grid { grid-template-columns: repeat(2, 1fr); }
  .projects { padding: 72px 0; }
}

@media (max-width: 400px) {
  .projects-grid { grid-template-columns: 1fr; }
}
</style>