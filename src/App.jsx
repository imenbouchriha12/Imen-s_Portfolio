import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'

export default function App() {
  return (
    <div className="font-body-md text-body-md selection:bg-primary/30">
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <BackToTop />
      <Footer />
    </div>
  )
}
