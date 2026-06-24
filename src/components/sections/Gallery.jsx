import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, scaleIn, viewportConfig } from '../../utils/animations'
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const galleryItems = [
  { id: 1, label: 'Banoffee Creations', image: '/images/gallery/45AD5E7A-84D6-4B71-A411-261414FBF70D.png', aspect: 'tall' },
  { id: 2, label: 'Fresh from the Kitchen', image: '/images/gallery/4BBB6CF3-3A7E-43AC-8133-8B8E389E007D.jpeg', aspect: 'wide' },
  { id: 3, label: 'Made with Love', image: '/images/gallery/IMG_1843.jpeg', aspect: 'square' },
  { id: 4, label: 'Our Craft', image: '/images/gallery/IMG_9103.jpeg', aspect: 'square' },
]

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const openLightbox = (i) => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)
  const prev = () => setLightboxIndex((i) => (i - 1 + galleryItems.length) % galleryItems.length)
  const next = () => setLightboxIndex((i) => (i + 1) % galleryItems.length)

  return (
    <section id="gallery" className="bg-[#2C1A0E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-32">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <p className="section-label text-[#C9924A] mb-4">Through the Lens</p>
          <h2 className="section-heading text-[#FFF8F0]">Gallery</h2>
          <div className="divider-ornament mt-6 text-[#C9924A]/40">
            <span className="font-dancing text-[#C9924A] text-lg">Every creation, a little story</span>
          </div>
        </motion.div>

        {/* Masonry-style grid */}
        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="columns-2 md:columns-3 gap-2 sm:gap-4 space-y-2 sm:space-y-4"
        >
          {galleryItems.map((item, i) => (
            <GalleryItem
              key={item.id}
              item={item}
              index={i}
              onClick={() => openLightbox(i)}
            />
          ))}
        </motion.div>

        {/* Note about real photos */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center font-lato text-xs text-[#FFF8F0]/25 tracking-widest mt-12 uppercase"
        >
          Gallery updates with every new creation · Follow us on Instagram
        </motion.p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white"
              onClick={closeLightbox}
              aria-label="Close"
            >
              <HiX size={28} />
            </button>
            <button
              className="absolute left-4 md:left-8 text-white/70 hover:text-white"
              onClick={(e) => { e.stopPropagation(); prev() }}
              aria-label="Previous"
            >
              <HiChevronLeft size={36} />
            </button>
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full aspect-square bg-[#2C1A0E] overflow-hidden">
                <img
                  src={galleryItems[lightboxIndex].image}
                  alt={galleryItems[lightboxIndex].label}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#2C1A0E] px-6 py-4">
                <p className="font-cormorant text-xl text-[#FFF8F0]">{galleryItems[lightboxIndex].label}</p>
                <p className="font-lato text-xs text-[#C9924A] tracking-widest uppercase mt-1">Banoffee · Bengaluru</p>
              </div>
            </motion.div>
            <button
              className="absolute right-4 md:right-8 text-white/70 hover:text-white"
              onClick={(e) => { e.stopPropagation(); next() }}
              aria-label="Next"
            >
              <HiChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function GalleryItem({ item, index, onClick }) {
  const heightClass = item.aspect === 'tall' ? 'h-48 sm:h-72 md:h-80' : item.aspect === 'wide' ? 'h-32 sm:h-44 md:h-52' : 'h-40 sm:h-56 md:h-64'

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
      }}
      whileHover={{ scale: 1.02 }}
      className={`relative ${heightClass} break-inside-avoid mb-2 sm:mb-4 bg-[#2C1A0E] overflow-hidden cursor-pointer group`}
      onClick={onClick}
    >
      {/* Real photo */}
      <img
        src={item.image}
        alt={item.label}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-[#3B1A0A]/0 group-hover:bg-[#3B1A0A]/40 transition-all duration-400" />

      {/* Label on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="font-cormorant text-base text-[#FFF8F0] font-semibold">{item.label}</p>
      </div>
    </motion.div>
  )
}
