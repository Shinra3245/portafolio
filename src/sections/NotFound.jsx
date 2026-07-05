import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  const { t } = useTranslation()
  return (
    <div className="not-found">
      <h1>{t('notFound.title')}</h1>
      <p>{t('notFound.message')}</p>
      <Link to="/" className="btn btn--primary">
        {t('notFound.back')}
      </Link>
    </div>
  )
}

export default NotFound
