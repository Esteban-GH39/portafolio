import { useRef, useState } from 'react'
import { ImagePlus, X } from 'lucide-react'
import { getScreenshots } from '../data/screenshots'

export default function ScreenshotGallery({ projectId, projectName }) {
  const slots = getScreenshots(projectId)
  const dialogRef = useRef(null)
  const [active, setActive] = useState(null)

  const open = (slot) => {
    setActive(slot)
    dialogRef.current?.showModal()
  }

  return (
    <div className="mt-10 border-t border-border/70 pt-8">
      <h4 className="font-mono text-xs uppercase tracking-wider text-ink-faint">Capturas</h4>

      <ul className="mt-4 grid gap-4 sm:grid-cols-3">
        {slots.map((slot) => (
          <li key={slot.n}>
            {slot.src ? (
              <button
                type="button"
                onClick={() => open(slot)}
                className="group block w-full overflow-hidden rounded-xl border border-border bg-base/60 transition-colors hover:border-accent-light/60"
                aria-label={`Ampliar captura ${slot.n} de ${projectName}`}
              >
                <img
                  src={slot.src}
                  alt={`Captura ${slot.n} de ${projectName}`}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </button>
            ) : (
              <div className="flex aspect-[16/10] flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-base/40 p-4 text-center">
                <ImagePlus size={20} className="text-ink-faint" aria-hidden="true" />
                <p className="text-sm text-ink-muted">Captura próximamente</p>
                {/* Solo en desarrollo: recuerda qué archivo va en este espacio */}
                {import.meta.env.DEV && (
                  <code className="break-all font-mono text-[10px] text-ink-faint">
                    src/assets/screenshots/{slot.fileName}
                  </code>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        onClick={(e) => e.target === dialogRef.current && dialogRef.current.close()}
        aria-label={active ? `Captura ${active.n} de ${projectName}` : 'Captura ampliada'}
        className="max-h-[92vh] max-w-[min(92vw,1400px)] overflow-auto rounded-2xl border border-border bg-elevated p-0 text-ink backdrop:bg-black/85"
      >
        <form method="dialog" className="sticky top-0 z-10 flex justify-end p-3">
          <button
            type="submit"
            aria-label="Cerrar captura"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-white transition-colors hover:bg-accent-light"
          >
            <X size={18} />
          </button>
        </form>
        {active?.src && (
          <img
            src={active.src}
            alt={`Captura ${active.n} de ${projectName}`}
            className="-mt-12 block h-auto w-full"
          />
        )}
      </dialog>
    </div>
  )
}
