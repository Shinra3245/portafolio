import { useTranslation } from 'react-i18next'
import './BB8Toggle.css'

const SpanishFlag = () => (
  <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
    <path
      d="M10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20Z"
      fill="#F0F0F0"
    />
    <path
      d="M20 10C20 6.04 17.69 2.61 14.35 0.99V19.01C17.69 17.39 20 13.96 20 10Z"
      fill="#D80027"
    />
    <path d="M0 10C0 13.96 2.31 17.39 5.65 19.01V0.99C2.31 2.61 0 6.04 0 10Z" fill="#6DA544" />
    <path
      d="M7.39 10C7.39 11.44 8.56 12.61 10 12.61C11.44 12.61 12.61 11.44 12.61 10V9.13H7.39V10Z"
      fill="#6DA544"
    />
    <path
      d="M13.48 8.26H10.87C10.87 7.78 10.48 7.39 10 7.39C9.52 7.39 9.13 7.78 9.13 8.26H6.52C6.52 8.74 6.94 9.13 7.42 9.13H7.39C7.39 9.61 7.78 10 8.26 10C8.26 10.48 8.65 10.87 9.13 10.87H10.87C11.35 10.87 11.74 10.48 11.74 10C12.22 10 12.61 9.61 12.61 9.13H12.58C13.06 9.13 13.48 8.74 13.48 8.26Z"
      fill="#FF9811"
    />
  </svg>
)

const EnglishFlag = () => (
  <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
    <path
      d="M10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20Z"
      fill="#F0F0F0"
    />
    <path
      d="M9.56 10H20C20 9.1 19.88 8.22 19.65 7.39H9.56V10Z"
      fill="#D80027"
    />
    <path
      d="M9.56 4.78H18.53C17.92 3.78 17.14 2.9 16.22 2.17H9.56V4.78Z"
      fill="#D80027"
    />
    <path
      d="M10 20C12.35 20 14.52 19.19 16.23 17.83H3.78C5.48 19.19 7.65 20 10 20Z"
      fill="#D80027"
    />
    <path
      d="M1.47 15.22H18.53C19.02 14.42 19.4 13.54 19.65 12.61H0.34C0.59 13.54 0.98 14.42 1.47 15.22Z"
      fill="#D80027"
    />
    <path
      d="M4.63 1.56H5.54L4.7 2.18L5.02 3.17L4.17 2.56L3.32 3.17L3.6 2.31C2.86 2.93 2.2 3.66 1.66 4.47H1.96L1.42 4.87C1.33 5.01 1.25 5.15 1.18 5.29L1.43 6.09L0.95 5.74C0.83 5.99 0.72 6.25 0.62 6.51L0.91 7.39H1.96L1.11 8L1.43 9L0.59 8.38L0.08 8.75C0.03 9.16 0 9.58 0 10H10C10 4.48 10 3.83 10 0C8.02 0 6.18 0.57 4.63 1.56ZM5.02 9L4.17 8.38L3.32 9L3.65 8L2.8 7.39H3.85L4.17 6.39L4.5 7.39H5.54L4.7 8L5.02 9ZM4.7 5.09L5.02 6.09L4.17 5.47L3.32 6.09L3.65 5.09L2.8 4.47H3.85L4.17 3.48L4.5 4.47H5.54L4.7 5.09ZM8.61 9L7.76 8.38L6.91 9L7.24 8L6.39 7.39H7.44L7.76 6.39L8.08 7.39H9.13L8.28 8L8.61 9ZM8.28 5.09L8.61 6.09L7.76 5.47L6.91 6.09L7.24 5.09L6.39 4.47H7.44L7.76 3.48L8.08 4.47H9.13L8.28 5.09ZM8.28 2.18L8.61 3.17L7.76 2.56L6.91 3.17L7.24 2.18L6.39 1.56H7.44L7.76 0.57L8.08 1.56H9.13L8.28 2.18Z"
      fill="#0052B4"
    />
  </svg>
)

function BB8Toggle() {
  const { i18n } = useTranslation()
  const isEnglish = i18n.language === 'en'

  const toggleLang = () => {
    i18n.changeLanguage(isEnglish ? 'es' : 'en')
  }

  return (
    <div className="bb8-wrapper" title="Cambiar idioma">
      <span className="bb8-label" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', lineHeight: 1 }}>
        <span>{isEnglish ? 'EN' : 'ES'}</span>
        {isEnglish ? <EnglishFlag /> : <SpanishFlag />}
      </span>
      <label className="bb8-toggle" aria-label={isEnglish ? 'Switch language to Spanish' : 'Cambiar idioma a inglés'}>
        <input
          className="bb8-toggle__checkbox"
          type="checkbox"
          checked={isEnglish}
          onChange={toggleLang}
          aria-label={isEnglish ? 'Switch language to Spanish' : 'Cambiar idioma a inglés'}
        />
        <div className="bb8-toggle__container">
          <div className="bb8-toggle__scenery">
            <div className="bb8-toggle__star"></div>
            <div className="bb8-toggle__star"></div>
            <div className="bb8-toggle__star"></div>
            <div className="bb8-toggle__star"></div>
            <div className="bb8-toggle__star"></div>
            <div className="bb8-toggle__star"></div>
            <div className="bb8-toggle__star"></div>
            <div className="tatto-1"></div>
            <div className="tatto-2"></div>
            <div className="gomrassen"></div>
            <div className="hermes"></div>
            <div className="chenini"></div>
            <div className="bb8-toggle__cloud"></div>
            <div className="bb8-toggle__cloud"></div>
            <div className="bb8-toggle__cloud"></div>
          </div>
          <div className="bb8">
            <div className="bb8__head-container">
              <div className="bb8__antenna"></div>
              <div className="bb8__antenna"></div>
              <div className="bb8__head"></div>
            </div>
            <div className="bb8__body"></div>
          </div>
          <div className="artificial__hidden">
            <div className="bb8__shadow"></div>
          </div>
        </div>
      </label>
    </div>
  )
}

export default BB8Toggle
