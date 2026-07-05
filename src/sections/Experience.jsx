import { useTranslation } from 'react-i18next'
import MissionTrajectory from '../components/MissionTrajectory'
import './Experience.css'

function Experience() {
  const { t } = useTranslation()

  return (
    <section id="experiencia" className="experience">
      <h2 className="section-title">{t('experience.title')}</h2>
      <p className="section-subtitle">{t('experience.subtitle')}</p>
      <MissionTrajectory />
    </section>
  )
}

export default Experience
