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
  padding: 40px 0;
  background: #f3efe8;
}

.gallery-head span {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #a67c45;
  text-transform: uppercase;
}

.gallery-head h2 {
  margin-top: 8px;
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  color: #0f1720;
}

.gallery-grid {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.gallery-card {
  overflow: hidden;
  border-radius: 16px;
  background: #fff;
  border: 1px solid rgba(15, 23, 32, 0.06);
  box-shadow: 0 8px 18px rgba(15, 23, 32, 0.04);
}

.gallery-card img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  transition: transform 0.25s ease, filter 0.25s ease;
}

.gallery-card:hover img {
  transform: scale(1.03);
  filter: saturate(1.03);
}

.gallery-card--featured {
  grid-column: span 2;
}

.gallery-card--featured img {
  aspect-ratio: 16 / 10;
}

.gallery-toggle {
  margin-top: 18px;
  min-height: 42px;
  padding: 0 16px;
  border: 1px solid #d7dbe0;
  border-radius: 999px;
  background: #fff;
  color: #0f1720;
  font-size: 0.9rem;
  font-weight: 700;
}

@media (max-width: 900px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .gallery-card--featured {
    grid-column: span 3;
  }
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .gallery-card--featured {
    grid-column: span 1;
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>