import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import SectionHeader from '@/components/common/SectionHeader'

const contactInfo = [
  {
    icon: FaPhone,
    label: 'Phone',
    value: '+250 780 399 048',
    href: 'tel:+250780399048',
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'info@transitcarelogistics.co.rw',
    href: 'mailto:info@transitcarelogistics.co.rw',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Address',
    value: 'Kicukiro, Niboye, KK 390 Street, Kigali — Rwanda',
    href: null,
  },
]

const services = [
  'Customs Clearance',
  'Cargo Consolidation',
  'Perishable Goods',
  'Supply Chain Management',
  'Transportation & Delivery',
  'Oversized & Dangerous Goods',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          label="Get in Touch"
          title="Ready to Ship Globally?"
          subtitle="Tell us about your logistics needs and one of our experts will get back to you within 24 hours with a customized solution."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: contact info */}
          <div className="lg:col-span-2">
            <div className="space-y-6 mb-10">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                    <item.icon className="text-brand-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium text-slate-900 hover:text-brand-600 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="font-medium text-slate-900">{item.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden bg-slate-100 h-48 border border-slate-200 flex items-center justify-center relative"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1565118531796-763e5082d113?w=600&q=70)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-dark-900/40" />
              <div className="relative text-white text-center">
                <FaMapMarkerAlt className="text-brand-400 text-2xl mx-auto mb-2" />
                <p className="font-semibold text-sm">Kigali, Rwanda</p>
              </div>
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-brand-50 rounded-2xl border border-brand-100">
                <FaCheckCircle className="text-brand-600 text-5xl mb-4" />
                <h3 className="font-display font-bold text-2xl text-slate-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-slate-500">
                  Thank you for reaching out. Our team will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your Company Ltd"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none transition-all text-sm bg-white text-slate-700"
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your shipment — origin, destination, cargo type, volume..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <FaArrowRight />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
