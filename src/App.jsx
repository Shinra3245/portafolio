import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import SpaceBackground from './3d/SpaceBackground'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import TechShowcase from './sections/TechShowcase'
import Specialization from './sections/Specialization'
import Experience from './sections/Experience'
import Education from './sections/Education'
import GithubActivity from './sections/GithubActivity'
import Contact from './sections/Contact'
import NotFound from './sections/NotFound'
import ProjectsPage from './pages/ProjectsPage'
import PageLoader from './components/PageLoader'
import { useLenis } from './hooks/useLenis'

function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const el = document.querySelector(location.hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [location.hash])

  return (
    <>
      <Hero />
      <About />
      <TechShowcase />
      <Specialization />
      <Experience />
      <Education />
      <GithubActivity />
      <Contact />
      <Footer />
    </>
  )
}

function App() {
  useLenis()

  return (
    <>
      <PageLoader />
      <SpaceBackground />
      <Navbar />
      <div className="content-layer">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/proyectos" element={<ProjectsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
