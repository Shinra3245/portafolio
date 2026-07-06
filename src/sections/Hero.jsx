import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { Download } from 'lucide-react'
import SolarSystem from '../3d/SolarSystem'
import './Hero.css'

gsap.registerPlugin(useGSAP)

function Hero() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const greetingRef = useRef(null)
  const nameRef = useRef(null)
  const roleRef = useRef(null)
  const ctaRef = useRef(null)

  useGSAP(
    () => {
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .from(greetingRef.current, { y: 30, opacity: 0, duration: 0.7 })
        .from(nameRef.current, { y: 60, opacity: 0, duration: 1 }, '-=0.4')
        .from(roleRef.current, { y: 40, opacity: 0, duration: 0.8 }, '-=0.5')
        .from(ctaRef.current, { y: 30, opacity: 0, duration: 0.6 }, '-=0.4')
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
          <a href="/CV.pdf" download className="btn btn--secondary">
            <Download size={16} />
            {t('hero.ctaSecondary')}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
