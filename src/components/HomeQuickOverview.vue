<template>
  <section class="quick-overview" aria-label="Hızlı genel bakış">
    <div class="container">
      <div class="overview-grid">
        <article class="overview-card overview-card-primary">
          <span class="card-eyebrow">Faaliyetlerimiz</span>
          <h2>Hafriyat, altyapı ve çevre düzenlemede kontrollü saha uygulamaları</h2>
          <p>
            Kazı, dolgu, tesviye, saha hazırlığı ve uygulama süreçlerinde planlı, güvenli ve
            sürdürülebilir bir çalışma modeliyle ilerliyoruz.
          </p>
          <a href="#faaliyetlerimiz">Detayları İnceleyin</a>
        </article>

        <article class="overview-card">
          <span class="card-eyebrow">Projeler</span>
          <h3>Farklı ölçeklerde uygulama deneyimi</h3>
          <p>
            Konut çevre düzenlemeleri, büyük yaşam alanları, altyapı hazırlıkları ve saha
            organizasyonlarında sonuç odaklı ilerliyoruz.
          </p>
          <a href="#projeler">Projelere Göz Atın</a>
        </article>

        <article class="overview-card">
          <span class="card-eyebrow">İletişim</span>
          <h3>Teklif ve iş birliği için hızlı iletişim</h3>
          <p>
            Yeni proje talepleri, keşif süreçleri ve kurumsal iş birlikleri için bizimle doğrudan
            iletişime geçebilirsiniz.
          </p>
          <a href="#iletisim">İletişime Geçin</a>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.quick-overview {
  position: relative;
  margin-top: -70px;
  padding: 0 0 32px;
  z-index: 3;
}

.overview-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr;
  gap: 18px;
  align-items: stretch;
}

.overview-card {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 28px;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(15, 23, 32, 0.06);
  box-shadow:
    0 22px 50px rgba(15, 23, 32, 0.08),
    0 10px 24px rgba(15, 23, 32, 0.04);
  backdrop-filter: blur(14px);
}

.overview-card-primary {
  background:
    linear-gradient(135deg, rgba(15, 23, 32, 0.96), rgba(22, 32, 43, 0.92));
  color: #ffffff;
}

.card-eyebrow {
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  min-height: 34px;
  padding: 0 12px;
  border-radius: 999px;
  background: rgba(200, 155, 93, 0.12);
  color: var(--color-primary);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.overview-card-primary .card-eyebrow {
  background: rgba(200, 155, 93, 0.16);
  color: #f0d7b4;
}

.overview-card h2,
.overview-card h3 {
  margin-top: 18px;
  color: var(--color-heading);
  letter-spacing: -0.04em;
}

.overview-card h2 {
  font-size: clamp(1.7rem, 2.8vw, 2.4rem);
  line-height: 1.08;
}

.overview-card h3 {
  font-size: 1.35rem;
  line-height: 1.18;
}

.overview-card-primary h2 {
  color: #ffffff;
}

.overview-card p {
  margin-top: 16px;
  color: var(--color-text-muted);
  font-size: 0.98rem;
  line-height: 1.75;
}

.overview-card-primary p {
  color: rgba(255, 255, 255, 0.78);
}

.overview-card a {
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  margin-top: auto;
  padding-top: 22px;
  color: var(--color-heading);
  font-size: 0.95rem;
  font-weight: 800;
  letter-spacing: -0.01em;
}

.overview-card a::after {
  content: '→';
  margin-left: 8px;
  transition: transform 0.2s ease;
}

.overview-card a:hover::after {
  transform: translateX(3px);
}

.overview-card-primary a {
  color: #ffffff;
}

@media (max-width: 1100px) {
  .quick-overview {
    margin-top: 24px;
    padding-bottom: 24px;
  }

  .overview-grid {
    grid-template-columns: 1fr;
  }

  .overview-card {
    border-radius: 24px;
  }
}

@media (max-width: 768px) {
  .overview-card {
    padding: 22px;
    border-radius: 22px;
  }

  .overview-card h3 {
    font-size: 1.2rem;
  }

  .overview-card p {
    font-size: 0.94rem;
    line-height: 1.68;
  }
}

@media (max-width: 480px) {
  .quick-overview {
    padding-bottom: 18px;
  }

  .overview-card {
    padding: 20px 18px;
    border-radius: 20px;
  }

  .overview-card h2 {
    font-size: 1.55rem;
  }
}
</style>