import { ArrowLeft, Sparkles } from 'lucide-react'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32">
      {/* Background: subtle grid + glow, decorative only */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_10%,transparent_75%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 glow-orb opacity-60" aria-hidden="true" />

      <div className="container-content grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Text content */}
        <div className="flex flex-col items-start gap-7">
          <Reveal className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-1.5 text-sm text-muted">
            <Sparkles className="h-4 w-4 text-light" aria-hidden="true" />
            آژانس دیجیتال تخصصی در React و Next.js
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-4xl font-extrabold leading-[1.3] text-ink sm:text-5xl sm:leading-[1.28]">
              وب‌سایت‌هایی که فقط زیبا نیستند؛{' '}
              <span className="text-gradient">ساخته شده‌اند تا رشد کنند.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="max-w-xl text-lg leading-8 text-muted">
              Zelvo Agency با استفاده از React و Next.js، تجربه‌های دیجیتال مدرن، سریع و حرفه‌ای برای برندها،
              کسب‌وکارها، کافه‌ها و رستوران‌ها می‌سازد.
            </p>
          </Reveal>

          <Reveal delay={240} className="flex flex-col gap-4 sm:flex-row">
            <Button href="#contact" variant="primary" icon={ArrowLeft} iconPosition="end">
              شروع یک پروژه
            </Button>
            <Button href="#services" variant="secondary">
              مشاهده خدمات
            </Button>
          </Reveal>

          <Reveal delay={320} className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted">
            <span dir="ltr">React</span>
            <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
            <span dir="ltr">Next.js</span>
            <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
            <span>طراحی کاملاً واکنش‌گرا</span>
          </Reveal>
        </div>

        {/* Visual composition */}
        <Reveal delay={200} className="relative hidden justify-self-center lg:block">
          <div className="relative h-[420px] w-[420px]">
            {/* Angular shapes echoing the Zelvo mark */}
            <svg
              viewBox="0 0 400 400"
              className="absolute inset-0 h-full w-full animate-float-slow"
              aria-hidden="true"
            >
              <polygon
                points="80,60 320,60 220,200 320,340 80,340 180,200"
                fill="none"
                stroke="url(#heroGrad)"
                strokeWidth="2.5"
                opacity="0.5"
              />
              <defs>
                <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#A855F7" />
                  <stop offset="100%" stopColor="#8030E0" />
                </linearGradient>
              </defs>
            </svg>

            <svg
              viewBox="0 0 400 400"
              className="absolute inset-0 h-full w-full opacity-40"
              style={{ animation: 'float-slow 9s ease-in-out infinite', animationDelay: '1.2s' }}
              aria-hidden="true"
            >
              <polygon
                points="130,120 270,120 200,200 270,280 130,280 200,200"
                fill="none"
                stroke="#8B5CF6"
                strokeWidth="1.5"
              />
            </svg>

            {/* Floating UI / code card */}
            <div className="absolute left-1/2 top-1/2 w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-surface/90 p-4 shadow-glow backdrop-blur-sm">
              <div className="mb-3 flex items-center gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ef4444]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#eab308]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]/70" />
              </div>
              <div dir="ltr" className="flex flex-col gap-2 font-mono text-[13px] leading-6">
                <p><span className="text-secondary">const</span> <span className="text-light">site</span> = <span className="text-secondary">buildWith</span>(<span className="text-[#F5F3FF]/70">'React'</span>);</p>
                <p><span className="text-secondary">export</span> <span className="text-secondary">default</span> <span className="text-light">Zelvo</span>;</p>
                <p className="text-muted/60">// fast. responsive. modern.</p>
              </div>
            </div>

            {/* Small floating badge */}
            <div className="absolute -bottom-4 end-2 flex items-center gap-2 rounded-xl border border-border bg-surface/90 px-4 py-2.5 shadow-glow backdrop-blur-sm animate-float-slow">
              <span className="h-2 w-2 rounded-full bg-[#22c55e] animate-pulse-glow" aria-hidden="true" />
              <span className="text-xs font-medium text-ink">آنلاین و آماده رشد</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
