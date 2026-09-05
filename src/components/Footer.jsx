import { Send, Mail } from 'lucide-react'
import Logo from './Logo.jsx'
import navLinks from '../data/nav.js'
import services from '../data/services.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-bg-alt">
      <div className="container-content py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="max-w-xs text-[15px] leading-7 text-muted">
              Zelvo Agency شریک شما در ساخت وب‌سایت‌های مدرن، سریع و حرفه‌ای؛ از ایده اولیه تا انتشار نهایی.
            </p>
          </div>

          <nav aria-label="لینک‌های ناوبری فوتر">
            <h4 className="mb-4 text-sm font-semibold text-ink">صفحات</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted transition-colors hover:text-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="خدمات">
            <h4 className="mb-4 text-sm font-semibold text-ink">خدمات</h4>
            <ul className="flex flex-col gap-3">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <a href="#services" className="text-sm text-muted transition-colors hover:text-light">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-ink">ارتباط با ما</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://t.me/ZelvoAgency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-light"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  <span dir="ltr">@ZelvoAgency</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@zelvoagency.ir"
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-light"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span dir="ltr">contact@zelvoagency.ir</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted sm:flex-row">
          <p>© {year} Zelvo Agency. تمامی حقوق محفوظ است.</p>
          <p dir="ltr" className="text-muted/70">
            zelvoagency.ir
          </p>
        </div>
      </div>
    </footer>
  )
}
