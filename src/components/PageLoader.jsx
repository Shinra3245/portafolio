import { useState, useEffect } from 'react'
import './PageLoader.css'

function PageLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Si el documento ya cargó, esperar 1.5s antes de ocultarlo.
    // Si no, escuchar el evento 'load' y luego esperar 1.5s.
    const finalizeLoad = () => {
      setLoading(false)
      window.__PAGE_LOADED__ = true
      window.dispatchEvent(new Event('pageLoaded'))
    }

    const handleLoad = () => {
      setTimeout(() => {
        finalizeLoad()
      }, 1500)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      setTimeout(() => {
        if (loading) finalizeLoad()
      }, 2500)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [loading])

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
