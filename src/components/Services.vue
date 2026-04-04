<template>
  <section id="faaliyetlerimiz" class="services">
    <div class="container">
      <div class="services-head">
        <p class="kicker reveal">Faaliyetlerimiz</p>
        <h2 class="services-title reveal reveal-delay-1">
          Altyapı ve saha uygulamalarında<br />kapsamlı hizmet
        </h2>
        <p class="services-desc reveal reveal-delay-2">
          Farklı ölçeklerde proje ihtiyaçlarına uygun altyapı, hafriyat ve uygulama
          çözümleri sunuyoruz.
        </p>
      </div>

      <div class="services-grid">
        <div
          v-for="(item, i) in services"
          :key="item"
          class="service-card reveal"
          :class="`reveal-delay-${(i % 4) + 1}`"
        >
          <div class="service-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L18 10L10 18L2 10L10 2Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
            </svg>
          </div>
          <span>{{ item }}</span>
        </div>
      </div>

      <p class="services-note reveal">
        İşleriniz itina ile yapılır. Kanalizasyon ve yağmur suyu bacaları için dairesel saç kalıplarımız mevcuttur.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  'Kanal İşleri', 'Yağmur Suyu İşleri', 'Drenaj İşleri',
  'Sulama Kanal Betonu', 'Süpürge Beton', 'Doğalgaz Hattı',
  'Çevre Düzenleme', 'Hafriyat', 'Taşduvar',
  'Kalıp', 'Demir', 'Beton',
  'Duvar', 'Sıva', 'Alt Yapı',
]
</script>

<style scoped>
.services {
  padding: 100px 0;
  background: var(--color-dark);
  position: relative;
}

.services::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--color-gold-muted), transparent);
}

.services-head {
  max-width: 700px;
  margin-bottom: 56px;
}

.services-title {
  margin-top: 16px;
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  font-weight: 800;
  line-height: 1.15;
  color: var(--color-heading);
  letter-spacing: -0.02em;
}

.services-desc {
  margin-top: 16px;
  font-size: 0.97rem;
  line-height: 1.75;
  color: var(--color-text-muted);
  max-width: 56ch;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
}

.service-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 18px;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background: rgba(255,255,255,0.02);
  color: rgba(255,255,255,0.75);
  font-size: 0.88rem;
  font-weight: 500;
  transition: border-color 0.2s, background 0.2s, color 0.2s;
  cursor: default;
}

.service-card:hover {
  border-color: var(--color-border-gold);
  background: var(--color-gold-muted);
  color: var(--color-gold-light);
}

.service-icon {
  color: var(--color-gold);
  flex-shrink: 0;
  opacity: 0.7;
}

.service-card:hover .service-icon {
  opacity: 1;
}

.services-note {
  margin-top: 36px;
  padding: 20px 24px;
  border-left: 2px solid var(--color-gold);
  background: rgba(201,168,76,0.06);
  border-radius: 0 8px 8px 0;
  font-size: 0.9rem;
  color: var(--color-text-muted);
  line-height: 1.7;
  max-width: 72ch;
}

@media (max-width: 1024px) {
  .services-grid { grid-template-columns: repeat(4, 1fr); }
}

@media (max-width: 768px) {
  .services { padding: 72px 0; }
  .services-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 480px) {
  .services-grid { grid-template-columns: 1fr 1fr; }
}
</style>