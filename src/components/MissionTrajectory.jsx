import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Rocket, Satellite } from 'lucide-react'
import { experience } from '../data/experience'
import './MissionTrajectory.css'

gsap.registerPlugin(ScrollTrigger, useGSAP)

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

      gsap.utils.toArray('.mission-station').forEach((station, i) => {
        gsap.from(station, {
          opacity: 0,
          x: i % 2 === 0 ? -30 : 30,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: station, start: 'top 88%' },
        })
      })
    },
    { scope: containerRef },
  )

  return (
    <div className="mission" ref={containerRef}>
      <div className="mission__line-track">
        <div className="mission__line" ref={lineRef} />
      </div>

      <div className="mission__stations">
        {experience.map((item, i) => {
          const content = item[lang]
          const Icon = item.type === 'hackathon' ? Rocket : Satellite
          const side = i % 2 === 0 ? 'left' : 'right'

          return (
            <div key={item.id} className={`mission-station mission-station--${side}`}>
              <div className={`mission-station__node ${item.type === 'hackathon' ? 'is-hackathon' : ''}`}>
                <Icon size={18} />
              </div>

              <div className="mission-station__card card">
                <div className="mission-station__meta">
                  <span className="mission-station__date">{item.date}</span>
                  {item.badge && <span className="mission-station__badge">{item.badge}</span>}
                </div>
                <h3 className="mission-station__title">{content.title}</h3>
                <p className="mission-station__role">{content.role}</p>
                <p className="mission-station__description">{content.description}</p>
                <div className="mission-station__techs">
                  {item.techs.map((tech) => (
                    <span key={tech} className="mission-station__tech">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MissionTrajectory
