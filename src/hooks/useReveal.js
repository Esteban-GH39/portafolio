import { useEffect, useRef, useState } from 'react'

/**
 * Devuelve un ref y un booleano `isVisible` que se activa una sola vez
 * cuando el elemento entra en el viewport. Pensado para animaciones
 * discretas de fade-up en cada sección.
 */
export function useReveal(threshold = 0.15) {
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
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, isVisible]
}
