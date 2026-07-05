import { Routes, Route } from 'react-router-dom'
import SpaceBackground from './3d/SpaceBackground'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import TechShowcase from './sections/TechShowcase'
import Specialization from './sections/Specialization'
import Services from './sections/Services'
import Experience from './sections/Experience'
import Education from './sections/Education'
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
      <Specialization />
      <Services />
      <Experience />
      <Education />
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
