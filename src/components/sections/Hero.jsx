import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { fadeUp, fadeIn } from '../../utils/animations'

export default function Hero() {
  const scrollToStory = () => {
    document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToMenu = () => {
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#2C1A0E]"
    >
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3B1A0A] via-[#2C1A0E] to-[#1a0a04]" />

      {/* Decorative circles */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#C9924A]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-[#8B5E3C]/8 blur-3xl pointer-events-none" />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Pre-label */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-16 bg-[#C9924A]/50" />
          <span className="font-lato text-xs tracking-[0.4em] uppercase text-[#C9924A]">
            Handcrafted Bakery · Bengaluru
          </span>
          <div className="h-px w-16 bg-[#C9924A]/50" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="font-display text-[clamp(4rem,15vw,9rem)] font-bold text-[#FFF8F0] leading-none tracking-wider mb-6"
          style={{ letterSpacing: '0.15em' }}
        >
          BANOFFEE
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
          className="font-dancing text-[clamp(1.4rem,4vw,2.2rem)] text-[#C9924A] mb-6 leading-relaxed"
        >
          Where every bite begins a story
        </motion.p>

        {/* Supporting text */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.75}
          className="font-lato text-sm md:text-base text-[#FFF8F0]/60 tracking-wider max-w-lg mx-auto mb-12 leading-relaxed"
        >
          Handcrafted brownies, cakes, cheesecakes, tarts, and desserts{' '}
          <br className="hidden md:block" />made with love in Bengaluru.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.9}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToMenu}
            className="btn-primary min-w-[180px] justify-center"
          >
            Explore Menu
          </button>
          <button
            onClick={scrollToStory}
            className="btn-outline min-w-[180px] justify-center"
          >
            Our Story
          </button>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={scrollToStory}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#FFF8F0]/30 hover:text-[#C9924A] transition-colors duration-300"
        aria-label="Scroll down"
      >
        <span className="font-lato text-[0.6rem] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <HiArrowDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  )
}
