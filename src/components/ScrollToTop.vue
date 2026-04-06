<template>
  <Transition name="scroll-top">
    <button
      v-if="isVisible"
      class="scroll-top-btn"
      :aria-label="t.scrollTop.ariaLabel"
      @click="scrollToTop"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useLocale } from '../composables/useLocale'

const { t } = useLocale()
const isVisible = ref(false)

function onScroll() {
  isVisible.value = window.scrollY > 400
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.scroll-top-btn {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 998;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--color-border-gold);
  background: var(--color-dark-2);
  color: var(--color-gold);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(201, 168, 76, 0.1);
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.scroll-top-btn:hover {
  background: var(--color-gold-muted);
  border-color: var(--color-gold);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(201, 168, 76, 0.2), 0 0 0 1px rgba(201, 168, 76, 0.25);
}

.scroll-top-btn:active {
  transform: translateY(0);
}

.scroll-top-enter-active,
.scroll-top-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.scroll-top-enter-from,
.scroll-top-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

@media (max-width: 768px) {
  .scroll-top-btn {
    bottom: 20px;
    right: 16px;
    width: 40px;
    height: 40px;
  }
}
</style>