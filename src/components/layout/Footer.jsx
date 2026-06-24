import { motion } from 'framer-motion'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { fadeUp, viewportConfig } from '../../utils/animations'
import logo from '../../assets/logo/logo.png'

const quickLinks = [
  { label: 'Our Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Custom Cakes', href: '#custom-cakes' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: <FaInstagram size={18} />, href: 'https://instagram.com', label: 'Instagram' },
  { icon: <FaWhatsapp size={18} />, href: 'https://wa.me/919060976595', label: 'WhatsApp' },
  { icon: <MdEmail size={18} />, href: 'mailto:hello@banoffeebakery.in', label: 'Email' },
]

export default function Footer() {
  const handleNavClick = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#2C1A0E] text-[#FFF8F0]">
      {/* Top ornament */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9924A] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12 items-start">

          {/* Brand */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col items-center sm:items-start gap-4"
          >
            <div className="w-20 h-20 rounded-full overflow-hidden ring-1 ring-[#C9924A]/40 bg-[#F9F3E8]">
              <img src={logo} alt="Banoffee" className="w-full h-full object-contain scale-[1.08]" />
            </div>
            <p className="font-dancing text-xl text-[#C9924A] text-center sm:text-left leading-relaxed">
              Where every bite begins a story
            </p>
            <p className="font-lato text-xs text-[#FFF8F0]/50 tracking-widest uppercase">
              Handcrafted with love · Bengaluru
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            custom={0.1}
            className="flex flex-col items-center sm:items-start gap-4"
          >
            <p className="font-lato text-xs font-bold tracking-widest uppercase text-[#C9924A] mb-2">
              Quick Links
            </p>
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className="font-cormorant text-lg text-[#FFF8F0]/70 hover:text-[#C9924A] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* Connect */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            custom={0.2}
            className="flex flex-col items-center sm:items-start gap-4"
          >
            <p className="font-lato text-xs font-bold tracking-widest uppercase text-[#C9924A] mb-2">
              Connect With Us
            </p>
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 border border-[#FFF8F0]/20 flex items-center justify-center text-[#FFF8F0]/70 hover:border-[#C9924A] hover:text-[#C9924A] transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <div className="mt-2 space-y-2">
              <p className="font-lato text-sm text-[#FFF8F0]/60">Bengaluru, Karnataka</p>
              <p className="font-lato text-sm text-[#FFF8F0]/60">hello@banoffee.in</p>
              <p className="font-lato text-xs text-[#FFF8F0]/40 mt-2">
                Mon – Sat · 9 AM – 8 PM
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#FFF8F0]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-lato text-xs text-[#FFF8F0]/30 tracking-widest">
            © {new Date().getFullYear()} Banoffee. All rights reserved.
          </p>
          <p className="font-lato text-xs text-[#FFF8F0]/30 tracking-widest">
            Made with love in Bengaluru
          </p>
        </div>
      </div>
    </footer>
  )
}
