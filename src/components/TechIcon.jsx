function isDarkHex(hex) {
  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b
  return luminance < 60
}

// Logo real de marca (simple-icons) como SVG normal, con fallback claro para
// los que tienen su color oficial casi negro (Next.js, GitHub, Vercel...)
function TechIcon({ icon, size = 16 }) {
  const fill = isDarkHex(icon.hex) ? '#e2e8f0' : `#${icon.hex}`

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} aria-hidden="true">
      <path d={icon.path} />
    </svg>
  )
}

export default TechIcon
