import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Users, Lightbulb, Calendar, MessageCircle, Eye, Briefcase, RefreshCw, Star } from 'lucide-react'
import './SoftSkillsProgress.css'

const skills = [
  { id: 'teamwork', Icon: Users, color: '#4facfe' }, // Blue
  { id: 'problemSolving', Icon: Lightbulb, color: '#f6d365' }, // Yellow
  { id: 'organization', Icon: Calendar, color: '#43e97b' }, // Green
  { id: 'communication', Icon: MessageCircle, color: '#ff5c8a' }, // Pink
  { id: 'detail', Icon: Eye, color: '#a18cd1' }, // Purple
  { id: 'management', Icon: Briefcase, color: '#f5a3ff' }, // Light Pink
  { id: 'adaptability', Icon: RefreshCw, color: '#00f2fe' }, // Cyan
  { id: 'leadership', Icon: Star, color: '#ffb199' } // Coral
]

function SoftSkillsProgress() {
  const { t } = useTranslation()
  const gridRef = useRef(null)
  const [revealed, setRevealed] = useState(false)

  // Revela las tarjetas con entrada escalonada cuando la sección entra en viewport.
  useEffect(() => {
    const el = gridRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={gridRef}
      className={`soft-skills-hud ${revealed ? 'soft-skills-hud--revealed' : ''}`}
    >
      {skills.map((skill, index) => {
        const { Icon } = skill
        return (
          <article
            key={skill.id}
            className="skill-panel"
            style={{ '--skill-color': skill.color, '--i': index }}
          >
            {/* Marco HUD: brackets en las esquinas + línea de escaneo */}
            <span className="skill-panel__bracket skill-panel__bracket--tl" aria-hidden="true" />
            <span className="skill-panel__bracket skill-panel__bracket--br" aria-hidden="true" />
            <span className="skill-panel__scan" aria-hidden="true" />

            <div className="skill-panel__head">
              <span className="skill-panel__icon">
                <Icon size={22} strokeWidth={2} aria-hidden="true" />
              </span>
              <span className="skill-panel__id">{String(index + 1).padStart(2, '0')}</span>
            </div>

            <h4 className="skill-panel__name">{t(`skills.items.${skill.id}`)}</h4>
            <p className="skill-panel__desc">{t(`skills.desc.${skill.id}`)}</p>

            <span className="skill-panel__status" aria-hidden="true">
              <span className="skill-panel__dot" />
              ONLINE
            </span>
          </article>
        )
      })}
    </div>
  )
}

export default SoftSkillsProgress
