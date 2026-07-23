import { useState } from 'react'
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
  const { t, i18n } = useTranslation()
  const scrollY = useScrollPosition()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const isScrolled = scrollY > 50
  const isHome = location.pathname === '/'

  const toggleLang = () => i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <Link to="/" className="navbar__logo">
        Omar<span>.Bolaños</span>
      </Link>

      <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
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
          className="navbar__hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menú"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
