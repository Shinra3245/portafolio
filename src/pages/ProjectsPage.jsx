import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import SolarSystemPen from '../components/SolarSystemPen'
import AstronautFloat from '../components/AstronautFloat'
import './ProjectsPage.css'


function ProjectsPage() {
  const { t } = useTranslation()
  const pageRef = useRef(null)

  
  useEffect(() => {
    const layer = document.querySelector('.content-layer')
    if (!layer) return
    gsap.fromTo(layer, { x: '-6vw', opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out' })
  }, [])

  return (
    <div className="projects-page" ref={pageRef}>
      <div className="projects-page__map">
        <SolarSystemPen />
      </div>

      <div className="projects-page__content">
        <Link to="/" className="solar-cta projects-page__back">
          <span className="solar-cta__inner">
            <strong>{t('projects.backHome')}</strong>
            <div className="solar-cta__stars">
              <div className="solar-cta__stars-field" />
            </div>
            <div className="solar-cta__glow">
              <div className="solar-cta__circle" />
              <div className="solar-cta__circle" />
            </div>
          </span>
        </Link>

        <h1 className="section-title">{t('projects.title')}</h1>
        <AstronautFloat />
      </div>
    </div>
  )
}

export default ProjectsPage
