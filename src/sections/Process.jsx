import SectionTitle from '../components/SectionTitle.jsx'
import ProcessStep from '../components/ProcessStep.jsx'
import processSteps from '../data/process.js'

export default function Process() {
  return (
    <section id="process" className="relative bg-bg-alt py-24 sm:py-32">
      <div className="container-content grid grid-cols-1 gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionTitle
          align="start"
          title="فرآیند همکاری با Zelvo"
          description="یک مسیر شفاف و مرحله‌به‌مرحله، از اولین گفت‌وگو تا انتشار نهایی وب‌سایت شما."
          className="lg:sticky lg:top-28 lg:self-start"
        />

        <ol className="flex flex-col">
          {processSteps.map((item, index) => (
            <ProcessStep
              key={item.step}
              step={item.step}
              title={item.title}
              description={item.description}
              isLast={index === processSteps.length - 1}
              delay={index * 80}
            />
          ))}
        </ol>
      </div>
    </section>
  )
}
