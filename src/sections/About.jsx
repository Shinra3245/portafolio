import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SpaceLoader from '../components/SpaceLoader'
import fotoYo from '../assets/images/yov2.jpeg'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

// Cuánto se muestra la animación de "carga" (astronauta) antes de revelar la foto real
const PHOTO_REVEAL_DELAY = 2600

// Componente auxiliar para renderizar los números de estadísticas en 3D
function StatCard3D({ value, label }) {
  // Separar el número del símbolo (+, %, etc.) si existe al final
  const match = value.match(/^(\d+)([^0-9]*)$/)
  const numPart = match ? match[1] : value
  const symPart = match ? match[2] : ''

  let lengthClass = ''
  if (value.length >= 4) {
    lengthClass = 'card-3d--short'
  } else if (value.length === 3) {
    lengthClass = 'card-3d--medium'
  }

  const content = (
    <>
      <span className="card-3d__num">{numPart}</span>
      {symPart && <span className="card-3d__sym">{symPart}</span>}
    </>
  )

  return (
    <div className="stat stat--3d">
      <div className={`card-3d ${lengthClass}`} aria-hidden="true">
        <div className="card-3d__holo">
          <div className="card-3d__layer card-3d__layer--back">{content}</div>
          <div className="card-3d__layer card-3d__layer--mid">{content}</div>
          <div className="card-3d__layer card-3d__layer--front">{content}</div>
        </div>
      </div>
      <span className="stat__label">{label}</span>
    </div>
  )
}

function About() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const visualRef = useRef(null)
  const [photoReady, setPhotoReady] = useState(false)

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => setPhotoReady(true), PHOTO_REVEAL_DELAY)
          observer.disconnect()
          return () => clearTimeout(timer)
        }
      },
      { threshold: 0.3 },
    )
    if (visualRef.current) observer.observe(visualRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="sobre-mi" className="about" ref={sectionRef}>
      <h2 className="section-title about__reveal">{t('about.title')}</h2>

      <div className="about__grid">
        <div className="about__visual about__reveal" ref={visualRef}>
          <div className="photo-card">
            <div className="photo-card__img-container">
              {photoReady ? (
                <img src={fotoYo} alt={t('hero.name')} className="photo-card__img" />
              ) : (
                <SpaceLoader />
              )}
            </div>
          </div>
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
            <StatCard3D value={t('about.statProjectsValue')} label={t('about.statProjects')} />
            <StatCard3D value={t('about.statExperienceValue')} label={t('about.statExperience')} />
            <StatCard3D value={t('about.statClientsValue')} label={t('about.statClients')} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
