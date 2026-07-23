import { useTranslation } from 'react-i18next'
import { GraduationCap, Award } from 'lucide-react'
import { academic } from '../data/education'
import CertificatesShowcase from '../components/CertificatesShowcase'
import './Education.css'

function Education() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'en' ? 'en' : 'es'
  const academicContent = academic[lang]

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
          <h4 className="education__degree">{academicContent.degree}</h4>
          <p className="education__institution">{academicContent.institution}</p>
          <p className="education__detail">{academicContent.detail}</p>
          <p className="education__subjects">{academicContent.subjects}</p>
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
