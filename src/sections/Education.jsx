import { useTranslation } from 'react-i18next'
import { GraduationCap, Award } from 'lucide-react'
import { academic, englishLevel } from '../data/education'
import CertificatesShowcase from '../components/CertificatesShowcase'
import tecnmLogo from '../assets/images/tecnm.webp'
import './Education.css'

function Education() {
  const { t, i18n } = useTranslation()
  const lang = i18n.resolvedLanguage === 'en' ? 'en' : 'es'
  const academicContent = academic[lang]
  const assessmentDate = new Intl.DateTimeFormat(lang === 'en' ? 'en-US' : 'es-MX', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${englishLevel.assessedAt}T00:00:00Z`))

  return (
    <section id="educacion" className="education">
      <h2 className="section-title">{t('education.title')}</h2>

      <div className="education__grid">
        <article className="education__card education__card--academic">
          <div className="education__card-header">
            <span className="education__card-icon">
              <GraduationCap size={20} />
            </span>
            <h3>{t('education.academicTitle')}</h3>
          </div>
          <div className="education__academic-body">
            <img
              className="education__logo"
              src={tecnmLogo}
              alt="Tecnológico Nacional de México"
              loading="lazy"
              decoding="async"
            />
            <div>
              <h4 className="education__degree">{academicContent.degree}</h4>
              <p className="education__institution">{academicContent.institution}</p>
            </div>
          </div>
          <div className="education__languages">
            <h4>{t('education.languagesTitle')}</h4>
            <p className="education__language-level">
              {t('education.englishLevel', { level: englishLevel.level })}
            </p>
            <p className="education__language-source">
              {t('education.englishSource', { assessment: englishLevel.assessment, date: assessmentDate })}
            </p>
          </div>
        </article>

        <article className="education__card education__card--certs">
          <div className="education__card-header">
            <span className="education__card-icon">
              <Award size={20} />
            </span>
            <h3>{t('education.certificationsTitle')}</h3>
          </div>
          <p className="education__cert-subtitle">{t('education.certificationsSubtitle')}</p>
          <CertificatesShowcase lang={lang} />
        </article>
      </div>
    </section>
  )
}

export default Education
