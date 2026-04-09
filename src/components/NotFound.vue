<template>
  <div class="not-found">
    <div class="not-found-inner">
      <span class="not-found-code">404</span>
      <h1 class="not-found-title">{{ t.notFound.title }}</h1>
      <p class="not-found-desc">{{ t.notFound.desc }}</p>
      <a href="/" class="not-found-btn">{{ t.notFound.btn }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLocale } from '../composables/useLocale'
const { t } = useLocale()
</script>

<style scoped>
.not-found {
  min-height: 100vh;
  background: var(--color-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 24px;
}

.not-found-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.not-found-code {
  font-family: var(--font-display);
  font-size: clamp(6rem, 20vw, 12rem);
  font-weight: 800;
  color: var(--color-gold);
  opacity: 0.2;
  line-height: 1;
}

.not-found-title {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
  color: var(--color-heading);
  letter-spacing: -0.02em;
  margin: 0;
}

.not-found-desc {
  font-size: 1rem;
  color: var(--color-text-muted);
  max-width: 40ch;
  line-height: 1.7;
  margin: 0;
}

.not-found-btn {
  margin-top: 8px;
  display: inline-flex;
  align-items: center;
  height: 50px;
  padding: 0 32px;
  border-radius: 6px;
  background: var(--color-gold);
  color: var(--color-dark);
  font-size: 0.95rem;
  font-weight: 700;
  transition: background 0.2s, transform 0.2s;
}

.not-found-btn:hover {
  background: var(--color-gold-light);
  transform: translateY(-2px);
}
</style>