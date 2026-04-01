<template>
  <section id="galeri" class="gallery">
    <div class="container">
      <div class="gallery-head">
        <span>Galeri</span>
        <h2>Uygulamalarımızdan görseller</h2>
      </div>

      <div class="gallery-grid">
        <button
          v-for="item in visibleItems"
          :key="item.id"
          type="button"
          class="gallery-card"
        >
          <img :src="item.src" :alt="item.alt" loading="lazy" decoding="async" />
        </button>
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
import { computed, ref } from 'vue'
import { galleryItems } from '../data/gallery'

const previewCount = 12
const isExpanded = ref(false)

const visibleItems = computed(() =>
  isExpanded.value ? galleryItems : galleryItems.slice(0, previewCount),
)
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
  padding: 0;
  border: 0;
  border-radius: 14px;
  background: #fff;
  cursor: pointer;
}

.gallery-card img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  transition: transform 0.25s ease;
}

.gallery-card:hover img {
  transform: scale(1.03);
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
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>