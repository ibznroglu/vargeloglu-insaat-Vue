<template>
  <section id="faaliyetlerimiz" class="services section">
    <div class="container">
      <div class="section-heading">
        <span class="section-kicker">Faaliyetlerimiz</span>
        <h2>Altyapı, üstyapı ve saha uygulamalarında kapsamlı hizmet</h2>
        <p>
          Vargeloğlu İnşaat olarak farklı ölçeklerde proje ihtiyaçlarına uygun, planlı ve
          kontrollü uygulama süreçleri yürütüyoruz.
        </p>
      </div>

      <div class="services-layout">
        <article class="services-card">
          <h3>Uygulama Alanlarımız</h3>

          <div class="services-grid">
            <div class="service-item">Kanal İşleri</div>
            <div class="service-item">Yağmur Suyu İşleri</div>
            <div class="service-item">Drenaj İşleri</div>
            <div class="service-item">Sulama (Sevli) Kanal Betonu İşleri</div>
            <div class="service-item">Süpürge Beton İşleri</div>
            <div class="service-item">Doğalgaz Hattı</div>
            <div class="service-item">Çevre Düzenlemesi İşleri</div>
            <div class="service-item">Hafriyat İşleri</div>
            <div class="service-item">Taşduvar</div>
            <div class="service-item">Kalıp</div>
            <div class="service-item">Demir</div>
            <div class="service-item">Beton</div>
            <div class="service-item">Duvar</div>
            <div class="service-item">Sıva</div>
            <div class="service-item">Alt Yapı</div>
          </div>
        </article>

        <aside class="services-side-card">
          <span class="side-label">Kalite ve Tecrübe</span>
          <h3>İşleriniz itina ile yapılır</h3>
          <p>
            Saha organizasyonu, malzeme disiplini ve uygulama takibiyle işlerinizi özenli ve
            güvenilir şekilde tamamlıyoruz.
          </p>

          <div class="services-note">
            <strong>Not</strong>
            <p>
              Kanalizasyon ve yağmur suyu bacaları (rögarları) için dairesel saç kalıplarımız
              mevcuttur.
            </p>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  position: relative;
  background:
    linear-gradient(180deg, #f7f4ee 0%, #f3efe8 100%);
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

.services-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(320px, 0.8fr);
  gap: 24px;
  align-items: start;
}

.services-card,
.services-side-card {
  border-radius: 30px;
  box-shadow:
    0 22px 50px rgba(15, 23, 32, 0.08),
    0 10px 24px rgba(15, 23, 32, 0.04);
}

.services-card {
  padding: 30px;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(15, 23, 32, 0.06);
}

.services-card h3,
.services-side-card h3 {
  color: var(--color-heading);
  font-size: 1.4rem;
  line-height: 1.2;
  letter-spacing: -0.03em;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin-top: 24px;
}

.service-item {
  display: flex;
  align-items: center;
  min-height: 64px;
  padding: 16px 18px;
  border-radius: 18px;
  background: var(--color-surface-soft);
  border: 1px solid rgba(15, 23, 32, 0.05);
  color: var(--color-heading);
  font-size: 0.98rem;
  font-weight: 650;
  line-height: 1.5;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.service-item:hover {
  transform: translateY(-2px);
  border-color: rgba(200, 155, 93, 0.24);
  box-shadow: 0 12px 26px rgba(15, 23, 32, 0.06);
}

.services-side-card {
  padding: 28px;
  background:
    linear-gradient(180deg, rgba(15, 23, 32, 0.96), rgba(22, 32, 43, 0.94));
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.side-label {
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 0 12px;
  border-radius: 999px;
  background: rgba(200, 155, 93, 0.16);
  color: #f0d7b4;
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.services-side-card h3 {
  margin-top: 18px;
  color: #ffffff;
  font-size: 1.8rem;
}

.services-side-card > p {
  margin-top: 14px;
  color: rgba(255, 255, 255, 0.76);
  font-size: 0.98rem;
  line-height: 1.75;
}

.services-note {
  margin-top: 24px;
  padding: 20px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.services-note strong {
  display: block;
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 800;
}

.services-note p {
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.94rem;
  line-height: 1.7;
}

@media (max-width: 1100px) {
  .services-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .section-heading {
    margin-bottom: 28px;
  }

  .services-card,
  .services-side-card {
    padding: 22px;
    border-radius: 24px;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 12px;
    margin-top: 20px;
  }

  .service-item {
    min-height: 58px;
    padding: 14px 16px;
    border-radius: 16px;
    font-size: 0.94rem;
  }

  .services-side-card h3 {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .services-card,
  .services-side-card {
    padding: 18px;
    border-radius: 20px;
  }

  .section-heading h2 {
    font-size: 1.8rem;
  }
}
</style>