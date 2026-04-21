import { motion } from 'framer-motion'
import { steps } from '@/data/steps'
import SectionHeader from '@/components/common/SectionHeader'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-slate-50">
      <div className="container-custom">
        <SectionHeader
          label="Getting Started"
          title="How It Works"
          subtitle="Getting started with TransitCare is simple. Follow our streamlined 6-step process and experience the difference of working with a truly customer-first logistics partner."
        />

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-200 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-white rounded-2xl p-8 border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                {/* Step number */}
                <div className="relative w-14 h-14 rounded-2xl bg-brand-600 flex items-center justify-center mb-6 shadow-brand">
                  <span className="font-display font-black text-white text-lg">{step.step}</span>
                </div>

                {/* Arrow for desktop */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-14 z-10 text-brand-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}

                <h3 className="font-display font-bold text-slate-900 text-lg mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
