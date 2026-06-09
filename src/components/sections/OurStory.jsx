import { motion } from 'framer-motion'
import { fadeLeft, fadeRight, fadeUp, viewportConfig } from '../../utils/animations'

export default function OurStory() {
  return (
    <section id="story" className="bg-[#FAF6EE] overflow-hidden">
      {/* Top ornament */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9924A]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* Section label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <p className="section-label text-[#C9924A] mb-4">The Beginning</p>
          <h2 className="section-heading text-[#3B1A0A]">Our Story</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative"
          >
            {/* Main image placeholder — styled as premium photo frame */}
            <div className="relative aspect-[4/5] bg-gradient-to-br from-[#3B1A0A] to-[#8B5E3C] overflow-hidden">
              {/* Decorative inner frame */}
              <div className="absolute inset-4 border border-[#C9924A]/30 pointer-events-none z-10" />

              {/* Placeholder visual — layered shapes simulating a food photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48">
                  {/* Plate shape */}
                  <div className="absolute inset-0 rounded-full bg-[#FAF6EE]/10 border border-[#C9924A]/20" />
                  <div className="absolute inset-6 rounded-full bg-[#C9924A]/15" />
                  {/* Pie slice silhouette */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-60">
                    <svg viewBox="0 0 100 100" className="w-28 h-28 fill-[#C9924A]/40">
                      <path d="M50 50 L90 30 A45 45 0 0 1 90 70 Z" />
                      <path d="M50 50 L90 30 A45 45 0 0 1 90 70 Z" fill="#D4A055" opacity="0.5" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Photo caption tag */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-[#2C1A0E]/70 backdrop-blur-sm px-4 py-3">
                  <p className="font-dancing text-[#C9924A] text-lg">Himachal Hills, where it all began</p>
                </div>
              </div>
            </div>

            {/* Accent block */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C9924A]/10 border border-[#C9924A]/20 hidden lg:block" />
          </motion.div>

          {/* Text side */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col gap-8"
          >
            {/* Pull quote */}
            <div className="relative border-l-2 border-[#C9924A] pl-8 py-2">
              <p className="font-dancing text-3xl md:text-4xl text-[#3B1A0A] leading-snug">
                "One bite of Banoffee<br />changed everything."
              </p>
              <div className="absolute -left-1 top-0 w-2 h-2 bg-[#C9924A] rounded-full" />
              <div className="absolute -left-1 bottom-0 w-2 h-2 bg-[#C9924A] rounded-full" />
            </div>

            {/* Story text */}
            <div className="space-y-5">
              <p className="font-lato text-base text-[#2C1A0E]/80 leading-relaxed">
                A few years before I ever touched a mixing bowl, I was in the hills of Himachal when I tasted a dessert that changed everything.
              </p>
              <p className="font-lato text-base text-[#2C1A0E]/80 leading-relaxed">
                It was called <span className="font-cormorant font-semibold italic text-[#3B1A0A] text-lg">Banoffee</span>. I didn't know it then, but that one bite was the beginning of this whole journey.
              </p>
              <p className="font-lato text-base text-[#2C1A0E]/80 leading-relaxed">
                This bakery is named after that moment — and every brownie, tart, cupcake, cheesecake, and cake we bake carries a little of that same feeling.
              </p>
            </div>

            {/* Signature line */}
            <div className="flex items-center gap-4 pt-4">
              <div className="h-px flex-1 bg-[#C9924A]/20 max-w-[60px]" />
              <div>
                <p className="font-dancing text-2xl text-[#C9924A]">Est. Bengaluru</p>
                <p className="font-lato text-xs text-[#2C1A0E]/40 tracking-widest uppercase mt-1">
                  Handcrafted Daily
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#C9924A]/20">
              {[
                { number: '100%', label: 'Handcrafted' },
                { number: 'Daily', label: 'Fresh Bakes' },
                { number: '♥', label: 'Made with Love' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p className="font-display text-xl font-bold text-[#C9924A]">{item.number}</p>
                  <p className="font-lato text-xs text-[#2C1A0E]/50 tracking-wide uppercase mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-[#C9924A]/40 to-transparent" />
    </section>
  )
}
