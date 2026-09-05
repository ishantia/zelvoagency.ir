import { Send, ArrowLeft } from 'lucide-react'
import CTASection from '../components/CTASection.jsx'
import Button from '../components/Button.jsx'

export default function CTA() {
  return (
    <section className="py-4 sm:py-6">
      <div className="container-content">
        <CTASection
          title="ایده‌ای برای پروژه بعدی‌تان دارید؟"
          description="برای شروع همکاری، درباره پروژه‌تان با Zelvo صحبت کنید. در کمترین زمان ممکن پاسخگوی شما خواهیم بود."
        >
          <Button href="https://t.me/ZelvoAgency" variant="primary" icon={Send}>
            گفت‌وگو در تلگرام
          </Button>
          <Button href="#contact" variant="secondary" icon={ArrowLeft} iconPosition="end">
            راه‌های تماس
          </Button>
        </CTASection>
      </div>
    </section>
  )
}
