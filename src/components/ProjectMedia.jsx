import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, ImagePlus, X } from 'lucide-react'
import { getProjectMedia, MEDIA_PLACEHOLDER_SLOTS } from '../data/media'

export default function ProjectMedia({ project }) {
  const { video, images } = getProjectMedia(project)
  const dialogRef = useRef(null)
  const [index, setIndex] = useState(null)
  const total = images.length
  const current = index !== null ? images[index] : null

  const open = (i) => {
    setIndex(i)
    dialogRef.current?.showModal()
  }

  useEffect(() => {
    if (index === null || total < 2) return undefined
    const onKey = (e) => {
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % total)
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + total) % total)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, total])

  const hasMedia = Boolean(video) || total > 0

  return (
    <div className="mt-10 border-t border-border/70 pt-8">
      <h4 className="font-mono text-xs uppercase tracking-wider text-ink-faint">
        {video && total > 0 ? 'Video y capturas' : video ? 'Video' : 'Capturas'}
      </h4>

      {video && (
        <div className="mt-4">
          {video.kind === 'embed' ? (
            <iframe
              src={video.src}
              title={`Video de ${project.name}`}
              loading="lazy"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="aspect-video w-full rounded-xl border border-border bg-black"
            />
          ) : (
            <video
              controls
              preload="metadata"
              poster={video.poster}
              className="aspect-video w-full rounded-xl border border-border bg-black"
            >
              <source src={video.src} />
              Tu navegador no puede reproducir este video.
            </video>
          )}
        </div>
      )}

      {total > 0 && (
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <li key={img.fileName}>
              <button
                type="button"
                onClick={() => open(i)}
                className="group block w-full overflow-hidden rounded-xl border border-border bg-base/60 transition-colors hover:border-accent-light/60"
                aria-label={`Ampliar imagen ${i + 1} de ${project.name}`}
              >
                <img
                  src={img.src}
                  alt={img.caption ?? `Imagen ${i + 1} de ${project.name}`}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </button>
              {img.caption && <p className="mt-2 text-xs text-ink-faint">{img.caption}</p>}
            </li>
          ))}
        </ul>
      )}

      {!hasMedia && (
        <ul className="mt-4 grid gap-4 sm:grid-cols-3">
          {Array.from({ length: MEDIA_PLACEHOLDER_SLOTS }, (_, i) => (
            <li
              key={i}
              className="flex aspect-[16/10] flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-base/40 p-4 text-center"
            >
              <ImagePlus size={20} className="text-ink-faint" aria-hidden="true" />
              <p className="text-sm text-ink-muted">Captura próximamente</p>

              {import.meta.env.DEV && i === 0 && (
                <code className="break-all font-mono text-[10px] text-ink-faint">
                  src/assets/projects/{project.id}/
                </code>
              )}
            </li>
          ))}
        </ul>
      )}

      <dialog
        ref={dialogRef}
        onClose={() => setIndex(null)}
        onClick={(e) => e.target === dialogRef.current && dialogRef.current.close()}
        aria-label={current ? `Imagen ${index + 1} de ${total} de ${project.name}` : 'Imagen ampliada'}
        className="max-h-[92vh] max-w-[min(92vw,1400px)] overflow-auto rounded-2xl border border-border bg-elevated p-0 text-ink backdrop:bg-black/85"
      >
        <form method="dialog" className="sticky top-0 z-10 flex items-center justify-between p-3">
          <span className="rounded-full bg-base/80 px-3 py-1 font-mono text-xs text-ink-muted">
            {current ? `${index + 1} / ${total}` : ''}
          </span>
          <button
            type="submit"
            aria-label="Cerrar imagen"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-white transition-colors hover:bg-accent-light"
          >
            <X size={18} />
          </button>
        </form>

        {current && (
          <>
            <img
              src={current.src}
              alt={current.caption ?? `Imagen ${index + 1} de ${project.name}`}
              className="-mt-12 block h-auto w-full"
            />
            {current.caption && <p className="px-4 py-3 text-sm text-ink-muted">{current.caption}</p>}
          </>
        )}

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => setIndex((i) => (i - 1 + total) % total)}
              aria-label="Imagen anterior"
              className="fixed left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-white transition-colors hover:bg-accent-light"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => setIndex((i) => (i + 1) % total)}
              aria-label="Imagen siguiente"
              className="fixed right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-white transition-colors hover:bg-accent-light"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </dialog>
    </div>
  )
}
