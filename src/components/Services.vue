<template>
  <section id="faaliyetlerimiz" class="services">
    <div class="container">
      <div class="services-shell">
        <div class="services-head">
          <span>Faaliyetlerimiz</span>
          <h2>Altyapı ve saha uygulamalarında kapsamlı hizmet</h2>
          <p>
            Farklı ölçeklerde proje ihtiyaçlarına uygun altyapı, hafriyat ve uygulama
            çözümleri sunuyoruz.
          </p>
        </div>

        <div class="services-grid">
          <div v-for="item in services" :key="item" class="service-item">
            {{ item }}
          </div>
        </div>

        <p class="services-note">
          İşleriniz itina ile yapılır. Kanalizasyon ve yağmur suyu bacaları için dairesel saç
          kalıplarımız mevcuttur.
        </p>
      </div>
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
  padding: 12px 0 40px;
  background: #f3efe8;
}

.services-shell {
  padding: 24px;
  border-radius: 22px;
  background:
    radial-gradient(circle at top right, rgba(200, 155, 93, 0.08), transparent 28%),
    rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(15, 23, 32, 0.08);
  box-shadow: 0 14px 36px rgba(15, 23, 32, 0.05);
}

.services-head {
  max-width: 760px;
}

.services-head span {
  display: inline-flex;
  align-items: center;
  min-height: 26px;
  padding: 0 10px;
  border-radius: 999px;
  background: rgba(200, 155, 93, 0.14);
  color: #a67c45;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.services-head h2 {
  margin-top: 10px;
  color: #0f1720;
  font-size: clamp(1.55rem, 2.5vw, 2.2rem);
  line-height: 1.08;
  letter-spacing: -0.04em;
}

.services-head p {
  margin-top: 10px;
  max-width: 58ch;
  color: #5b6570;
  font-size: 0.96rem;
  line-height: 1.7;
}

.services-grid {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}

.service-item {
  padding: 12px 14px;
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid rgba(15, 23, 32, 0.08);
  color: #24303b;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.4;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.service-item:hover {
  transform: translateY(-1px);
  border-color: rgba(200, 155, 93, 0.28);
  box-shadow: 0 8px 18px rgba(15, 23, 32, 0.04);
}

.services-note {
  margin-top: 16px;
  color: #5b6570;
  font-size: 0.86rem;
  line-height: 1.65;
}

@media (max-width: 768px) {
  .services {
    padding: 8px 0 32px;
  }

  .services-shell {
    padding: 18px;
    border-radius: 18px;
  }

  .services-grid {
    grid-template-columns: 1fr 1fr;
  }

  .services-head h2 {
    font-size: 1.65rem;
  }

  .services-head p,
  .services-note {
    font-size: 0.92rem;
  }
}

@media (max-width: 480px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>