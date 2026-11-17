import { useEffect, useMemo, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Keycap from '../components/Keycap'
import { techStack } from '../data/techstack'
import { projects } from '../data/projects'
import './TechShowcase.css'

gsap.registerPlugin(ScrollTrigger)

const TIERS = ['primary', 'complementary', 'explored']

function TechShowcase() {
  const { t, i18n } = useTranslation()
  const lang = i18n.resolvedLanguage === 'en' ? 'en' : 'es'
  const sectionRef = useRef(null)

  // Cada tecnología aparece una sola vez, en el nivel más alto donde está respaldada.
  const tiers = useMemo(() => {
    const seen = new Set()
    return TIERS.map((tier) => {
      const groups = techStack
        .filter((group) => group.tier === tier)
        .map((group) => {
          const items = group.items.filter((item) => !seen.has(item.label))
          items.forEach((item) => seen.add(item.label))
          const evidence = (group.evidenceSlugs ?? [])
            .map((slug) => projects.find((p) => p.slug === slug))
            .filter(Boolean)
          return { ...group, items, evidence }
        })
        .filter((group) => group.items.length)
      return { tier, groups }
    }).filter(({ groups }) => groups.length)
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
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
    <section id="tecnologias" className="tech-showcase" ref={sectionRef} aria-labelledby="tech-title">
      <div className="tech-showcase__inner">
        <h2 id="tech-title" className="tech-showcase__title">{t('tech.title')}</h2>
        <p className="tech-showcase__subtitle">{t('tech.description')}</p>

        {tiers.map(({ tier, groups }) => (
          <div key={tier} className={`tech-tier tech-tier--${tier}`}>
            <div className="tech-tier__head">
              <h3 className="tech-tier__title">{t(`tech.tier.${tier}.title`)}</h3>
              <p className="tech-tier__desc">{t(`tech.tier.${tier}.desc`)}</p>
            </div>

            <div className="tech-showcase__groups">
              {groups.map((group) => (
                <div key={group.id} className="tech-group">
                  <h4 className="tech-group__title">{t(group.titleKey)}</h4>
                  {tier === 'explored' ? (
                    <ul className="tech-group__chips">
                      {group.items.map((item) => (
                        <li key={item.id} className="tech-chip">{item.label}</li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="tech-group__pills">
                      {group.items.map((item) => (
                        <li key={item.id}>
                          <Keycap icon={item.icon} label={item.label} />
                        </li>
                      ))}
                    </ul>
                  )}
                  {group.evidence.length > 0 && (
                    <div className="tech-group__evidence">
                      <span>{t('tech.evidence')}</span>
                      <ul className="tech-group__links">
                        {group.evidence.map((p) => (
                          <li key={p.slug}>
                            <Link
                              to={`/proyectos?p=${p.slug}`}
                              aria-label={t('tech.evidenceLink', { project: p[lang].title, group: t(group.titleKey) })}
                            >
                              {p[lang].title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechShowcase
