<template>
  <section id="referanslar" class="references">
    <div class="container">
      <div class="references-head">
        <p class="kicker reveal">{{ t.references.kicker }}</p>
      </div>

      <div class="references-grid">
        <a
          v-for="(item, i) in references"
          :key="i"
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
          class="ref-card reveal"
          :class="`reveal-delay-${(i % 4) + 1}`"
          :aria-label="item.title"
        >
          <img :src="item.image" :alt="item.title" class="ref-img" />
          <span class="ref-name">{{ item.title }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLocale } from '../composables/useLocale'
import regnumCarya from '../assets/reference-companies/regnum-carya-hotel.jpg'
import regnumCrown from '../assets/reference-companies/regnum-crown.jpg'
import caryaGolf from '../assets/reference-companies/carya-golf.jpg'
import bodrumGolf from '../assets/reference-companies/regnum-golf-bodrum.png'
import ankaraGolf from '../assets/reference-companies/regnum-golf-ankara.png'
import kiris from '../assets/reference-companies/maxx-kiris.png'
import caja from '../assets/reference-companies/caja.jpeg'
import belvil from '../assets/reference-companies/papillon-belvil.jpg'
import zeugma from '../assets/reference-companies/papillon-zeugma.jpg'
import otium from '../assets/reference-companies/otium.webp'
import calista from '../assets/reference-companies/calista.png'
import ela from '../assets/reference-companies/ela-quality.jpg'
import susesi from '../assets/reference-companies/susesi.webp'
import kilikya from '../assets/reference-companies/kilikya.png'
import sunwing from '../assets/reference-companies/sunwing.jpg'
import zeynep from '../assets/reference-companies/zeynep-golf.png'
import asat from '../assets/reference-companies/asat.jpg'
import atilla from '../assets/reference-companies/atilla.gif'
import antalyaOsb from '../assets/reference-companies/antalya-osb.jpg'
import karapinarOsb from '../assets/reference-companies/karapinar-osb.png'
import alke from '../assets/reference-companies/alke.png'
import baki from '../assets/reference-companies/baki-grup.png'
import eras from '../assets/reference-companies/eras.png'

const { t } = useLocale()

const references = [
  { title: 'Regnum Carya Hotel',                    image: regnumCarya,  url: 'https://www.regnumhotels.com/tr/otellerimiz/regnum-carya/' },
  { title: 'Regnum Carya Golf Club',                image: caryaGolf,    url: 'https://www.regnumhotels.com/golf/carya-golf-club/' },
  { title: 'Regnum Golf & Country Club, Bodrum',    image: bodrumGolf,   url: 'https://www.regnum.com.tr/projects/regnum-golf-country-bodrum/' },
  { title: 'Regnum Golf & Country Club, Ankara',    image: ankaraGolf,   url: 'https://www.regnum.com.tr/projects/regnum-ankara-golf-country/' },
  { title: 'Regnum The Crown Belek',                image: regnumCrown,  url: 'https://www.regnumhotels.com/regnum-the-crown/' },
  { title: 'Maxx Royal Kemer Resort',               image: kiris,        url: 'https://www.maxxroyal.com/tr/kemer-resort' },
  { title: 'Caja by Maxx Royal',                    image: caja,         url: 'https://www.maxxroyal.com/caja-by-maxx-royal' },
  { title: 'Papillon Belvil Hotel',                 image: belvil,       url: 'https://papillon.com.tr/belvil/papillon-belvil/' },
  { title: 'Papillon Zeugma Relaxury',              image: zeugma,       url: 'https://papillon.com.tr/zeugma/' },
  { title: 'Otium Hotel, Titreyengöl',              image: otium,        url: 'https://marvidahotels.com/tr/oteller/marvida-family-eco' },
  { title: 'Calista Luxury Resort',                 image: calista,      url: 'https://calista.com.tr/' },
  { title: 'Ela Quality Resort',                    image: ela,          url: 'https://www.elahotels.com/tr/otellerimiz/ela-excellence-resort-belek/' },
  { title: 'Susesi Luxury Resort',                  image: susesi,       url: 'https://www.susesihotel.com/tr/' },
  { title: 'Kilikya Palace Hotel',                  image: kilikya,      url: 'https://www.kilikyapalace.com/tr' },
  { title: 'Barut Sunwing Resort Hotel',            image: sunwing,      url: 'https://baruthotels.com/tr/news/great-transformation-at-barut-sunwing-side-beach' },
  { title: 'Zeynep Golf Resort',                    image: zeynep,       url: 'https://sentido-zeynep-resort.belek-hotels.com/tr/' },
  { title: 'Antalya Su ve Atıksu İdaresi',          image: asat,         url: 'https://www.asat.gov.tr/tr/1' },
  { title: 'Antalya OSB',                           image: antalyaOsb,   url: 'https://www.antalyaosb.org.tr/tr' },
  { title: 'Karapınar OSB',                         image: karapinarOsb, url: 'https://sp.sanayigazetesi.com.tr/listing/konya-karapinar-osb/' },
  { title: 'Atilla İnşaat',                         image: atilla,       url: 'https://www.atillainsaat.com/TR/Genel/Default.aspx?F6E10F8892433CFFAAF6AA849816B2EF4376734BED947CDE' },
  { title: 'Alke İnşaat',                           image: alke,         url: 'https://www.alke.com.tr/' },
  { title: 'Baki Grup',                             image: baki,         url: 'https://bakigrup.com/' },
  { title: 'Eras İnşaat',                           image: eras,         url: 'https://www.erasinsaat.com.tr/' },
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
  cursor: pointer;
  text-decoration: none;
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