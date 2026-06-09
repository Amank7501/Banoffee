import Hero from '../components/sections/Hero'
import FoundersLetter from '../components/sections/FoundersLetter'
import WhyBanoffee from '../components/sections/WhyBanoffee'
import SignatureCollection from '../components/sections/SignatureCollection'
import Menu from '../components/sections/Menu'
import BehindTheKitchen from '../components/sections/BehindTheKitchen'
import StoryCTA from '../components/sections/StoryCTA'
import CustomCakes from '../components/sections/CustomCakes'
import Gallery from '../components/sections/Gallery'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <FoundersLetter />
      <WhyBanoffee />
      <SignatureCollection />
      <Menu />
      <BehindTheKitchen />
      <StoryCTA />
      <CustomCakes />
      <Gallery />
      <Contact />
    </main>
  )
}
