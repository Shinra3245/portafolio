import { lazy, Suspense, useEffect, useLayoutEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import TechShowcase from './sections/TechShowcase'
import Specialization from './sections/Specialization'
import Experience from './sections/Experience'
import Education from './sections/Education'
import NotFound from './sections/NotFound'
import DeferredSection from './components/DeferredSection'
import PageLoader from './components/PageLoader'
import { useLenis } from './hooks/useLenis'
import './components/SolarCta.css'

const SpaceBackground = lazy(() => import('./3d/SpaceBackground'))
const GithubActivity = lazy(() => import('./sections/GithubActivity'))
const Contact = lazy(() => import('./sections/Contact'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))

function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const el = document.getElementById(decodeURIComponent(location.hash.slice(1)))
    if (!el) return
    let frame
    // Lazy sections and web fonts can change the target's position after mount.
    // Keep the anchor aligned until the visitor starts scrolling or interacting.
    const align = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => el.scrollIntoView({ behavior: 'instant' }))
    }
    const observer = new ResizeObserver(align)
    observer.observe(document.querySelector('.content-layer'))
    const stop = () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
    const events = ['wheel', 'touchstart', 'pointerdown', 'keydown']
    events.forEach((event) => window.addEventListener(event, stop, { passive: true, once: true }))
    align()
    return () => {
      stop()
      events.forEach((event) => window.removeEventListener(event, stop))
    }
  }, [location.hash])

  return (
    <>
      <Hero />
      <About />
      <TechShowcase />
      <Specialization />
      <Experience />
      <Education />
      <DeferredSection id="github"><GithubActivity /></DeferredSection>
      <DeferredSection id="contacto"><Contact /></DeferredSection>
      <Footer />
    </>
  )
}

function App() {
  useLenis()
  const { t } = useTranslation()
  const location = useLocation()
  const [backgroundReady, setBackgroundReady] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setBackgroundReady(true), 300)
    return () => clearTimeout(timer)
  }, [])

  useLayoutEffect(() => {
    if (!location.hash) window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname, location.hash])

  return (
    <>
      <PageLoader />
      {backgroundReady && <Suspense fallback={null}><SpaceBackground /></Suspense>}
      <Navbar />
      <div className="content-layer">
        <Suspense fallback={<div className="route-loading" role="status">{t('projects.loading')}</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/proyectos" element={<ProjectsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </>
  )
}

export default App
