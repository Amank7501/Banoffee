import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, fadeLeft, fadeRight, viewportConfig } from '../../utils/animations'
import { FaWhatsapp } from 'react-icons/fa'

const occasions = ['Birthday', 'Anniversary', 'Wedding', 'Baby Shower', 'Engagement', 'Corporate Event', 'Other']
const flavors = [
  'Classic Chocolate Truffle',
  'Chocolate Hazelnut',
  'Red Velvet',
  'Vanilla Bean',
  'Biscoff',
  'Mango',
  'Lemon Blueberry',
  'Custom Flavor',
]

const sampleCustomCakes = [
  { id: 1, emoji: '💍', label: 'Engagement Floral', desc: 'Buttercream florals · 2-tier · Custom message', tag: 'Signature Design' },
  { id: 2, emoji: '🎂', label: 'Birthday Drip Cake', desc: 'Ganache drip · Macarons · Sprinkle finish', tag: 'Popular' },
  { id: 3, emoji: '👶', label: 'Baby Shower Cake', desc: 'Pastel palette · Themed topper · Half-kg option', tag: 'Fan Favourite' },
]

export default function CustomCakes() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', occasion: '', flavor: '', description: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Hi Banoffee! I'd like to enquire about a custom cake.\n\nName: ${form.name}\nOccasion: ${form.occasion}\nFlavor: ${form.flavor}\nDetails: ${form.description}`
    )
    window.open(`https://wa.me/919999999999?text=${msg}`, '_blank')
    setSubmitted(true)
  }

  return (
    <section id="custom-cakes" className="bg-[#FAF6EE]">
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9924A]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-32">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <p className="section-label text-[#C9924A] mb-4">Made Just For You</p>
          <h2 className="section-heading text-[#3B1A0A]">Custom Cakes</h2>
          <p className="font-lato text-sm text-[#2C1A0E]/50 mt-4 max-w-md mx-auto leading-relaxed">
            Every celebration deserves a cake as unique as the moment. Tell us your vision and we'll bring it to life.
          </p>
        </motion.div>

        {/* Sample cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 md:mb-20"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {sampleCustomCakes.map((cake) => (
            <motion.div
              key={cake.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="bg-[#3B1A0A] p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <span className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{cake.emoji}</span>
              <span className="font-lato text-[0.6rem] font-bold tracking-widest uppercase text-[#C9924A] mb-3">{cake.tag}</span>
              <h3 className="font-cormorant text-xl font-semibold text-[#FFF8F0] mb-2">{cake.label}</h3>
              <p className="font-lato text-xs text-[#FFF8F0]/50 leading-relaxed">{cake.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Form + info */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-start">
          {/* Left: info */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl text-[#3B1A0A] mb-4">How it works</h3>
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Share Your Vision', desc: 'Fill in the form with your occasion, flavor preferences, and any special requests.' },
                  { step: '02', title: 'We Connect', desc: 'Our team reaches out via WhatsApp to discuss design, size, and delivery details.' },
                  { step: '03', title: 'Your Cake is Made', desc: 'We handcraft your cake with care and deliver it fresh for your celebration.' },
                ].map((s) => (
                  <div key={s.step} className="flex gap-5">
                    <div className="flex-shrink-0 w-10 h-10 border border-[#C9924A]/40 flex items-center justify-center">
                      <span className="font-lato text-xs font-bold text-[#C9924A]">{s.step}</span>
                    </div>
                    <div>
                      <p className="font-cormorant text-lg font-semibold text-[#3B1A0A]">{s.title}</p>
                      <p className="font-lato text-sm text-[#2C1A0E]/60 leading-relaxed mt-1">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#3B1A0A] p-6">
              <p className="font-lato text-xs text-[#C9924A] tracking-widest uppercase mb-2">Quick Order</p>
              <p className="font-cormorant text-lg text-[#FFF8F0] mb-4">Prefer to reach us directly?</p>
              <a
                href="https://wa.me/919999999999?text=Hi%20Banoffee!%20I'd%20like%20a%20custom%20cake."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#C9924A] text-[#FFF8F0] px-5 py-3 text-xs font-lato font-bold tracking-widest uppercase hover:bg-[#D4A055] transition-colors duration-300"
              >
                <FaWhatsapp size={16} />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#3B1A0A] p-12 text-center"
              >
                <span className="text-6xl mb-6 block">🎂</span>
                <h3 className="font-display text-2xl text-[#FFF8F0] mb-3">Thank you!</h3>
                <p className="font-lato text-sm text-[#FFF8F0]/60 leading-relaxed">
                  We've opened WhatsApp for you. We'll get back to you shortly to create something beautiful.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 font-lato text-xs text-[#C9924A] tracking-widest uppercase hover:text-[#D4A055] transition-colors"
                >
                  Submit another inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField label="Your Name" name="name" type="text" value={form.name} onChange={handleChange} required />
                  <FormField label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} required />
                </div>
                <FormField label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormSelect label="Occasion" name="occasion" value={form.occasion} onChange={handleChange} options={occasions} required />
                  <FormSelect label="Cake Flavor" name="flavor" value={form.flavor} onChange={handleChange} options={flavors} required />
                </div>

                <div>
                  <label className="block font-lato text-xs font-bold tracking-widest uppercase text-[#3B1A0A] mb-2">
                    Tell us more
                  </label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your dream cake — theme, size, tiers, dietary needs, delivery date..."
                    className="w-full bg-[#FFF8F0] border border-[#C9924A]/30 focus:border-[#C9924A] outline-none px-4 py-3 font-lato text-sm text-[#2C1A0E] placeholder:text-[#2C1A0E]/30 transition-colors duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-[#3B1A0A] hover:bg-[#C9924A] text-[#FFF8F0] py-4 font-lato text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:-translate-y-0.5"
                >
                  <FaWhatsapp size={16} />
                  Send Inquiry via WhatsApp
                </button>

                <p className="font-lato text-xs text-[#2C1A0E]/30 text-center leading-relaxed">
                  This will open WhatsApp with your details pre-filled. We'll respond within 24 hours.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-[#C9924A]/40 to-transparent" />
    </section>
  )
}

function FormField({ label, name, type, value, onChange, required }) {
  return (
    <div>
      <label className="block font-lato text-xs font-bold tracking-widest uppercase text-[#3B1A0A] mb-2">
        {label}{required && <span className="text-[#C9924A] ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-[#FFF8F0] border border-[#C9924A]/30 focus:border-[#C9924A] outline-none px-4 py-3 font-lato text-sm text-[#2C1A0E] placeholder:text-[#2C1A0E]/30 transition-colors duration-300"
      />
    </div>
  )
}

function FormSelect({ label, name, value, onChange, options, required }) {
  return (
    <div>
      <label className="block font-lato text-xs font-bold tracking-widest uppercase text-[#3B1A0A] mb-2">
        {label}{required && <span className="text-[#C9924A] ml-1">*</span>}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-[#FFF8F0] border border-[#C9924A]/30 focus:border-[#C9924A] outline-none px-4 py-3 font-lato text-sm text-[#2C1A0E] transition-colors duration-300 cursor-pointer"
      >
        <option value="">Select {label}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  )
}
