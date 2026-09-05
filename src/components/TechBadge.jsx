export default function TechBadge({ name }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm font-medium text-muted transition-colors duration-300 hover:border-secondary/50 hover:text-ink">
      <span className="h-1.5 w-1.5 rounded-full bg-secondary" aria-hidden="true" />
      <span dir="ltr">{name}</span>
    </span>
  )
}
