<template>
  <section id="projeler" class="projects">
    <div class="container">
      <div class="projects-head">
        <span>Projeler</span>
        <h2>Tamamlanan seçili projeler</h2>
      </div>

      <div class="projects-grid">
        <article v-for="project in projects" :key="project.title" class="project-card">
          <img :src="project.image" :alt="project.title" class="project-image" />
          <div class="project-body">
            <h3>{{ project.title }}</h3>
            <p>{{ project.period }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Foto importları
import calista from '../assets/project-companies/calista-resort.jpg'
import ela from '../assets/project-companies/ela-quality-resort.jpg'
import susesi from '../assets/project-companies/susesi.jpg'
import carya from '../assets/project-companies/regnum-carya.jpg'
import zeynep from '../assets/project-companies/zeynep-golf.jpg'

const projects = [
  { title: 'Calista Otel', period: '2005-2006', image: calista },
  { title: 'Ela Quality Resort Otel', period: '2006-2007', image: ela },
  { title: 'Susesi Luxury Resort', period: '2006-2007', image: susesi },
  { title: 'Carya Golf Club', period: '2007-2008', image: carya },
  { title: 'Zeynep Golf Resort Otel', period: '2010-2011', image: zeynep },
]
</script>

<style scoped>
.projects {
  padding: 40px 0;
  background: #f7f4ee;
}

.projects-head span {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #a67c45;
  text-transform: uppercase;
}

.projects-head h2 {
  margin-top: 8px;
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  color: #0f1720;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 20px;
}

.project-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.project-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 20px rgba(15, 23, 32, 0.06);
}

.project-image {
  width: 100%;
  aspect-ratio: 16/10;
  object-fit: cover;
}

.project-body {
  padding: 12px 14px;
}

.project-body h3 {
  font-size: 1rem;
  color: #0f1720;
}

.project-body p {
  margin-top: 4px;
  font-size: 0.85rem;
  color: #5b6570;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>