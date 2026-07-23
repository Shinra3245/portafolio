import { useTranslation } from 'react-i18next'
import './SpaceLoader.css'

// Animación de "carga" (astronauta flotando + campo de estrellas + meteoros)
// que se muestra brevemente antes de revelar la foto real, en vez de la
// lluvia estilo Matrix que había antes.
function SpaceLoader() {
  const { t } = useTranslation()

  return (
    <div className="space-loader">
      <div className="astronaut">
        <div className="astronaut-helmet">
          <div className="helmet-glass">
            <div className="helmet-inner-glass" />
            <div className="helmet-reflection" />
          </div>
          <div className="antenna" />
        </div>
        <div className="astronaut-body">
          <div className="suit-pattern" />
        </div>
      </div>

      <div className="space-environment">
        <div className="stars-container">
          <div className="stars stars-near" />
          <div className="stars stars-mid" />
          <div className="stars stars-far" />
        </div>
        <div className="meteors">
          <div className="meteor meteor-1" />
          <div className="meteor meteor-2" />
          <div className="meteor meteor-3" />
        </div>
      </div>

      <div className="loading-container">
        <div className="loading-progress">
          <div className="progress-bar" />
        </div>
        <div className="loading-text">
          {t('about.loadingText')}
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </div>
    </div>
  )
}

export default SpaceLoader
