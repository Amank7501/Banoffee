import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportConfig } from '../../utils/animations'
import signatures from '../../data/signatures.json'

const CARD_ICONS = {
  1: '🥧',
  2: '🍫',
  3: '🍪',
  4: '🎂',
  5: '🍰',
  6: '☕',
}

export default function SignatureCollection() {
  return (
    <section id="signatures" className="bg-[#3B1A0A] overflow-hidden relative">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #C9924A 0, #C9924A 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <p className="section-label text-[#C9924A] mb-4">Crafted with Intention</p>
          <h2 className="section-heading text-[#FFF8F0]">Signature Collection</h2>
          <div className="divider-ornament mt-6 text-[#C9924A]/40">
            <span className="font-dancing text-[#C9924A] text-lg">The very best of Banoffee</span>
          </div>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {signatures.map((item) => (
            <SignatureCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function SignatureCard({ item }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative bg-[#2C1A0E] border border-[#C9924A]/10 hover:border-[#C9924A]/40 overflow-hidden cursor-default transition-colors duration-300"
    >
      {/* Card image area */}
      <div className={`relative h-56 bg-gradient-to-br ${item.gradient} overflow-hidden`}>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#C9924A]/0 group-hover:bg-[#C9924A]/10 transition-all duration-500" />

        {/* Large emoji/icon as placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-8xl opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500 select-none">
            {CARD_ICONS[item.id]}
          </span>
        </div>

        {/* Tag */}
        <div className="absolute top-4 left-4">
          <span className="bg-[#C9924A] text-[#FFF8F0] font-lato text-[0.6rem] font-bold tracking-widest uppercase px-3 py-1">
            {item.tag}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6">
        <h3 className="font-cormorant text-xl font-semibold text-[#FFF8F0] mb-2 group-hover:text-[#C9924A] transition-colors duration-300">
          {item.name}
        </h3>
        <p className="font-lato text-sm text-[#FFF8F0]/50 leading-relaxed">
          {item.desc}
        </p>
        {/* Bottom accent line */}
        <div className="mt-5 h-px w-0 group-hover:w-full bg-[#C9924A]/40 transition-all duration-500" />
      </div>
    </motion.div>
  )
}
