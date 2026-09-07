import { Send, Mail, Globe } from 'lucide-react'
import SectionTitle from '../components/SectionTitle.jsx'
import Reveal from '../components/Reveal.jsx'

const contactMethods = [
  {
    icon: Send,
    label: 'تلگرام',
    value: '@ZelvoAgency',
    href: 'https://t.me/ZelvoAgency',
    cta: 'ارسال پیام در تلگرام'
  },
  {
    icon: Mail,
    label: 'ایمیل',
    value: 'contact@zelvoagency.ir',
    href: 'mailto:contact@zelvoagency.ir',
    cta: 'ارسال ایمیل'
  },
  {
    icon: Globe,
    label: 'نمونه‌کارها',
    value: 'ishantia.ir',
    href: 'https://ishantia.ir',
    cta: 'مشاهده پورتفولیو'
  }
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container-content flex flex-col gap-14">
        <SectionTitle
          title="راه‌های ارتباط با Zelvo"
          description="هر کدام از راه‌های زیر که برایتان راحت‌تر است را انتخاب کنید؛ در سریع‌ترین زمان ممکن پاسخگوی شما خواهیم بود."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {contactMethods.map((method, index) => (
            <Reveal key={method.label} delay={index * 90}>
              <a
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-surface/60 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-secondary/50 hover:bg-surface"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-light transition-colors duration-300 group-hover:bg-primary/20">
                  <method.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="text-sm text-muted">{method.label}</span>
                <span dir="ltr" className="text-base font-bold text-ink">
                  {method.value}
                </span>
                <span className="text-sm font-medium text-secondary">{method.cta}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
