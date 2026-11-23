import { motion } from 'framer-motion'
import { ArrowUpRight, BarChart3, Gamepad2, Github, ListChecks, Newspaper, ParkingCircle, Plus, ScanEye, ServerCog, Trophy } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Badge from '../components/Badge'
import Button from '../components/Button'
import ProjectMedia from '../components/ProjectMedia'
import { projects } from '../data/projects'
import { useReveal } from '../hooks/useReveal'

const previewConfig = {
  tablemaster: {
    label: 'Cuadro de eliminación directa',
    icon: Trophy,
    Preview: BracketPreview,
  },
  'vigilancia-ia': {
    label: 'Detección en tiempo real',
    icon: ScanEye,
    Preview: SurveillancePreview,
  },
  taskflow: {
    label: 'Tareas por estado y prioridad',
    icon: ListChecks,
    Preview: TaskPreview,
  },
  shortly: {
    label: 'Clics de los últimos días',
    icon: BarChart3,
    Preview: ClicksPreview,
  },
  'tienda-cqrs': {
    label: 'Del comando a la pantalla',
    icon: ServerCog,
    Preview: CqrsPreview,
  },
  'sporty-smash': {
    label: 'Tres balones en línea',
    icon: Gamepad2,
    Preview: MatchPreview,
  },
  parkfinder: {
    label: 'Parqueadero cerca de ti',
    icon: ParkingCircle,
    Preview: ParkingPreview,
  },
  'blog-esteban': {
    label: 'Notas de desarrollo',
    icon: Newspaper,
    Preview: BlogPreview,
  },
}

function ProjectCard({ project }) {
  const config = previewConfig[project.id]
  const PreviewIcon = config?.icon
  const repoLinks =
    project.links.repos ?? (project.links.github ? [{ label: 'GitHub', url: project.links.github }] : [])

  return (
    <div className="card relative overflow-hidden p-8 sm:p-10">
      <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-accent/10 blur-[90px]" aria-hidden="true" />

      <div className="relative flex flex-col gap-10 lg:flex-row lg:items-start">

        <div className="w-full max-w-sm shrink-0 rounded-xl border border-border bg-base/60 p-5">
          {config && (
            <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-accent-light/80">
              <PreviewIcon size={14} /> {config.label}
            </div>
          )}
          {config ? <config.Preview /> : <BracketPreview />}
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <span className="set-label">{project.featured ? 'Proyecto destacado' : 'Proyecto'}</span>
            {project.status === 'in-progress' && (
              <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-amber-300">
                En construcción
              </span>
            )}
          </div>
          <h3 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">{project.name}</h3>
          <p className="mt-2 text-ink-muted">{project.tagline}</p>

          <p className="mt-5 text-sm leading-relaxed text-ink-muted">{project.description}</p>

          {(project.problem || project.solution) && (
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {project.problem && (
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-ink-faint">Problema</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{project.problem}</p>
                </div>
              )}
              {project.solution && (
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-ink-faint">Solución</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{project.solution}</p>
                </div>
              )}
            </div>
          )}

          {project.architecture?.length > 0 && (
            <div className="mt-6">
              <h4 className="font-mono text-xs uppercase tracking-wider text-ink-faint">Arquitectura</h4>
              <ul className="mt-2 space-y-1.5">
                {project.architecture.map((row) => (
                  <li key={row.layer} className="flex flex-col text-sm text-ink-muted sm:flex-row sm:gap-2">
                    <span className="shrink-0 font-medium text-ink">{row.layer}:</span>
                    <span>{row.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.challenges?.length > 0 && (
            <div className="mt-6">
              <h4 className="font-mono text-xs uppercase tracking-wider text-ink-faint">Retos técnicos</h4>
              <ul className="mt-2 space-y-1.5">
                {project.challenges.map((challenge) => (
                  <li key={challenge} className="flex gap-2 text-sm text-ink-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-light" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.stack.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.demo && (
              <Button href={project.links.demo} target="_blank" rel="noreferrer" className="group">
                Live Demo
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Button>
            )}
            {repoLinks.map((repo) => (
              <Button key={repo.url} href={repo.url} target="_blank" rel="noreferrer" variant="ghost">
                <Github size={16} />
                {repo.label}
              </Button>
            ))}
          </div>

          {project.demoNote && project.links.demo && (
            <p className="mt-4 max-w-xl text-xs leading-relaxed text-ink-faint">{project.demoNote}</p>
          )}
        </div>
      </div>

      <ProjectMedia project={project} />
    </div>
  )
}

function BracketPreview() {
  return (
    <svg viewBox="0 0 260 160" className="w-full" aria-hidden="true">
      {[24, 64, 104, 144].map((y) => (
        <line key={y} x1="0" y1={y} x2="60" y2={y} stroke="#2A2144" strokeWidth="2" />
      ))}
      <line x1="60" y1="24" x2="60" y2="64" stroke="#2A2144" strokeWidth="2" />
      <line x1="60" y1="104" x2="60" y2="144" stroke="#2A2144" strokeWidth="2" />
      <line x1="60" y1="44" x2="130" y2="44" stroke="#7C3AED" strokeWidth="2" />
      <line x1="60" y1="124" x2="130" y2="124" stroke="#2A2144" strokeWidth="2" />
      <line x1="130" y1="44" x2="130" y2="124" stroke="#2A2144" strokeWidth="2" />
      <line x1="130" y1="84" x2="200" y2="84" stroke="#A78BFA" strokeWidth="2" />
      {[24, 64, 104, 144].map((y, i) => (
        <circle key={y} cx="0" cy={y} r="4" fill={i === 0 ? '#A78BFA' : '#5B5378'} />
      ))}
      <circle cx="200" cy="84" r="5" fill="#A78BFA" />
      <text x="204" y="88" fill="#A39BC2" fontSize="9" fontFamily="JetBrains Mono, monospace">
        Campeón
      </text>
    </svg>
  )
}

function SurveillancePreview() {
  return (
    <svg viewBox="0 0 260 160" className="w-full" aria-hidden="true">
      {/* Marco de la "cámara" */}
      <rect x="8" y="8" width="244" height="144" rx="8" fill="none" stroke="#2A2144" strokeWidth="2" />
      {/* Cuadro de detección sobre una "persona" */}
      <rect x="95" y="34" width="52" height="92" rx="4" fill="none" stroke="#A78BFA" strokeWidth="2" strokeDasharray="4 3" />
      <circle cx="121" cy="52" r="10" fill="#2A2144" />
      <rect x="105" y="66" width="32" height="54" rx="6" fill="#2A2144" />
      <text x="98" y="30" fill="#A78BFA" fontSize="8" fontFamily="JetBrains Mono, monospace">
        persona 0.94
      </text>
      {/* Líneas de escaneo */}
      <line x1="8" y1="60" x2="252" y2="60" stroke="#7C3AED" strokeWidth="1" opacity="0.35" />
      <line x1="8" y1="104" x2="252" y2="104" stroke="#7C3AED" strokeWidth="1" opacity="0.35" />
      {/* Indicador REC */}
      <circle cx="22" cy="22" r="4" fill="#EF4444" />
      <text x="30" y="25" fill="#A39BC2" fontSize="8" fontFamily="JetBrains Mono, monospace">
        REC · EN VIVO
      </text>
      {/* Alerta */}
      <rect x="180" y="130" width="64" height="16" rx="4" fill="#1A1226" stroke="#EF4444" strokeWidth="1" />
      <text x="188" y="141" fill="#F87171" fontSize="7" fontFamily="JetBrains Mono, monospace">
        ALERTA: merodeo
      </text>
    </svg>
  )
}

function TaskPreview() {
  const rows = [
    { y: 24, done: true, width: 120 },
    { y: 62, done: false, width: 150 },
    { y: 100, done: false, width: 100 },
  ]
  return (
    <svg viewBox="0 0 260 160" className="w-full" aria-hidden="true">
      {rows.map((row) => (
        <g key={row.y}>
          <rect x="8" y={row.y} width="244" height="30" rx="8" fill="#171028" stroke="#2A2144" strokeWidth="2" />
          <rect
            x="18"
            y={row.y + 8}
            width="14"
            height="14"
            rx="4"
            fill={row.done ? '#7C3AED' : 'none'}
            stroke={row.done ? '#7C3AED' : '#5B5378'}
            strokeWidth="2"
          />
          {row.done && (
            <path d={`M21 ${row.y + 15} l3 3 l5 -6`} stroke="#F5F3FF" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          )}
          <rect x="42" y={row.y + 11} width={row.width} height="8" rx="4" fill={row.done ? '#2A2144' : '#5B5378'} />
        </g>
      ))}
      <rect x="196" y="35" width="44" height="12" rx="6" fill="none" stroke="#A78BFA" strokeWidth="1.5" />
      <text x="203" y="44" fill="#A78BFA" fontSize="7" fontFamily="JetBrains Mono, monospace">
        alta
      </text>
      <text x="8" y="150" fill="#A39BC2" fontSize="8" fontFamily="JetBrains Mono, monospace">
        3 tareas · 1 hecha
      </text>
    </svg>
  )
}

function ClicksPreview() {
  const bars = [14, 26, 18, 40, 32, 58, 46, 70, 52, 84, 64, 96]
  return (
    <svg viewBox="0 0 260 160" className="w-full" aria-hidden="true">
      <text x="8" y="16" fill="#A78BFA" fontSize="9" fontFamily="JetBrains Mono, monospace">
        shortly.app/mi-portafolio
      </text>
      <line x1="8" y1="140" x2="252" y2="140" stroke="#2A2144" strokeWidth="2" />
      {bars.map((h, i) => (
        <rect
          key={i}
          x={14 + i * 20}
          y={140 - h}
          width="12"
          height={h}
          rx="3"
          fill={i === bars.length - 1 ? '#A78BFA' : '#7C3AED'}
          opacity={i === bars.length - 1 ? 1 : 0.7}
        />
      ))}
      <text x="8" y="154" fill="#A39BC2" fontSize="8" fontFamily="JetBrains Mono, monospace">
        últimos 14 días
      </text>
    </svg>
  )
}

function CqrsPreview() {
  const box = (x, y, w, label, color) => (
    <g key={label}>
      <rect x={x} y={y} width={w} height="26" rx="6" fill="#171028" stroke={color} strokeWidth="2" />
      <text x={x + w / 2} y={y + 17} textAnchor="middle" fill="#A39BC2" fontSize="8" fontFamily="JetBrains Mono, monospace">
        {label}
      </text>
    </g>
  )
  return (
    <svg viewBox="0 0 260 160" className="w-full" aria-hidden="true">
      <path d="M52 38 V70 M52 96 V122 M130 83 H110 M208 38 V70 M208 96 V122" stroke="#5B5378" strokeWidth="2" fill="none" />
      <path d="M92 83 H168" stroke="#7C3AED" strokeWidth="2" strokeDasharray="5 4" />
      {box(14, 12, 76, 'Comando', '#A78BFA')}
      {box(170, 12, 76, 'Consulta', '#A78BFA')}
      {box(14, 70, 76, 'PostgreSQL', '#2A2144')}
      {box(170, 70, 76, 'MongoDB', '#2A2144')}
      {box(92, 70, 76, 'Kafka', '#7C3AED')}
      {box(14, 126, 232, 'RabbitMQ + WebSocket → todas las pantallas', '#2A2144')}
    </svg>
  )
}

function MatchPreview() {
  const colors = ['#7C3AED', '#A78BFA', '#EF4444', '#F59E0B']
  const grid = [
    [0, 1, 2, 3, 1],
    [2, 2, 2, 0, 3],
    [1, 3, 0, 1, 0],
    [3, 0, 1, 2, 2],
  ]
  return (
    <svg viewBox="0 0 260 160" className="w-full" aria-hidden="true">
      {grid.map((row, r) =>
        row.map((c, i) => (
          <circle
            key={`${r}-${i}`}
            cx={30 + i * 50}
            cy={26 + r * 34}
            r="13"
            fill={colors[c]}
            opacity={r === 1 && i < 3 ? 1 : 0.55}
            stroke={r === 1 && i < 3 ? '#F5F3FF' : 'none'}
            strokeWidth="2"
          />
        ))
      )}
      <text x="8" y="155" fill="#A39BC2" fontSize="8" fontFamily="JetBrains Mono, monospace">
        J1 · 2:30
      </text>
      <text x="252" y="155" textAnchor="end" fill="#A39BC2" fontSize="8" fontFamily="JetBrains Mono, monospace">
        J2 · 2:30
      </text>
    </svg>
  )
}

function ParkingPreview() {
  return (
    <svg viewBox="0 0 260 160" className="w-full" aria-hidden="true">
      {/* Calles del mapa */}
      <path d="M0 110 H260 M70 0 V160 M180 0 V160" stroke="#2A2144" strokeWidth="2" fill="none" />
      {/* Ruta hacia el parqueadero */}
      <path d="M24 140 V110 H70 V60 H180" stroke="#7C3AED" strokeWidth="3" strokeDasharray="6 4" fill="none" strokeLinecap="round" />
      <circle cx="24" cy="140" r="5" fill="#A78BFA" />
      {/* Pin con la P de parqueadero */}
      <path d="M180 60 c-14 -12 -22 -22 -22 -34 a22 22 0 0 1 44 0 c0 12 -8 22 -22 34z" fill="#171028" stroke="#A78BFA" strokeWidth="2" />
      <text x="173" y="33" fill="#A78BFA" fontSize="18" fontWeight="700" fontFamily="JetBrains Mono, monospace">
        P
      </text>
      <text x="252" y="150" textAnchor="end" fill="#A39BC2" fontSize="8" fontFamily="JetBrains Mono, monospace">
        12 cupos libres
      </text>
    </svg>
  )
}

function BlogPreview() {
  return (
    <svg viewBox="0 0 260 160" className="w-full" aria-hidden="true">
      <rect x="8" y="8" width="244" height="144" rx="8" fill="#171028" stroke="#2A2144" strokeWidth="2" />
      <rect x="24" y="26" width="140" height="10" rx="5" fill="#A78BFA" />
      <rect x="24" y="52" width="212" height="7" rx="3.5" fill="#5B5378" />
      <rect x="24" y="68" width="190" height="7" rx="3.5" fill="#2A2144" />
      <rect x="24" y="84" width="200" height="7" rx="3.5" fill="#2A2144" />
      <rect x="24" y="100" width="120" height="7" rx="3.5" fill="#2A2144" />
      <rect x="24" y="124" width="48" height="14" rx="7" fill="none" stroke="#7C3AED" strokeWidth="1.5" />
      <text x="33" y="134" fill="#A78BFA" fontSize="7" fontFamily="JetBrains Mono, monospace">
        devlog
      </text>
    </svg>
  )
}

function PlaceholderCard() {
  return (
    <div className="card flex min-h-[220px] flex-col items-center justify-center gap-3 border-dashed p-8 text-center">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-dashed border-border text-ink-faint">
        <Plus size={20} />
      </div>
      <h3 className="font-display text-lg font-medium text-ink-muted">Próximo proyecto</h3>
      <p className="max-w-xs text-sm text-ink-faint">
        Este espacio está reservado para el siguiente proyecto en construcción.
      </p>
    </div>
  )
}

export default function Projects() {
  const [ref, isVisible] = useReveal()
  const items = projects.filter((p) => !p.placeholder)

  return (
    <section id="projects" className="container-page py-24 sm:py-32">
      <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <SectionHeading
          eyebrow="Proyectos"
          title="Producto real, de principio a fin."
          description="Cada proyecto está construido, documentado y desplegado — no es un ejercicio de tutorial."
        />

        <div className="mt-12 space-y-6">
          {items.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: (items.length + 1) * 0.15 }}
          >
            <PlaceholderCard />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
