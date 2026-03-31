<template>
  <section class="services">
    <h2>Hizmetlerimiz</h2>

    <div class="grid">
      <div class="card">
        <h3>Hafriyat</h3>
        <p>Altyapı kazı, zemin hazırlama ve inşaat hafriyat hizmetleri.</p>
      </div>

      <div class="card">
        <h3>Altyapı</h3>
        <p>Profesyonel altyapı çözümleri ve saha uygulamaları.</p>
      </div>

      <div class="card">
        <h3>Otel Hafriyatları</h3>
        <p>Büyük ölçekli otel projeleri için hafriyat çalışmaları.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  padding: 60px 20px;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;
}

.card {
  padding: 20px;
  border-radius: 12px;
  background: #f5f5f5;
}

/* Responsive */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>