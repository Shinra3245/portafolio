import { useTranslation } from 'react-i18next'
import { ClipboardCheck, Paintbrush, Code2, TestTube2, Rocket, RefreshCw } from 'lucide-react'
import { serviceSteps } from '../data/services'
import './Services.css'

const ICONS = { ClipboardCheck, Paintbrush, Code2, TestTube2, Rocket, RefreshCw }
const COLORS = ['#818cf8', '#22d3ee', '#f472b6', '#fbbf24', '#34d399', '#a78bfa']

function Services() {
  const { t } = useTranslation()

  return (
    <section id="servicios" className="services">
      <h2 className="section-title">{t('services.title')}</h2>
      <p className="section-subtitle">{t('services.subtitle')}</p>

      <div className="services__pills">
        {serviceSteps.map(({ step, icon }, i) => {
          const Icon = ICONS[icon]
          const label = t(`services.steps.${step}.label`)
          const description = t(`services.steps.${step}.description`)

          return (
            <div
              key={step}
              className="services__pill"
              title={description}
              style={{ '--pill-color': COLORS[i % COLORS.length] }}
            >
              <span className="services__pill-icon">
                <Icon size={15} />
              </span>
              {label}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services
