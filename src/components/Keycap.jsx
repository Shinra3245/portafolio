import TechIcon from './TechIcon'
import './Keycap.css'

// Tecla física estilo teclado mecánico (CSS puro, sin 3D) — el mismo ícono real
// de la tecnología que ya usábamos en las pills se coloca centrado en la tecla.
function Keycap({ icon, label }) {
  return (
    <article className="keycap" title={label}>
      <span className="letter">
        <TechIcon icon={icon} size={26} />
      </span>
    </article>
  )
}

export default Keycap
