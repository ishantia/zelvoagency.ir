import { Coffee, Soup, IceCreamCone, Beef, Star } from 'lucide-react'
import { useState } from 'react'

const categories = [
  { id: 'main', label: 'غذای اصلی' },
  { id: 'starter', label: 'پیش‌غذا' },
  { id: 'drink', label: 'نوشیدنی' },
  { id: 'dessert', label: 'دسر' }
]

const items = {
  main: [
    { icon: Beef, name: 'چلوکباب سلطانی', desc: 'برنج ایرانی، کره محلی، گوجه گریل', price: '۳۸۵٬۰۰۰' },
    { icon: Soup, name: 'خورش قیمه مخصوص', desc: 'گوشت گوسفندی، لپه، سیب‌زمینی سرخ‌شده', price: '۲۹۰٬۰۰۰' }
  ],
  starter: [{ icon: Soup, name: 'سوپ جو', desc: 'سوپ خانگی با مرغ و سبزیجات تازه', price: '۹۵٬۰۰۰' }],
  drink: [{ icon: Coffee, name: 'اسپرسو دوبل', desc: 'دان قهوه تازه‌آسیاب، طعم غنی', price: '۷۵٬۰۰۰' }],
  dessert: [{ icon: IceCreamCone, name: 'بستنی سنتی زعفرانی', desc: 'با پسته و گلاب', price: '۸۵٬۰۰۰' }]
}

export default function MenuMockup() {
  const [active, setActive] = useState('main')
  const activeItems = items[active]

  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      {/* Ambient glow behind the phone */}
      <div className="glow-orb absolute -inset-10 -z-10 opacity-70" aria-hidden="true" />

      <div className="relative rounded-[2.25rem] border border-white/10 bg-[#0a0c11] p-2.5 shadow-glow">
        <div className="overflow-hidden rounded-[1.75rem] border border-border bg-surface">
          {/* Header / cover */}
          <div className="relative h-28 bg-gradient-to-br from-[#2a1049] via-[#1a0e2b] to-surface px-5 pt-8">
            <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
            <p className="relative text-lg font-bold text-ink">کافه رستوران آوان</p>
            <p className="relative mt-1 flex items-center gap-1.5 text-xs text-muted">
              <Star className="h-3.5 w-3.5 fill-light text-light" aria-hidden="true" />
              ۴٫۹ · منوی دیجیتال
            </p>
          </div>

          {/* Category tabs */}
          <div className="no-scrollbar flex gap-2 overflow-x-auto px-4 pb-1 pt-4" role="tablist" aria-label="دسته‌بندی منو">
            {categories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={active === cat.id}
                onClick={() => setActive(cat.id)}
                className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors duration-200 ${
                  active === cat.id ? 'bg-primary text-white' : 'bg-white/5 text-muted hover:text-ink'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Items */}
          <div className="flex flex-col gap-3 p-4">
            {activeItems.map((item) => (
              <div key={item.name} className="flex items-center gap-3 rounded-xl border border-border bg-white/[0.02] p-2.5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/30 to-secondary/10 text-light">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-ink">{item.name}</p>
                  <p className="truncate text-xs text-muted">{item.desc}</p>
                </div>
                <p className="shrink-0 text-xs font-bold text-light" dir="rtl">
                  {item.price} <span className="text-[10px] font-medium opacity-80">تومان</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
