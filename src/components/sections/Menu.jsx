import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, viewportConfig } from '../../utils/animations'
import menuData from '../../data/menu.json'

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuData.categories[0].id)

  const currentCategory = menuData.categories.find(c => c.id === activeCategory)

  return (
    <section id="menu" className="bg-[#FFF8F0]">
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9924A]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-32">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-14"
        >
          <p className="section-label text-[#C9924A] mb-4">Handcrafted Daily</p>
          <h2 className="section-heading text-[#3B1A0A]">Our Menu</h2>
          <p className="font-lato text-sm text-[#2C1A0E]/50 mt-4 tracking-wide">
            Everything made fresh · No artificial preservatives
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          custom={0.1}
          className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto scrollbar-hide pb-4 mb-10 -mx-4 sm:mx-0 px-4 sm:px-0"
        >
          {menuData.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex-shrink-0 px-5 py-2.5 font-lato text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
                activeCategory === cat.id
                  ? 'bg-[#3B1A0A] text-[#FFF8F0] border-[#3B1A0A]'
                  : 'bg-transparent text-[#3B1A0A] border-[#3B1A0A]/30 hover:border-[#C9924A] hover:text-[#C9924A]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Category content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            {/* Category description */}
            <p className="font-cormorant text-xl text-[#8B5E3C] italic text-center mb-12">
              {currentCategory.description}
            </p>

            {/* Subcategories */}
            <div className="space-y-12">
              {currentCategory.subcategories.map((sub) => (
                <MenuSubcategory key={sub.id} sub={sub} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-[#C9924A]/40 to-transparent" />
    </section>
  )
}

function MenuSubcategory({ sub }) {
  return (
    <div>
      {/* Subcategory header */}
      <div className="flex items-center gap-6 mb-6">
        <div>
          <h3 className="font-cormorant text-2xl font-semibold text-[#3B1A0A] tracking-wide">
            {sub.label}
          </h3>
          {sub.note && (
            <p className="font-lato text-xs text-[#C9924A] tracking-widest uppercase mt-1">
              {sub.note}
            </p>
          )}
        </div>
        <div className="flex-1 h-px bg-[#C9924A]/20" />
      </div>

      {/* Items grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {sub.items.map((item) => (
          <MenuItemCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  )
}

function MenuItemCard({ item }) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
      className="group flex flex-col gap-1.5 p-5 border border-[#C9924A]/15 hover:border-[#C9924A]/50 hover:bg-[#FAF6EE] transition-all duration-300 cursor-default"
    >
      <div className="flex items-start justify-between gap-2">
        <h4 className="font-cormorant text-lg font-semibold text-[#3B1A0A] group-hover:text-[#C9924A] transition-colors duration-300 leading-snug">
          {item.name}
        </h4>
        <div className="w-1 h-1 rounded-full bg-[#C9924A] mt-2.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      {item.desc && (
        <p className="font-lato text-xs text-[#2C1A0E]/50 leading-relaxed">
          {item.desc}
        </p>
      )}
    </motion.div>
  )
}
