import { ChevronDown } from 'lucide-react'
import Reveal from './Reveal.jsx'

export default function FAQItem({ id, question, answer, isOpen, onToggle, delay = 0 }) {
  const panelId = `faq-panel-${id}`
  const buttonId = `faq-button-${id}`

  return (
    <Reveal delay={delay} className="border-b border-border">
      <h3>
        <button
          id={buttonId}
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-4 py-5 text-start text-[15px] sm:text-base font-semibold text-ink transition-colors hover:text-light"
        >
          <span>{question}</span>
          <ChevronDown
            className={`h-5 w-5 shrink-0 text-secondary transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="grid overflow-hidden transition-all duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="pb-5 pe-8 text-[15px] leading-8 text-muted">{answer}</p>
        </div>
      </div>
    </Reveal>
  )
}
