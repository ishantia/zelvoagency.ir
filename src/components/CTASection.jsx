import Reveal from './Reveal.jsx'

export default function CTASection({ title, description, children }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/70 px-6 py-16 text-center sm:px-16 sm:py-20">
      <div
        className="pointer-events-none absolute inset-0 -z-10 glow-orb opacity-50"
        style={{ transform: 'scale(1.4)' }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_60%_80%_at_50%_50%,#000,transparent)]" aria-hidden="true" />

      <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-5">
        <h2 className="text-3xl font-bold leading-[1.35] text-ink sm:text-4xl">{title}</h2>
        {description && <p className="text-lg leading-8 text-muted">{description}</p>}
        {children && <div className="mt-3 flex flex-col gap-4 sm:flex-row">{children}</div>}
      </Reveal>
    </div>
  )
}
