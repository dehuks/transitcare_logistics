import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

function parseValue(value) {
  const match = value.match(/^([\d.]+)(.*)$/)
  if (!match) return { num: 0, suffix: value, decimals: 0 }
  const num = parseFloat(match[1])
  const decimals = (match[1].split('.')[1] || '').length
  return { num, suffix: match[2], decimals }
}

export default function StatCard({ value, label, delay = 0 }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(value)
  const hasRun = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const { num, suffix, decimals } = parseValue(value)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true
          observer.disconnect()

          setTimeout(() => {
            const duration = 1800
            const start = performance.now()

            const tick = (now) => {
              const progress = Math.min((now - start) / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              const current = parseFloat((eased * num).toFixed(decimals))
              setDisplay(`${current}${suffix}`)
              if (progress < 1) requestAnimationFrame(tick)
            }

            requestAnimationFrame(tick)
          }, delay * 1000)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="text-4xl lg:text-5xl font-display font-bold text-white mb-1">
        {display}
      </div>
      <div className="text-blue-200 text-sm font-medium uppercase tracking-wide">{label}</div>
    </motion.div>
  )
}
