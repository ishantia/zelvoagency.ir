import { Check, QrCode, ScanLine, LayoutGrid, UtensilsCrossed, Info, ChevronLeft, Share2 } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import MenuMockup from '../components/MenuMockup.jsx'

const highlights = [
  'حذف کامل نیاز به چاپ و توزیع منوی کاغذی',
  'تجربه‌ای طراحی‌شده برای موبایل، جایی که بیشتر مشتریان منو را می‌بینند',
  'دسترسی سریع با اسکن QR Code، بدون نصب اپلیکیشن',
  'دسته‌بندی آسان آیتم‌ها برای پیمایش سریع‌تر مشتری',
  'نمایش تصاویر، قیمت و توضیحات هر آیتم به‌صورت شفاف',
  'هماهنگ با هویت بصری و رنگ برند کافه یا رستوران شما',
  'پشتیبانی کامل از زبان فارسی و چیدمان راست‌به‌چپ',
  'سرعت بارگذاری بالا، حتی با اینترنت محدود'
]

const journey = [
  { icon: ScanLine, label: 'اسکن QR Code' },
  { icon: QrCode, label: 'ورود به منو' },
  { icon: LayoutGrid, label: 'انتخاب دسته‌بندی' },
  { icon: UtensilsCrossed, label: 'انتخاب آیتم' },
  { icon: Info, label: 'مشاهده جزئیات' }
]

const shareChannels = ['واتساپ', 'تلگرام', 'بیو اینستاگرام', 'لینک مستقیم']

export default function OnlineMenu() {
  return (
    <section id="online-menu" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute top-1/3 left-0 -z-10 h-[420px] w-[420px] -translate-x-1/3 glow-orb opacity-40" aria-hidden="true" />

      <div className="container-content grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-8 lg:order-1">
          <Reveal className="flex flex-col gap-4">
            <span className="text-sm font-medium text-secondary">محصول اختصاصی Zelvo</span>
            <h2 className="text-3xl font-bold leading-[1.35] text-ink sm:text-4xl">
              منوی آنلاین حرفه‌ای برای کافه و رستوران
            </h2>
            <p className="text-[17px] leading-8 text-muted">
              مشتریان شما فقط با یک اسکن، به منویی سریع، زیبا و همیشه به‌روز دسترسی پیدا می‌کنند؛ بدون نیاز به چاپ
              مجدد در هر تغییر قیمت یا منو.
            </p>
          </Reveal>

          <Reveal delay={80} className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <Check className="mt-1 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                <span className="text-[15px] leading-7 text-muted">{item}</span>
              </div>
            ))}
          </Reveal>

          {/* Customer journey */}
          <Reveal delay={140} className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-ink">مسیر مشتری شما</h3>
            <div className="flex flex-wrap items-center gap-2">
              {journey.map((step, index) => (
                <div key={step.label} className="flex items-center gap-2">
                  <div className="flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-2 text-xs font-medium text-ink sm:text-sm">
                    <step.icon className="h-4 w-4 text-light" aria-hidden="true" />
                    {step.label}
                  </div>
                  {index < journey.length - 1 && (
                    <ChevronLeft className="h-4 w-4 shrink-0 text-muted/50" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          {/* Share channels */}
          <Reveal delay={200} className="flex flex-col gap-3">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-ink">
              <Share2 className="h-4 w-4 text-light" aria-hidden="true" />
              اشتراک‌گذاری آسان منو
            </h3>
            <div className="flex flex-wrap gap-2">
              {shareChannels.map((channel) => (
                <span
                  key={channel}
                  className="rounded-full border border-border bg-surface/60 px-3.5 py-1.5 text-xs text-muted"
                >
                  {channel}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={260}>
            <Button href="#contact" variant="primary">
              درخواست منوی آنلاین
            </Button>
          </Reveal>
        </div>

        <Reveal delay={120} className="lg:order-2">
          <MenuMockup />
        </Reveal>
      </div>
    </section>
  )
}
