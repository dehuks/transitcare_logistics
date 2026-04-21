import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'
import { navLinks } from '@/data/navLinks'
import { scrollToSection } from '@/utils/scroll'
import Logo from './Logo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 text-slate-300">
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo light />
            <p className="mt-5 text-sm text-slate-400 leading-relaxed">
              TransitCare Logistics is a leading freight forwarding and logistics company delivering
              reliable global solutions with over 15 years of industry expertise.
            </p>
            <div className="flex gap-3 mt-6">
              {[FaLinkedin, FaTwitter, FaFacebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-dark-700 hover:bg-brand-600 flex items-center justify-center transition-colors duration-200"
                  aria-label="Social media"
                >
                  <Icon className="text-slate-400 hover:text-white text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-slate-400 hover:text-brand-400 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-display font-semibold mb-5">Services</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {[
                'Customs Clearance',
                'Cargo Consolidation',
                'Perishable Goods',
                'Supply Chain Management',
                'Transportation & Tracking',
                'Oversized Cargo',
              ].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-semibold mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-brand-500 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">
                  Kicukiro, Niboye, KK 390 Street<br />Kigali, Rwanda
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-brand-500 shrink-0" />
                <a
                  href="tel:+250780399048"
                  className="text-sm text-slate-400 hover:text-brand-400 transition-colors"
                >
                  +250 780 399 048
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-brand-500 shrink-0" />
                <a
                  href="mailto:info@transitcarelogistics.co.rw"
                  className="text-sm text-slate-400 hover:text-brand-400 transition-colors"
                >
                  info@transitcarelogistics.co.rw
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-700 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-500">
            &copy; {year} TransitCare Logistics. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Reliable Solutions, Global Delivery
          </p>
        </div>
      </div>
    </footer>
  )
}
