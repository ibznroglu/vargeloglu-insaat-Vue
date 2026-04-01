<template>
  <section id="referanslar" class="references">
    <div class="container">
      <div class="references-head">
        <span>Referanslar</span>
        <h2>Tamamlanan işlerden seçili referanslar</h2>
      </div>

      <div class="references-grid">
        <article v-for="item in references" :key="item.title" class="reference-card">
          <img :src="item.image" :alt="item.title" class="reference-image" />

          <div class="reference-body">
            <h3>{{ item.title }}</h3>
            <p class="reference-period">{{ item.period }}</p>
            <p v-if="item.project">{{ item.project }}</p>
            <p v-if="item.location">{{ item.location }}</p>
            <p>{{ item.manager }}</p>
            <p v-if="item.assistant">{{ item.assistant }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/* reference-companies */
import alke from '../assets/reference-companies/alke.jpg'
import baki from '../assets/reference-companies/baki-grup.png'
import eras from '../assets/reference-companies/eras.jpg'
import maxx from '../assets/reference-companies/maxx-royal.jpg'
import kilikya from '../assets/reference-companies/kilikya.jpg'
import sunwing from '../assets/reference-companies/sunwing.jpg'

/* project-companies (fallback / ortak görseller) */
import calista from '../assets/project-companies/calista-resort.jpg'
import ela from '../assets/project-companies/ela-quality-resort.jpg'
import susesi from '../assets/project-companies/susesi.jpg'
import carya from '../assets/project-companies/regnum-carya.jpg'
import zeynep from '../assets/project-companies/zeynep-golf.jpg'

const references = [
  {
    title: 'Alke İnşaat',
    period: '2001-2004',
    project: 'Dünya Bankası Projesi',
    manager: 'Proje Müdürü: Enver KARABACAK',
    image: alke,
  },
  {
    title: 'Baki Grup',
    period: '1997-1999',
    project: 'Dünya Bankası Projesi',
    manager: 'Proje Müdürü: Murat EĞRİ',
    image: baki,
  },
  {
    title: 'Eras İnşaat',
    period: '1999-2000',
    project: 'İller Bankası Projesi',
    location: 'Kadriye Köyü',
    manager: 'Proje Müdürü: Ertuğrul BAĞLAN',
    image: eras,
  },
  {
    title: 'Ela Quality Resort Otel',
    period: '2006-2007',
    location: 'Antalya Belek',
    manager: 'Proje Müdürü: Tolga OZAN',
    image: ela,
  },
  {
    title: 'Calista Otel',
    period: '2005-2006',
    location: 'Antalya Belek',
    manager: 'Proje Müdürü: Ali ÖGER',
    image: calista,
  },
  {
    title: 'Susesi Otel',
    period: '2006-2007',
    location: 'Antalya Belek',
    manager: 'Proje Müdürü: Orhan ÖZMEN',
    image: susesi,
  },
  {
    title: 'Carya Golf Club',
    period: '2007-2008',
    project: 'Otel Altyapı Projesi',
    location: 'Antalya Belek',
    manager: 'Proje Müdürü: Tolga OZAN',
    image: carya,
  },
  {
    title: 'Maxx Royal Golf Club (Papillon) Golf Villaları',
    period: '2010-2011',
    location: 'Antalya Belek',
    manager: 'Proje Müdürü: Ömer ÖZTÜRK',
    image: maxx,
  },
  {
    title: 'Zeynep Golf Resort Otel',
    period: '2010-2011',
    location: 'Antalya Belek',
    manager: 'Proje Müdürü: Hasan Basri UZUN',
    assistant: 'Gnl. Müd. Yrd: Mehmet KINIK',
    image: zeynep,
  },
  {
    title: 'Kilikya Palace Hotel',
    period: '2011-2012',
    location: 'Antalya Göynük',
    manager: 'Proje Müdürü: Rıza ÇALIŞKAN',
    image: kilikya,
  },
  {
    title: 'Sunwing Resort Otel',
    period: '2011-2012',
    manager: 'Proje Müdürü: Muharrem ALTUĞ',
    image: sunwing,
  },
]
</script>

<style scoped>
.references {
  padding: 40px 0;
  background: #f7f4ee;
}

.references-head span {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #a67c45;
  text-transform: uppercase;
}

.references-head h2 {
  margin-top: 8px;
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  color: #0f1720;
}

.references-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 20px;
}

.reference-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.reference-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 20px rgba(15, 23, 32, 0.06);
}

.reference-image {
  width: 100%;
  aspect-ratio: 16/10;
  object-fit: cover;
}

.reference-body {
  padding: 12px 14px;
}

.reference-body h3 {
  font-size: 1rem;
  color: #0f1720;
}

.reference-body p {
  margin-top: 4px;
  font-size: 0.85rem;
  color: #5b6570;
}

.reference-period {
  margin-top: 4px;
  font-size: 0.85rem;
  font-weight: 700;
  color: #a67c45;
}

@media (max-width: 768px) {
  .references-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .references-grid {
    grid-template-columns: 1fr;
  }
}
</style>