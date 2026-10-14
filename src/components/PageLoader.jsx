import { useState, useEffect } from 'react'
import './PageLoader.css'

function PageLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let loadTimer
    let deadline
    const finalizeLoad = () => {
      clearTimeout(loadTimer)
      clearTimeout(deadline)
      setLoading(false)
      window.__PAGE_LOADED__ = true
      window.dispatchEvent(new Event('pageLoaded'))
    }

    const handleLoad = () => {
      loadTimer = setTimeout(finalizeLoad, 400)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }
    deadline = setTimeout(finalizeLoad, 1500)
    return () => {
      clearTimeout(loadTimer)
      clearTimeout(deadline)
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <div className={`page-loader ${!loading ? 'fade-out' : ''}`}>
      <div className="planets-container">
        <div id="planetTrail1"></div>
        <div id="planetTrail2"></div>
        <div id="planetTrail3"></div>

        <div className="planets">
          <div id="planet"></div>
          <div id="star"></div>

          <div id="starShadow"></div>
          <div id="blackHoleDisk2"></div>
          <div id="blackHole"></div>
          <div id="blackHoleDisk1"></div>
        </div>
      </div>
    </div>
  )
}

export default PageLoader
