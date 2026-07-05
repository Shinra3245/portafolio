import { useTranslation } from 'react-i18next'
import { GraduationCap, Award, BookOpen } from 'lucide-react'
import { academic, certifications, inroads } from '../data/education'
import './Education.css'

function Education() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'en' ? 'en' : 'es'
  const academicContent = academic[lang]
  const inroadsContent = inroads[lang]

  return (
    <section id="educacion" className="education">
      <h2 className="section-title">{t('education.title')}</h2>

      <div className="education__grid">
        <div className="education__column">
          <div className="education__card card">
            <div className="education__card-header">
              <GraduationCap size={22} />
              <h3>{t('education.academicTitle')}</h3>
            </div>
            <h4 className="education__degree">{academicContent.degree}</h4>
            <p className="education__institution">{academicContent.institution}</p>
            <p className="education__detail">{academicContent.detail}</p>
            <p className="education__subjects">{academicContent.subjects}</p>
          </div>

          <div className="education__card card">
            <div className="education__card-header">
              <BookOpen size={22} />
              <h3>{t('education.otherTitle')}</h3>
            </div>
            <h4 className="education__degree">{inroadsContent.title}</h4>
            <p className="education__detail">{inroadsContent.detail}</p>
          </div>
        </div>

        <div className="education__card card education__certifications">
          <div className="education__card-header">
            <Award size={22} />
            <h3>{t('education.certificationsTitle')}</h3>
          </div>
          <ul className="education__cert-list">
            {certifications.map((cert) => (
              <li key={cert.id} className="education__cert-item">
                <span className="education__cert-provider">{cert.provider}</span>
                <span className="education__cert-name">{cert[lang]}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Education
