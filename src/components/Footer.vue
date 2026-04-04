<template>
  <footer class="footer">
    <div class="footer-top-line"></div>
    <div class="container footer-inner">
      <div class="footer-brand">
        <div class="footer-logo">
          <span class="footer-logo-icon">V</span>
          <div>
            <span class="footer-brand-name">Vargeloğlu İnşaat</span>
            <span class="footer-brand-tag">HAFRİYAT & ALTYAPI</span>
          </div>
        </div>
        <p class="footer-tagline">1985'ten bugüne güvenilir çözüm ortağınız.</p>
      </div>

      <div class="footer-links">
        <span class="footer-links-title">Bağlantılar</span>
        <a v-for="item in navItems" :key="item.href" :href="item.href">{{ item.label }}</a>
      </div>

      <div class="footer-contact">
        <span class="footer-links-title">İletişim</span>
        <p>Kadriye Mh. 258 Sk. No:19/1<br />Serik / ANTALYA</p>
        <a href="tel:+905339674066">0 533 967 40 66</a>
        <a href="mailto:vargelogluinsaat@hotmail.com">vargelogluinsaat@hotmail.com</a>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <p>© {{ year }} Vargeloğlu İnşaat. Tüm hakları saklıdır.</p>
        <p>
          Tasarım & Geliştirme:
          <a href="https://isabezeniroglu.vercel.app/" target="_blank" rel="noopener">İsa Bezeniroğlu</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
const navItems = [
  { label: 'Anasayfa', href: '#top' },
  { label: 'Faaliyetlerimiz', href: '#faaliyetlerimiz' },
  { label: 'Projeler', href: '#projeler' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Referanslar', href: '#referanslar' },
  { label: 'İletişim', href: '#iletisim' },
]
</script>

<style scoped>
.footer {
  background: var(--color-dark-2);
  border-top: 1px solid var(--color-border);
}

.footer-top-line {
  height: 2px;
  background: linear-gradient(to right, transparent, var(--color-gold), transparent);
}

.footer-inner {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1.4fr;
  gap: 48px;
  padding: 64px 0 48px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.footer-logo-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: var(--color-gold);
  color: var(--color-dark);
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.footer-brand-name {
  display: block;
  font-size: 0.95rem;
  font-weight: 800;
  color: var(--color-heading);
  letter-spacing: -0.01em;
}

.footer-brand-tag {
  display: block;
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: var(--color-gold);
  text-transform: uppercase;
  margin-top: 2px;
}

.footer-tagline {
  font-size: 0.88rem;
  color: var(--color-text-muted);
  line-height: 1.65;
  max-width: 32ch;
}

.footer-links-title {
  display: block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 16px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-links a {
  font-size: 0.88rem;
  color: var(--color-text-muted);
  transition: color 0.2s;
}

.footer-links a:hover {
  color: var(--color-heading);
}

.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-contact p {
  font-size: 0.88rem;
  color: var(--color-text-muted);
  line-height: 1.65;
}

.footer-contact a {
  font-size: 0.88rem;
  color: var(--color-text-muted);
  transition: color 0.2s;
}

.footer-contact a:hover {
  color: var(--color-gold);
}

.footer-bottom {
  border-top: 1px solid var(--color-border);
}

.footer-bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 20px 0;
  font-size: 0.82rem;
  color: rgba(255,255,255,0.35);
  flex-wrap: wrap;
}

.footer-bottom a {
  color: var(--color-gold);
  font-weight: 600;
  margin-left: 4px;
}

.footer-bottom a:hover {
  text-decoration: underline;
}

@media (max-width: 900px) {
  .footer-inner { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 600px) {
  .footer-inner { grid-template-columns: 1fr; gap: 32px; padding: 40px 0 32px; }
  .footer-bottom-inner { flex-direction: column; text-align: center; }
}
</style>