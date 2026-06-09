import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi'
import { fadeUp, viewportConfig } from '../../utils/animations'
import testimonials from '../../data/testimonials.json'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((c) => (c + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  }, [])

  // Auto advance
  useEffect(() => {
    const t = setInterval(next, 5500)
    return () => clearInterval(t)
  }, [next])

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60, transition: { duration: 0.4 } })
  }

  const t = testimonials[current]

  return (
    <section className="bg-[#3B1A0A] overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <p className="section-label text-[#C9924A] mb-4">Voices of Delight</p>
          <h2 className="section-heading text-[#FFF8F0]">What Our Customers Say</h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="text-center px-4 md:px-12"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-8">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <HiStar key={i} className="text-[#D4A055]" size={20} />
                ))}
              </div>

              {/* Open quote */}
              <div className="font-dancing text-8xl text-[#C9924A]/20 leading-none mb-2 select-none">"</div>

              {/* Quote */}
              <p className="font-cormorant text-xl md:text-2xl font-light text-[#FFF8F0]/90 leading-relaxed italic -mt-8">
                {t.text}
              </p>

              {/* Attribution */}
              <div className="mt-8 flex flex-col items-center gap-2">
                <div className="h-px w-12 bg-[#C9924A]/40" />
                <p className="font-lato text-sm font-bold text-[#FFF8F0] tracking-wide">{t.name}</p>
                <p className="font-lato text-xs text-[#FFF8F0]/40 tracking-widest uppercase">{t.location}</p>
                <span className="mt-2 font-lato text-[0.6rem] tracking-widest uppercase text-[#C9924A] bg-[#C9924A]/10 px-3 py-1">
                  {t.occasion}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prev}
              className="w-10 h-10 border border-[#FFF8F0]/20 flex items-center justify-center text-[#FFF8F0]/60 hover:border-[#C9924A] hover:text-[#C9924A] transition-all duration-300"
              aria-label="Previous"
            >
              <HiChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className={`transition-all duration-300 rounded-full ${
                    i === current ? 'w-8 h-2 bg-[#C9924A]' : 'w-2 h-2 bg-[#FFF8F0]/20 hover:bg-[#FFF8F0]/40'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 border border-[#FFF8F0]/20 flex items-center justify-center text-[#FFF8F0]/60 hover:border-[#C9924A] hover:text-[#C9924A] transition-all duration-300"
              aria-label="Next"
            >
              <HiChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
