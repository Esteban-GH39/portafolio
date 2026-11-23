const files = import.meta.glob('../assets/screenshots/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  query: '?url',
  import: 'default',
})

export const SCREENSHOT_SLOTS = 3

export function getScreenshots(projectId) {
  return Array.from({ length: SCREENSHOT_SLOTS }, (_, i) => {
    const n = i + 1
    const pattern = new RegExp(`/${projectId}-${n}\\.(png|jpe?g|webp|avif)$`)
    const key = Object.keys(files).find((path) => pattern.test(path))
    return { n, src: key ? files[key] : null, fileName: `${projectId}-${n}.png` }
  })
}