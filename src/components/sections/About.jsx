import { motion } from 'framer-motion'
import {
  FaMapMarkedAlt,
  FaTruck,
  FaCogs,
  FaMicrochip,
  FaCheckCircle,
} from 'react-icons/fa'
import SectionHeader from '@/components/common/SectionHeader'

const highlights = [
  { icon: FaMapMarkedAlt,  title: 'Strategic Locations',       desc: 'Globally and regionally positioned for maximum reach' },
  { icon: FaTruck,         title: 'Efficient Cargo Handling',  desc: 'Expert management of all cargo types and sizes' },
  { icon: FaCogs,          title: 'Customized Services',       desc: 'Tailored transportation and real-time tracking solutions' },
  { icon: FaMicrochip,     title: 'Advanced Technology',       desc: 'Cutting-edge systems improving turnaround time' },
]

const checkpoints = [
  'IATA Certified Freight Specialists',
  'ISO-Compliant Processes',
  'Dedicated Account Managers',
  'End-to-End Supply Chain Visibility',
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <SectionHeader
              label="About TransitCare"
              title="Redefining Global Logistics"
              subtitle="TransitCare Logistics is a fast-growing freight forwarding company delivering highly reliable and flexible solutions for all your global logistics needs."
              centered={false}
            />

            <div className="space-y-3 mb-8">
              {checkpoints.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-brand-600 shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-slate-500 leading-relaxed mb-8"
            >
              With over <strong className="text-slate-800">15 years of robust industry experience</strong>,
              our tailored services have set new standards in the market — saving both time and costs
              for clients across Africa and beyond.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {['JN', 'SM', 'DO', 'AH'].map((initials, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="font-semibold text-slate-900">500+ Happy Clients</div>
                <div className="text-sm text-slate-500">Across 50+ countries</div>
              </div>
            </motion.div>
          </div>

          {/* Right: Cards grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  i === 0
                    ? 'bg-brand-600 border-brand-700 text-white'
                    : 'bg-white border-slate-100 shadow-card hover:shadow-card-hover'
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                    i === 0 ? 'bg-white/20' : 'bg-brand-50'
                  }`}
                >
                  <item.icon className={`text-lg ${i === 0 ? 'text-white' : 'text-brand-600'}`} />
                </div>
                <h3
                  className={`font-display font-semibold mb-2 text-sm ${
                    i === 0 ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {item.title}
                </h3>
                <p className={`text-xs leading-relaxed ${i === 0 ? 'text-blue-100' : 'text-slate-500'}`}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
