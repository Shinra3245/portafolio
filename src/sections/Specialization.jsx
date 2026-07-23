import { useTranslation } from 'react-i18next'
import PackageTerminal from '../components/PackageTerminal'
import SoftSkillsProgress from '../components/SoftSkillsProgress'
import './Specialization.css'

function Specialization() {
  const { t } = useTranslation()



  return (
    <section id="especializacion" className="specialization">
      <h2 className="section-title">{t('specialization.title')}</h2>

      {/* Fila 1: terminal (ancho completo) */}
      <div className="specialization__terminal-row">
        <PackageTerminal />
      </div>

      {/* Fila 2: habilidades blandas en 3D */}
      <div className="specialization__skills-row">
        <h3 className="specialization__skills-title">{t('skills.softTitle')}</h3>

        {/* Componente de habilidades blandas - carga secuencial minimalista */}
        <div className="skills-container" style={{ width: '100%', marginTop: '2rem' }}>
          <SoftSkillsProgress />
        </div>
      </div>
    </section>
  )
}

export default Specialization
