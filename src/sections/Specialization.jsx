import { useTranslation } from 'react-i18next'
import TerminalList from '../components/TerminalList'
import './Specialization.css'

function Specialization() {
  const { t } = useTranslation()

  return (
    <section id="especializacion" className="specialization">
      <h2 className="section-title">{t('specialization.title')}</h2>
      <TerminalList />
    </section>
  )
}

export default Specialization
