<template>
  <section id="iletisim" class="contact">
    <div class="container contact-inner">
      <div class="contact-content">
        <span class="contact-eyebrow">İletişim</span>
        <h2>Projeniz için bizimle iletişime geçin</h2>
        <p>
          Hafriyat, altyapı, çevre düzenleme ve inşaat işleriniz için bizimle doğrudan
          iletişime geçebilirsiniz.
        </p>
      </div>

      <div class="contact-card">
        <p>
          <strong>Adres</strong>
          <span>Kadriye Mh. 258 Sk. No:19/1 Serik / ANTALYA</span>
        </p>

        <p>
          <strong>Cep</strong>
          <a href="tel:+905339674066">0 533 967 40 66</a>
        </p>

        <p>
          <strong>E-posta</strong>
          <a href="mailto:vargelogluinsaat@hotmail.com">vargelogluinsaat@hotmail.com</a>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 40px 0 56px;
  background: #f3efe8;
}

.contact-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: start;
}

.contact-eyebrow {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #a67c45;
  text-transform: uppercase;
}

.contact-content h2 {
  margin-top: 8px;
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  color: #0f1720;
}

.contact-content p {
  margin-top: 12px;
  max-width: 48ch;
  color: #5b6570;
  line-height: 1.7;
}

.contact-card {
  padding: 18px;
  border-radius: 14px;
  background: #fff;
  border: 1px solid #e5e7eb;
}

.contact-card p {
  margin: 0;
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.contact-card p + p {
  border-top: 1px solid #eceff2;
}

.contact-card strong {
  color: #0f1720;
  font-size: 0.9rem;
}

.contact-card span,
.contact-card a {
  color: #5b6570;
  line-height: 1.6;
}

.contact-card a:hover {
  color: #0f1720;
}

@media (max-width: 768px) {
  .contact-inner {
    grid-template-columns: 1fr;
  }
}
</style>