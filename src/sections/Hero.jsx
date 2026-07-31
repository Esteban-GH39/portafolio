import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail } from 'lucide-react'
import Button from '../components/Button'
import FloatingCode from '../components/FloatingCode'

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="container-page grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-6"
        >
          <span className="flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 font-mono text-xs text-ink-muted">
            <span className="h-2 w-2 rounded-full bg-[#34D399]" />
            Disponible para nuevas oportunidades
          </span>

          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            Esteban Girón
            <br />
            <span className="bg-accent-gradient bg-clip-text text-transparent">Herrera</span>
          </h1>

          <p className="font-mono text-lg text-ink-muted sm:text-xl">
            Full Stack Developer <span className="text-accent-light">|</span> Frontend Focus
          </p>

          <p className="max-w-xl text-base leading-relaxed text-ink-muted">
            Desarrollo aplicaciones web modernas enfocadas en experiencias de usuario intuitivas,
            arquitecturas escalables y soluciones digitales eficientes.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button href="#projects" className="group">
              Ver proyectos
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button href="/cv-esteban-giron.pdf" download variant="ghost">
              <Download size={16} />
              Descargar CV
            </Button>
            <Button href="#contact" variant="ghost">
              <Mail size={16} />
              Contactarme
            </Button>
          </div>
        </motion.div>

        <div className="flex justify-center lg:justify-end">
          <FloatingCode />
        </div>
      </div>

      {/* glow ambiental */}
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent-light/10 blur-[100px]" aria-hidden="true" />
    </section>
  )
}
