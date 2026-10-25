import { useEffect, useRef, useState } from 'react'

/**
 * Devuelve [ref, isVisible]; isVisible pasa a true la primera vez que el elemento entra en pantalla.
 *
 * Se observa con threshold 0 y un margen inferior negativo, no con un porcentaje del elemento:
 * una sección muy alta (como Proyectos, con capturas) nunca llegaría a mostrar el 15 % de su
 * altura dentro del viewport y se quedaría invisible para siempre.
 */
export function useReveal(rootMargin = '0px 0px -12% 0px') {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [rootMargin])

  return [ref, isVisible]
}
