import SectionTitle from '../components/SectionTitle.jsx'
import Reveal from '../components/Reveal.jsx'
import features from '../data/features.js'

export default function Features() {
  return (
    <section id="features" className="relative bg-bg-alt py-24 sm:py-32">
      <div className="container-content flex flex-col gap-14">
        <SectionTitle
          title="چیزی که در پایان پروژه تحویل می‌گیرید"
          description="یک وب‌سایت کامل با استانداردهای فنی امروز؛ نه فقط یک طرح بصری، بلکه محصولی آماده برای استفاده واقعی."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Reveal
              key={feature.title}
              delay={(index % 4) * 80}
              className={`flex flex-col justify-between gap-6 rounded-2xl border border-border bg-surface/60 p-6 transition-colors duration-300 hover:border-secondary/40 ${
                feature.size === 'large' ? 'sm:col-span-2' : ''
              }`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-light">
                <feature.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-bold text-ink">{feature.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-muted">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
