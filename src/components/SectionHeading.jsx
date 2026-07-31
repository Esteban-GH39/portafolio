export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-accent-light/80">
          <span className="h-px w-6 bg-accent-light/50" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
      {description && <p className="text-base leading-relaxed text-ink-muted">{description}</p>}
    </div>
  )
}
