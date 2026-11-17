import { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useSearchParams } from 'react-router-dom'
import { ExternalLink, Github, Play, Sparkles } from 'lucide-react'
import SolarSystemPen from '../components/SolarSystemPen'
import TechIcon from '../components/TechIcon'
import ImageGallery from '../components/ImageGallery'
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
import { FEATURED_SLUGS } from '../components/FeaturedProjects'
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
  { id: 'featured', key: 'projects.categoryFeatured' },
  { id: 'all', key: 'projects.categoryAll' },
  { id: 'web', key: 'projects.categoryWeb' },
  { id: 'python', key: 'projects.categoryPython' },
  { id: 'movil', key: 'projects.categoryMovil' },
  { id: 'hardware', key: 'projects.categoryHardware' },
]

// Solo se enlazan URLs públicas http(s); cualquier otro valor se omite.
const publicUrl = (value) => (typeof value === 'string' && /^https:\/\//i.test(value) ? value : null)

const FACTS = [
  { key: 'challenge', label: 'projects.challenge' },
  { key: 'contribution', label: 'projects.contribution' },
  { key: 'status', label: 'projects.status' },
  { key: 'limitations', label: 'projects.limitations' },
]

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

function ProjectsPage() {
  const { t, i18n } = useTranslation()
  const lang = i18n.resolvedLanguage === 'en' ? 'en' : 'es'
  const mapRef = useRef(null)
  const detailRef = useRef(null)

  const [searchParams] = useSearchParams()
  const requested = projects.find((p) => p.slug === searchParams.get('p'))

  const [filter, setFilter] = useState(requested ? 'all' : 'featured')
  const [selectedId, setSelectedId] = useState((requested ?? projects[0]).id)

  // Destacados primero (orden P1 de la guía); el resto conserva su orden de datos.
  const ordered = useMemo(() => {
    const rank = (p) => {
      const i = FEATURED_SLUGS.indexOf(p.slug)
      return i === -1 ? FEATURED_SLUGS.length : i
    }
    return [...projects].sort((a, b) => rank(a) - rank(b))
  }, [])

  const filtered = useMemo(() => {
    if (filter === 'all') return ordered
    if (filter === 'featured') return ordered.filter((p) => FEATURED_SLUGS.includes(p.slug))
    return ordered.filter((p) => p.category === filter)
  }, [filter, ordered])

  useEffect(() => {
    if (requested) setSelectedId(requested.id)
  }, [requested])

  // Si el proyecto seleccionado ya no pertenece al filtro activo, salta al primero.
  useEffect(() => {
    if (!filtered.some((p) => p.id === selectedId)) {
      setSelectedId(filtered[0]?.id)
    }
  }, [filtered, selectedId])

  const selected = projects.find((p) => p.id === selectedId) || filtered[0]
  const site = publicUrl(selected?.url)
  const video = publicUrl(selected?.demoVideoUrl)
  const code = publicUrl(selected?.repo)
  const hasLocalMedia = Boolean(selected?.video || selected?.gallery?.length)

  // Secciones reales de la ficha seleccionada (solo las que tienen contenido).
  const sections = useMemo(() => {
    if (!selected) return []
    const c = selected[lang]
    const list = [{ id: 'overview', label: t('projects.sectionOverview') }]
    FACTS.forEach(({ key, label }) => {
      if (c[key]) list.push({ id: key, label: t(label) })
    })
    if (c.features?.length > 0) list.push({ id: 'features', label: t('projects.featuresTitle') })
    if (hasLocalMedia || site || video || code) list.push({ id: 'evidence', label: t('projects.evidenceTitle') })
    return list
  }, [selected, lang, t, site, video, code, hasLocalMedia])

  const [activeSection, setActiveSection] = useState('overview')
  useEffect(() => {
    setActiveSection('overview')
  }, [selectedId, lang])

  const goToSection = (id) => {
    setActiveSection(id)
    document.getElementById(`pd-${id}`)?.scrollIntoView({
      block: 'start',
      behavior: reducedMotion() ? 'instant' : 'smooth',
    })
  }

  useEffect(() => {
    const detail = detailRef.current
    if (detail && detail.getBoundingClientRect().top < 96) {
      detail.scrollIntoView({
        block: 'start',
        behavior: reducedMotion() ? 'instant' : 'smooth',
      })
    }
  }, [selectedId])

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
          <nav className="projects-side projects-side--left" aria-label={t('projects.navProjects')}>
          <div className="projects-filters" role="group" aria-label={t('projects.title')}>
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                aria-pressed={filter === f.id}
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
                    aria-label={content.title}
                    title={content.title}
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
          </nav>

          {selected && (
            <article ref={detailRef} key={selected.id} className="project-detail card">
              <div id={hasLocalMedia ? 'pd-evidence' : undefined}>
              {selected.video && (
                <div className="project-detail__media">
                  <video
                    src={selected.video}
                    poster={selected.image || undefined}
                    controls
                    preload="metadata"
                    playsInline
                  />
                </div>
              )}
              {selected.gallery?.length ? (
                <ImageGallery images={selected.gallery} />
              ) : !selected.video && selected.image ? (
                <div className="project-detail__media">
                  <img src={selected.image} alt={selected[lang].title} decoding="async" />
                </div>
              ) : null}
              </div>

              <div className="project-detail__body">
                <div className="project-detail__head">
                  <span className="project-detail__tag">{selected[lang].tag}</span>
                  <h2 className="project-detail__title">{selected[lang].title}</h2>
                  {selected[lang].badge && (
                    <span className="project-detail__badge">{selected[lang].badge}</span>
                  )}
                </div>

                {selected.createdAt && (
                  <p className="project-detail__date">
                    {t('projects.started', {
                      date: new Intl.DateTimeFormat(lang === 'en' ? 'en-US' : 'es-MX', {
                        month: 'long', year: 'numeric', timeZone: 'America/Mexico_City',
                      }).format(new Date(selected.createdAt)),
                    })}
                  </p>
                )}

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

                <p id="pd-overview" className="project-detail__desc">{selected[lang].description}</p>

                {FACTS.some(({ key }) => selected[lang][key]) && (
                  <dl className="project-detail__facts">
                    {FACTS.filter(({ key }) => selected[lang][key]).map(({ key, label }) => (
                      <div key={key} id={`pd-${key}`} className={`project-detail__fact project-detail__fact--${key}`}>
                        <dt>{t(label)}</dt>
                        <dd>{selected[lang][key]}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                {selected[lang].features?.length > 0 && (
                  <div id="pd-features" className="project-detail__features">
                    <h3>{t('projects.featuresTitle')}</h3>
                    <ul>
                      {selected[lang].features.map((feature) => <li key={feature}>{feature}</li>)}
                    </ul>
                  </div>
                )}

                {(site || video || code) && (
                  <div id={hasLocalMedia ? undefined : 'pd-evidence'} className="project-detail__evidence">
                    <h3>{t('projects.evidenceTitle')}</h3>
                <div className="project-detail__actions">
                      {site && (
                        <a
                          className="btn btn--primary"
                          href={site}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <ExternalLink size={16} aria-hidden="true" />
                          {t('projects.viewSite')}
                        </a>
                      )}
                      {video && (
                        <a
                          className="btn btn--secondary"
                          href={video}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Play size={16} aria-hidden="true" />
                          {t('projects.viewVideo')}
                        </a>
                      )}
                      {code && (
                        <a
                          className="btn btn--secondary"
                          href={code}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Github size={16} aria-hidden="true" />
                          {t('projects.viewCode')}
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </article>
          )}

          {selected && (
            <nav className="projects-side projects-side--right" aria-label={t('projects.navSections')}>
              <p className="projects-side__title" aria-hidden="true">{t('projects.navSections')}</p>
              <ul className="section-nav">
                {sections.map((sec) => (
                  <li key={sec.id}>
                    <button
                      type="button"
                      className={`section-nav__item ${activeSection === sec.id ? 'is-active' : ''}`}
                      aria-current={activeSection === sec.id ? 'true' : undefined}
                      onClick={() => goToSection(sec.id)}
                    >
                      {sec.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
