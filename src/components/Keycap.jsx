import TechIcon from './TechIcon'
import './Keycap.css'

// Tecla física estilo teclado mecánico (CSS puro, sin 3D) — el mismo ícono real
// de la tecnología que ya usábamos en las pills se coloca centrado en la tecla,
// con su nombre debajo.
function Keycap({ icon, label }) {
  return (
    <div className="keycap-wrap">
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
