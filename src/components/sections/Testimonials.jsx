import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { testimonials } from '@/data/testimonials'
import SectionHeader from '@/components/common/SectionHeader'

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1))
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1))

  return (
    <section
      id="testimonials"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #f8fafc 50%, #eff6ff 100%)' }}
    >
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-brand-100 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50" />

      <div className="relative container-custom">
        <SectionHeader
          label="Client Testimonials"
          title="Trusted by Businesses Across Africa"
          subtitle="Don't just take our word for it. Hear from the clients who rely on TransitCare Logistics every day to keep their supply chains moving."
        />

        <div className="max-w-4xl mx-auto">
          {/* Main testimonial */}
          <div className="relative bg-white rounded-3xl p-10 lg:p-14 shadow-card-hover border border-slate-100 overflow-hidden">
            <FaQuoteLeft className="absolute top-8 right-10 text-brand-100 text-6xl" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                    <FaStar key={i} className="text-amber-400" />
                  ))}
                </div>

                <blockquote className="text-xl lg:text-2xl text-slate-700 font-medium leading-relaxed mb-8">
                  &ldquo;{testimonials[active].quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-bold text-lg shadow-brand">
                    {testimonials[active].avatar}
                  </div>
                  <div>
                    <div className="font-display font-bold text-slate-900">
                      {testimonials[active].name}
                    </div>
                    <div className="text-sm text-slate-500">{testimonials[active].title}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-200 ${
                    i === active ? 'w-8 h-3 bg-brand-600' : 'w-3 h-3 bg-slate-300 hover:bg-brand-300'
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-xl border-2 border-slate-200 hover:border-brand-600 hover:bg-brand-600 hover:text-white text-slate-600 flex items-center justify-center transition-all duration-200"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-xl bg-brand-600 hover:bg-brand-700 text-white flex items-center justify-center transition-colors duration-200 shadow-brand"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
