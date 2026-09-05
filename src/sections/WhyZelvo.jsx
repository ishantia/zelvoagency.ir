import { PenTool, Cpu, Gauge, Search, Eye, MessageCircle } from 'lucide-react'
import SectionTitle from '../components/SectionTitle.jsx'
import Reveal from '../components/Reveal.jsx'

const reasons = [
  {
    icon: PenTool,
    title: 'طراحی اختصاصی، نه قالب آماده',
    description: 'هر پروژه از صفر و متناسب با هویت بصری و نیاز واقعی کسب‌وکار شما طراحی می‌شود.'
  },
  {
    icon: Cpu,
    title: 'فناوری مدرن و به‌روز',
    description: 'استفاده از React و Next.js برای ساخت وب‌سایت‌هایی سریع، پایدار و آماده برای رشد.'
  },
  {
    icon: Gauge,
    title: 'عملکرد و سرعت بالا',
    description: 'بهینه‌سازی دقیق کد و منابع برای بارگذاری سریع صفحات، حتی روی اینترنت با سرعت پایین.'
  },
  {
    icon: Search,
    title: 'ساختاری آماده برای سئو',
    description: 'رعایت اصول پایه سئو از ابتدای طراحی، برای دیده‌شدن بهتر در نتایج جست‌وجو.'
  },
  {
    icon: Eye,
    title: 'توجه به جزئیات',
    description: 'از فاصله‌گذاری و تایپوگرافی گرفته تا واکنش‌پذیری در هر اندازه صفحه، جزئیات جدی گرفته می‌شوند.'
  },
  {
    icon: MessageCircle,
    title: 'ارتباط مستقیم و شفاف',
    description: 'در طول پروژه مستقیماً با تیم Zelvo در ارتباط هستید، بدون واسطه و بدون ابهام در روند کار.'
  }
]

export default function WhyZelvo() {
  return (
    <section id="why-zelvo" className="relative py-24 sm:py-32">
      <div className="container-content grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionTitle
          align="start"
          title="چرا کسب‌وکارها Zelvo را انتخاب می‌کنند"
          description="ما به جای وعده‌های بزرگ، روی اصولی تمرکز می‌کنیم که مستقیماً روی تجربه کاربران و رشد کسب‌وکار شما اثر می‌گذارد."
          className="lg:sticky lg:top-28 lg:self-start"
        />

        <ul className="flex flex-col">
          {reasons.map((reason, index) => (
            <Reveal
              as="li"
              key={reason.title}
              delay={index * 70}
              className="flex gap-5 border-b border-border py-6 first:pt-0 last:border-none"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-light">
                <reason.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-bold text-ink">{reason.title}</h3>
                <p className="mt-1.5 text-[15px] leading-7 text-muted">{reason.description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
