import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { Rocket } from 'lucide-react'
import DownloadButton from '../components/DownloadButton'
import DrawnName from '../components/DrawnName'
import RotatingEarth from '../components/RotatingEarth'
import './Hero.css'

gsap.registerPlugin(useGSAP)

function Hero() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const sectionRef = useRef(null)
  const greetingRef = useRef(null)
  const nameRef = useRef(null)
  const roleRef = useRef(null)
  const ctaRef = useRef(null)
  const earthRef = useRef(null)

  useGSAP(
    () => {
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .from(greetingRef.current, { y: 30, opacity: 0, duration: 0.7 })
        .from(roleRef.current, { y: 40, opacity: 0, duration: 0.8 }, '-=0.1')
        .from(ctaRef.current, { y: 30, opacity: 0, duration: 0.6 }, '-=0.4')
        .from(earthRef.current, { y: 30, opacity: 0, scale: 0.9, duration: 0.8 }, '-=0.3')
    },
    { scope: sectionRef },
  )

  // El sistema solar y toda la vista actual se deslizan hacia la derecha y se
  // desvanecen; la ruta /proyectos toma el relevo con su propia animación de
  // entrada (ver ProjectsPage.jsx), dando la sensación de una transición continua.
  const handleViewProjects = (e) => {
    e.preventDefault()
    const layer = document.querySelector('.content-layer')
    gsap.to(layer, {
      x: '8vw',
      opacity: 0,
      duration: 0.6,
      ease: 'power3.in',
      onComplete: () => navigate('/proyectos'),
    })
  }

  return (
    <section id="inicio" className="hero" ref={sectionRef}>
      <div className="hero__content">
        <p ref={greetingRef} className="hero__greeting">
          {t('hero.greeting')}
        </p>
        <div ref={nameRef} className="hero__name">
          <DrawnName label={t('hero.name')} />
        </div>
        <h2 ref={roleRef} className="hero__role">
          {t('hero.role')}
        </h2>
        <div ref={ctaRef} className="hero__actions">
          <button type="button" onClick={handleViewProjects} className="solar-cta">
            <span className="solar-cta__inner">
              <strong>{t('hero.cta')}</strong>
              <div className="solar-cta__stars">
                <div className="solar-cta__stars-field" />
              </div>
              <div className="solar-cta__glow">
                <div className="solar-cta__circle" />
                <div className="solar-cta__circle" />
              </div>
            </span>
          </button>
          <DownloadButton />
        </div>
        <div ref={earthRef} className="hero__earth">
          <RotatingEarth />
        </div>
      </div>
    </section>
  )
}

export default Hero
