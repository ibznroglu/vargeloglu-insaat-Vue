<template>
  <section id="referanslar" class="references">
    <div class="container">
      <div class="references-head">
        <span>Referanslar</span>
        <h2>Tamamlanan işlerden seçili referanslar</h2>
      </div>

      <div class="references-grid">
        <article v-for="item in references" :key="item.title" class="reference-card">
          <img :src="testImage" :alt="item.title" class="reference-image" />

          <div class="reference-body">
            <h3>{{ item.title }}</h3>
            <p class="reference-period">{{ item.period }}</p>
            <p>{{ item.project }}</p>
            <p>{{ item.location }}</p>
            <p>{{ item.manager }}</p>
            <p v-if="item.assistant">{{ item.assistant }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import testImage from '../assets/test.jpg'

const references = [
  {
    title: 'Alke İnşaat',
    period: '2001-2004',
    project: 'Dünya Bankası Projesi',
    location: '',
    manager: 'Proje Müdürü: Enver KARABACAK',
  },
  {
    title: 'Baki Grup',
    period: '1997-1999',
    project: 'Dünya Bankası Projesi',
    location: '',
    manager: 'Proje Müdürü: Murat EĞRİ',
  },
  {
    title: 'Eras İnşaat',
    period: '1999-2000',
    project: 'İller Bankası Projesi',
    location: 'Kadriye Köyü',
    manager: 'Proje Müdürü: Ertuğrul BAĞLAN',
  },
  {
    title: 'Ela Quality Resort Otel',
    period: '2006-2007',
    project: '',
    location: 'Antalya Belek',
    manager: 'Proje Müdürü: Tolga OZAN',
  },
  {
    title: 'Calista Otel',
    period: '2005-2006',
    project: '',
    location: 'Antalya Belek',
    manager: 'Proje Müdürü: Ali ÖGER',
  },
  {
    title: 'Susesi Otel',
    period: '2006-2007',
    project: '',
    location: 'Antalya Belek',
    manager: 'Proje Müdürü: Orhan ÖZMEN',
  },
  {
    title: 'Carya Golf Club',
    period: '2007-2008',
    project: 'Otel Altyapı Projesi',
    location: 'Antalya Belek',
    manager: 'Proje Müdürü: Tolga OZAN',
  },
  {
    title: 'Max Royal Golf Club (Papillon) Golf Villaları',
    period: '2010-2011',
    project: '',
    location: 'Antalya Belek',
    manager: 'Proje Müdürü: Ömer ÖZTÜRK',
  },
  {
    title: 'Zeynep Golf Resort Otel',
    period: '2010-2011',
    project: '',
    location: 'Antalya Belek',
    manager: 'Proje Müdürü: Hasan Basri UZUN',
    assistant: 'Gnl. Müd. Yrd: Mehmet KINIK',
  },
  {
    title: 'Kilikya Palace Hotel',
    period: '2011-2012',
    project: '',
    location: 'Antalya Göynük',
    manager: 'Proje Müdürü: Rıza ÇALIŞKAN',
  },
  {
    title: 'Sunwing Resort Otel',
    period: '2011-2012',
    project: '',
    location: '',
    manager: 'Proje Müdürü: Muharrem ALTUĞ',
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
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.reference-card {
  overflow: hidden;
  border-radius: 14px;
  background: #fff;
  border: 1px solid #e5e7eb;
}

.reference-image {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  display: block;
}

.reference-body {
  padding: 12px 14px;
}

.reference-body h3 {
  font-size: 1rem;
  color: #0f1720;
  line-height: 1.3;
}

.reference-period {
  margin-top: 4px;
  font-size: 0.85rem;
  font-weight: 700;
  color: #a67c45;
}

.reference-body p {
  margin-top: 4px;
  font-size: 0.85rem;
  color: #5b6570;
  line-height: 1.5;
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