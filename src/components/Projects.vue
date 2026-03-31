<template>
  <section id="projeler" class="projects">
    <div class="container">
      <div class="projects-head">
        <span>Projeler</span>
        <h2>Tamamlanan seçili projeler</h2>
      </div>

      <div class="projects-grid">
        <article v-for="project in projects" :key="project.title" class="project-card">
          <img :src="testImage" :alt="project.title" class="project-image" />
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
import testImage from '../assets/test.jpg'

const projects = [
  { title: 'Calista Otel', period: '2005-2006' },
  { title: 'Ela Quality Resort Otel', period: '2006-2007' },
  { title: 'Su Sesi Otel', period: '2006-2007' },
  { title: 'Carya Golf Club', period: '2007-2008' },
  { title: 'Zeynep Golf Resort Otel', period: '2010-2011' },
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
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.project-card {
  overflow: hidden;
  border-radius: 14px;
  background: #fff;
  border: 1px solid #e5e7eb;
}

.project-image {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: contain;
  display: block;
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