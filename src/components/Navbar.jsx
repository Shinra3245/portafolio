import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import { useScrollPosition } from '../hooks/useScrollPosition'
import './Navbar.css'

const links = [
  { href: '#inicio', key: 'nav.home' },
  { href: '#sobre-mi', key: 'nav.about' },
  { href: '#servicios', key: 'nav.services' },
  { href: '#experiencia', key: 'nav.experience' },
  { href: '#proyectos', key: 'nav.projects' },
  { href: '#habilidades', key: 'nav.skills' },
  { href: '#contacto', key: 'nav.contact' },
]

function Navbar() {
  const { t, i18n } = useTranslation()
  const scrollY = useScrollPosition()
  const [menuOpen, setMenuOpen] = useState(false)
  const isScrolled = scrollY > 50

  const toggleLang = () => i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <a href="#inicio" className="navbar__logo">
        Omar<span>.Bolaños</span>
      </a>

      <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
        {links.map((link) => (
          <li key={link.key}>
            <a href={link.href} onClick={() => setMenuOpen(false)}>
              {t(link.key)}
            </a>
          </li>
        ))}
      </ul>

      <div className="navbar__actions">
        <button className="lang-toggle" onClick={toggleLang} aria-label="Cambiar idioma">
          {i18n.language === 'es' ? 'EN' : 'ES'}
        </button>

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
