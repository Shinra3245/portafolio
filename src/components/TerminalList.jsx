import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { specialization } from '../data/specialization'
import './TerminalList.css'

const CHAR_DELAY = 18
const LINE_PAUSE = 250

function computeState(elapsed, lang) {
  let remaining = elapsed
  return specialization.map((item) => {
    const text = item[lang]
    const commandLen = item.command.length
    const outputLen = text.length
    const commandDuration = commandLen * CHAR_DELAY
    const outputDuration = outputLen * CHAR_DELAY

    if (remaining <= 0) return { command: 0, output: 0 }

    if (remaining < commandDuration) {
      const revealed = { command: Math.min(commandLen, Math.ceil(remaining / CHAR_DELAY)), output: 0 }
      remaining = 0
      return revealed
    }
    remaining -= commandDuration

    if (remaining < LINE_PAUSE) {
      remaining = 0
      return { command: commandLen, output: 0 }
    }
    remaining -= LINE_PAUSE

    if (remaining < outputDuration) {
      const revealed = { command: commandLen, output: Math.min(outputLen, Math.ceil(remaining / CHAR_DELAY)) }
      remaining = 0
      return revealed
    }
    remaining -= outputDuration

    if (remaining < LINE_PAUSE) {
      remaining = 0
      return { command: commandLen, output: outputLen }
    }
    remaining -= LINE_PAUSE
    return { command: commandLen, output: outputLen }
  })
}

function totalDurationFor(lang) {
  return specialization.reduce((sum, item) => {
    const text = item[lang]
    return sum + item.command.length * CHAR_DELAY + LINE_PAUSE + text.length * CHAR_DELAY + LINE_PAUSE
  }, 0)
}

function TerminalList() {
  const { i18n } = useTranslation()
  const lang = i18n.language === 'en' ? 'en' : 'es'
  const containerRef = useRef(null)
  const [started, setStarted] = useState(false)
  const [lines, setLines] = useState(specialization.map(() => ({ command: 0, output: 0 })))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true)
      },
      { threshold: 0.3 },
    )
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      setLines(specialization.map((item) => ({ command: item.command.length, output: item[lang].length })))
      return
    }

    // Basado en tiempo transcurrido real (no en una cadena de setTimeout por carácter),
    // así el tipeo no se atasca si el hilo principal va lento (varias escenas 3D a la vez).
    const startTime = performance.now()
    const totalDuration = totalDurationFor(lang)
    let rafId

    function tick() {
      const elapsed = performance.now() - startTime
      if (elapsed >= totalDuration) {
        setLines(specialization.map((item) => ({ command: item.command.length, output: item[lang].length })))
        return
      }
      setLines(computeState(elapsed, lang))
      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [started, lang])

  return (
    <div className="terminal" ref={containerRef}>
      <div className="terminal__bar">
        <span className="terminal__dot terminal__dot--red" />
        <span className="terminal__dot terminal__dot--yellow" />
        <span className="terminal__dot terminal__dot--green" />
        <span className="terminal__title">omar@portafolio:~/especializacion</span>
      </div>

      <div className="terminal__body">
        {specialization.map((item, i) => {
          const line = lines[i] || { command: 0, output: 0 }
          const text = item[lang]
          const commandDone = line.command >= item.command.length
          const outputDone = line.output >= text.length

          return (
            <div key={item.id} className="terminal__block">
              <p className="terminal__line terminal__line--command">
                {item.command.slice(0, line.command)}
                {!commandDone && <span className="terminal__cursor" />}
              </p>
              {commandDone && (
                <p className="terminal__line terminal__line--output">
                  <span className="terminal__arrow">{'→ '}</span>
                  {text.slice(0, line.output)}
                  {!outputDone && <span className="terminal__cursor" />}
                </p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TerminalList
