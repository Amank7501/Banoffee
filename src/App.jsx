import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import PageLoader from './components/common/PageLoader'

function App() {
  return (
    <>
      <PageLoader />
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}

export default App
