import { motion } from 'framer-motion'
import { fadeUp, viewportConfig } from '../../utils/animations'

const kitchenMoments = [
  {
    id: 1,
    label: 'Mixing Batter',
    emoji: '🥣',
    color: 'from-[#8B5E3C] to-[#3B1A0A]',
    aspect: 'tall',
    caption: 'The start of every creation',
  },
  {
    id: 2,
    label: 'Decorating Cakes',
    emoji: '🎂',
    color: 'from-[#C9924A] to-[#8B5E3C]',
    aspect: 'square',
    caption: 'Details that tell a story',
  },
  {
    id: 3,
    label: 'Freshly Baked Brownies',
    emoji: '🍫',
    color: 'from-[#2C1A0E] to-[#3B1A0A]',
    aspect: 'square',
    caption: 'Out of the oven, into your hands',
  },
  {
    id: 4,
    label: 'Packaging With Care',
    emoji: '📦',
    color: 'from-[#D4A055] to-[#C9924A]',
    aspect: 'tall',
    caption: 'Wrapped in love, delivered fresh',
  },
  {
    id: 5,
    label: 'Kitchen Moments',
    emoji: '✨',
    color: 'from-[#8B5E3C] to-[#C9924A]',
    aspect: 'square',
    caption: 'Where the magic begins',
  },
  {
    id: 6,
    label: 'More Moments Soon',
    emoji: '📸',
    color: 'from-[#3B1A0A] to-[#2C1A0E]',
    aspect: 'square',
    caption: 'Follow us for updates',
    isComing: true,
  },
]

export default function BehindTheKitchen() {
  return (
    <section id="behind-the-kitchen" className="bg-[#FAF6EE]">
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9924A]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-28">

        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-4"
        >
          <p className="section-label text-[#C9924A] mb-3">The Process</p>
          <h2 className="section-heading text-[#3B1A0A]">Behind The Kitchen</h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          custom={0.1}
          className="text-center mb-12 md:mb-16 max-w-xl mx-auto space-y-3"
        >
          <p className="font-cormorant text-lg sm:text-xl text-[#8B5E3C] italic">
            Every dessert has a journey before it reaches your table.
          </p>
          <p className="font-lato text-sm text-[#2C1A0E]/60 leading-relaxed">
            From mixing and baking to decorating and packaging, every step is done with care
            in our Bengaluru kitchen.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="columns-2 md:columns-3 gap-3 sm:gap-4 space-y-3 sm:space-y-4"
        >
          {kitchenMoments.map((item) => (
            <KitchenCard key={item.id} item={item} />
          ))}
        </motion.div>

        {/* Follow CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-12 text-center"
        >
          <p className="font-lato text-xs text-[#2C1A0E]/35 tracking-widest uppercase mb-4">
            Real kitchen moments coming soon
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#C9924A]/40 text-[#C9924A] hover:bg-[#C9924A] hover:text-[#FFF8F0] px-6 py-2.5 font-lato text-xs font-bold tracking-widest uppercase transition-all duration-300"
          >
            Follow on Instagram
          </a>
        </motion.div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-[#C9924A]/40 to-transparent" />
    </section>
  )
}

function KitchenCard({ item }) {
  const heightClass =
    item.aspect === 'tall'
      ? 'h-52 sm:h-72 md:h-80'
      : 'h-36 sm:h-52 md:h-60'

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28, scale: 0.97 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
        },
      }}
      className={`relative ${heightClass} break-inside-avoid mb-3 sm:mb-4 bg-gradient-to-br ${item.color} overflow-hidden group cursor-default`}
    >
      {/* Zoom layer */}
      <div className="absolute inset-0 scale-100 group-hover:scale-105 transition-transform duration-700 ease-out bg-inherit" />

      {/* Illustration placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-4xl sm:text-6xl opacity-30 group-hover:opacity-50 transition-opacity duration-400 select-none">
          {item.emoji}
        </span>
      </div>

      {/* Soft dark overlay on hover */}
      <div className="absolute inset-0 bg-[#1a0a04]/0 group-hover:bg-[#1a0a04]/40 transition-all duration-400" />

      {/* Coming soon badge */}
      {item.isComing && (
        <div className="absolute top-3 right-3 bg-[#C9924A]/90 px-2 py-0.5">
          <span className="font-lato text-[0.55rem] font-bold tracking-widest uppercase text-[#FFF8F0]">
            Coming Soon
          </span>
        </div>
      )}

      {/* Caption — slides up on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-350 ease-out bg-gradient-to-t from-[#2C1A0E]/80 to-transparent pt-8">
        <p className="font-cormorant text-sm sm:text-base font-semibold text-[#FFF8F0] leading-tight">
          {item.label}
        </p>
        <p className="font-lato text-[0.65rem] text-[#FFF8F0]/60 mt-0.5 hidden sm:block">
          {item.caption}
        </p>
      </div>
    </motion.div>
  )
}
