<template>
  <section id="galeri" class="gallery">
    <div class="container">
      <div class="gallery-head">
        <p class="kicker reveal">{{ t.gallery.kicker }}</p>
        <h2 class="reveal reveal-delay-1">{{ t.gallery.title }}</h2>
      </div>

      <div class="gallery-filters reveal">
        <button
          v-for="cat in filterButtons"
          :key="cat.key"
          class="filter-btn"
          :class="{ active: activeCategory === cat.key }"
          @click="setCategory(cat.key)"
        >
          {{ cat.label }}
        </button>
      </div>

      <div id="gallery-grid" class="gallery-grid">
        <a
          v-for="(item, index) in visibleItems"
          :key="item.id"
          :href="item.src"
          class="gallery-card"
          :data-pswp-width="item.width"
          :data-pswp-height="item.height"
          :aria-label="`${t.gallery.imgAlt} ${index + 1}`"
        >
          <div class="skeleton"></div>
          <img
            :src="item.src"
            :alt="`${t.gallery.imgAlt} ${index + 1}`"
            loading="lazy"
            decoding="async"
            @load="onImageLoad"
          />
        </a>
      </div>

      <button
        v-if="filteredItems.length > previewCount"
        type="button"
        class="gallery-toggle"
        @click="isExpanded = !isExpanded"
      >
        {{ isExpanded ? t.gallery.showLess : `${t.gallery.showMore} (${filteredItems.length})` }}
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'
import { galleryItems, categories, type Category } from '../data/gallery'
import { useLocale } from '../composables/useLocale'

const { t } = useLocale()

const previewCount = 12
const isExpanded = ref(false)
const activeCategory = ref<Category | 'all'>('all')
let lightbox: PhotoSwipeLightbox | null = null

const filterButtons = computed(() => [
  { key: 'all' as const, label: t.value.gallery.categories.all },
  ...categories.map(cat => ({
    key: cat,
    label: t.value.gallery.categories[cat],
  })),
])

const filteredItems = computed(() =>
  activeCategory.value === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory.value)
)

const visibleItems = computed(() =>
  isExpanded.value ? filteredItems.value : filteredItems.value.slice(0, previewCount)
)

function setCategory(cat: Category | 'all') {
  activeCategory.value = cat
  isExpanded.value = false
}

function onImageLoad(e: Event) {
  const img = e.target as HTMLImageElement
  img.classList.add('loaded')
  const skeleton = img.previousElementSibling as HTMLElement
  if (skeleton) skeleton.classList.add('hidden')
}

function initLightbox() {
  lightbox?.destroy()
  lightbox = new PhotoSwipeLightbox({
    gallery: '#gallery-grid',
    children: 'a',
    pswpModule: () => import('photoswipe'),
  })
  lightbox.init()
}

watch(activeCategory, () => {
  isExpanded.value = false
  nextTick(() => initLightbox())
})

watch(isExpanded, () => {
  nextTick(() => initLightbox())
})

onMounted(() => {
  initLightbox()
})

onBeforeUnmount(() => {
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
  margin-bottom: 32px;
}

.gallery-head h2 {
  margin-top: 16px;
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  font-weight: 800;
  color: var(--color-heading);
  letter-spacing: -0.02em;
}

.gallery-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
}

.filter-btn {
  padding: 8px 20px;
  border-radius: 100px;
  border: 1px solid var(--color-border);
  background: transparent;
  color: var(--color-text-muted);
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.filter-btn:hover {
  border-color: var(--color-border-gold);
  color: var(--color-gold);
}

.filter-btn.active {
  background: var(--color-gold);
  border-color: var(--color-gold);
  color: var(--color-dark);
  font-weight: 700;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.gallery-card {
  position: relative;
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

.skeleton {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    var(--color-dark-3) 25%,
    var(--color-dark-2) 50%,
    var(--color-dark-3) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  z-index: 1;
}

.skeleton.hidden {
  display: none;
}

.gallery-card img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.4s ease, filter 0.4s ease;
  filter: brightness(0.9);
  position: relative;
  z-index: 2;
}

.gallery-card img.loaded {
  opacity: 1;
}

.gallery-card:hover img.loaded {
  transform: scale(1.05);
  filter: brightness(1.05);
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
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
}

@media (max-width: 768px) {
  .gallery { padding: 72px 0; }
  .gallery-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 480px) {
  .gallery-grid { grid-template-columns: 1fr; }
  .filter-btn { font-size: 0.78rem; padding: 6px 14px; }
}
</style>