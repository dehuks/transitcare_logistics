import { motion } from 'framer-motion'

export default function SectionHeader({ label, title, subtitle, centered = true, light = false }) {
  return (
    <div className={`mb-14 ${centered ? 'text-center' : ''}`}>
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={`inline-block text-sm font-semibold uppercase tracking-widest mb-3 ${
            light ? 'text-brand-300' : 'text-brand-600'
          }`}
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`font-display font-bold leading-tight mb-4 ${
          light ? 'text-white' : 'text-slate-900'
        } text-3xl sm:text-4xl lg:text-5xl`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-lg max-w-2xl leading-relaxed ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-blue-100' : 'text-slate-500'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
