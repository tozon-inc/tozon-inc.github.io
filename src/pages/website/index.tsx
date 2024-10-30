import { useState, useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ContactSection from './components/ContactSection'
import AboutUs from './components/AboutUs'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const newSlide = Math.floor(scrollPosition / windowHeight)
      setCurrentSlide(newSlide)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } })
  }, [currentSlide, controls])

  return (
    <div className="bg-gray-950">
      <Header />

      <main className="relative">
        <div
          className="snap-y snap-mandatory h-screen overflow-y-scroll"
          style={{
            zoom: 'calc(100% + (60% - 100%) * ((100vw - 768px) / (2560 - 768)))',
            WebkitOverflowScrolling: 'touch'
          }}
        >          <div className="snap-start">
            <HeroSection />
          </div>
          <div className="snap-start">
            <AboutUs />
          </div>
          <div className="snap-start">
            <ContactSection />
          </div>
        </div>
      </main>
    </div>
  )
}