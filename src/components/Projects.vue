<template>
  <section id="projeler" class="projects">
    <div class="container">
      <div class="projects-head">
        <p class="kicker reveal">Projeler</p>
        <h2 class="projects-title reveal reveal-delay-1">Tamamlanan seçili projeler</h2>
      </div>

      <div class="projects-grid">
        <article
          v-for="(project, i) in projects"
          :key="project.title"
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
            <p>{{ project.period }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
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
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
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
  padding: 18px 20px;
}

.project-body h3 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-heading);
  letter-spacing: -0.01em;
}

.project-body p {
  margin-top: 6px;
  font-size: 0.82rem;
  color: var(--color-gold);
  font-weight: 600;
  letter-spacing: 0.04em;
}

@media (max-width: 900px) {
  .projects-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 480px) {
  .projects-grid { grid-template-columns: 1fr; }
  .projects { padding: 72px 0; }
}
</style>