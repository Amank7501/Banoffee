import { motion } from 'framer-motion'
import { fadeUp, fadeLeft, fadeRight, viewportConfig } from '../../utils/animations'

export default function FoundersLetter() {
  return (
    <section id="founders-letter" className="bg-[#FAF6EE] overflow-hidden">
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9924A]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-28">

        {/* Section label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-14 md:mb-20"
        >
          <p className="section-label text-[#C9924A] mb-3">From the Kitchen</p>
          <h2 className="section-heading text-[#3B1A0A]">Meet The Founder</h2>
          <p className="font-cormorant text-lg sm:text-xl text-[#8B5E3C] italic mt-3">
            Every great story starts somewhere.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-start">

          {/* LEFT — Identity Card */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex justify-center md:justify-end"
          >
            <IdentityCard />
          </motion.div>

          {/* RIGHT — Letter */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col gap-6"
          >
            <FounderLetterContent />
          </motion.div>

        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-[#C9924A]/40 to-transparent" />
    </section>
  )
}

/* ── Identity Card ─────────────────────────────────── */
function IdentityCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={viewportConfig}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative w-full max-w-[340px] bg-[#FFF8F0] shadow-xl rounded-sm overflow-hidden"
      style={{ boxShadow: '0 8px 40px rgba(59,26,10,0.12), 0 2px 8px rgba(59,26,10,0.06)' }}
    >
      {/* Top gold accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[#C9924A] via-[#D4A055] to-[#8B5E3C]" />

      {/* Card body */}
      <div className="px-8 pt-10 pb-10">

        {/* Decorative large quote mark */}
        <div
          className="font-dancing text-[9rem] text-[#C9924A]/10 leading-none select-none absolute top-4 right-6"
          aria-hidden="true"
        >
          ❝
        </div>

        {/* Monogram circle */}
        <div className="relative z-10 mb-8">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#3B1A0A] to-[#8B5E3C] flex items-center justify-center mx-auto shadow-lg">
            <span className="font-display text-4xl font-bold text-[#FFF8F0] tracking-wider select-none">
              N
            </span>
          </div>
          {/* Ring accent */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-28 h-28 rounded-full border border-[#C9924A]/25" />
          </div>
        </div>

        {/* Name & Title */}
        <div className="relative z-10 text-center space-y-1 mb-6">
          <h3 className="font-display text-3xl font-bold text-[#3B1A0A] tracking-wide">
            Neha
          </h3>
          <p className="font-lato text-xs font-bold tracking-[0.25em] uppercase text-[#C9924A]">
            Founder, Banoffee
          </p>
        </div>

        {/* Divider ornament */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-10 bg-[#C9924A]/30" />
          <span className="text-[#C9924A]/50 text-xs">✦</span>
          <div className="h-px w-10 bg-[#C9924A]/30" />
        </div>

        {/* Tagline */}
        <p className="font-dancing text-[1.35rem] text-[#8B5E3C] text-center leading-snug relative z-10 mb-8">
          "Where every bite<br />begins a story"
        </p>

        {/* Founded detail */}
        <div className="relative z-10 border-t border-[#C9924A]/20 pt-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-lato text-[0.6rem] tracking-[0.25em] uppercase text-[#2C1A0E]/40">
                Founded in
              </p>
              <p className="font-cormorant text-base font-semibold text-[#3B1A0A] mt-0.5">
                Bengaluru, India
              </p>
            </div>
            {/* Mini logo stamp */}
            <div className="w-10 h-10 rounded-full bg-[#3B1A0A] flex items-center justify-center opacity-20">
              <span className="font-display text-xs font-bold text-[#FFF8F0]">B</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom gold accent bar */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#C9924A]/50 to-transparent" />
    </motion.div>
  )
}

/* ── Founder Letter Content ────────────────────────── */
function FounderLetterContent() {
  const paragraphs = [
    "Hi, I'm Neha.",
    "A few years ago, while traveling through the hills of Himachal, I tasted a dessert called Banoffee. It was simple, comforting, and unforgettable.",
    "I didn't know it then, but that single bite would inspire something much bigger.",
    "What started as curiosity slowly turned into a love for baking, experimenting, and creating desserts that bring people together.",
    "Today, Banoffee is the result of that journey.",
    "Every brownie, tart, cupcake, cheesecake, and celebration cake is handcrafted with care from our kitchen in Bengaluru.",
    "Thank you for visiting, supporting, and becoming part of our story.",
  ]

  return (
    <>
      {/* Letter body */}
      <div className="space-y-4">
        {paragraphs.map((para, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.07 }}
            className={`font-lato leading-relaxed text-[#2C1A0E]/80 ${
              i === 0 ? 'text-lg font-semibold text-[#3B1A0A]' : 'text-[0.95rem]'
            }`}
          >
            {para}
          </motion.p>
        ))}
      </div>

      {/* Sign-off */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={viewportConfig}
        transition={{ duration: 0.6, delay: paragraphs.length * 0.07 }}
        className="pt-2 space-y-1"
      >
        <p className="font-lato text-sm text-[#2C1A0E]/60">With love,</p>
        <p className="font-dancing text-3xl text-[#3B1A0A]">Neha</p>
        <p className="font-lato text-xs tracking-widest uppercase text-[#C9924A]">
          Founder, Banoffee
        </p>
      </motion.div>

      {/* Pull quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportConfig}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="relative mt-2 bg-[#3B1A0A] px-7 py-6 overflow-hidden"
      >
        {/* Decorative quote bg */}
        <span
          className="absolute -top-4 -left-2 font-dancing text-[8rem] text-[#C9924A]/10 leading-none select-none"
          aria-hidden="true"
        >
          ❝
        </span>
        <p className="relative z-10 font-dancing text-2xl sm:text-3xl text-[#C9924A] leading-snug">
          "One bite of Banoffee changed everything."
        </p>
        <div className="mt-3 h-px w-12 bg-[#C9924A]/40" />
      </motion.div>
    </>
  )
}
