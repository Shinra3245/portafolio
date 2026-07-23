import { useTranslation } from 'react-i18next'
import './TarsAnimation.css'

function TarsAnimation() {
  const { t } = useTranslation()

  return (
    <div className="tars-wrapper">
      <div className="loader">
        <div className="tars">
          <div className="container container-1">
            <div className="shape">
              <div className="f"></div>
              <div className="b"></div>
              <div className="l"></div>
              <div className="r"></div>
              <div className="t"></div>
              <div className="bot"></div>
            </div>
          </div>
          <div className="container container-2">
            <div className="shape">
              <div className="f"></div>
              <div className="b"></div>
              <div className="l"></div>
              <div className="r"></div>
              <div className="t"></div>
              <div className="bot"></div>
            </div>
          </div>
          <div className="container container-3">
            <div className="shape">
              <div className="f"></div>
              <div className="b"></div>
              <div className="l"></div>
              <div className="r"></div>
              <div className="t"></div>
              <div className="bot"></div>
            </div>
          </div>
          <div className="container container-4">
            <div className="shape">
              <div className="f"></div>
              <div className="b"></div>
              <div className="l"></div>
              <div className="r"></div>
              <div className="t"></div>
              <div className="bot"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="tars-legend">
        {t('contact.statusText')}
      </div>
    </div>
  )
}

export default TarsAnimation
