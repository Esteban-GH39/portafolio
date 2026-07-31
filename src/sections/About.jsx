import { motion } from 'framer-motion'
import { Code2, GraduationCap, Layers, Sparkles } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { useReveal } from '../hooks/useReveal'

const POINTS = [
  {
    icon: GraduationCap,
    title: 'Ingeniería de Sistemas',
    text: 'Cursando 8° semestre, con bases sólidas en estructuras de datos, arquitectura de software y bases de datos.',
  },
  {
    icon: Code2,
    title: 'Enfoque en Frontend',
    text: 'Construyo interfaces cuidadas al detalle: componentización, accesibilidad y rendimiento como prioridades, no como extras.',
  },
  {
    icon: Layers,
    title: 'Backend en crecimiento',
    text: 'Diseño APIs REST con Node.js y Express, y modelo bases de datos relacionales en PostgreSQL para sostener esas interfaces.',
  },
  {
    icon: Sparkles,
    title: 'Aprendizaje activo',
    text: 'Cada proyecto es una excusa para adoptar una práctica nueva: Docker, documentación con Swagger, arquitectura limpia.',
  },
]

export default function About() {
  const [ref, isVisible] = useReveal()

  return (
    <section id="about" className="container-page py-24 sm:py-32">
      <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <SectionHeading
          eyebrow="Sobre mí"
          title="Developer en crecimiento con proyectos reales."
          description="No busco solo aprender a programar: busco entender cómo se construyen productos digitales completos, desde la base de datos hasta el último detalle de la interfaz."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {POINTS.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card flex gap-4 p-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-light">
                <point.icon size={20} />
              </div>
              <div>
                <h3 className="font-display text-lg font-medium text-ink">{point.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">{point.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
