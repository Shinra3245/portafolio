import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ExternalLink, Award } from 'lucide-react'
import { certifications } from '../data/education'
import './CertificatesShowcase.css'

function CertificatesShowcase({ lang }) {
  const { t } = useTranslation()
  const [activeId, setActiveId] = useState(certifications[0].id)
  const active = certifications.find((c) => c.id === activeId) || certifications[0]

  return (
    <div className="certs">
      {/* Preview panel — always visible, updates on select */}
      <figure className="certs__preview">
        <a
          className="certs__preview-frame"
          href={active.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${active.provider} — ${active[lang]}`}
        >
          <img
            className="certs__preview-img"
            src={active.image}
            alt={active[lang]}
            loading="lazy"
          />
          <span className="certs__preview-open">
            <ExternalLink size={15} />
            {lang === 'en' ? 'Open certificate' : 'Abrir certificado'}
          </span>
        </a>
        <figcaption className="certs__preview-meta">
          <span className="certs__preview-provider">{active.provider}</span>
          <span className="certs__preview-name">{active[lang]}</span>
        </figcaption>
      </figure>

      {/* Selectable list */}
      <ul
        className="certs__list"
        role="listbox"
        aria-label={t('education.certificationsTitle')}
        data-lenis-prevent
      >
        {certifications.map((cert) => {
          const selected = cert.id === activeId
          return (
            <li key={cert.id}>
              <button
                type="button"
                className={`certs__item ${selected ? 'is-active' : ''}`}
                aria-pressed={selected}
                onClick={() => setActiveId(cert.id)}
                onMouseEnter={() => setActiveId(cert.id)}
                onFocus={() => setActiveId(cert.id)}
              >
                <span className="certs__item-icon">
                  <Award size={16} />
                </span>
                <span className="certs__item-text">
                  <span className="certs__item-provider">{cert.provider}</span>
                  <span className="certs__item-name">{cert[lang]}</span>
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CertificatesShowcase
