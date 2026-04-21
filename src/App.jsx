import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import CoreBeliefs from '@/components/sections/CoreBeliefs'
import KeyFeatures from '@/components/sections/KeyFeatures'
import WhyUs from '@/components/sections/WhyUs'
import HowItWorks from '@/components/sections/HowItWorks'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <CoreBeliefs />
        <KeyFeatures />
        <WhyUs />
        <HowItWorks />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
