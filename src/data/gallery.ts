const imageModules = import.meta.glob('../assets/gallery/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

export type GalleryItem = {
  id: string
  src: string
  alt: string
  width: number
  height: number
}

export const galleryItems: GalleryItem[] = Object.entries(imageModules)
  .sort(([a], [b]) =>
    a.localeCompare(b, undefined, {
      numeric: true,
      sensitivity: 'base',
    }),
  )
  .map(([, src], index) => ({
    id: `gallery-${index + 1}`,
    src,
    alt: `Vargeloğlu İnşaat galeri görseli ${index + 1}`,
    width: 1600,
    height: 1200,
  }))