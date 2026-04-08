<template>
  <section id="referanslar" class="references">
    <div class="container">
      <div class="references-head">
        <p class="kicker reveal">{{ t.references.kicker }}</p>
      </div>

      <div class="references-grid">
        <div
          v-for="(item, i) in references"
          :key="i"
          class="ref-card reveal"
          :class="`reveal-delay-${(i % 4) + 1}`"
        >
          <img :src="item.image" :alt="item.title" class="ref-img" />
          <span class="ref-name">{{ item.title }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLocale } from '../composables/useLocale'
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

const { t } = useLocale()

const references = [
  { title: 'Alke İnşaat', image: alke },
  { title: 'Baki Grup', image: baki },
  { title: 'Eras İnşaat', image: eras },
  { title: 'Ela Quality Resort', image: ela },
  { title: 'Calista Otel', image: calista },
  { title: 'Susesi Otel', image: susesi },
  { title: 'Carya Golf Club', image: carya },
  { title: 'Maxx Royal', image: maxx },
  { title: 'Zeynep Golf Resort', image: zeynep },
  { title: 'Kilikya Palace Hotel', image: kilikya },
  { title: 'Sunwing Resort', image: sunwing },
  { title: 'Caja by Maxx Royal', image: caja },
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
  margin-bottom: 48px;
}

.references-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.ref-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 32px 24px;
  background: var(--color-dark-3);
  border-right: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  transition: background 0.3s;
  cursor: default;
}

.ref-card:hover {
  background: rgba(201, 168, 76, 0.04);
}

.ref-img {
  width: 100%;
  height: 64px;
  object-fit: contain;
  filter: brightness(0.6) grayscale(0.2);
  transition: filter 0.3s;
}

.ref-card:hover .ref-img {
  filter: brightness(1) grayscale(0);
}

.ref-name {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-text-muted);
  text-align: center;
  letter-spacing: 0.02em;
  transition: color 0.3s;
  line-height: 1.4;
}

.ref-card:hover .ref-name {
  color: var(--color-gold);
}

@media (max-width: 1024px) {
  .references-grid { grid-template-columns: repeat(4, 1fr); }
}

@media (max-width: 900px) {
  .references-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 600px) {
  .references-grid { grid-template-columns: repeat(2, 1fr); }
  .references { padding: 72px 0; }
  .ref-card { padding: 24px 16px; }
}
</style>