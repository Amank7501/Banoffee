import Hero from '../components/sections/Hero'
import OurStory from '../components/sections/OurStory'
import SignatureCollection from '../components/sections/SignatureCollection'
import Menu from '../components/sections/Menu'
import Gallery from '../components/sections/Gallery'
import CustomCakes from '../components/sections/CustomCakes'
import Testimonials from '../components/sections/Testimonials'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <OurStory />
      <SignatureCollection />
      <Menu />
      <Gallery />
      <CustomCakes />
      <Testimonials />
      <Contact />
    </main>
  )
}
