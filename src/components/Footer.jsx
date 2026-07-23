import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react'
import LightsaberIcon from './LightsaberIcon'
import './Footer.css'

const CHAR_DELAY = 55

const NAV_LINKS = [
  { href: '#inicio', key: 'nav.home' },
  { href: '#sobre-mi', key: 'nav.about' },
  { href: '#proyectos', key: 'nav.projects' },
  { href: '#contacto', key: 'nav.contact' },
]

const SOCIALS = [
  { href: 'https://github.com/Shinra3245', Icon: Github, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/omar-gadiel-bolaños-garcía-1a4154359/', Icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://wa.me/524131060699', Icon: MessageCircle, label: 'WhatsApp' },
  { href: 'mailto:omarbolanos198@gmail.com', Icon: Mail, label: 'Email' },
]

function Footer() {
  const { t } = useTranslation()
  const containerRef = useRef(null)
  const [revealed, setRevealed] = useState(0)
  const [started, setStarted] = useState(false)

  const promptText = `${t('footer.prompt')}:${t('footer.path')}`

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true)
      },
      { threshold: 0.4 },
    )
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      setRevealed(promptText.length)
      return
    }

    const startTime = performance.now()
    const totalDuration = promptText.length * CHAR_DELAY
    let rafId

    function tick() {
      const elapsed = performance.now() - startTime
      if (elapsed >= totalDuration) {
        setRevealed(promptText.length)
        return
      }
      setRevealed(Math.min(promptText.length, Math.ceil(elapsed / CHAR_DELAY)))
      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [started, promptText])

  return (
    <footer className="site-footer" ref={containerRef}>
      <div className="site-footer__prompt">
        <span className="site-footer__prompt-text">{promptText.slice(0, revealed)}</span>
        <span className="site-footer__cursor" />
      </div>

      <div className="site-footer__swords">
        <LightsaberIcon className="large" />
      </div>

      <nav className="site-footer__nav">
        {NAV_LINKS.map((link) => (
          <a key={link.key} href={link.href}>
            {t(link.key)}
          </a>
        ))}
      </nav>

      <div className="site-footer__socials">
        {SOCIALS.map(({ href, Icon, label }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
            <Icon size={18} />
          </a>
        ))}
      </div>

      <p className="site-footer__copyright">{t('footer.copyright')}</p>
    </footer>
  )
}

export default Footer
