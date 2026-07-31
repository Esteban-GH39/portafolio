import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Button from './Button'

const LINKS = [
  { id: 'about', label: 'Sobre mí' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'timeline', label: 'Trayectoria' },
  { id: 'contact', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-base/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 font-display font-semibold tracking-tight">
          <svg width="26" height="26" viewBox="0 0 64 64" aria-hidden="true">
            <rect width="64" height="64" rx="14" fill="#1B2942" />
            <path d="M16 18 L16 32 L28 32" stroke="#38BDF8" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 46 L16 32" stroke="#38BDF8" strokeWidth="4" fill="none" strokeLinecap="round" />
            <circle cx="44" cy="24" r="5" fill="#2563EB" />
            <circle cx="44" cy="40" r="5" fill="#2563EB" />
            <path d="M28 32 L38 24 M28 32 L38 40" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" />
          </svg>
          <span className="text-ink">Esteban Girón</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="font-body text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/cv-esteban-giron.pdf" download variant="ghost" className="px-4 py-2 text-xs">
            Descargar CV
          </Button>
        </div>

        <button
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}
          className="text-ink md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-base/95 backdrop-blur-md md:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 font-body text-sm text-ink-muted transition-colors hover:bg-surface hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <Button href="/cv-esteban-giron.pdf" download variant="ghost" className="mt-2 justify-center">
              Descargar CV
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
