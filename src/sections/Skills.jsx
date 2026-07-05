import { useTranslation } from 'react-i18next'
import SkillBar from '../components/SkillBar'
import { softSkills } from '../data/skills'
import './Skills.css'

function Skills() {
  const { t } = useTranslation()

  return (
    <section id="habilidades" className="skills">
      <h2 className="section-title">{t('skills.softTitle')}</h2>

      <div className="skills__list">
        {softSkills.map((skill) => (
          <SkillBar
            key={skill.key}
            name={t(`skills.items.${skill.key}`)}
            percentage={skill.percentage}
            hue={skill.hue}
          />
        ))}
      </div>
    </section>
  )
}

export default Skills
