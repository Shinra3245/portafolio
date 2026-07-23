import { useEffect, useRef } from 'react'
import { animate, createTimeline, stagger, svg } from 'animejs'
import { nameSignature } from '../data/nameSignature'
import './DrawnName.css'


function DrawnName({ label }) {
  const svgRef = useRef(null)

  useEffect(() => {
    const paths = svgRef.current.querySelectorAll('.drawn-name__letter')
    const drawables = svg.createDrawable(paths)
    let timeline = null

    const startAnimation = () => {
      // Small timeout to allow the fade-out of the loader to process visually
      setTimeout(() => {
        timeline = createTimeline({ defaults: { ease: 'inOutQuad' } })
        timeline
          .add(drawables, { draw: ['0 0', '0 1'], duration: 650, delay: stagger(110) }, 0)
          .add(paths, { fillOpacity: [0, 1], duration: 500, delay: stagger(110) }, 550)
      }, 500)
    }

    if (window.__PAGE_LOADED__) {
      startAnimation()
    } else {
      window.addEventListener('pageLoaded', startAnimation)
    }

    return () => {
      if (timeline) timeline.pause()
      window.removeEventListener('pageLoaded', startAnimation)
    }
  }, [])

  return (
    <svg
      ref={svgRef}
      className="drawn-name"
      viewBox={nameSignature.viewBox}
      role="img"
      aria-label={label}
    >
      <defs>
        <linearGradient id="drawnNameGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      {nameSignature.letters.map((letter, i) => (
        <path
          key={i}
          className="drawn-name__letter"
          d={letter.d}
          fill="url(#drawnNameGradient)"
          fillOpacity="0"
          stroke="url(#drawnNameGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  )
}

export default DrawnName
