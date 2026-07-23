import './AstronautFloat.css'

function AstronautFloat() {
  return (
    <div className="astro-float" aria-hidden="true">
      <div className="astro-float__scale">
        <div className="astro-float__astronaut">
          <div className="astro-float__head" />
          <div className="astro-float__arm astro-float__arm--left" />
          <div className="astro-float__arm astro-float__arm--right" />
          <div className="astro-float__body">
            <div className="astro-float__panel" />
          </div>
          <div className="astro-float__leg astro-float__leg--left" />
          <div className="astro-float__leg astro-float__leg--right" />
          <div className="astro-float__schoolbag" />
        </div>
      </div>
    </div>
  )
}

export default AstronautFloat
