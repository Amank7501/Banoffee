import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { HiMenu, HiX } from 'react-icons/hi'
import { useScrolled } from '../../hooks/useScrolled'
import logo from '../../assets/logo/logo.png'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Custom Cakes', href: '#custom-cakes' },
  { label: 'Contact', href: '#contact' },
]

const WHATSAPP_NUMBER = '919999999999'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Banoffee!%20I'd%20love%20to%20place%20an%20order.`

export default function Navbar() {
  const scrolled = useScrolled(40)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#3B1A0A] shadow-2xl py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
            className="flex items-center"
          >
            <div
              className={`rounded-full overflow-hidden flex-shrink-0 transition-all duration-300 ring-1 ring-[#C9924A]/50 hover:ring-[#C9924A] bg-[#F9F3E8] ${
                scrolled ? 'w-10 h-10' : 'w-12 h-12'
              }`}
            >
              <img
                src={logo}
                alt="Banoffee"
                className="w-full h-full object-contain scale-[1.08]"
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className="font-lato text-xs font-700 tracking-widest uppercase text-[#FFF8F0] opacity-80 hover:opacity-100 hover:text-[#C9924A] transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#C9924A] hover:bg-[#D4A055] text-[#FFF8F0] px-5 py-2.5 text-xs font-lato font-bold tracking-widest uppercase transition-all duration-300 hover:-translate-y-0.5"
            >
              <FaWhatsapp size={16} />
              Order on WhatsApp
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-[#FFF8F0] p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-0 left-0 right-0 bottom-0 z-40 bg-[#2C1A0E] flex flex-col items-center justify-center gap-8"
          >
            <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-[#C9924A]/60 bg-[#F9F3E8] mb-4">
              <img src={logo} alt="Banoffee" className="w-full h-full object-contain scale-[1.08]" />
            </div>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="font-cormorant text-3xl font-light tracking-widest text-[#FFF8F0] hover:text-[#C9924A] transition-colors duration-300"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 }}
              className="mt-4 flex items-center gap-2 bg-[#C9924A] text-[#FFF8F0] px-8 py-3 text-sm font-lato font-bold tracking-widest uppercase"
            >
              <FaWhatsapp size={18} />
              Order on WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
