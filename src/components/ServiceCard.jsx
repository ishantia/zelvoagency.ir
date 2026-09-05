import { Check } from 'lucide-react'
import Reveal from './Reveal.jsx'

export default function ServiceCard({ service, delay = 0 }) {
  const { icon: Icon, title, description, benefits } = service

  return (
    <Reveal
      delay={delay}
      className="group relative flex flex-col gap-5 rounded-2xl border border-border bg-surface/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:bg-surface"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-light transition-colors duration-300 group-hover:bg-primary/20">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>

      <div className="flex flex-col gap-2.5">
        <h3 className="text-lg font-bold text-ink">{title}</h3>
        <p className="text-[15px] leading-7 text-muted">{description}</p>
      </div>

      <ul className="mt-1 flex flex-col gap-2 border-t border-border pt-4">
        {benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2 text-sm text-muted">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  )
}
