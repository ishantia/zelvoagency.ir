import SectionTitle from '../components/SectionTitle.jsx'
import TechBadge from '../components/TechBadge.jsx'
import Reveal from '../components/Reveal.jsx'
import technologies from '../data/technologies.js'

export default function Technologies() {
  return (
    <section id="technologies" className="relative py-24 sm:py-28">
      <div className="container-content flex flex-col items-center gap-10">
        <SectionTitle
          title="فناوری‌هایی که به آن‌ها تکیه می‌کنیم"
          description="ابزارهایی پایدار، مدرن و مورد اعتماد جامعه توسعه‌دهندگان در سراسر دنیا."
        />

        <Reveal delay={80} className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
