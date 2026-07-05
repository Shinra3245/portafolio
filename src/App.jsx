import { Routes, Route } from 'react-router-dom'
import SpaceBackground from './3d/SpaceBackground'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import TechShowcase from './sections/TechShowcase'
import Services from './sections/Services'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import NotFound from './sections/NotFound'
import { useLenis } from './hooks/useLenis'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <TechShowcase />
      <Services />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

function App() {
  useLenis()

  return (
    <>
      <SpaceBackground />
      <Navbar />
      <div className="content-layer">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
