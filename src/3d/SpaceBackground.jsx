import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

// Fondo estrellado global, fijo detrás de todo el contenido (reemplaza js/particles.js)
function SpaceBackground() {
  return (
    <div className="canvas-wrapper">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0.5} fade speed={0.5} />
        <EffectComposer>
          <Bloom intensity={0.4} luminanceThreshold={0.3} luminanceSmoothing={0.9} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}

export default SpaceBackground
