import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { useReveal } from '../hooks/useReveal'

const CHANNELS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'egiron39.dev@gmail.com',
    href: 'mailto:egiron39.dev@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/esteban-giron-herrera-9670a1282',
    href: 'https://linkedin.com/in/esteban-giron-herrera-9670a1282',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Esteban-GH39',
    href: 'https://github.com/Esteban-GH39',
  },
]

export default function Contact() {
  const [ref, isVisible] = useReveal()

  return (
    <section id="contact" className="container-page py-24 sm:py-32">
      <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <SectionHeading
          eyebrow="Contacto"
          title="Hablemos de tu próximo proyecto."
          description='"Estoy abierto a oportunidades donde pueda aportar mis habilidades y seguir creciendo como desarrollador."'
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-3"
        >
          {CHANNELS.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="card group flex flex-col items-center gap-3 p-6 text-center transition-colors hover:border-accent-light/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent-light transition-colors group-hover:bg-accent-gradient group-hover:text-white">
                <channel.icon size={20} />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">{channel.label}</p>
                <p className="mt-1 break-all text-sm text-ink-muted">{channel.value}</p>
              </div>
            </a>
          ))}
        </motion.div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <span className="flex items-center gap-2 text-sm text-ink-faint">
            <MapPin size={14} /> Bogotá, Colombia
          </span>
          <Button href="mailto:egiron39.dev@gmail.com">Escribir un mensaje</Button>
        </div>
      </div>
    </section>
  )
}
