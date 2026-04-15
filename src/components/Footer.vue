<template>
  <footer class="footer">
    <div class="footer-top-line"></div>
    <div class="container footer-inner">
      <div class="footer-brand">
        <img src="../assets/logo.png" alt="Vargeloğlu İnşaat" class="footer-logo-img" />
        <p class="footer-tagline">{{ t.footer.tagline }}</p>
      </div>

      <div class="footer-links">
        <span class="footer-links-title">{{ t.footer.links }}</span>
        <a v-for="item in navLinks" :key="item.href" :href="item.href">{{ t.nav[item.key] }}</a>
      </div>

      <div class="footer-contact">
        <span class="footer-links-title">{{ t.footer.contactTitle }}</span>
        <p>{{ t.footer.address1 }}<br />{{ t.footer.address2 }}</p>
        <a href="tel:+905339674066">+90 533 967 40 66</a>
        <a href="mailto:vargelogluinsaat@hotmail.com">vargelogluinsaat@hotmail.com</a>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <p>© {{ year }} Vargeloğlu İnşaat. {{ t.footer.rights }}</p>
        <p>
          {{ t.footer.devLabel }}
          <a href="https://isabezeniroglu.vercel.app/" target="_blank" rel="noopener">İsa Bezeniroğlu</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useLocale } from '../composables/useLocale'

const { t } = useLocale()
const year = new Date().getFullYear()

const navLinks = [
  { key: 'home' as const, href: '#top' },
  { key: 'services' as const, href: '#faaliyetlerimiz' },
  { key: 'projects' as const, href: '#projeler' },
  { key: 'gallery' as const, href: '#galeri' },
  { key: 'references' as const, href: '#referanslar' },
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

.footer-brand {
  display: flex;
  flex-direction: column;
}

.footer-logo-img {
  width: 200px;
  height: auto;
  object-fit: contain;
  display: block;
  margin-bottom: 20px;
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
  .footer-brand { grid-column: 1 / -1; }
}

@media (max-width: 600px) {
  .footer-inner {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    padding: 32px 0 24px;
  }
  .footer-brand {
    grid-column: 1 / -1;
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }
  .footer-logo-img {
    width: 90px;
    margin-bottom: 0;
    flex-shrink: 0;
  }
  .footer-tagline {
    font-size: 0.82rem;
  }
  .footer-links {
    gap: 6px;
  }
  .footer-links a {
    font-size: 0.82rem;
  }
  .footer-contact {
    gap: 6px;
  }
  .footer-contact p,
  .footer-contact a {
    font-size: 0.82rem;
  }
  .footer-bottom-inner {
    flex-direction: column;
    text-align: center;
    gap: 6px;
  }
}
</style>