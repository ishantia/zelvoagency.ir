import Reveal from './Reveal.jsx'

export default function ProcessStep({ step, title, description, isLast, delay = 0 }) {
  return (
    <Reveal delay={delay} as="li" className="relative flex gap-6 pb-10 last:pb-0">
      <div className="relative flex flex-col items-center">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-secondary/40 bg-surface text-[15px] font-bold text-light shadow-[0_0_20px_-4px_rgba(139,92,246,0.6)]">
          {step}
        </div>
        {!isLast && <span className="mt-1 w-px flex-1 bg-gradient-to-b from-secondary/40 to-transparent" />}
      </div>

      <div className="pt-1.5 pb-2">
        <h3 className="text-lg font-bold text-ink">{title}</h3>
        <p className="mt-2 max-w-md text-[15px] leading-7 text-muted">{description}</p>
      </div>
    </Reveal>
  )
}
