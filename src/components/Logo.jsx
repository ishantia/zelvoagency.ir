import logo from '../assets/logo.png'

export default function Logo({ withText = true, className = '' }) {
  return (
    <a
      href="#home"
      className={`flex items-center gap-2.5 shrink-0 group ${className}`}
      aria-label="Zelvo Agency - بازگشت به ابتدای صفحه"
    >
      <img
        src={logo}
        alt="لوگوی Zelvo Agency"
        width={36}
        height={36}
        className="w-9 h-9 rounded-lg transition-transform duration-300 group-hover:scale-105"
      />
      {withText && (
        <span className="text-lg font-bold tracking-tight text-ink" dir="ltr">
          Zelvo <span className="text-secondary">Agency</span>
        </span>
      )}
    </a>
  )
}
