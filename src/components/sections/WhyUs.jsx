import { motion } from 'framer-motion'
import { whyUsItems } from '@/data/whyUs'
import SectionHeader from '@/components/common/SectionHeader'

export default function WhyUs() {
  return (
    <section id="why-us" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80"
                alt="Cargo port operations"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
            </div>

            {/* Floating metric */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-card-hover border border-slate-100"
            >
              <div className="text-3xl font-display font-black text-brand-600">99.8%</div>
              <div className="text-sm text-slate-500 font-medium">On-Time Delivery Rate</div>
            </motion.div>

            {/* Top floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -top-4 -left-4 bg-brand-600 text-white rounded-2xl p-5 shadow-brand"
            >
              <div className="text-2xl font-display font-black">15+</div>
              <div className="text-xs text-blue-200 font-medium">Years of Excellence</div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <div>
            <SectionHeader
              label="Why Choose TransitCare"
              title="Built Different, Delivers Better"
              subtitle="We combine deep industry expertise with cutting-edge technology to provide logistics solutions that are faster, smarter, and more reliable."
              centered={false}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyUsItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-50 group-hover:bg-brand-600 flex items-center justify-center shrink-0 transition-colors duration-300">
                    <item.icon className="text-brand-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-slate-900 mb-1 text-sm">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
