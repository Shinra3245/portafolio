import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import SolarSystem from '../3d/SolarSystem'
import fotoYo from '../assets/images/yo.png'
import './Hero.css'

gsap.registerPlugin(useGSAP)

function Hero() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const greetingRef = useRef(null)
  const nameRef = useRef(null)
  const roleRef = useRef(null)
  const ctaRef = useRef(null)
  const photoRef = useRef(null)

  useGSAP(
    () => {
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .from(greetingRef.current, { y: 30, opacity: 0, duration: 0.7 })
        .from(nameRef.current, { y: 60, opacity: 0, duration: 1 }, '-=0.4')
        .from(roleRef.current, { y: 40, opacity: 0, duration: 0.8 }, '-=0.5')
        .from(ctaRef.current, { y: 30, opacity: 0, duration: 0.6 }, '-=0.4')
        .from(photoRef.current, { scale: 0.8, opacity: 0, duration: 1 }, '-=0.8')
    },
    { scope: sectionRef },
  )

  return (
    <section id="inicio" className="hero" ref={sectionRef}>
      <div className="hero__avatar-canvas">
        <SolarSystem />
      </div>

      <div className="hero__content">
        <p ref={greetingRef} className="hero__greeting">
          {t('hero.greeting')}
        </p>
        <h1 ref={nameRef} className="hero__name">
          {t('hero.name')}
        </h1>
        <h2 ref={roleRef} className="hero__role">
          {t('hero.role')}
        </h2>
        <div ref={ctaRef} className="hero__actions">
          <a href="#proyectos" className="btn btn--primary">
            {t('hero.cta')}
          </a>
        </div>
      </div>

      <div ref={photoRef} className="hero__photo">
        <img src={fotoYo} alt={t('hero.name')} />
      </div>
    </section>
  )
}

export default Hero
