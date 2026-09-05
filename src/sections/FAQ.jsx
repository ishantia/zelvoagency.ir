import { useState } from 'react'
import SectionTitle from '../components/SectionTitle.jsx'
import FAQItem from '../components/FAQItem.jsx'
import faq from '../data/faq.js'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="container-content grid grid-cols-1 gap-14 lg:grid-cols-[0.7fr_1.3fr]">
        <SectionTitle
          align="start"
          title="سوالات متداول"
          description="پاسخ به پرسش‌هایی که معمولاً پیش از شروع همکاری از ما پرسیده می‌شود."
          className="lg:sticky lg:top-28 lg:self-start"
        />

        <div>
          {faq.map((item, index) => (
            <FAQItem
              key={item.question}
              id={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              delay={index * 40}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
