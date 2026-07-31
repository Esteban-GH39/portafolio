import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col items-center gap-4 py-8 sm:flex-row sm:justify-between">
        <p className="font-mono text-xs text-ink-faint">
          © {year} Esteban Girón Herrera — Bogotá, Colombia
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Esteban-GH39"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-ink-muted transition-colors hover:text-accent-light"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/esteban-giron-herrera-9670a1282"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-ink-muted transition-colors hover:text-accent-light"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:egiron39.dev@gmail.com"
            aria-label="Email"
            className="text-ink-muted transition-colors hover:text-accent-light"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
