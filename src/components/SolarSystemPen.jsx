import { useEffect, useState } from 'react'
// Versiones reducidas (512x256, calidad ~78) de las texturas 2k originales:
// en esta animación cada planeta se dibuja a lo sumo a unos ~240px de
// diámetro (zoom cercano incluido), así que cargar los JPG de 2k completos
// (~700KB-1MB cada uno, ~5.6MB en total) solo alargaba la carga sin ninguna
// ganancia visual. Ver src/assets/textures/ para las texturas 2k reales
// (usadas tal cual en RotatingEarth, que sí las necesita a mayor detalle).
import sunTexture from '../assets/textures/solar-pen/sp_sun.jpg'
import mercuryTexture from '../assets/textures/solar-pen/sp_mercury.jpg'
import venusSurfaceTexture from '../assets/textures/solar-pen/sp_venus_surface.jpg'
import venusAtmosphereTexture from '../assets/textures/solar-pen/sp_venus_atmosphere.jpg'
import earthDayTexture from '../assets/textures/solar-pen/sp_earth_daymap.jpg'
import earthCloudsTexture from '../assets/textures/solar-pen/sp_earth_clouds.jpg'
import moonTexture from '../assets/textures/solar-pen/sp_moon.jpg'
import marsTexture from '../assets/textures/solar-pen/sp_mars.jpg'
import jupiterTexture from '../assets/textures/solar-pen/sp_jupiter.jpg'
import saturnTexture from '../assets/textures/solar-pen/sp_saturn.jpg'
// sp_saturn_ring.png es una anillo generado a partir de 2k_saturn_ring_alpha.png:
// ese archivo original de NASA es un corte radial (una franja delgada que
// describe la densidad del anillo de adentro hacia afuera, pensada para un
// shader 3D), no una imagen de anillo vista desde arriba — estirarla en un
// rectángulo plano nunca iba a lucir como un anillo real. Se convirtió a un
// anillo real (agujero transparente en el centro) revolviendo esa franja
// radialmente; ver el script usado en el historial de cambios si hay que
// regenerarla.
import saturnRingTexture from '../assets/textures/solar-pen/sp_saturn_ring.png'
import uranusTexture from '../assets/textures/solar-pen/sp_uranus.jpg'
import neptuneTexture from '../assets/textures/solar-pen/sp_neptune.jpg'
import './SolarSystemPen.css'

// Puerto fiel del "3D Solar System" de Julian Garnier (CodePen krNqZO,
// creador de anime.js): CSS puro, sin WebGL. La mecánica orbital real:
// cada planeta vive dentro de un `.orbit` que rota (keyframe `orbit`), y
// dentro de un `.pos` que contra-rota (keyframe `invert`) para que el
// planeta en sí no gire junto con su órbita — el mismo truco del original.
// Cada planeta también anima una sombra interna sincronizada con su
// posición orbital, simulando el terminador día/noche real. Se omiten del
// pen original: el panel de datos con estadísticas astronómicas reales y
// los modos de escala "a tamaño/distancia real" (solo se usa el modo
// "stretched", el que se ve por defecto y es el más legible).
const PLANET_TEXTURES = {
  mercury: mercuryTexture,
  venus: venusSurfaceTexture,
  earth: earthDayTexture,
  mars: marsTexture,
  jupiter: jupiterTexture,
  saturn: saturnTexture,
  uranus: uranusTexture,
  neptune: neptuneTexture,
}

const PLANET_IDS = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune']

// Las texturas se ocultan (opacity:0) durante la apertura, y los navegadores
// bajan la prioridad de red de background-image en elementos invisibles —
// sin esto, el planeta se revela antes de que su textura haya terminado de
// descargarse y aparece como un disco negro hasta que carga. Precargamos
// todo de una vez al montar, sin depender de la visibilidad.
const ALL_TEXTURES = [
  sunTexture,
  mercuryTexture,
  venusSurfaceTexture,
  venusAtmosphereTexture,
  earthDayTexture,
  earthCloudsTexture,
  moonTexture,
  marsTexture,
  jupiterTexture,
  saturnTexture,
  saturnRingTexture,
  uranusTexture,
  neptuneTexture,
]

function SolarSystemPen() {
  const [opening, setOpening] = useState(true)
  // Arranca en 2D (plano) y pasa a 3D justo después del primer pintado, para
  // que la transición CSS entre ambos estados "arme" la escena: las órbitas
  // se inclinan y cada planeta se desliza hacia su posición real, igual que
  // el recurso original. No hay control para volver a 2D.
  const [view, setView] = useState('2D')

  useEffect(() => {
    ALL_TEXTURES.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [])

  useEffect(() => {
    // "opening" y el paso a 3D se sueltan juntos (como en el original: ambas
    // clases cambian en el mismo golpe) — eso es lo que deja que la
    // transición CSS de 0.8s anime el giro de plano a 3D en vez de saltar
    // directo al estado final.
    const reveal = setTimeout(() => {
      setView('3D')
      setOpening(false)
    }, 60)
    return () => clearTimeout(reveal)
  }, [])

  return (
    <div className={`solar-pen view-${view} ${opening ? 'opening' : ''}`}>
      <div id="sp-universe">
        <div id="sp-galaxy">
          <div id="sp-system">
            {PLANET_IDS.map((id) => (
              <div key={id} id={`sp-${id}`} className="sp-orbit">
                <div className="sp-pos">
                  {id === 'earth' && (
                    <div className="sp-orbit">
                      <div className="sp-pos">
                        <div className="sp-moon" style={{ backgroundImage: `url(${moonTexture})` }} />
                      </div>
                    </div>
                  )}
                  <div className="sp-planet">
                    <div
                      className="sp-planet__surface"
                      style={
                        id === 'earth'
                          ? {
                              backgroundImage: `url(${earthCloudsTexture}), url(${PLANET_TEXTURES[id]})`,
                              backgroundBlendMode: 'screen, normal',
                            }
                          : id === 'venus'
                            ? {
                                backgroundImage: `url(${venusAtmosphereTexture}), url(${PLANET_TEXTURES[id]})`,
                                backgroundBlendMode: 'overlay, normal',
                              }
                            : { backgroundImage: `url(${PLANET_TEXTURES[id]})` }
                      }
                    />
                    {id === 'saturn' && (
                      <div className="sp-ring" style={{ backgroundImage: `url(${saturnRingTexture})` }} />
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div id="sp-sun" style={{ backgroundImage: `url(${sunTexture})` }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SolarSystemPen
