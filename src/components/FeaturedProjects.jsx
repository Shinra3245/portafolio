import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import TechIcon from './TechIcon'
import { projects } from '../data/projects'
import { techStack } from '../data/techstack'
import './FeaturedProjects.css'

// Orden de prioridad de la guía MIRAI (P1). Los slugs ausentes en los datos se omiten.
export const FEATURED_SLUGS = ['atlas', 'vivaorden', 'recolecta', 'journey-to-mars']

const TECH_ICONS = techStack
  .flatMap((group) => group.items)
  .reduce((acc, { label, icon }) => {
    acc[label] = icon
    return acc
  }, {})

const MAX_TECHS = 4

function FeaturedProjects() {
  const { t, i18n } = useTranslation()
  const lang = i18n.resolvedLanguage === 'en' ? 'en' : 'es'
  const featured = FEATURED_SLUGS.map((slug) => projects.find((p) => p.slug === slug)).filter(Boolean)

  if (!featured.length) return null

  return (
    <section id="destacados" className="featured" aria-labelledby="featured-title">
      <h2 id="featured-title" className="section-title">{t('featured.title')}</h2>
      <p className="section-subtitle">{t('featured.subtitle')}</p>

      <ul className="featured__grid">
        {featured.map((p) => {
          const content = p[lang]
          return (
            <li key={p.id} className="featured__item">
              <Link
                to={`/proyectos?p=${p.slug}`}
                className="featured__card card"
                aria-label={t('featured.open', { title: content.title })}
              >
                <span className="featured__tag">{content.tag}</span>
                <h3 className="featured__name">{content.title}</h3>
                <p className="featured__desc">{content.description}</p>
                <ul className="featured__techs" aria-label={t('featured.techs')}>
                  {p.techs.slice(0, MAX_TECHS).map((tech) => (
                    <li key={tech} className="featured__tech">
                      {TECH_ICONS[tech] && <TechIcon icon={TECH_ICONS[tech]} size={14} />}
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
                <span className="featured__more">
                  {t('featured.cta')}
                  <ArrowRight size={16} aria-hidden="true" />
                </span>
              </Link>
            </li>
          )
        })}
      </ul>

      <p className="featured__all">
        <Link to="/proyectos" className="btn btn--secondary">{t('featured.all')}</Link>
      </p>
    </section>
  )
}

export default FeaturedProjects
