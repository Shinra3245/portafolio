import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import DownloadButton from './DownloadButton'
import BB8Toggle from './BB8Toggle'
import { useScrollPosition } from '../hooks/useScrollPosition'
import './Navbar.css'

const links = [
  { href: '#inicio', key: 'nav.home' },
  { href: '#sobre-mi', key: 'nav.about' },
  { href: '#tecnologias', key: 'nav.tech' },
  { href: '#especializacion', key: 'nav.specialization' },
  { href: '#experiencia', key: 'nav.experience' },
  { href: '#educacion', key: 'nav.education' },
  { href: '#github', key: 'nav.github' },
  { href: '/proyectos', key: 'nav.projects', route: true },
  { href: '#contacto', key: 'nav.contact' },
]

function Navbar() {
  const { t } = useTranslation()
  const scrollY = useScrollPosition()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const isScrolled = scrollY > 50
  const isHome = location.pathname === '/'

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape' && menuOpen) {
        closeMenu()
        menuButtonRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <Link to="/" className="navbar__logo" onClick={closeMenu}>
        Omar<span>.Bolaños</span>
      </Link>

      <ul id="main-navigation" className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
        {links.map((link) => (
          <li key={link.key}>
            {link.route ? (
              <Link to={link.href} onClick={closeMenu}>
                {t(link.key)}
              </Link>
            ) : isHome ? (
              <a href={link.href} onClick={closeMenu}>
                {t(link.key)}
              </a>
            ) : (
              <Link to={`/${link.href}`} onClick={closeMenu}>
                {t(link.key)}
              </Link>
            )}
          </li>
        ))}
      </ul>

      <div className="navbar__actions">
        <DownloadButton />

        <BB8Toggle />

        <button
          ref={menuButtonRef}
          type="button"
          className="navbar__hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={t(menuOpen ? 'nav.closeMenu' : 'nav.openMenu')}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
