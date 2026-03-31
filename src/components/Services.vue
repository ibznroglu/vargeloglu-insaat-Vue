<template>
  <section id="faaliyetlerimiz" class="services">
    <div class="container">
      <div class="services-head">
        <span>Faaliyetlerimiz</span>
        <h2>Altyapı ve saha uygulamalarında kapsamlı hizmet</h2>
      </div>

      <div class="services-grid">
        <div v-for="item in services" :key="item" class="service-item">
          {{ item }}
        </div>
      </div>

      <p class="services-note">
        İşleriniz itina ile yapılır. — Kanalizasyon ve yağmur suyu bacaları için dairesel saç kalıplarımız mevcuttur.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  'Kanal İşleri',
  'Yağmur Suyu İşleri',
  'Drenaj İşleri',
  'Sulama Kanal Betonu',
  'Süpürge Beton',
  'Doğalgaz Hattı',
  'Çevre Düzenleme',
  'Hafriyat',
  'Taşduvar',
  'Kalıp',
  'Demir',
  'Beton',
  'Duvar',
  'Sıva',
  'Alt Yapı',
]
</script>

<style scoped>
.services {
  padding: 40px 0;
  background: #f3efe8;
}

.services-head span {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #a67c45;
  text-transform: uppercase;
}

.services-head h2 {
  margin-top: 8px;
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  color: #0f1720;
}

.services-grid {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.service-item {
  padding: 10px 14px;
  border-radius: 10px;
  background: #fff;
  border: 1px solid #e5e7eb;
  font-size: 0.9rem;
}

.services-note {
  margin-top: 16px;
  font-size: 0.85rem;
  color: #5b6570;
}

/* mobile */
@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>