import './LightsaberIcon.css'

// Mini animación de duelo de sables láser (CSS puro) para el botón de idioma.
// Escalada a la mitad de su tamaño original para caber en el botón del navbar.
function LightsaberIcon({ className = '' }) {
  return (
    <span className={`lightsaber-icon ${className}`} aria-hidden="true">
      <span className="lightsaber-icon__stage">
        <span className="ls-particles ls-part-1" />
        <span className="ls-particles ls-part-2" />
        <span className="ls-particles ls-part-3" />
        <span className="ls-particles ls-part-4" />
        <span className="ls-particles ls-part-5" />
        <span className="lightsaber ls-left ls-green" />
        <span className="lightsaber ls-right ls-red" />
      </span>
    </span>
  )
}

export default LightsaberIcon
