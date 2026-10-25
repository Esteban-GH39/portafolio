import { motion } from 'framer-motion'
import { ArrowUpRight, BarChart3, Github, ListChecks, Plus, Trophy, ScanEye } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Badge from '../components/Badge'
import Button from '../components/Button'
import ScreenshotGallery from '../components/ScreenshotGallery'
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
}

function FeaturedProject({ project }) {
  const config = previewConfig[project.id]
  const PreviewIcon = config?.icon

  return (
    <div className="card relative overflow-hidden p-8 sm:p-10">
      <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-accent/10 blur-[90px]" aria-hidden="true" />

      <div className="relative flex flex-col gap-10 lg:flex-row lg:items-start">
        {/* Preview visual: mockup propio de cada proyecto en lugar de una captura genérica */}
        <div className="w-full max-w-sm shrink-0 rounded-xl border border-border bg-base/60 p-5">
          {config && (
            <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-accent-light/80">
              <PreviewIcon size={14} /> {config.label}
            </div>
          )}
          {config ? <config.Preview /> : <BracketPreview />}
        </div>

        <div className="flex-1">
          <span className="set-label">Proyecto destacado</span>
          <h3 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">{project.name}</h3>
          <p className="mt-2 text-ink-muted">{project.tagline}</p>

          <p className="mt-5 text-sm leading-relaxed text-ink-muted">{project.description}</p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-ink-faint">Problema</h4>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{project.problem}</p>
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-ink-faint">Solución</h4>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{project.solution}</p>
            </div>
          </div>

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

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.demo && (
              <Button href={project.links.demo} target="_blank" rel="noreferrer" className="group">
                Live Demo
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Button>
            )}
            {project.links.github && (
              <Button href={project.links.github} target="_blank" rel="noreferrer" variant="ghost">
                <Github size={16} />
                GitHub
              </Button>
            )}
          </div>

          {project.demoNote && project.links.demo && (
            <p className="mt-4 max-w-xl text-xs leading-relaxed text-ink-faint">{project.demoNote}</p>
          )}
        </div>
      </div>

      {/* Espacio para capturas reales: ver src/assets/screenshots/LEEME.txt */}
      <ScreenshotGallery projectId={project.id} projectName={project.name} />
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

function CompactProjectCard({ project }) {
  return (
    <div className="card flex flex-col gap-4 p-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold text-ink">{project.name}</h3>
        {project.status === 'in-progress' && (
          <span className="shrink-0 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-amber-300">
            En construcción
          </span>
        )}
      </div>

      <p className="text-sm text-ink-muted">{project.tagline}</p>

      {project.stack.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      )}

      <div className="mt-auto flex flex-wrap gap-3 pt-2">
        {project.links.demo && (
          <Button href={project.links.demo} target="_blank" rel="noreferrer" variant="ghost" className="text-xs">
            Demo <ArrowUpRight size={14} />
          </Button>
        )}
        {project.links.github && (
          <Button href={project.links.github} target="_blank" rel="noreferrer" variant="ghost" className="text-xs">
            <Github size={14} /> GitHub
          </Button>
        )}
      </div>
    </div>
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
  const featuredProjects = projects.filter((p) => p.featured && !p.placeholder)
  const otherProjects = projects.filter((p) => !p.featured && !p.placeholder)

  return (
    <section id="projects" className="container-page py-24 sm:py-32">
      <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <SectionHeading
          eyebrow="Proyectos"
          title="Producto real, de principio a fin."
          description="Cada proyecto está construido, documentado y desplegado — no es un ejercicio de tutorial."
        />

        <div className="mt-12 space-y-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <FeaturedProject project={project} />
            </motion.div>
          ))}

          {otherProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: featuredProjects.length * 0.15 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {otherProjects.map((project) => (
                <CompactProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: (featuredProjects.length + 1) * 0.15 }}
          >
            <PlaceholderCard />
          </motion.div>
        </div>
      </div>
    </section>
  )
}