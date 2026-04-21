import { motion } from 'framer-motion'
import { FaArrowRight, FaPlay, FaGlobe, FaShieldAlt, FaClock } from 'react-icons/fa'
import { scrollToSection } from '@/utils/scroll'
import StatCard from '@/components/common/StatCard'

const badges = [
  { icon: FaGlobe,     text: 'Global Coverage' },
  { icon: FaShieldAlt, text: 'Secure Shipping' },
  { icon: FaClock,     text: '24/7 Support' },
]

const stats = [
  { value: '15+',   label: 'Years Experience' },
  { value: '50+',   label: 'Countries Served' },
  { value: '10K+',  label: 'Shipments Delivered' },
  { value: '99.8%', label: 'On-Time Rate' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900/95 via-dark-800/85 to-brand-900/70" />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Main content */}
      <div className="relative container-custom flex-1 flex flex-col justify-center pt-32 pb-16">
        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-3 mb-8"
        >
          {badges.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm px-4 py-2 rounded-full"
            >
              <Icon className="text-brand-400 text-xs" />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] max-w-4xl"
        >
          Reliable{' '}
          <span className="bg-gradient-to-r from-brand-400 to-blue-300 bg-clip-text text-transparent">
            Solutions,
          </span>
          <br />
          Global{' '}
          <span className="bg-gradient-to-r from-blue-300 to-brand-400 bg-clip-text text-transparent">
            Delivery
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg lg:text-xl text-blue-100/80 max-w-xl leading-relaxed"
        >
          Your trusted partner for comprehensive freight forwarding and logistics solutions.
          With 15+ years of expertise, we deliver your cargo — anywhere, on time, every time.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-primary text-base px-8 py-4"
          >
            Get a Free Quote
            <FaArrowRight />
          </button>
          <button
            onClick={() => scrollToSection('features')}
            className="btn-secondary text-base px-8 py-4"
          >
            <FaPlay className="text-xs" />
            Explore Services
          </button>
        </motion.div>
      </div>

      {/* Stats bar */}
      <div className="relative bg-brand-700/80 backdrop-blur-sm border-t border-white/10">
        <div className="container-custom py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} {...stat} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-28 right-8 hidden lg:flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/40" />
        <span className="text-white/40 text-xs tracking-widest rotate-90 origin-center mt-2">
          SCROLL
        </span>
      </motion.div>
    </section>
  )
}
