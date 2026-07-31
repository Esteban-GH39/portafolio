import { useActiveSection } from '../hooks/useActiveSection'

const NODES = [
  { id: 'hero', label: 'Inicio' },
  { id: 'about', label: 'Sobre mí' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'timeline', label: 'Trayectoria' },
  { id: 'contact', label: 'Contacto' },
]

const IDS = NODES.map((n) => n.id)

/**
 * Riel de navegación vertical inspirado en las llaves de eliminación directa
 * de TableMaster: cada sección es un "cruce" conectado por una línea de bracket.
 * Visible solo en pantallas grandes para no competir con el contenido en mobile.
 */
export default function BracketRail() {
  const active = useActiveSection(IDS)
  const activeIndex = IDS.indexOf(active)

  return (
    <nav
      aria-label="Navegación de secciones"
      className="fixed left-8 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
    >
      <div className="relative flex flex-col gap-9 pl-1">
        {/* línea vertical de bracket */}
        <svg
          className="pointer-events-none absolute -left-[3px] top-2 h-[calc(100%-1rem)] w-1"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <line
            x1="0.5"
            y1="0"
            x2="0.5"
            y2="100%"
            stroke="#243046"
            strokeWidth="2"
          />
          <line
            x1="0.5"
            y1="0"
            x2="0.5"
            y2={`${(activeIndex / (NODES.length - 1)) * 100}%`}
            stroke="#38BDF8"
            strokeWidth="2"
          />
        </svg>

        {NODES.map((node, i) => {
          const isActive = node.id === active
          return (
            <a
              key={node.id}
              href={`#${node.id}`}
              className="group flex items-center gap-3"
            >
              <span
                className={`h-2.5 w-2.5 shrink-0 rounded-full border transition-all duration-300 ${
                  isActive
                    ? 'scale-125 border-accent-light bg-accent-light shadow-[0_0_0_4px_rgba(56,189,248,0.15)]'
                    : 'border-border bg-base group-hover:border-accent-light/70'
                }`}
              />
              <span
                className={`font-mono text-[11px] uppercase tracking-wider transition-colors duration-300 ${
                  isActive ? 'text-ink' : 'text-ink-faint group-hover:text-ink-muted'
                }`}
              >
                {node.label}
              </span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}
