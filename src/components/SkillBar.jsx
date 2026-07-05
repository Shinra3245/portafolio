import { useEffect, useRef, useState } from 'react'
import './SkillBar.css'

function SkillBar({ name, percentage, hue }) {
  const [animated, setAnimated] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimated(true)
      },
      { threshold: 0.3 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="skill-bar" style={{ '--hue': hue }}>
      <div className="skill-bar__header">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{ width: animated ? `${percentage}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default SkillBar
