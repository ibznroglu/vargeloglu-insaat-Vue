<template>
  <section class="company-intro">
    <div class="container">
      <div class="company-intro__card">
        <div class="company-intro__content">

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
            <strong style="color:#524636">Musa VARGELOĞLU</strong>
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
  padding: 20px 0 40px;
  background: #f7f4ee;
}

.company-intro__card {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 24px;
  align-items: center;
  padding: 22px;
  border-radius: 18px;
  background: #fff;
  border: 1px solid #e5e7eb;
}

.company-intro__content h2 {
  margin-top: 8px;
  font-size: clamp(1.4rem, 2.4vw, 2rem);
  line-height: 1.15;
}

.company-intro__content p {
  margin-top: 12px;
  color: #5b6570;
  line-height: 1.7;
}

.company-intro__signature {
  margin-top: 18px;
}

.company-intro__signature strong {
  display: block;
  color: #0f1720;
}

.company-intro__signature span {
  display: block;
  margin-top: 4px;
  font-size: 0.9rem;
  color: #5b6570;
}

.company-intro__media {
  display: flex;
  justify-content: center;
}

.company-intro__media img {
  max-width: 100%;
  height: auto;
  display: block;
}

@media (max-width: 768px) {
  .company-intro {
    padding: 12px 0 32px;
  }

  .company-intro__card {
    grid-template-columns: 1fr;
    padding: 18px;
  }

  .company-intro__media {
    order: -1;
  }
}
</style>