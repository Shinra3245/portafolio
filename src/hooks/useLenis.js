import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis()
    lenis.on('scroll', ScrollTrigger.update)

    const animate = (time) => {
      lenis.raf(time)
      requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)

    return () => lenis.destroy()
  }, [])
}
