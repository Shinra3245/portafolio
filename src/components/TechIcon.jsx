function isDarkHex(hex) {
  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b
  return luminance < 60
}

// Logo real de marca: la mayoría vienen de svgl.app (archivo SVG completo a
// color, importado como URL) y se muestran tal cual con <img>. Unas pocas
// tecnologías sin equivalente en svgl.app siguen usando simple-icons
// (path + color de marca, con fallback claro si el color oficial es casi negro).
function TechIcon({ icon, size = 16 }) {
  if (typeof icon === 'string') {
    return <img src={icon} width={size} height={size} alt="" aria-hidden="true" />
  }

  const fill = isDarkHex(icon.hex) ? '#e2e8f0' : `#${icon.hex}`

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} aria-hidden="true">
      <path d={icon.path} />
    </svg>
  )
}

export default TechIcon
