import './SocialButton.css'

// Botón de red social con efecto de tarjetas apiladas que rotan al hover
// (adaptado del componente compartido por el usuario) + tooltip con el
// dato real de contacto/usuario en esa red.
function SocialButton({ href, label, sublabel, color, icon, external = true }) {
  return (
    <a
      className="social-btn"
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      aria-label={label}
      style={{ '--social-color': color }}
    >
      <span className="social-btn__tooltip">
        <strong>{label}</strong>
        <span>{sublabel}</span>
      </span>
      <span className="social-btn__layer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span className="social-btn__icon">
          <img src={icon} alt="" aria-hidden="true" />
        </span>
      </span>
      <span className="social-btn__label">{label}</span>
    </a>
  )
}

export default SocialButton
