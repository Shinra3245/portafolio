import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ClipboardCheck, Paintbrush, Code2, TestTube2, Rocket, RefreshCw, MousePointerClick } from 'lucide-react'
import { serviceSteps } from '../data/services'
import './ServiceOrbit.css'

const ICONS = { ClipboardCheck, Paintbrush, Code2, TestTube2, Rocket, RefreshCw }

function ServiceOrbit() {
  const { t } = useTranslation()
  const [activeStep, setActiveStep] = useState(null)

  const active = activeStep
    ? t(`services.steps.${activeStep}`, { returnObjects: true })
    : null

  return (
    <div className="service-orbit">
      <div className="service-orbit__ring">
        <div className="service-orbit__hub">
          <h3>{t('services.orbitTitle')}</h3>
          <p>{t('services.orbitSubtitle')}</p>
        </div>

        {serviceSteps.map(({ step, icon }, i) => {
          const angle = (i / serviceSteps.length) * 2 * Math.PI - Math.PI / 2
          const x = 50 + 42 * Math.cos(angle)
          const y = 50 + 42 * Math.sin(angle)
          const Icon = ICONS[icon]
          const label = t(`services.steps.${step}.label`)

          return (
            <button
              key={step}
              className={`service-orbit__step ${activeStep === step ? 'is-active' : ''}`}
              style={{ left: `${x}%`, top: `${y}%` }}
              onMouseEnter={() => setActiveStep(step)}
              onMouseLeave={() => setActiveStep(null)}
              onClick={() => setActiveStep(step)}
            >
              <span className="service-orbit__step-number">{String(step).padStart(2, '0')}</span>
              <Icon size={26} />
              <span className="service-orbit__step-label">{label}</span>
            </button>
          )
        })}
      </div>

      <div className={`service-orbit__panel ${active ? 'is-active' : ''}`}>
        {active ? (
          <>
            <h4>{active.title}</h4>
            <p>{active.description}</p>
            <div className="service-orbit__features">
              {active.features.map((f) => (
                <span key={f} className="service-orbit__feature">
                  {f}
                </span>
              ))}
            </div>
          </>
        ) : (
          <>
            <h4>{t('services.detailDefaultTitle')}</h4>
            <p>{t('services.detailDefaultDescription')}</p>
          </>
        )}
      </div>

      <p className="service-orbit__hint">
        <MousePointerClick size={16} />
        {t('services.interactionHint')}
      </p>
    </div>
  )
}

export default ServiceOrbit
