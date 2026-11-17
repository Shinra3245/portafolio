import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Github, ExternalLink, ImageOff } from 'lucide-react'
import { GitHubCalendar } from 'react-github-calendar'
import './GithubActivity.css'

const GITHUB_USER = 'Shinra3245'

const API = `https://api.github.com/users/${GITHUB_USER}`
const CACHE_KEY = `github-activity:${GITHUB_USER}`
const CACHE_MS = 30 * 60 * 1000
const MAX_LANGS = 8

// Solo REST público sin credenciales (CORS abierto). Las métricas se calculan
// con los repositorios propios (no forks) de la primera página (hasta 100).
async function fetchGithubSummary() {
  try {
    const cached = JSON.parse(sessionStorage.getItem(CACHE_KEY))
    if (cached && Date.now() - cached.at < CACHE_MS) return cached.data
  } catch { /* sin caché */ }

  const [userRes, reposRes] = await Promise.all([
    fetch(API),
    fetch(`${API}/repos?per_page=100&type=owner&sort=pushed`),
  ])
  if (!userRes.ok || !reposRes.ok) throw new Error('github-api')
  const user = await userRes.json()
  const repos = (await reposRes.json()).filter((r) => !r.fork)

  const counts = {}
  repos.forEach((r) => {
    if (r.language) counts[r.language] = (counts[r.language] || 0) + 1
  })
  const languages = Object.entries(counts)
    .sort((x, y) => y[1] - x[1] || x[0].localeCompare(y[0]))
    .slice(0, MAX_LANGS)
    .map(([name, count]) => ({ name, count }))

  const data = {
    publicRepos: user.public_repos,
    followers: user.followers,
    stars: repos.reduce((sum, r) => sum + r.stargazers_count, 0),
    forks: repos.reduce((sum, r) => sum + r.forks_count, 0),
    languages,
    langRepos: languages.length ? repos.filter((r) => r.language).length : 0,
  }
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), data }))
  } catch { /* sin caché */ }
  return data
}

function useGithubSummary() {
  const [state, setState] = useState({ status: 'loading', data: null })
  useEffect(() => {
    let active = true
    fetchGithubSummary()
      .then((data) => active && setState({ status: 'ok', data }))
      .catch(() => active && setState({ status: 'error', data: null }))
    return () => {
      active = false
    }
  }, [])
  return state
}

function Unavailable() {
  const { t } = useTranslation()
  return (
    <div className="github-activity__fallback" role="status">
      <ImageOff size={22} />
      <span>{t('github.unavailable')}</span>
    </div>
  )
}

function Loading() {
  const { t } = useTranslation()
  return (
    <div className="github-activity__fallback" role="status">
      <span>{t('github.loading')}</span>
    </div>
  )
}

function StatsCard({ state }) {
  const { t } = useTranslation()
  if (state.status === 'loading') return <Loading />
  if (state.status === 'error') return <Unavailable />
  const d = state.data
  const items = [
    ['publicRepos', d.publicRepos],
    ['stars', d.stars],
    ['forks', d.forks],
    ['followers', d.followers],
  ]
  return (
    <>
      <dl className="github-activity__stats">
        {items.map(([key, value]) => (
          <div key={key} className="github-activity__stat">
            <dt>{t(`github.stat.${key}`)}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
      <p className="github-activity__note">{t('github.statsNote')}</p>
    </>
  )
}

function LanguagesCard({ state }) {
  const { t } = useTranslation()
  if (state.status === 'loading') return <Loading />
  if (state.status === 'error' || !state.data.languages.length) return <Unavailable />
  const { languages } = state.data
  const max = languages[0].count
  return (
    <>
      <ul className="github-activity__langlist">
        {languages.map(({ name, count }) => (
          <li key={name}>
            <span className="github-activity__langname">{name}</span>
            <span className="github-activity__bar" aria-hidden="true">
              <span style={{ width: `${(count / max) * 100}%` }} />
            </span>
            <span className="github-activity__langcount">{t('github.repoCount', { count })}</span>
          </li>
        ))}
      </ul>
      <p className="github-activity__note">{t('github.languagesNote')}</p>
    </>
  )
}

function GithubActivity() {
  const { t } = useTranslation()
  const [year, setYear] = useState(new Date().getFullYear())
  const [totalContribs, setTotalContribs] = useState(0)
  const summary = useGithubSummary()
  const years = Array.from({ length: 3 }, (_, index) => new Date().getFullYear() - index)

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
    <section className="github-activity">
      <h2 className="section-title">{t('github.title')}</h2>
      <p className="section-subtitle">{t('github.subtitle')}</p>

      <div className="github-activity__grid">
        <div className="github-activity__card card heatmap-card">
          <div className="heatmap-card__header">
            <h3>{t('github.heatmapTitle')}</h3>
            {totalContribs > 0 && (
              <span className="heatmap-card__total">
                {t('github.contributions', { count: totalContribs })}
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
          <StatsCard state={summary} />
        </div>

        <div className="github-activity__card card">
          <h3>{t('github.languagesTitle')}</h3>
          <LanguagesCard state={summary} />
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
