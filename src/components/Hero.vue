<template>
  <section class="hero">
    <div class="content">
      <h1>Vargeloğlu İnşaat</h1>
      <p>Altyapı • Hafriyat • Otel Hafriyatları</p>
      <button>İletişime Geç</button>
    </div>
  </section>
</template>

<style scoped>
.hero {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
              url('https://images.unsplash.com/photo-1503387762-592deb58ef4e') center/cover no-repeat;
  color: white;
}

.content h1 {
  font-size: 48px;
  margin-bottom: 10px;
}

.content p {
  font-size: 18px;
  margin-bottom: 20px;
}

button {
  padding: 12px 20px;
  border: none;
  background: #ffb300;
  color: black;
  cursor: pointer;
  font-weight: bold;
}
</style>