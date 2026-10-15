import { useState } from 'react'
import TechIcon from './TechIcon'
import './Keycap.css'

// Tecla física estilo teclado mecánico (CSS puro, sin 3D) — el mismo ícono real
// de la tecnología que ya usábamos en las pills se coloca centrado en la tecla,
// con su nombre debajo.
function Keycap({ icon, label }) {
  const [pressed, setPressed] = useState(false)

  const handlePointerDown = (event) => {
    if (!event.isPrimary || event.button !== 0) return
    event.currentTarget.setPointerCapture(event.pointerId)
    setPressed(true)
  }

  return (
    <div
      className="keycap-wrap"
      data-pressed={pressed || undefined}
      onPointerDown={handlePointerDown}
      onPointerUp={() => setPressed(false)}
      onPointerCancel={() => setPressed(false)}
      onLostPointerCapture={() => setPressed(false)}
    >
      <article className="keycap" title={label}>
        <span className="letter">
          <TechIcon icon={icon} size={26} />
        </span>
      </article>
      <span className="keycap-wrap__label">{label}</span>
    </div>
  )
}

export default Keycap
