import { motion } from 'framer-motion'
import { GiWhisk, GiCakeSlice } from 'react-icons/gi'
import { IoLeafOutline, IoHeartOutline } from 'react-icons/io5'
import { fadeUp, viewportConfig } from '../../utils/animations'

const features = [
  {
    id: 1,
    icon: <GiWhisk size={32} />,
    title: 'Small Batch Baking',
    description:
      'We bake in small batches to ensure every dessert receives the attention it deserves.',
  },
  {
    id: 2,
    icon: <IoLeafOutline size={32} />,
    title: 'Premium Ingredients',
    description:
      'Carefully selected ingredients for rich flavours and consistent quality in every bite.',
  },
  {
    id: 3,
    icon: <GiCakeSlice size={32} />,
    title: 'Handcrafted Daily',
    description:
      'Every brownie, tart, cupcake, and cake is made entirely by hand — every single day.',
  },
  {
    id: 4,
    icon: <IoHeartOutline size={32} />,
    title: 'Made With Care',
    description:
      "Good baking isn't rushed. Every bake is prepared with patience, intention, and love.",
  },
]

export default function WhyBanoffee() {
  return (
    <section id="why-banoffee" className="bg-[#3B1A0A] overflow-hidden relative">

      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #C9924A 0, #C9924A 1px, transparent 0, transparent 50%)',
          backgroundSize: '22px 22px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-28">

        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-14 md:mb-20"
        >
          <p className="section-label text-[#C9924A] mb-3">Our Commitment</p>
          <h2 className="section-heading text-[#FFF8F0]">Why Banoffee?</h2>
          <div className="flex items-center justify-center gap-4 mt-5">
            <div className="h-px w-12 bg-[#C9924A]/40" />
            <p className="font-dancing text-xl text-[#C9924A]">
              Freshly made. Never mass produced.
            </p>
            <div className="h-px w-12 bg-[#C9924A]/40" />
          </div>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {features.map((f) => (
            <FeatureCard key={f.id} feature={f} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}

function FeatureCard({ feature }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 36 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
        },
      }}
      whileHover={{
        y: -8,
        boxShadow: '0 16px 40px rgba(0,0,0,0.45)',
        transition: { duration: 0.28, ease: 'easeOut' },
      }}
      className="group relative bg-[#2C1A0E] border border-[#C9924A]/10
                 hover:border-[#C9924A]/45 p-7 sm:p-8
                 transition-colors duration-300 cursor-default"
      style={{
        boxShadow: '0 2px 12px rgba(0,0,0,0.25)',
      }}
    >
      {/* Top accent line — grows on hover */}
      <div className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-[#C9924A] to-[#D4A055] transition-all duration-500" />

      {/* Icon */}
      <div className="text-[#C9924A] mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
        {feature.icon}
      </div>

      {/* Title */}
      <h3 className="font-cormorant text-xl font-semibold text-[#FFF8F0] mb-3 group-hover:text-[#C9924A] transition-colors duration-300 leading-tight">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="font-lato text-sm text-[#FFF8F0]/50 leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  )
}
