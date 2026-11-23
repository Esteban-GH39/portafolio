const imageFiles = import.meta.glob('../assets/projects/*/*.{png,jpg,jpeg,webp,avif,gif}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const videoFiles = import.meta.glob('../assets/projects/*/*.{mp4,webm}', {
  eager: true,
  query: '?url',
  import: 'default',
})

export const MEDIA_PLACEHOLDER_SLOTS = 3

function parsePath(path) {
  const [, folder, fileName] = path.match(/projects\/([^/]+)\/([^/]+)$/) ?? []
  return { folder, fileName }
}

function entriesFor(files, projectId) {
  return Object.entries(files)
    .map(([path, src]) => ({ ...parsePath(path), src }))
    .filter((entry) => entry.folder === projectId)
    .sort((a, b) => a.fileName.localeCompare(b.fileName, undefined, { numeric: true }))
}

function toEmbedUrl(url) {
  const youtube = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/))([\w-]{11})/)
  if (youtube) return `https://www.youtube-nocookie.com/embed/${youtube[1]}`
  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/)
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`
  return url
}

export function getProjectMedia(project) {
  const allImages = entriesFor(imageFiles, project.id)
  const poster = allImages.find((img) => /^poster\./i.test(img.fileName))?.src ?? undefined
  const images = allImages
    .filter((img) => !/^poster\./i.test(img.fileName))
    .map((img) => ({
      src: img.src,
      fileName: img.fileName,
      caption: project.captions?.[img.fileName] ?? null,
    }))

  const localVideo = entriesFor(videoFiles, project.id)[0]
  let video = null
  if (localVideo) {
    video = { kind: 'file', src: localVideo.src, poster }
  } else if (project.videoUrl) {
    video = { kind: 'embed', src: toEmbedUrl(project.videoUrl) }
  }

  return { video, images }
}