// Detecta automáticamente las capturas que existan en src/assets/screenshots/.
// Convención de nombres: <id-del-proyecto>-<número>.<png|jpg|jpeg|webp|avif>
// Vite empaqueta cada imagen con un nombre con hash, por eso se importan en vez de
// colocarlas en /public.
const files = import.meta.glob('../assets/screenshots/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  query: '?url',
  import: 'default',
})

export const SCREENSHOT_SLOTS = 3

/** Devuelve SCREENSHOT_SLOTS espacios; `src` es null si todavía no existe la imagen. */
export function getScreenshots(projectId) {
  return Array.from({ length: SCREENSHOT_SLOTS }, (_, i) => {
    const n = i + 1
    const pattern = new RegExp(`/${projectId}-${n}\\.(png|jpe?g|webp|avif)$`)
    const key = Object.keys(files).find((path) => pattern.test(path))
    return { n, src: key ? files[key] : null, fileName: `${projectId}-${n}.png` }
  })
}
