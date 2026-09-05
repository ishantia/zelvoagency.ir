const variants = {
  primary:
    'bg-primary text-white hover:bg-[#9440f0] shadow-[0_0_0_1px_rgba(139,92,246,0.3),0_18px_40px_-16px_rgba(128,48,224,0.55)]',
  secondary:
    'bg-transparent text-ink border border-border hover:border-secondary/60 hover:bg-white/[0.03]',
  ghost: 'bg-transparent text-muted hover:text-ink'
}

/**
 * دکمه یکپارچه سایت. اگر href داده شود به‌صورت لینک (<a>) و در غیر این صورت
 * به‌صورت <button> رندر می‌شود.
 */
export default function Button({
  children,
  href,
  variant = 'primary',
  icon: Icon,
  iconPosition = 'start',
  className = '',
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-[15px] font-semibold transition-all duration-300 active:scale-[0.98] ${variants[variant]} ${className}`

  const content = (
    <>
      {Icon && iconPosition === 'start' && <Icon className="w-[18px] h-[18px]" aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === 'end' && <Icon className="w-[18px] h-[18px]" aria-hidden="true" />}
    </>
  )

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  )
}
