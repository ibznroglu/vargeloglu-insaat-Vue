export type Category = 'altyapi' | 'beton' | 'tas-duvar' | 'cevre-duzenleme'

export type GalleryItem = {
  id: string
  src: string
  alt: string
  width: number
  height: number
  category: Category
}

function loadCategory(category: Category): GalleryItem[] {
  const modules = import.meta.glob(
    '../assets/gallery/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
    { eager: true, import: 'default' }
  ) as Record<string, string>

  return Object.entries(modules)
    .filter(([path]) => path.includes(`/gallery/${category}/`))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
    .map(([, src], index) => ({
      id: `${category}-${index + 1}`,
      src,
      alt: `Vargeloğlu İnşaat ${category} görseli ${index + 1}`,
      width: 1600,
      height: 1200,
      category,
    }))
}

export const categories: Category[] = ['altyapi', 'beton', 'tas-duvar', 'cevre-duzenleme']

export const galleryItems: GalleryItem[] = categories.flatMap(loadCategory)