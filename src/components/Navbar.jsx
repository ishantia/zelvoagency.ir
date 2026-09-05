import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'
import Button from './Button.jsx'
import navLinks from '../data/nav.js'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'border-b border-border bg-bg/80 backdrop-blur-lg' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-content flex h-[72px] items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="ناوبری اصلی">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-muted transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contact" variant="primary" className="px-5 py-3 text-sm">
            شروع یک پروژه
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink lg:hidden"
          aria-label={isMenuOpen ? 'بستن منو' : 'باز کردن منو'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-b border-border bg-bg/98 backdrop-blur-lg transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-content flex flex-col gap-1 py-4" aria-label="ناوبری موبایل">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-[15px] font-medium text-muted transition-colors hover:bg-white/[0.04] hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <Button href="#contact" variant="primary" className="mt-2 w-full" onClick={() => setIsMenuOpen(false)}>
            شروع یک پروژه
          </Button>
        </nav>
      </div>
    </header>
  )
}
