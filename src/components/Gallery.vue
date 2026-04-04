<template>
  <section id="galeri" class="gallery">
    <div class="container">
      <div class="gallery-head">
        <span>Galeri</span>
        <h2>Uygulamalarımızdan görseller</h2>
      </div>

      <div id="gallery-grid" class="gallery-grid">
        <a
          v-for="(item, index) in visibleItems"
          :key="item.id"
          :href="item.src"
          class="gallery-card"
          :class="{ 'gallery-card--featured': index < 2 && !isMobile }"
          :data-pswp-width="item.width"
          :data-pswp-height="item.height"
          :aria-label="item.alt"
        >
          <img :src="item.src" :alt="item.alt" loading="lazy" decoding="async" />
        </a>
      </div>

      <button
        v-if="galleryItems.length > previewCount"
        type="button"
        class="gallery-toggle"
        @click="isExpanded = !isExpanded"
      >
        {{ isExpanded ? 'Daha Az Göster' : `Tümünü Göster (${galleryItems.length})` }}
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'
import { galleryItems } from '../data/gallery'

const previewCount = 12
const isExpanded = ref(false)
const isMobile = ref(false)

const visibleItems = computed(() =>
  isExpanded.value ? galleryItems : galleryItems.slice(0, previewCount),
)

let lightbox: PhotoSwipeLightbox | null = null

function syncViewport() {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  syncViewport()
  window.addEventListener('resize', syncViewport)

  lightbox = new PhotoSwipeLightbox({
    gallery: '#gallery-grid',
    children: 'a',
    pswpModule: () => import('photoswipe'),
  })

  lightbox.init()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', syncViewport)
  lightbox?.destroy()
  lightbox = null
})
</script>

<style scoped>
.gallery {
  padding: 100px 0;
  background: var(--color-dark);
  position: relative;
}

.gallery::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--color-gold-muted), transparent);
}

.gallery-head {
  margin-bottom: 48px;
}

.gallery-head span {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-gold);
}

.gallery-head span::before {
  content: '';
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-gold);
}

.gallery-head h2 {
  margin-top: 16px;
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  font-weight: 800;
  color: var(--color-heading);
  letter-spacing: -0.02em;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.gallery-card {
  display: block;
  overflow: hidden;
  border-radius: var(--radius-md);
  background: var(--color-dark-3);
  border: 1px solid var(--color-border);
  transition: border-color 0.3s ease;
}

.gallery-card:hover {
  border-color: var(--color-border-gold);
}

.gallery-card img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  transition: transform 0.4s ease, filter 0.4s ease;
  filter: brightness(0.9);
}

.gallery-card:hover img {
  transform: scale(1.05);
  filter: brightness(1.05);
}

.gallery-card--featured {
  grid-column: span 2;
}

.gallery-card--featured img {
  aspect-ratio: 16 / 9;
}

.gallery-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 32px auto 0;
  height: 48px;
  padding: 0 32px;
  border: 1px solid var(--color-border-gold);
  border-radius: var(--radius-sm);
  background: transparent;
  color: var(--color-gold);
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  transition: background 0.2s, color 0.2s;
}

.gallery-toggle:hover {
  background: var(--color-gold-muted);
  color: var(--color-gold-light);
}

@media (max-width: 900px) {
  .gallery-grid { grid-template-columns: repeat(3, 1fr); }
  .gallery-card--featured { grid-column: span 3; }
}

@media (max-width: 768px) {
  .gallery { padding: 72px 0; }
  .gallery-grid { grid-template-columns: repeat(2, 1fr); }
  .gallery-card--featured { grid-column: span 1; }
}

@media (max-width: 480px) {
  .gallery-grid { grid-template-columns: 1fr; }
}
</style>