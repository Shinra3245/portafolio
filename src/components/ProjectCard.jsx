import { useTranslation } from 'react-i18next'
import { ExternalLink, Info } from 'lucide-react'
import './ProjectCard.css'

function ProjectCard({ project, onOpen }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'en' ? 'en' : 'es'
  const content = project[lang]

  return (
    <article className="project-card card">
      <div className="project-card__image-wrap">
        <img src={project.image} alt={content.title} loading="lazy" />
        <span className="project-card__tag">{content.tag}</span>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{content.title}</h3>
        <p className="project-card__description">{content.description}</p>

        <div className="project-card__techs">
          {project.techs.map((tech) => (
            <span key={tech} className="project-card__tech">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-card__actions">
          <a href={project.url} target="_blank" rel="noreferrer" className="btn btn--primary">
            <ExternalLink size={16} />
            {t('projects.viewSite')}
          </a>
          <button className="btn btn--secondary" onClick={() => onOpen(project)}>
            <Info size={16} />
            {t('projects.viewDetails')}
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
