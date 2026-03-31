<template>
  <section class="about">
    <div class="container">

      <div class="image">
        <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122" alt="construction" />
      </div>

      <div class="content">
        <h2>Hakkımızda</h2>

        <p>
          Vargeloğlu İnşaat olarak altyapı ve hafriyat başta olmak üzere
          geniş bir yelpazede profesyonel hizmet sunmaktayız.
        </p>

        <h3>Faaliyetlerimiz</h3>

        <ul>
          <li>Kanal İşleri</li>
          <li>Yağmur Suyu İşleri</li>
          <li>Drenaj İşleri</li>
          <li>Sulama (Sevli) Kanal beton işleri</li>
          <li>Süpürge Beton İşleri</li>
          <li>Doğalgaz Hattı</li>
          <li>Çevre Düzenlemesi İşleri</li>
          <li>Hafriyat İşleri</li>
          <li>Taşduvar</li>
          <li>Kalıp</li>
          <li>Demir</li>
          <li>Beton</li>
          <li>Duvar</li>
          <li>Sıva</li>
          <li>Alt Yapı İşleri</li>
        </ul>

        <p class="note">
          İşleriniz itina ile yapılır.
        </p>

        <p class="note">
          Not: Kanalizasyon ve yağmur suyu bacaları (rögarları) için
          dairesel saç kalıplarımız mevcuttur.
        </p>
      </div>

    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 60px 20px;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  gap: 40px;
  align-items: center;
}

/* Image */
.image img {
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  object-fit: cover;
}

/* Content */
.content h2 {
  margin-bottom: 16px;
}

.content h3 {
  margin-top: 20px;
}

ul {
  margin-top: 10px;
  padding-left: 18px;
}

li {
  margin-bottom: 6px;
}

.note {
  margin-top: 15px;
  font-weight: 500;
}

/* Responsive */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    text-align: center;
  }
}
</style>