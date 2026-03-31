<template>
  <section id="projeler" class="projects section">
    <div class="container">
      <div class="section-heading">
        <span class="section-kicker">Projeler</span>
        <h2>Tamamlanan projelerimizden seçili uygulamalar</h2>
        <p>
          Farklı dönemlerde üstlendiğimiz otel, resort ve golf kulübü projelerinde; altyapı,
          çevre düzenlemesi ve saha uygulamalarını planlı şekilde hayata geçirdik.
        </p>
      </div>

      <div class="projects-grid">
        <article
          v-for="project in projects"
          :key="project.title"
          class="project-card"
        >
          <div class="project-media">
            <img :src="project.image" :alt="project.alt" loading="lazy" decoding="async" />
            <span class="project-year">{{ project.period }}</span>
          </div>

          <div class="project-body">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import slide01 from '../assets/slider/slide-01.jpg'
import slide02 from '../assets/slider/slide-02.jpg'
import slide03 from '../assets/slider/slide-03.jpg'
import slide04 from '../assets/slider/slide-04.jpg'
import slide05 from '../assets/slider/slide-05.jpg'

type ProjectItem = {
  title: string
  period: string
  image: string
  alt: string
  description: string
}

const projects: ProjectItem[] = [
  {
    title: 'Caslita Otel',
    period: '2005-2006',
    image: slide01,
    alt: 'Caslita Otel için örnek proje görseli',
    description:
      'Otel çevresi uygulamaları, saha düzenleme süreçleri ve altyapı odaklı işler kapsamında yürütülen örnek proje çalışması.',
  },
  {
    title: 'Ela Quality Resort Otel',
    period: '2006-2007',
    image: slide02,
    alt: 'Ela Quality Resort Otel için örnek proje görseli',
    description:
      'Resort ölçeğinde çevre düzenlemesi, saha hazırlığı ve uygulama koordinasyonu gerektiren proje sürecine ait temsilî çalışma.',
  },
  {
    title: 'Su Sesi Otel',
    period: '2006-2007',
    image: slide03,
    alt: 'Su Sesi Otel için örnek proje görseli',
    description:
      'Konaklama yapılarında estetik, işlev ve çevresel düzenlemeyi birlikte ele alan uygulama yaklaşımını yansıtan örnek proje.',
  },
  {
    title: 'Carya Golf Club',
    period: '2007-2008',
    image: slide04,
    alt: 'Carya Golf Club için örnek proje görseli',
    description:
      'Geniş saha organizasyonu, altyapı hazırlığı ve uygulama disiplini gerektiren golf kulübü ölçeğinde proje deneyimi.',
  },
  {
    title: 'Zeynep Golf Resort Otel',
    period: '2010-2011',
    image: slide05,
    alt: 'Zeynep Golf Resort Otel için örnek proje görseli',
    description:
      'Resort ve çevre uygulamalarında planlama, saha koordinasyonu ve iş takibi odaklı yürütülen proje referanslarından biri.',
  },
]
</script>

<style scoped>
.projects {
  background:
    linear-gradient(180deg, #f3efe8 0%, #f7f4ee 100%);
}

.section-heading {
  max-width: 760px;
  margin-bottom: 40px;
}

.section-kicker {
  display: inline-flex;
  align-items: center;
  min-height: 36px;
  padding: 0 14px;
  border-radius: 999px;
  background: rgba(200, 155, 93, 0.12);
  color: var(--color-primary-dark);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.section-heading h2 {
  margin-top: 18px;
  color: var(--color-heading);
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1.04;
  letter-spacing: -0.05em;
}

.section-heading p {
  margin-top: 16px;
  color: var(--color-text-muted);
  font-size: 1rem;
  line-height: 1.8;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 22px;
}

.project-card {
  grid-column: span 4;
  overflow: hidden;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid rgba(15, 23, 32, 0.06);
  box-shadow:
    0 22px 50px rgba(15, 23, 32, 0.08),
    0 10px 24px rgba(15, 23, 32, 0.04);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 28px 60px rgba(15, 23, 32, 0.1),
    0 14px 28px rgba(15, 23, 32, 0.05);
}

.project-card:nth-child(4),
.project-card:nth-child(5) {
  grid-column: span 6;
}

.project-media {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: #dfe5e8;
}

.project-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
}

.project-card:hover .project-media img {
  transform: scale(1.04);
}

.project-media::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(15, 23, 32, 0.04) 0%, rgba(15, 23, 32, 0.22) 100%);
}

.project-year {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 0 12px;
  border-radius: 999px;
  background: rgba(15, 23, 32, 0.72);
  color: #ffffff;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.06em;
}

.project-body {
  padding: 24px;
}

.project-body h3 {
  color: var(--color-heading);
  font-size: 1.35rem;
  line-height: 1.15;
  letter-spacing: -0.03em;
}

.project-body p {
  margin-top: 12px;
  color: var(--color-text-muted);
  font-size: 0.96rem;
  line-height: 1.75;
}

@media (max-width: 1100px) {
  .project-card,
  .project-card:nth-child(4),
  .project-card:nth-child(5) {
    grid-column: span 6;
  }
}

@media (max-width: 768px) {
  .section-heading {
    margin-bottom: 28px;
  }

  .projects-grid {
    gap: 16px;
  }

  .project-card,
  .project-card:nth-child(4),
  .project-card:nth-child(5) {
    grid-column: span 12;
    border-radius: 22px;
  }

  .project-body {
    padding: 20px;
  }

  .project-body h3 {
    font-size: 1.2rem;
  }

  .project-body p {
    font-size: 0.94rem;
    line-height: 1.68;
  }
}

@media (max-width: 480px) {
  .project-year {
    top: 12px;
    left: 12px;
    min-height: 30px;
    padding: 0 10px;
    font-size: 0.72rem;
  }

  .project-body {
    padding: 18px;
  }
}
</style>