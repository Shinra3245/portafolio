import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { X, ExternalLink, Github, KeyRound, Code2, Terminal, Smartphone } from 'lucide-react'
import './ProjectModal.css'

const CATEGORY_ICON = { web: Code2, python: Terminal, movil: Smartphone }

function ProjectModal({ project, onClose }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'en' ? 'en' : 'es'

  useEffect(() => {
    const handler = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  if (!project) return null
  const content = project[lang]
  const PlaceholderIcon = CATEGORY_ICON[project.category] || Code2

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label={t('projects.close')}>
          <X size={20} />
        </button>

        {project.video ? (
          <video className="modal-image" src={project.video} controls />
        ) : project.image ? (
          <img src={project.image} alt={content.title} className="modal-image" />
        ) : (
          <div className="modal-image modal-image--placeholder">
            <PlaceholderIcon size={40} />
            <span>{t('projects.previewPending')}</span>
          </div>
        )}

        <span className="modal-tag">{content.tag}</span>
        <h3 className="modal-title">{content.title}</h3>
        <p className="modal-badge">{content.badge}</p>
        <p className="modal-description">{content.description}</p>

        <h4 className="modal-subtitle">{t('projects.featuresTitle')}</h4>
        <ul className="modal-features">
          {content.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <div className="modal-techs">
          {project.techs.map((tech) => (
            <span key={tech} className="modal-tech">
              {tech}
            </span>
          ))}
        </div>

        {project.credentials && (
          <div className="modal-credentials">
            <h4 className="modal-subtitle">
              <KeyRound size={16} /> {t('projects.credentialsTitle')}
            </h4>
            <div className="modal-credentials__grid">
              <div>
                <strong>{t('projects.credentialsAdmin')}</strong>
                <p>Email: {project.credentials.admin.email}</p>
                <p>
                  {t('projects.credentialsPassword')}: {project.credentials.admin.password}
                </p>
              </div>
              <div>
                <strong>{t('projects.credentialsCustomer')}</strong>
                <p>Email: {project.credentials.customer.email}</p>
                <p>
                  {t('projects.credentialsPassword')}: {project.credentials.customer.password}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="modal-actions">
          {project.url && (
            <a href={project.url} target="_blank" rel="noreferrer" className="btn btn--primary">
              <ExternalLink size={16} />
              {t('projects.viewSite')}
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer" className="btn btn--secondary">
              <Github size={16} />
              {t('projects.viewCode')}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
