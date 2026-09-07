import SectionTitle from '../components/SectionTitle.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import services from '../data/services.js'

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="container-content flex flex-col gap-14">
        <SectionTitle
          title="خدماتی که به رشد کسب‌وکار شما کمک می‌کند"
          description="از طراحی وب‌سایت شرکتی تا منوی آنلاین اختصاصی؛ هر پروژه با فناوری‌های مدرن و متناسب با نیاز واقعی کسب‌وکار شما ساخته می‌شود."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} delay={(index % 3) * 90} />
          ))}
        </div>
      </div>
    </section>
  )
}
