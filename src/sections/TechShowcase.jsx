import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { Sparkles } from 'lucide-react'
import KeyboardScene from '../3d/KeyboardScene'
import './TechShowcase.css'

gsap.registerPlugin(useGSAP)

function TechShowcase() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const iconRef = useRef(null)

  useGSAP(
    () => {
      gsap.to(iconRef.current, {
        rotate: 15,
        scale: 1.15,
        duration: 1.2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })
    },
    { scope: sectionRef },
  )

  return (
    <section id="tecnologias" className="tech-showcase" ref={sectionRef}>
      <div className="tech-showcase__intro">
        <h2 className="section-title">{t('tech.title')}</h2>
        <p className="section-subtitle">{t('tech.description')}</p>
      </div>

      <div className="tech-showcase__scene">
        <KeyboardScene />
      </div>

      <div className="tech-showcase__anim">
        <Sparkles ref={iconRef} className="tech-showcase__icon" size={56} />
        <h3 className="tech-showcase__anim-title">
          {t('tech.animTitlePrefix')}{' '}
          <span className="highlight">{t('tech.animTitleHighlight')}</span> {t('tech.animTitleSuffix')}
        </h3>
        <p className="tech-showcase__anim-text">{t('tech.animText')}</p>
      </div>
    </section>
  )
}

export default TechShowcase
