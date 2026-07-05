import { useTranslation } from 'react-i18next'
import ServiceOrbit from '../components/ServiceOrbit'
import './Services.css'

function Services() {
  const { t } = useTranslation()

  return (
    <section id="servicios" className="services">
      <h2 className="section-title">{t('services.title')}</h2>
      <ServiceOrbit />
    </section>
  )
}

export default Services
