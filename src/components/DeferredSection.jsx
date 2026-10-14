import { Suspense, useEffect, useRef, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLocation } from 'react-router-dom'

export default function DeferredSection({ id, children }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const location = useLocation()
  const shouldRender = visible || location.hash === `#${id}`

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { rootMargin: '400px' })
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} id={id} className={shouldRender ? undefined : 'deferred-section'}>
      {shouldRender && <Suspense fallback={<div className="deferred-section" />}>
        {children}
        <RefreshScroll />
      </Suspense>}
    </div>
  )
}

function RefreshScroll() {
  useEffect(() => { ScrollTrigger.refresh() }, [])
  return null
}
