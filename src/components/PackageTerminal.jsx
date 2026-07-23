import { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { specialization } from '../data/specialization'
import { focusAreas } from '../data/focusAreas'
import './PackageTerminal.css'

const CHAR_DELAY = 10   // ms por carácter
const LINE_PAUSE  = 140 // ms de pausa entre líneas

function buildLines(lang, t) {
  const lines = []

  lines.push({ id: 'cmd',   type: 'cmd',  text: '$ npm install @omar/skill-set' })
  lines.push({ id: 'info1', type: 'info', text: '  Resolving dependency graph...' })

  // Paquetes principales (especialización técnica)
  specialization.forEach((item) => {
    lines.push({ id: `${item.id}-dl`,  type: 'download', text: `  ↓  ${item.pkg}@1.0.0` })
    lines.push({ id: `${item.id}-out`, type: 'output',   text: `     ${item[lang]}` })
  })

  lines.push({ id: 'sep', type: 'info', text: '  Fetching focus areas...' })

  // Dependencias (áreas de enfoque)
  focusAreas.forEach((area) => {
    const label = t(`focusAreas.items.${area.id}`)
    lines.push({
      id:    `${area.id}-dep`,
      type:  'dep',
      text:  `  ✓  @omar/${area.id.padEnd(13)}  ${label}`,
      color: area.color,
    })
  })

  const total = specialization.length + focusAreas.length
  lines.push({
    id:   'done',
    type: 'success',
    text: `\n  ✓  added ${total} packages  ·  0 vulnerabilities`,
  })

  return lines
}

function computeState(elapsed, lines) {
  let remaining = elapsed
  return lines.map((line) => {
    if (remaining <= 0) return 0
    const len     = line.text.length
    const typeDur = len * CHAR_DELAY

    if (remaining < typeDur) {
      const chars = Math.min(len, Math.ceil(remaining / CHAR_DELAY))
      remaining = 0
      return chars
    }
    remaining -= typeDur

    if (remaining < LINE_PAUSE) {
      remaining = 0
      return len
    }
    remaining -= LINE_PAUSE
    return len
  })
}

function totalDuration(lines) {
  return lines.reduce((sum, l) => sum + l.text.length * CHAR_DELAY + LINE_PAUSE, 0)
}

function PackageTerminal() {
  const { i18n, t } = useTranslation()
  const lang         = i18n.language === 'en' ? 'en' : 'es'
  const containerRef = useRef(null)
  const bodyRef      = useRef(null)
  const [started, setStarted] = useState(false)

  const lines = useMemo(() => buildLines(lang, t), [lang, t])
  const [revealed, setRevealed] = useState(() => lines.map(() => 0))

  // Reiniciar cuando cambia el idioma
  useEffect(() => {
    setRevealed(lines.map(() => 0))
  }, [lang]) // eslint-disable-line react-hooks/exhaustive-deps

  // Arrancar al entrar en viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.15 },
    )
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  // Animación principal
  useEffect(() => {
    if (!started) return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      setRevealed(lines.map((l) => l.text.length))
      return
    }

    const startTime = performance.now()
    const total     = totalDuration(lines)
    let rafId

    function tick() {
      const elapsed = performance.now() - startTime
      if (elapsed >= total) {
        setRevealed(lines.map((l) => l.text.length))
        return
      }
      setRevealed(computeState(elapsed, lines))
      // Auto-scroll al fondo del terminal
      if (bodyRef.current) {
        bodyRef.current.scrollTop = bodyRef.current.scrollHeight
      }
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [started, lines])

  return (
    <div className="pkg-terminal" ref={containerRef}>
      <div className="pkg-terminal__bar">
        <span className="pkg-terminal__dot pkg-terminal__dot--red"    />
        <span className="pkg-terminal__dot pkg-terminal__dot--yellow" />
        <span className="pkg-terminal__dot pkg-terminal__dot--green"  />
        <span className="pkg-terminal__title">omar@portfolio ~ npm</span>
      </div>

      <div
        className="pkg-terminal__body"
        ref={bodyRef}
        data-lenis-prevent="true"
        onWheel={(e) => e.stopPropagation()}
      >
        {lines.map((line, i) => {
          const chars = revealed[i] ?? 0
          if (chars === 0) return null
          const isDone = chars >= line.text.length

          return (
            <div
              key={line.id}
              className={`pkg-line pkg-line--${line.type}`}
              style={line.color ? { '--pkg-color': line.color } : undefined}
            >
              {line.text.slice(0, chars)}
              {!isDone && <span className="pkg-terminal__cursor" />}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PackageTerminal
