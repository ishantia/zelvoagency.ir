import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx'
import Services from './sections/Services.jsx'
import WhyZelvo from './sections/WhyZelvo.jsx'
import Process from './sections/Process.jsx'
import OnlineMenu from './sections/OnlineMenu.jsx'
import Technologies from './sections/Technologies.jsx'
import Features from './sections/Features.jsx'
import FAQ from './sections/FAQ.jsx'
import CTA from './sections/CTA.jsx'
import Contact from './sections/Contact.jsx'

export default function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:start-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
      >
        رفتن به محتوای اصلی
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <Services />
        <WhyZelvo />
        <Process />
        <OnlineMenu />
        <Technologies />
        <Features />
        <FAQ />
        <CTA />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
