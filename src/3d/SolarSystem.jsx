import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Line } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { DoubleSide } from 'three'

const PLANETS = [
  { radius: 0.08, orbitRadius: 1.0, speed: 0.55, color: '#22d3ee', offset: 0 },
  { radius: 0.13, orbitRadius: 1.55, speed: 0.38, color: '#6366f1', offset: 2 },
  { radius: 0.1, orbitRadius: 2.1, speed: 0.26, color: '#f472b6', offset: 4 },
  { radius: 0.17, orbitRadius: 2.7, speed: 0.16, color: '#facc15', offset: 1, ring: true },
]

function OrbitPath({ radius }) {
  const points = useMemo(() => {
    const pts = []
    for (let i = 0; i <= 128; i++) {
      const a = (i / 128) * Math.PI * 2
      pts.push([Math.cos(a) * radius, 0, Math.sin(a) * radius])
    }
    return pts
  }, [radius])

  return <Line points={points} color="#6366f1" transparent opacity={0.22} lineWidth={1} />
}

function Planet({ radius, orbitRadius, speed, color, offset, ring }) {
  const ref = useRef(null)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset
    ref.current.position.x = Math.cos(t) * orbitRadius
    ref.current.position.z = Math.sin(t) * orbitRadius
  })

  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[radius, 24, 24]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.35} roughness={0.5} metalness={0.15} />
      </mesh>
      {ring && (
        <mesh rotation={[Math.PI / 2.3, 0, 0]}>
          <ringGeometry args={[radius * 1.7, radius * 2.3, 48]} />
          <meshBasicMaterial color={color} side={DoubleSide} transparent opacity={0.5} />
        </mesh>
      )}
    </group>
  )
}

function Sun() {
  return (
    <mesh>
      <sphereGeometry args={[0.42, 32, 32]} />
      <meshBasicMaterial color="#fde68a" />
    </mesh>
  )
}

// Reemplaza el <spline-viewer> del avatar del hero por un mini sistema solar propio
function SolarSystem() {
  return (
    <Canvas camera={{ position: [0, 2.4, 7], fov: 40 }} gl={{ alpha: true }}>
      <ambientLight intensity={0.35} />
      <pointLight position={[0, 0, 0]} intensity={2.2} color="#fde68a" distance={12} />

      <group rotation={[0.4, 0, 0.08]}>
        <Sun />
        {PLANETS.map((p) => (
          <OrbitPath key={p.orbitRadius} radius={p.orbitRadius} />
        ))}
        {PLANETS.map((p) => (
          <Planet key={p.color} {...p} />
        ))}
      </group>

      <EffectComposer>
        <Bloom intensity={0.6} luminanceThreshold={0.35} luminanceSmoothing={0.9} />
      </EffectComposer>
    </Canvas>
  )
}

export default SolarSystem
