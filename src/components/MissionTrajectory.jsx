import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Rocket, Satellite, Cpu, ArrowUpRight } from 'lucide-react'
import { experience } from '../data/experience'
import './MissionTrajectory.css'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const TYPE_META = {
  role: { Icon: Satellite, cls: '' },
  hackathon: { Icon: Rocket, cls: 'is-hackathon' },
  hardware: { Icon: Cpu, cls: 'is-hardware' },
}

const yearOf = (date) => (date.match(/\d{4}/) || [''])[0]
const isCurrent = (date) => /presente|present/i.test(date)

function MissionTrajectory() {
  const { i18n } = useTranslation()
  const lang = i18n.language === 'en' ? 'en' : 'es'
  const containerRef = useRef(null)
  const lineRef = useRef(null)

  useGSAP(
    () => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            end: 'bottom 65%',
            scrub: 0.6,
          },
        },
      )

      gsap.utils.toArray('.mission-year').forEach((marker) => {
        gsap.from(marker, {
          opacity: 0,
          scale: 0.7,
          duration: 0.5,
          ease: 'back.out(1.7)',
          scrollTrigger: { trigger: marker, start: 'top 90%' },
        })
      })

      gsap.utils.toArray('.mission-station').forEach((station) => {
        const dir = station.classList.contains('mission-station--right') ? 30 : -30
        gsap.from(station, {
          opacity: 0,
          x: dir,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: station, start: 'top 88%' },
        })
      })
    },
    { scope: containerRef },
  )

  const rows = []
  let lastYear = null
  experience.forEach((item, i) => {
    const year = yearOf(item.date)
    if (year && year !== lastYear) {
      rows.push(
        <div key={`year-${year}`} className="mission-year">
          <span className="mission-year__label">{year}</span>
        </div>,
      )
      lastYear = year
    }

    const content = item[lang]
    // Las cards de evento (hackathons) definen habilidades blandas por idioma
    // en content.skills; el resto usa el stack técnico compartido (item.techs).
    const chips = content.skills || item.techs
    const meta = TYPE_META[item.type] || TYPE_META.role
    const { Icon } = meta
    const side = i % 2 === 0 ? 'left' : 'right'
    const current = isCurrent(item.date)

    rows.push(
      <div key={item.id} className={`mission-station mission-station--${side}`}>
        <div className={`mission-station__node ${meta.cls} ${current ? 'is-current' : ''}`}>
          <Icon size={18} />
          {current && <span className="mission-station__pulse" aria-hidden="true" />}
        </div>

        <div className={`mission-station__card card ${meta.cls}`}>
          {item.image && (
            <div
              className={`mission-station__media ${
                item.imagePortrait ? 'mission-station__media--portrait' : ''
              }`}
            >
              <img src={item.image} alt={content.title} loading="lazy" decoding="async" />
            </div>
          )}
          <div className="mission-station__meta">
            <span className="mission-station__date">{item.date}</span>
            {item.badge && <span className={`mission-station__badge ${meta.cls}`}>{item.badge}</span>}
          </div>
          <h3 className="mission-station__title">{content.title}</h3>
          <p className="mission-station__role">{content.role}</p>
          <p className="mission-station__description">{content.description}</p>
          <div className="mission-station__footer">
            <div className="mission-station__techs">
              {chips.map((chip) => (
                <span key={chip} className="mission-station__tech">
                  {chip}
                </span>
              ))}
            </div>
            {item.link && (
              <a
                className="mission-station__link"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {lang === 'en' ? 'Live site' : 'Ver sitio'}
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>
      </div>,
    )
  })

  return (
    <div className="mission" ref={containerRef}>
      <div className="mission__line-track">
        <div className="mission__line" ref={lineRef} />
      </div>

      <div className="mission__stations">{rows}</div>
    </div>
  )
}

export default MissionTrajectory
