import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { fadeUp, viewportConfig } from '../../utils/animations'

const WHATSAPP_URL =
  'https://wa.me/919060976595?text=Hi%20Banoffee%2C%0AI%27d%20like%20to%20know%20more%20about%20your%20desserts.'

export default function StoryCTA() {
  const scrollToMenu = () => {
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative bg-[#2C1A0E] overflow-hidden">

      {/* Background decorative circles */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#C9924A]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-[#8B5E3C]/8 blur-3xl pointer-events-none" />

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #C9924A 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-20 md:py-28 text-center">

        {/* Top ornament */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-12 bg-[#C9924A]/40" />
          <span className="text-[#C9924A]/50 text-sm">✦</span>
          <div className="h-px w-12 bg-[#C9924A]/40" />
        </motion.div>

        {/* Label */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          custom={0.05}
          className="section-label text-[#C9924A] mb-4"
        >
          Join Our Journey
        </motion.p>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          custom={0.1}
          className="font-display text-[clamp(2rem,7vw,3.8rem)] font-bold text-[#FFF8F0] leading-tight mb-6"
          style={{ letterSpacing: '0.02em' }}
        >
          Be Part Of Our Story
        </motion.h2>

        {/* Body copy */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          custom={0.2}
          className="space-y-3 mb-10"
        >
          <p className="font-cormorant text-xl sm:text-2xl text-[#FFF8F0]/80 italic leading-relaxed">
            Banoffee is just getting started.
          </p>
          <p className="font-lato text-sm sm:text-base text-[#FFF8F0]/55 leading-relaxed max-w-lg mx-auto">
            Thank you for supporting a dream that's turning into something real,
            one bake at a time.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          custom={0.3}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <button
            onClick={scrollToMenu}
            className="btn-primary w-full sm:w-auto sm:min-w-[180px]"
          >
            Explore Menu
          </button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto sm:min-w-[180px] flex items-center justify-center gap-2 bg-transparent border border-[#C9924A]/50 text-[#FFF8F0] hover:bg-[#C9924A] hover:border-[#C9924A] px-8 min-h-[48px] font-lato text-xs font-bold tracking-widest uppercase transition-all duration-300"
          >
            <FaWhatsapp size={16} />
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* Decorative quote */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          custom={0.4}
          className="flex items-center justify-center gap-4"
        >
          <div className="h-px w-8 bg-[#FFF8F0]/15" />
          <p className="font-dancing text-lg text-[#FFF8F0]/30">
            Handcrafted with love · Bengaluru
          </p>
          <div className="h-px w-8 bg-[#FFF8F0]/15" />
        </motion.div>

      </div>
    </section>
  )
}
