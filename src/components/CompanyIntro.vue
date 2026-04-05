<template>
  <section class="intro">
    <div class="container intro-inner">

      <div class="intro-media reveal">
        <img src="../assets/company-intro.png" alt="İş makineleri" />
        <div class="intro-media-badge">
          <span class="badge-num">1985</span>
          <span class="badge-label">Kuruluş Yılı</span>
        </div>
      </div>

      <div class="intro-content">
        <p class="kicker reveal">Kurumsal</p>
        <h2 class="intro-title reveal reveal-delay-1">Vargeloğlu İnşaat Tic. Ltd. Şti.</h2>

        <p class="intro-text reveal reveal-delay-2">
          1985 yılından itibaren günümüze kadar devam etmekte olan altyapı, imalat ve montaj,
          hafriyat ve inşaat işlerimiz halen devam etmektedir.
        </p>
        <p class="intro-text reveal reveal-delay-3">
          Amacımız, siz değerli işverenlerimize en iyi hizmeti vermek ve sizlerin bizim için çok
          değerli düşüncelerinizin olumlu olması için var gücümüzle çalışmaktır.
        </p>
        <p class="intro-text reveal reveal-delay-4">
          Vargeloğlu İnşaat'ı tercih ettiğiniz için teşekkür eder, saygılarımızı arz ederiz.
        </p>

        <div class="intro-signature reveal reveal-delay-4">
          <div class="sig-line"></div>
          <strong>Musa VARGELOĞLU</strong>
          <span>Genel Koordinatör</span>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.intro {
  padding: 100px 0;
  background: var(--color-dark-2);
  position: relative;
  overflow: hidden;
}

.intro::before {
  content: '';
  position: absolute;
  top: 0; right: 0;
  width: 40%;
  height: 100%;
  background: radial-gradient(ellipse at right center, rgba(201,168,76,0.06), transparent 70%);
  pointer-events: none;
}

.intro-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: center;
}

.intro-media {
  position: relative;
}

.intro-media img {
  width: 100%;
  height: 480px;
  object-fit: cover;
  border-radius: 16px;
  display: block;
}

.intro-media-badge {
  position: absolute;
  bottom: -20px;
  right: -20px;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: var(--color-gold);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 32px rgba(201,168,76,0.35);
}

.badge-num {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--color-dark);
  line-height: 1;
}

.badge-label {
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-dark);
  margin-top: 3px;
  opacity: 0.75;
}

.intro-title {
  margin-top: 16px;
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  font-weight: 800;
  line-height: 1.1;
  color: var(--color-heading);
  letter-spacing: -0.02em;
}

.intro-text {
  margin-top: 16px;
  color: var(--color-text-muted);
  font-size: 0.97rem;
  line-height: 1.8;
  max-width: 54ch;
}

.intro-signature {
  margin-top: 40px;
  padding-top: 0;
}

.sig-line {
  width: 48px;
  height: 2px;
  background: var(--color-gold);
  margin-bottom: 14px;
}

.intro-signature strong {
  display: block;
  font-size: 1rem;
  font-weight: 800;
  color: var(--color-heading);
  letter-spacing: -0.01em;
}

.intro-signature span {
  display: block;
  margin-top: 4px;
  font-size: 0.85rem;
  color: var(--color-gold);
  font-weight: 500;
}

@media (max-width: 900px) {
  .intro-inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .intro-media img { height: 320px; }
  .intro-media-badge { width: 90px; height: 90px; right: 12px; bottom: -12px; }
  .badge-num { font-size: 1.1rem; }
}
</style>