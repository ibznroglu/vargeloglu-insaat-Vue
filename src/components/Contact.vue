<template>
  <section id="iletisim" class="contact">
    <div class="contact-bg-line"></div>
    <div class="container contact-inner">

      <div class="contact-content">
        <p class="kicker reveal">İletişim</p>
        <h2 class="contact-title reveal reveal-delay-1">
          Projeniz için<br />bizimle iletişime geçin
        </h2>
        <p class="contact-desc reveal reveal-delay-2">
          Hafriyat, altyapı, çevre düzenleme ve inşaat işleriniz için bizimle doğrudan
          iletişime geçebilirsiniz.
        </p>
      </div>

      <div class="contact-right reveal reveal-delay-2">
        <div class="contact-card">
          <div class="contact-item">
            <div class="contact-item-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <strong>Adres</strong>
              <span>Kadriye Mh. 260 Sk. No:17/1 Serik / ANTALYA</span>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-item-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.08 6.08l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
              </svg>
            </div>
            <div>
              <strong>Cep</strong>
              <a href="tel:+905339674066">0 533 967 40 66</a>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-item-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div>
              <strong>E-posta</strong>
              <a href="mailto:vargelogluinsaat@hotmail.com">vargelogluinsaat@hotmail.com</a>
            </div>
          </div>
        </div>

        <div class="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3191.312210465339!2d31.013537275649202!3d36.88287867222365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzbCsDUyJzU4LjQiTiAzMcKwMDAnNTguMCJF!5e0!3m2!1str!2str!4v1775393895972!5m2!1str!2str"
            width="100%"
            height="100%"
            style="border:0;"
            :allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Vargeloğlu İnşaat Konum"
          ></iframe>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 100px 0 120px;
  background: var(--color-dark);
  position: relative;
  overflow: hidden;
}

.contact::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--color-gold-muted), transparent);
}

.contact-bg-line {
  position: absolute;
  bottom: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(201,168,76,0.07), transparent 70%);
  pointer-events: none;
}

.contact-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: start;
}

.contact-title {
  margin-top: 16px;
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.5vw, 3rem);
  font-weight: 800;
  line-height: 1.1;
  color: var(--color-heading);
  letter-spacing: -0.02em;
}

.contact-desc {
  margin-top: 20px;
  font-size: 0.97rem;
  line-height: 1.8;
  color: var(--color-text-muted);
  max-width: 48ch;
}

.contact-right {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-card {
  background: var(--color-dark-2);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  overflow: hidden;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 24px 28px;
  transition: background 0.2s;
}

.contact-item + .contact-item {
  border-top: 1px solid var(--color-border);
}

.contact-item:hover {
  background: rgba(255,255,255,0.02);
}

.contact-item-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: var(--color-gold-muted);
  color: var(--color-gold);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact-item div {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.contact-item strong {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.contact-item span,
.contact-item a {
  font-size: 0.95rem;
  color: rgba(255,255,255,0.8);
  line-height: 1.5;
}

.contact-item a:hover {
  color: var(--color-gold);
}

.contact-map {
  width: 100%;
  height: 260px;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid var(--color-border);
  position: relative;
}

.contact-map::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 20px;
  box-shadow: inset 0 0 0 1px var(--color-border-gold);
  pointer-events: none;
}

.contact-map iframe {
  display: block;
  width: 100%;
  height: 100%;
  filter: grayscale(1) brightness(0.6) contrast(1.2) sepia(0.2);
  transition: filter 0.4s ease;
}

.contact-map:hover iframe {
  filter: grayscale(0.6) brightness(0.75) contrast(1.1) sepia(0.1);
}

@media (max-width: 900px) {
  .contact-inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .contact {
    padding: 72px 0;
  }
  .contact-map {
    height: 220px;
  }
}

@media (max-width: 480px) {
  .contact-map {
    height: 200px;
  }
}
</style>