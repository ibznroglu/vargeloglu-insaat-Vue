<template>
  <section id="referanslar" class="references">
    <div class="container">
      <div class="references-head">
        <p class="kicker reveal">Referanslar</p>
        <h2 class="references-title reveal reveal-delay-1">Tamamlanan işlerden seçili referanslar</h2>
      </div>

      <div class="references-grid">
        <article
          v-for="(item, i) in references"
          :key="item.title"
          class="ref-card reveal"
          :class="`reveal-delay-${(i % 3) + 1}`"
        >
          <div class="ref-img-wrap">
            <img :src="item.image" :alt="item.title" class="ref-img" />
          </div>
          <div class="ref-body">
            <span class="ref-period">{{ item.period }}</span>
            <h3>{{ item.title }}</h3>
            <div class="ref-meta">
              <p v-if="item.project">{{ item.project }}</p>
              <p v-if="item.location">{{ item.location }}</p>
              <p>{{ item.manager }}</p>
              <p v-if="item.assistant">{{ item.assistant }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import alke from '../assets/reference-companies/alke.png'
import baki from '../assets/reference-companies/baki-grup.png'
import eras from '../assets/reference-companies/eras.png'
import maxx from '../assets/reference-companies/maxx-royal.png'
import kilikya from '../assets/reference-companies/kilikya.png'
import sunwing from '../assets/reference-companies/sunwing.jpg'
import calista from '../assets/reference-companies/calista.png'
import ela from '../assets/reference-companies/ela-quality.png'
import susesi from '../assets/reference-companies/susesi.png'
import carya from '../assets/reference-companies/regnum-carya.png'
import zeynep from '../assets/reference-companies/zeynep-golf.png'
import caja from '../assets/reference-companies/caja.jpeg'

const references = [
  { title: 'Alke İnşaat', period: '2001-2004', project: 'Dünya Bankası Projesi', manager: 'Proje Müdürü: Enver KARABACAK', image: alke },
  { title: 'Baki Grup', period: '1997-1999', project: 'Dünya Bankası Projesi', manager: 'Proje Müdürü: Murat EĞRİ', image: baki },
  { title: 'Eras İnşaat', period: '1999-2000', project: 'İller Bankası Projesi', location: 'Kadriye, Serik, Antalya', manager: 'Proje Müdürü: Ertuğrul BAĞLAN', image: eras },
  { title: 'Ela Quality Resort Otel', period: '2006-2007', location: 'Belek, Antalya', manager: 'Proje Müdürü: Tolga OZAN', image: ela },
  { title: 'Calista Otel', period: '2005-2006', location: 'Belek, Antalya', manager: 'Proje Müdürü: Ali ÖGER', image: calista },
  { title: 'Susesi Otel', period: '2006-2007', location: 'Belek, Antalya', manager: 'Proje Müdürü: Orhan ÖZMEN', image: susesi },
  { title: 'Carya Golf Club', period: '2007-2008', project: 'Otel Altyapı Projesi', location: 'Belek, Antalya', manager: 'Proje Müdürü: Tolga OZAN', image: carya },
  { title: 'Maxx Royal Golf Club (Papillon) Golf Villaları', period: '2010-2011', location: 'Belek, Antalya', manager: 'Proje Müdürü: Ömer ÖZTÜRK', image: maxx },
  { title: 'Zeynep Golf Resort Otel', period: '2010-2011', location: 'Belek, Antalya', manager: 'Proje Müdürü: Hasan Basri UZUN', assistant: 'Gnl. Müd. Yrd: Mehmet KINIK', image: zeynep },
  { title: 'Kilikya Palace Hotel', period: '2011-2012', location: 'Göynük, Kemer, Antalya', manager: 'Proje Müdürü: Rıza ÇALIŞKAN', image: kilikya },
  { title: 'Sunwing Resort Otel', period: '2011-2012', manager: 'Proje Müdürü: Muharrem ALTUĞ', image: sunwing },
  { title: 'Caja by Maxx Royal Resort Otel', location: 'Türkbükü, Bodrum, Muğla', image: caja },
]
</script>

<style scoped>
.references {
  padding: 100px 0;
  background: var(--color-dark-2);
  position: relative;
}

.references::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--color-gold-muted), transparent);
}

.references-head {
  margin-bottom: 52px;
}

.references-title {
  margin-top: 16px;
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  font-weight: 800;
  color: var(--color-heading);
  letter-spacing: -0.02em;
}

.references-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.ref-card {
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--color-dark-3);
  border: 1px solid var(--color-border);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.ref-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.35);
  border-color: var(--color-border-gold);
}

.ref-img-wrap {
  overflow: hidden;
}

.ref-img {
  aspect-ratio: 16/9;
  object-fit: contain;
  background: #1a2030;
  padding: 24px;
  width: 100%;
  transition: transform 0.5s, filter 0.3s;
  display: block;
  filter: brightness(0.85);
}

.ref-card:hover .ref-img {
  transform: scale(1.04);
  filter: brightness(1);
}

.ref-body {
  padding: 18px 20px 20px;
}

.ref-period {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--color-gold);
  margin-bottom: 8px;
}

.ref-body h3 {
  font-size: 0.98rem;
  font-weight: 700;
  color: var(--color-heading);
  line-height: 1.35;
  letter-spacing: -0.01em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  overflow: hidden;
}

.ref-meta {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.ref-meta p {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  line-height: 1.5;
}

@media (max-width: 900px) {
  .references-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 480px) {
  .references-grid { grid-template-columns: 1fr; }
  .references { padding: 72px 0; }
}
</style>