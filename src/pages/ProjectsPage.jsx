import { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ExternalLink, Github, Sparkles } from 'lucide-react'
import SolarSystemPen from '../components/SolarSystemPen'
import TechIcon from '../components/TechIcon'
import { projects } from '../data/projects'
import { techStack } from '../data/techstack'
import mercurySvg from '../assets/icons/Planets/mercury.svg'
import venusSvg from '../assets/icons/Planets/venus.svg'
import earthSvg from '../assets/icons/Planets/earth(1).svg'
import marsSvg from '../assets/icons/Planets/mars.svg'
import jupiterSvg from '../assets/icons/Planets/jupiter.svg'
import saturnSvg from '../assets/icons/Planets/saturn.svg'
import uranusSvg from '../assets/icons/Planets/uranus.svg'
import sunSvg from '../assets/icons/Planets/sun.svg'
import './ProjectsPage.css'

const PLANET_SVGS = {
  mercury: mercurySvg,
  venus: venusSvg,
  earth: earthSvg,
  mars: marsSvg,
  jupiter: jupiterSvg,
  saturn: saturnSvg,
  uranus: uranusSvg,
  sun: sunSvg,
}

// Mapa tecnología -> icono, aplanando el stack ya definido (labels reales del CV).
// Las tecnologías sin icono en el stack caen a un pill de texto.
const TECH_ICONS = techStack
  .flatMap((group) => group.items)
  .reduce((acc, { label, icon }) => {
    acc[label] = icon
    return acc
  }, {})
// Alias para variantes de nombre usadas en los proyectos
TECH_ICONS['Firebase FCM'] = TECH_ICONS['Firebase']

const FILTERS = [
  { id: 'all', key: 'projects.categoryAll' },
  { id: 'web', key: 'projects.categoryWeb' },
  { id: 'python', key: 'projects.categoryPython' },
  { id: 'movil', key: 'projects.categoryMovil' },
  { id: 'hardware', key: 'projects.categoryHardware' },
]

function ProjectsPage() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'en' ? 'en' : 'es'
  const mapRef = useRef(null)

  const [filter, setFilter] = useState('all')
  const [selectedId, setSelectedId] = useState(projects[0].id)

  const filtered = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  // Si el proyecto seleccionado ya no pertenece al filtro activo, salta al primero.
  useEffect(() => {
    if (!filtered.some((p) => p.id === selectedId)) {
      setSelectedId(filtered[0]?.id)
    }
  }, [filtered, selectedId])

  const selected = projects.find((p) => p.id === selectedId) || filtered[0]

  // El sistema solar de fondo reacciona al scroll (parallax + giro sutil),
  // en escritorio y móvil. Respeta prefers-reduced-motion.
  useEffect(() => {
    const map = mapRef.current
    if (!map) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        map.style.setProperty('--sp-scroll-rot', `${window.scrollY * 0.02}deg`)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="projects-page">
      <div className="projects-page__header">
        <Link to="/" className="solar-cta projects-page__back">
          <span className="solar-cta__inner">
            <strong>{t('projects.backHome')}</strong>
            <div className="solar-cta__stars">
              <div className="solar-cta__stars-field" />
            </div>
            <div className="solar-cta__glow">
              <div className="solar-cta__circle" />
              <div className="solar-cta__circle" />
            </div>
          </span>
        </Link>

        <h1 className="section-title">{t('projects.title')}</h1>
      </div>

      <div className="projects-page__map" ref={mapRef} aria-hidden="true">
        <SolarSystemPen />
      </div>

      <div className="projects-page__content">
        <p className="projects-page__hint">
          <Sparkles size={16} aria-hidden="true" />
          {t('projects.selectHint')}
        </p>

        <div className="projects-explorer">
          <div className="projects-filters" role="tablist" aria-label={t('projects.title')}>
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={filter === f.id}
                className={`projects-filters__btn ${filter === f.id ? 'is-active' : ''}`}
                onClick={() => setFilter(f.id)}
              >
                {t(f.key)}
              </button>
            ))}
          </div>

          <ul className="planet-list">
            {filtered.map((p) => {
              const content = p[lang]
              const active = p.id === selectedId
              return (
                <li key={p.id}>
                  <button
                    type="button"
                    className={`planet-list__item ${active ? 'is-active' : ''}`}
                    onClick={() => setSelectedId(p.id)}
                    aria-pressed={active}
                  >
                    <span className="planet-list__orb">
                      <img
                        src={PLANET_SVGS[p.planet]}
                        alt=""
                        aria-hidden="true"
                        style={p.planetHue ? { filter: `hue-rotate(${p.planetHue}deg)` } : undefined}
                      />
                    </span>
                    <span className="planet-list__label">{content.title}</span>
                  </button>
                </li>
              )
            })}
          </ul>

          {selected && (
            <article key={selected.id} className="project-detail card">
              <div className="project-detail__media">
                {selected.video ? (
                  <video
                    src={selected.video}
                    poster={selected.image || undefined}
                    controls
                    preload="metadata"
                    playsInline
                  />
                ) : selected.image ? (
                  <img src={selected.image} alt={selected[lang].title} />
                ) : (
                  <div className="project-detail__placeholder">
                    {t('projects.previewPending')}
                  </div>
                )}
              </div>

              <div className="project-detail__body">
                <div className="project-detail__head">
                  <span className="project-detail__tag">{selected[lang].tag}</span>
                  <h2 className="project-detail__title">{selected[lang].title}</h2>
                  {selected[lang].badge && (
                    <span className="project-detail__badge">{selected[lang].badge}</span>
                  )}
                </div>

                <ul className="project-detail__techs">
                  {selected.techs.map((tech) => (
                    <li
                      key={tech}
                      className={`project-detail__tech ${TECH_ICONS[tech] ? '' : 'is-text'}`}
                      title={tech}
                    >
                      {TECH_ICONS[tech] && <TechIcon icon={TECH_ICONS[tech]} size={16} />}
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>

                <p className="project-detail__desc">{selected[lang].description}</p>

                <div className="project-detail__actions">
                  {selected.url && (
                    <a
                      className="btn btn--primary"
                      href={selected.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink size={16} />
                      {t('projects.viewSite')}
                    </a>
                  )}
                  {selected.repo && (
                    <a
                      className="btn btn--secondary"
                      href={selected.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github size={16} />
                      {t('projects.viewCode')}
                    </a>
                  )}
                </div>
              </div>
            </article>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
