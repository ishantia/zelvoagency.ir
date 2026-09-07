import { Send, Mail, Globe, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { useState } from 'react'
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
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    try {
      const response = await fetch('https://formspree.io/f/xldwlwpb', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        setStatus('success')
        e.target.reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container-content flex flex-col gap-14">
        <SectionTitle
          title="شروع یک پروژه جدید"
          description="فرم زیر را پر کنید تا در کوتاه‌ترین زمان برای مشاوره با شما تماس بگیریم، یا از راه‌های ارتباطی دیگر استفاده کنید."
        />

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col gap-5">
            {contactMethods.map((method, index) => (
              <Reveal key={method.label} delay={index * 90}>
                <a
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-surface/60 p-6 sm:p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-secondary/50 hover:bg-surface"
                >
                  <span className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-primary/10 text-light transition-colors duration-300 group-hover:bg-primary/20">
                    <method.icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                  </span>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xs sm:text-sm text-muted">{method.label}</span>
                    <span dir="ltr" className="text-sm sm:text-base font-bold text-ink">
                      {method.value}
                    </span>
                  </div>
                  <span className="mt-1 text-xs sm:text-sm font-medium text-secondary">{method.cta}</span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="rounded-3xl border border-border bg-surface/60 p-6 shadow-card backdrop-blur-sm sm:p-10">
            <h3 className="mb-6 text-xl sm:text-2xl font-bold text-ink">درخواست مشاوره رایگان</h3>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-10 text-center animate-fade-up">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#22c55e]/10 text-[#22c55e]">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h4 className="mb-2 text-xl font-bold text-ink">درخواست شما ثبت شد!</h4>
                <p className="text-[15px] leading-7 text-muted">
                  اطلاعات شما با موفقیت دریافت شد. به‌زودی برای مشاوره با شما تماس خواهیم گرفت.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-sm font-medium text-secondary transition-colors hover:text-light"
                >
                  ارسال درخواست جدید
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-ink">
                      نام و نام خانوادگی <span className="text-[#ef4444]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="نام_مشتری"
                      required
                      disabled={status === 'submitting'}
                      placeholder="مثال: علی حسینی"
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-[15px] text-ink placeholder:text-muted/50 transition-all focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary disabled:opacity-50"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm font-medium text-ink">
                      شماره موبایل <span className="text-[#ef4444]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="شماره_تماس"
                      dir="ltr"
                      required
                      disabled={status === 'submitting'}
                      placeholder="0912 345 6789"
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-left text-[15px] tracking-wider text-ink placeholder:text-muted/50 transition-all focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="project" className="text-sm font-medium text-ink">
                    نوع پروژه
                  </label>
                  <select
                    id="project"
                    name="نوع_پروژه"
                    disabled={status === 'submitting'}
                    className="w-full appearance-none rounded-xl border border-border bg-surface px-4 py-3 text-[15px] text-ink transition-all focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary disabled:opacity-50"
                    style={{
                      backgroundImage:
                        'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23A1A1AA\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'left 1rem center',
                      backgroundSize: '1.2em'
                    }}
                  >
                    <option value="نامشخص">انتخاب کنید...</option>
                    <option value="وب‌سایت شرکتی">وب‌سایت شرکتی و معرفی</option>
                    <option value="فروشگاه اینترنتی">فروشگاه اینترنتی</option>
                    <option value="منوی آنلاین">منوی آنلاین کافه / رستوران</option>
                    <option value="لندینگ پیج">طراحی لندینگ پیج</option>
                    <option value="سایر">سایر موارد</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-ink">
                    توضیحات کوتاه <span className="text-muted/70 text-xs">(اختیاری)</span>
                  </label>
                  <textarea
                    id="message"
                    name="توضیحات"
                    rows="4"
                    disabled={status === 'submitting'}
                    placeholder="مختصری درباره کسب‌وکار یا ایده خود بنویسید..."
                    className="w-full resize-y rounded-xl border border-border bg-surface px-4 py-3 text-[15px] text-ink placeholder:text-muted/50 transition-all focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary disabled:opacity-50"
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 rounded-lg bg-[#ef4444]/10 p-3 text-sm text-[#ef4444] animate-fade-up">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>متأسفانه در ارسال پیام خطایی رخ داد. لطفاً دوباره تلاش کنید.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_0_0_1px_rgba(139,92,246,0.3),0_18px_40px_-16px_rgba(128,48,224,0.55)] transition-all hover:bg-[#9440f0] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-70"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      در حال ارسال...
                    </>
                  ) : (
                    'ارسال درخواست'
                  )}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
