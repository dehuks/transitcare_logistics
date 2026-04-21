import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa'
import { navLinks } from '@/data/navLinks'
import { useNavScroll } from '@/hooks/useNavScroll'
import { scrollToSection } from '@/utils/scroll'
import Logo from './Logo'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrolled, activeSection } = useNavScroll()

  const handleNav = (id) => {
    scrollToSection(id)
    setMobileOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Logo light={!scrolled} />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeSection === link.id
                  ? 'text-brand-600 bg-brand-50'
                  : scrolled
                  ? 'text-slate-600 hover:text-brand-600 hover:bg-brand-50'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+250780399048"
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              scrolled ? 'text-slate-600 hover:text-brand-600' : 'text-white/80 hover:text-white'
            }`}
          >
            <FaPhone className="text-xs" />
            +250 780 399 048
          </a>
          <button
            onClick={() => handleNav('contact')}
            className="btn-primary text-sm px-5 py-2.5"
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-slate-700' : 'text-white'
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-slate-100 shadow-lg overflow-hidden"
          >
            <nav className="container-custom py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'text-brand-600 bg-brand-50'
                      : 'text-slate-700 hover:text-brand-600 hover:bg-brand-50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 border-t border-slate-100 mt-2">
                <button
                  onClick={() => handleNav('contact')}
                  className="btn-primary w-full justify-center text-sm"
                >
                  Get a Quote
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
