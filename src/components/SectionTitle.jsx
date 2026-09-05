import Reveal from './Reveal.jsx'

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'center',
  className = ''
}) {
  const alignClasses = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-start'

  return (
    <Reveal className={`flex flex-col gap-4 max-w-2xl ${alignClasses} ${className}`}>
      {eyebrow && <span className="text-sm font-medium text-secondary">{eyebrow}</span>}
      <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-[1.35]">{title}</h2>
      {description && <p className="text-muted text-base sm:text-lg leading-8">{description}</p>}
    </Reveal>
  )
}
