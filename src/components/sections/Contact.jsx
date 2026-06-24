import { motion } from 'framer-motion'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { MdEmail, MdLocationOn, MdAccessTime } from 'react-icons/md'
import { fadeUp, fadeLeft, fadeRight, viewportConfig } from '../../utils/animations'

const contactItems = [
  {
    icon: <MdLocationOn size={22} />,
    label: 'Find Us',
    value: 'Bengaluru, Karnataka',
    sub: 'Delivery available across Bengaluru',
    href: null,
  },
  {
    icon: <FaWhatsapp size={22} />,
    label: 'WhatsApp',
    value: '+91 90609 76595',
    sub: 'Mon – Sat · 9 AM – 8 PM',
    href: 'https://wa.me/919060976595?text=Hi%20Banoffee!',
  },
  {
    icon: <FaInstagram size={22} />,
    label: 'Instagram',
    value: '@banoffee.bakery',
    sub: 'DMs always open for orders',
    href: 'https://instagram.com',
  },
  {
    icon: <MdEmail size={22} />,
    label: 'Email',
    value: 'hello@banoffeebakery.in',
    sub: 'We reply within 24 hours',
    href: 'mailto:hello@banoffeebakery.in',
  },
  {
    icon: <MdAccessTime size={22} />,
    label: 'Hours',
    value: 'Mon – Sat · 9 AM – 8 PM',
    sub: 'Sunday by appointment only',
    href: null,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-[#FFF8F0]">
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
          <p className="section-label text-[#C9924A] mb-4">Come Say Hello</p>
          <h2 className="section-heading text-[#3B1A0A]">Get in Touch</h2>
          <p className="font-lato text-sm text-[#2C1A0E]/50 mt-4 max-w-sm mx-auto leading-relaxed">
            We'd love to hear from you — whether it's an order, a question, or just a sweet hello.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact cards */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4"
          >
            {contactItems.map((item) => (
              <ContactCard key={item.label} item={item} />
            ))}
          </motion.div>

          {/* Map placeholder + CTA */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-6"
          >
            {/* Map placeholder */}
            <div className="relative h-72 bg-[#3B1A0A] overflow-hidden">
              {/* Grid pattern simulating map */}
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'linear-gradient(#C9924A 1px, transparent 1px), linear-gradient(90deg, #C9924A 1px, transparent 1px)',
                  backgroundSize: '40px 40px'
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <MdLocationOn size={36} className="text-[#C9924A]" />
                <p className="font-cormorant text-xl text-[#FFF8F0]">Bengaluru, Karnataka</p>
                <p className="font-lato text-xs text-[#FFF8F0]/40 tracking-widest uppercase">India</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 font-lato text-xs font-bold tracking-widest uppercase text-[#C9924A] border border-[#C9924A]/40 px-5 py-2 hover:bg-[#C9924A] hover:text-[#FFF8F0] transition-all duration-300"
                >
                  Open in Maps
                </a>
              </div>
            </div>

            {/* Social CTA block */}
            <div className="bg-[#FAF6EE] border border-[#C9924A]/20 p-8">
              <p className="font-cormorant text-2xl text-[#3B1A0A] mb-2">Follow our journey</p>
              <p className="font-lato text-sm text-[#2C1A0E]/60 mb-6 leading-relaxed">
                Every bake, every story, every moment — shared on Instagram daily.
              </p>
              <div className="flex gap-3 sm:gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#3B1A0A] text-[#FFF8F0] px-4 py-3 text-xs font-lato font-bold tracking-widest uppercase hover:bg-[#C9924A] transition-colors duration-300 flex-1 justify-center sm:flex-none sm:justify-start"
                >
                  <FaInstagram size={15} />
                  Instagram
                </a>
                <a
                  href="https://wa.me/919060976595"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#C9924A] text-[#FFF8F0] px-4 py-3 text-xs font-lato font-bold tracking-widest uppercase hover:bg-[#D4A055] transition-colors duration-300 flex-1 justify-center sm:flex-none sm:justify-start"
                >
                  <FaWhatsapp size={15} />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactCard({ item }) {
  const Content = (
    <div className="group flex flex-col gap-2 p-6 border border-[#C9924A]/15 hover:border-[#C9924A]/50 hover:bg-[#FAF6EE] transition-all duration-300 cursor-default h-full">
      <div className="text-[#C9924A] mb-1">{item.icon}</div>
      <p className="font-lato text-xs font-bold tracking-widest uppercase text-[#3B1A0A]/50">{item.label}</p>
      <p className="font-cormorant text-lg font-semibold text-[#3B1A0A] group-hover:text-[#C9924A] transition-colors duration-300 leading-snug">
        {item.value}
      </p>
      <p className="font-lato text-xs text-[#2C1A0E]/40 leading-relaxed">{item.sub}</p>
    </div>
  )

  if (item.href) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer">
        {Content}
      </a>
    )
  }
  return Content
}
