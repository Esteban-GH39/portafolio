import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Plus, Trophy, ScanEye } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Badge from '../components/Badge'
import Button from '../components/Button'
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
        </div>
      </div>
    </div>
  )
}

function BracketPreview() {
  return (
    <svg viewBox="0 0 260 160" className="w-full" aria-hidden="true">
      {[24, 64, 104, 144].map((y) => (
        <line key={y} x1="0" y1={y} x2="60" y2={y} stroke="#243046" strokeWidth="2" />
      ))}
      <line x1="60" y1="24" x2="60" y2="64" stroke="#243046" strokeWidth="2" />
      <line x1="60" y1="104" x2="60" y2="144" stroke="#243046" strokeWidth="2" />
      <line x1="60" y1="44" x2="130" y2="44" stroke="#2563EB" strokeWidth="2" />
      <line x1="60" y1="124" x2="130" y2="124" stroke="#243046" strokeWidth="2" />
      <line x1="130" y1="44" x2="130" y2="124" stroke="#243046" strokeWidth="2" />
      <line x1="130" y1="84" x2="200" y2="84" stroke="#38BDF8" strokeWidth="2" />
      {[24, 64, 104, 144].map((y, i) => (
        <circle key={y} cx="0" cy={y} r="4" fill={i === 0 ? '#38BDF8' : '#475569'} />
      ))}
      <circle cx="200" cy="84" r="5" fill="#38BDF8" />
      <text x="204" y="88" fill="#94A3B8" fontSize="9" fontFamily="JetBrains Mono, monospace">
        Campeón
      </text>
    </svg>
  )
}

function SurveillancePreview() {
  return (
    <svg viewBox="0 0 260 160" className="w-full" aria-hidden="true">
      {/* Marco de la "cámara" */}
      <rect x="8" y="8" width="244" height="144" rx="8" fill="none" stroke="#243046" strokeWidth="2" />
      {/* Cuadro de detección sobre una "persona" */}
      <rect x="95" y="34" width="52" height="92" rx="4" fill="none" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 3" />
      <circle cx="121" cy="52" r="10" fill="#243046" />
      <rect x="105" y="66" width="32" height="54" rx="6" fill="#243046" />
      <text x="98" y="30" fill="#38BDF8" fontSize="8" fontFamily="JetBrains Mono, monospace">
        persona 0.94
      </text>
      {/* Líneas de escaneo */}
      <line x1="8" y1="60" x2="252" y2="60" stroke="#2563EB" strokeWidth="1" opacity="0.35" />
      <line x1="8" y1="104" x2="252" y2="104" stroke="#2563EB" strokeWidth="1" opacity="0.35" />
      {/* Indicador REC */}
      <circle cx="22" cy="22" r="4" fill="#EF4444" />
      <text x="30" y="25" fill="#94A3B8" fontSize="8" fontFamily="JetBrains Mono, monospace">
        REC · EN VIVO
      </text>
      {/* Alerta */}
      <rect x="180" y="130" width="64" height="16" rx="4" fill="#1F2937" stroke="#EF4444" strokeWidth="1" />
      <text x="188" y="141" fill="#F87171" fontSize="7" fontFamily="JetBrains Mono, monospace">
        ALERTA: merodeo
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
  const featuredProjects = projects.filter((p) => p.featured && !p.placeholder)

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

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: featuredProjects.length * 0.15 }}
          >
            <PlaceholderCard />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
