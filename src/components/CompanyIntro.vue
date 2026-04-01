<template>
  <section class="company-intro">
    <div class="container">
      <div class="company-intro__card">
        <div class="company-intro__content">
          <span class="company-intro__label">Kurumsal</span>

          <h2>Vargeloğlu İnşaat Tic. Ltd. Şti.</h2>

          <p>
            1985 yılından itibaren günümüze kadar devam etmekte olan altyapı, imalat ve montaj,
            hafriyat ve inşaat işlerimiz halen devam etmektedir.
          </p>

          <p>
            Amacımız, siz değerli işverenlerimize en iyi hizmeti vermek ve sizlerin bizim için çok
            değerli düşüncelerinizin olumlu olması için var gücümüzle çalışmaktır.
          </p>

          <p>
            Vargeloğlu İnşaat’ı tercih ettiğiniz için teşekkür eder, saygılarımızı arz ederiz.
          </p>

          <div class="company-intro__signature">
            <strong>Musa VARGELOĞLU</strong>
            <span>Genel Koordinatör</span>
          </div>
        </div>

        <div class="company-intro__media">
          <img src="../assets/company-intro.jpg" alt="İş makineleri" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.company-intro {
  padding: 20px 0 24px;
  background: #f7f4ee;
}

.company-intro__card {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
  gap: 22px;
  align-items: center;
  padding: 24px;
  border-radius: 22px;
  background:
    radial-gradient(circle at top right, rgba(200, 155, 93, 0.08), transparent 28%),
    rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(15, 23, 32, 0.08);
  box-shadow: 0 14px 36px rgba(15, 23, 32, 0.05);
}

.company-intro__label {
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

.company-intro__content h2 {
  margin-top: 10px;
  color: #0f1720;
  font-size: clamp(1.55rem, 2.5vw, 2.2rem);
  line-height: 1.08;
  letter-spacing: -0.04em;
}

.company-intro__content p {
  margin-top: 12px;
  max-width: 62ch;
  color: #5b6570;
  font-size: 0.96rem;
  line-height: 1.72;
}

.company-intro__signature {
  margin-top: 18px;
  padding-top: 14px;
  border-top: 1px solid rgba(15, 23, 32, 0.08);
}

.company-intro__signature strong {
  display: block;
  color: #524636;
  font-size: 0.98rem;
  font-weight: 800;
  letter-spacing: -0.01em;
}

.company-intro__signature span {
  display: block;
  margin-top: 4px;
  font-size: 0.88rem;
  color: #5b6570;
}

.company-intro__media {
  display: flex;
  justify-content: center;
  align-items: center;
}

.company-intro__media img {
  width: 100%;
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: 18px;
  border: 1px solid rgba(15, 23, 32, 0.06);
}

@media (max-width: 768px) {
  .company-intro {
    padding: 12px 0 20px;
  }

  .company-intro__card {
    grid-template-columns: 1fr;
    padding: 18px;
    border-radius: 18px;
  }

  .company-intro__media {
    order: -1;
  }

  .company-intro__content h2 {
    font-size: 1.65rem;
  }

  .company-intro__content p {
    font-size: 0.94rem;
  }
}
</style>