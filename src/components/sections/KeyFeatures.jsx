import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import { features } from '@/data/features'
import SectionHeader from '@/components/common/SectionHeader'
import { scrollToSection } from '@/utils/scroll'

export default function KeyFeatures() {
  return (
    <section id="features" className="section-padding bg-slate-50">
      <div className="container-custom">
        <SectionHeader
          label="What We Offer"
          title="Comprehensive Freight Solutions"
          subtitle="From customs clearance to specialized cargo handling — our suite of services covers every logistics need, no matter the complexity."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative p-8 rounded-2xl border-2 transition-all duration-300 cursor-default ${
                feature.highlight
                  ? 'bg-brand-600 border-brand-700 text-white hover:-translate-y-2 shadow-brand-lg'
                  : 'bg-white border-slate-100 hover:border-brand-200 hover:-translate-y-1 hover:shadow-card-hover'
              }`}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                  feature.highlight
                    ? 'bg-white/15 group-hover:bg-white/25'
                    : 'bg-brand-50 group-hover:bg-brand-100'
                }`}
              >
                <feature.icon
                  className={`text-2xl ${
                    feature.highlight ? 'text-white' : 'text-brand-600'
                  }`}
                />
              </div>

              <h3
                className={`font-display font-bold text-lg mb-3 ${
                  feature.highlight ? 'text-white' : 'text-slate-900'
                }`}
              >
                {feature.title}
              </h3>

              <p
                className={`text-sm leading-relaxed ${
                  feature.highlight ? 'text-blue-100' : 'text-slate-500'
                }`}
              >
                {feature.description}
              </p>

              <div
                className={`mt-6 flex items-center gap-2 text-sm font-semibold transition-all duration-200 ${
                  feature.highlight
                    ? 'text-blue-200 group-hover:text-white'
                    : 'text-brand-600 group-hover:gap-3'
                }`}
              >
                Learn more <FaArrowRight className="text-xs" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-primary"
          >
            Request a Custom Solution
            <FaArrowRight />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
