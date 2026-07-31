import { forwardRef } from 'react'

const variants = {
  primary:
    'bg-accent-gradient text-white shadow-glow hover:brightness-110 active:brightness-95',
  ghost:
    'border border-border text-ink hover:border-accent-light/60 hover:text-accent-light',
}

/**
 * Botón reutilizable. Puede renderizarse como <a> (si recibe `href`) o <button>.
 */
const Button = forwardRef(({ as, href, variant = 'primary', className = '', children, ...props }, ref) => {
  const Tag = href ? 'a' : as || 'button'
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium font-body transition-all duration-200 select-none'

  return (
    <Tag ref={ref} href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  )
})

Button.displayName = 'Button'
export default Button
