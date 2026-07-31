import { motion } from 'framer-motion'
import { Database, MonitorSmartphone, Server, Wrench } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { skillCategories } from '../data/skills'
import { useReveal } from '../hooks/useReveal'

const ICONS = { MonitorSmartphone, Server, Database, Wrench }

export default function Skills() {
  const [ref, isVisible] = useReveal()

  return (
    <section id="skills" className="border-t border-border/60 bg-elevated/40">
      <div className="container-page py-24 sm:py-32">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <SectionHeading
            eyebrow="Habilidades"
            title="Un stack pensado para construir productos completos."
            description="De la interfaz a la base de datos, con las herramientas que un equipo de producto real usa todos los días."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((category, i) => {
              const Icon = ICONS[category.icon]
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="card group flex flex-col gap-4 p-6 transition-colors hover:border-accent-light/40"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent-light transition-colors group-hover:bg-accent-gradient group-hover:text-white">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium text-ink">{category.title}</h3>
                    <p className="mt-1 text-sm text-ink-muted">{category.description}</p>
                  </div>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-border bg-base/60 px-2.5 py-1 font-mono text-[11px] text-ink-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
