import { motion } from 'framer-motion'
import { GraduationCap, Layers, Plug, Rocket, Sparkles } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { timeline } from '../data/timeline'
import { useReveal } from '../hooks/useReveal'

const ICONS = { GraduationCap, Layers, Plug, Rocket, Sparkles }

export default function Timeline() {
  const [ref, isVisible] = useReveal()

  return (
    <section id="timeline" className="border-t border-border/60 bg-elevated/40">
      <div className="container-page py-24 sm:py-32">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <SectionHeading
            eyebrow="Mi trayectoria"
            title="Cada set suma para el siguiente."
            description="Sin años de experiencia profesional todavía, pero con un progreso constante y verificable."
          />

          <div className="relative mt-12">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border sm:left-[23px]" aria-hidden="true" />

            <ol className="space-y-8">
              {timeline.map((item, i) => {
                const Icon = ICONS[item.icon]
                return (
                  <motion.li
                    key={item.set}
                    initial={{ opacity: 0, x: -12 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative flex gap-5 pl-0"
                  >
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-base text-accent-light sm:h-12 sm:w-12">
                      <Icon size={18} />
                    </div>
                    <div className="card flex-1 p-5">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="font-mono text-[11px] uppercase tracking-widest text-accent-light/80">
                          {item.set}
                        </span>
                        <span className="text-xs text-ink-faint">{item.period}</span>
                      </div>
                      <h3 className="mt-1 font-display text-lg font-medium text-ink">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{item.description}</p>
                    </div>
                  </motion.li>
                )
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
