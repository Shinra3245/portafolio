import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Keycap from '../components/Keycap'
import { techStack } from '../data/techstack'
import './TechShowcase.css'

gsap.registerPlugin(ScrollTrigger)

function TechShowcase() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.tech-group', {
        y: 24,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="tecnologias" className="tech-showcase" ref={sectionRef}>
      <div className="tech-showcase__inner">
        <h2 className="tech-showcase__title">{t('tech.title')}</h2>
        <p className="tech-showcase__subtitle">{t('tech.description')}</p>

        <div className="tech-showcase__groups">
          {techStack.map((group) => (
            <div key={group.id} className="tech-group">
              <h3 className="tech-group__title">{t(group.titleKey)}</h3>
              <div className="tech-group__pills">
                {group.items.map((item) => (
                  <Keycap key={item.id} icon={item.icon} label={item.label} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechShowcase
