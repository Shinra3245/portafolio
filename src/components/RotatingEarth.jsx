import dayMap from '../assets/textures/2k_earth_daymap.jpg'
import cloudsMap from '../assets/textures/2k_earth_clouds.jpg'
import './RotatingEarth.css'

// Puerto del "Rotating Earth CSS" de jamesfinn180 (CodePen VwzENbR), sin la
// capa de noche: 2 capas apiladas (día, nubes) cuyo "giro" es en realidad un
// scroll horizontal del fondo (background-position), no una rotación 3D.
// Texturas reales (NASA/solarsystemscope vía la carpeta Textures/ del
// proyecto), a tamaño completo del contenedor circular para no dejar bordes
// sin cubrir.
function RotatingEarth() {
  return (
    <div className="earth-pen">
      <div className="earth-pen__day" style={{ backgroundImage: `url(${dayMap})` }} />
      <div className="earth-pen__clouds" style={{ backgroundImage: `url(${cloudsMap})` }} />
      <div className="earth-pen__inner-shadow" />
    </div>
  )
}

export default RotatingEarth
