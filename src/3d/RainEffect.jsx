import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

const COUNT = 220

function RainParticles() {
  const pointsRef = useRef(null)

  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(COUNT * 3)
    const spd = new Float32Array(COUNT)
    for (let i = 0; i < COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 4
      pos[i * 3 + 1] = Math.random() * 4 - 2
      pos[i * 3 + 2] = (Math.random() - 0.5) * 2
      spd[i] = 0.02 + Math.random() * 0.05
    }
    return [pos, spd]
  }, [])

  useFrame(() => {
    const arr = pointsRef.current.geometry.attributes.position.array
    for (let i = 0; i < COUNT; i++) {
      arr[i * 3 + 1] -= speeds[i]
      if (arr[i * 3 + 1] < -2) arr[i * 3 + 1] = 2
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#22d3ee"
        size={0.09}
        transparent
        opacity={0.9}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

// Reinterpretación del experimento nube/nube.html (lluvia estilo Matrix) con partículas Three.js
function RainEffect() {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 50 }} gl={{ alpha: true }}>
      <RainParticles />
    </Canvas>
  )
}

export default RainEffect
