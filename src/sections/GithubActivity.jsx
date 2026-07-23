import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Github, ExternalLink, ImageOff } from 'lucide-react'
import { GitHubCalendar } from 'react-github-calendar'
import './GithubActivity.css'

const GITHUB_USER = 'Shinra3245'

// Imágenes de stats con sigma-five
const LANGS_SRC = `https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=${GITHUB_USER}&layout=compact&hide_border=true&bg_color=0D1224&title_color=22D3EE&text_color=E2E8F0&icon_color=6366F1&langs_count=8`
const STATS_SRC = `https://github-readme-stats-sigma-five.vercel.app/api?username=${GITHUB_USER}&show_icons=true&hide_border=true&bg_color=0D1224&title_color=22D3EE&text_color=E2E8F0&icon_color=6366F1`

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
  const [year, setYear] = useState(new Date().getFullYear())
  const [totalContribs, setTotalContribs] = useState(0)
  const years = [2026, 2025, 2024]

  const customTheme = {
    light: ['#000000', '#5e35b1', '#3949ab', '#1e88e5', '#00bcd4'],
    dark: ['#000000', '#5e35b1', '#3949ab', '#1e88e5', '#00bcd4'],
  }

  const handleTransformData = (data) => {
    const total = data.reduce((sum, day) => sum + day.count, 0)
    setTimeout(() => setTotalContribs(total), 0)
    return data
  }

  return (
    <section id="github" className="github-activity">
      <h2 className="section-title">{t('github.title')}</h2>
      <p className="section-subtitle">{t('github.subtitle')}</p>

      <div className="github-activity__grid">
        <div className="github-activity__card card heatmap-card">
          <div className="heatmap-card__header">
            <h3>{t('github.heatmapTitle')}</h3>
            {totalContribs > 0 && (
              <span className="heatmap-card__total">
                {totalContribs} contribuciones
              </span>
            )}
          </div>
          
          <div className="github-activity__years">
            {years.map((y) => (
              <button
                key={y}
                onClick={() => setYear(y)}
                className={`year-btn ${year === y ? 'active' : ''}`}
              >
                {y}
              </button>
            ))}
          </div>

          <div className="github-activity__heatmap-wrap">
            <GitHubCalendar 
              username={GITHUB_USER} 
              year={year} 
              theme={customTheme}
              colorScheme="dark"
              blockSize={14}
              blockMargin={4}
              fontSize={14}
              transformData={handleTransformData}
            />
          </div>
        </div>

        <div className="github-activity__card card">
          <h3>{t('github.statsTitle')}</h3>
          <ImageWithFallback src={STATS_SRC} alt="GitHub Stats" className="github-activity__langs" />
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
