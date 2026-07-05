import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Info } from 'lucide-react'
import RainEffect from '../3d/RainEffect'
import Toast from '../components/Toast'
import { useToast } from '../hooks/useToast'
import fotoYo from '../assets/images/yo.jpeg'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

function About() {
  const { t } = useTranslation()
  const { toast, showToast } = useToast()
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about__reveal', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="sobre-mi" className="about" ref={sectionRef}>
      <h2 className="section-title about__reveal">{t('about.title')}</h2>

      <div className="about__grid">
        <div className="about__visual about__reveal">
          <div className="about__rain-canvas">
            <RainEffect />
          </div>
          <img src={fotoYo} alt={t('hero.name')} className="about__photo" />
          <button
            className="btn btn--secondary about__toast-btn"
            onClick={() => showToast(t('about.toastMessage'))}
          >
            <Info size={16} />
            {t('about.toastButton')}
          </button>
        </div>

        <div className="about__text about__reveal">
          <h3 className="about__subtitle">{t('about.subtitle')}</h3>
          <p
            className="about__paragraph"
            dangerouslySetInnerHTML={{ __html: t('about.paragraph1') }}
          />
          <p
            className="about__paragraph"
            dangerouslySetInnerHTML={{ __html: t('about.paragraph2') }}
          />

          <h4 className="about__info-title">{t('about.infoTitle')}</h4>
          <div className="about__stats">
            <div className="stat">
              <span className="stat__number">{t('about.statProjectsValue')}</span>
              <span className="stat__label">{t('about.statProjects')}</span>
            </div>
            <div className="stat">
              <span className="stat__number">{t('about.statExperienceValue')}</span>
              <span className="stat__label">{t('about.statExperience')}</span>
            </div>
            <div className="stat">
              <span className="stat__number">{t('about.statClientsValue')}</span>
              <span className="stat__label">{t('about.statClients')}</span>
            </div>
          </div>
        </div>
      </div>

      <Toast toast={toast} />
    </section>
  )
}

export default About
