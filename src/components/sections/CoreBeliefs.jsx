import { motion } from 'framer-motion'
import { beliefs } from '@/data/beliefs'
import SectionHeader from '@/components/common/SectionHeader'

export default function CoreBeliefs() {
  return (
    <section
      id="beliefs"
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0f1e 0%, #1e3a8a 50%, #0f172a 100%)',
      }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-800/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative container-custom">
        <SectionHeader
          label="What We Stand For"
          title="Our Core Beliefs"
          subtitle="These values shape and influence every decision we make and every service we deliver — because we believe great logistics is built on great principles."
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {beliefs.map((belief, i) => (
            <motion.div
              key={belief.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden group cursor-default ${
                i === 0 ? 'lg:col-span-1' : ''
              }`}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-600/0 to-brand-600/0 group-hover:from-brand-600/10 group-hover:to-transparent transition-all duration-500 rounded-2xl" />

              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${belief.color} flex items-center justify-center mb-6 shadow-brand`}
              >
                <belief.icon className="text-white text-xl" />
              </div>

              <h3 className="font-display font-bold text-white text-lg mb-3">
                {belief.title}
              </h3>
              <p className="text-blue-200/70 text-sm leading-relaxed">
                {belief.description}
              </p>

              {/* Number watermark */}
              <div className="absolute bottom-4 right-6 text-6xl font-display font-black text-white/5">
                {String(belief.id).padStart(2, '0')}
              </div>
            </motion.div>
          ))}

          {/* Quote card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="sm:col-span-2 lg:col-span-3 p-8 rounded-2xl bg-brand-600/20 border border-brand-500/30 backdrop-blur-sm text-center"
          >
            <blockquote className="text-white text-xl lg:text-2xl font-display font-medium italic leading-relaxed max-w-3xl mx-auto">
              &ldquo;We are committed to not just meeting, but exceeding our clients&rsquo;
              expectations — delivering reliability, transparency, and excellence on every shipment.&rdquo;
            </blockquote>
            <div className="mt-4 text-brand-300 font-semibold">— TransitCare Logistics Team</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
