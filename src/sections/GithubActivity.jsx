import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Github, ExternalLink, ImageOff } from 'lucide-react'
import './GithubActivity.css'

const GITHUB_USER = 'Shinra3245'

// Ambas imágenes son generadas por servicios públicos gratuitos a partir del usuario
// de GitHub — no requieren backend propio ni exponer ningún token. Si alguno de los
// dos servicios falla (github-readme-stats es conocido por caerse/limitar seguido),
// se muestra un aviso en vez de un ícono de imagen rota.
const HEATMAP_SRC = `https://ghchart.rshah.org/6366f1/${GITHUB_USER}`
const LANGS_SRC = `https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USER}&layout=compact&hide_border=true&bg_color=0D1224&title_color=22D3EE&text_color=E2E8F0&icon_color=6366F1&langs_count=8`

function ImageWithFallback({ src, alt, className }) {
  const [failed, setFailed] = useState(false)
  const { t } = useTranslation()

  if (failed) {
    return (
      <div className="github-activity__fallback">
        <ImageOff size={22} />
        <span>{t('github.unavailable')}</span>
      </div>
    )
  }

  return <img src={src} alt={alt} loading="lazy" className={className} onError={() => setFailed(true)} />
}

function GithubActivity() {
  const { t } = useTranslation()

  return (
    <section id="github" className="github-activity">
      <h2 className="section-title">{t('github.title')}</h2>
      <p className="section-subtitle">{t('github.subtitle')}</p>

      <div className="github-activity__grid">
        <div className="github-activity__card card">
          <h3>{t('github.heatmapTitle')}</h3>
          <div className="github-activity__heatmap-wrap">
            <ImageWithFallback src={HEATMAP_SRC} alt="GitHub contributions heatmap" />
          </div>
        </div>

        <div className="github-activity__card card">
          <h3>{t('github.languagesTitle')}</h3>
          <ImageWithFallback src={LANGS_SRC} alt="Most used languages" className="github-activity__langs" />
        </div>
      </div>

      <a
        href={`https://github.com/${GITHUB_USER}`}
        target="_blank"
        rel="noreferrer"
        className="btn btn--secondary github-activity__link"
      >
        <Github size={16} />
        {t('github.viewProfile')}
        <ExternalLink size={14} />
      </a>
    </section>
  )
}

export default GithubActivity
