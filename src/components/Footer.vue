<template>
  <footer class="footer">
    <div class="container footer-inner">
      <p class="footer-copy">
        © {{ year }} Vargeloğlu İnşaat
      </p>

      <p class="footer-credit">
        Tasarım & Geliştirme:
        <a
          href="https://isabezeniroglu.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          İsa Bezeniroğlu
        </a>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  padding: 24px 0;
  background: #0f1720;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.footer-copy {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
}

.footer-credit {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.82rem;
}

.footer-credit a {
  margin-left: 4px;
  color: #d4af72;
  font-weight: 600;
}

.footer-credit a:hover {
  text-decoration: underline;
}

@media (max-width: 600px) {
  .footer-inner {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>