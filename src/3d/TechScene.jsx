import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Text } from '@react-three/drei'

const TECHS = ['HTML5', 'CSS3', 'JS', 'PHP', 'MySQL', 'React']
const COLORS = ['#e34f26', '#2965f1', '#f7df1e', '#8892be', '#22d3ee', '#61dafb']

function OrbitingTech({ label, color, radius, angleOffset, speed }) {
  const groupRef = useRef(null)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + angleOffset
    groupRef.current.position.x = Math.cos(t) * radius
    groupRef.current.position.z = Math.sin(t) * radius
    groupRef.current.position.y = Math.sin(t * 1.3) * 0.6
  })

  return (
    <group ref={groupRef}>
      <Float speed={2} floatIntensity={0.6}>
        <mesh>
          <boxGeometry args={[0.7, 0.7, 0.7]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} roughness={0.3} />
        </mesh>
        <Text position={[0, 0, 0.4]} fontSize={0.22} color="#050816" anchorX="center" anchorY="middle">
          {label}
        </Text>
      </Float>
    </group>
  )
}

// Reemplaza el video/visor Spline de "Tecnologías que manejo" por una escena Three.js
// con el stack real orbitando en un anillo
function TechScene() {
  return (
    <Canvas camera={{ position: [0, 2, 7], fov: 50 }}>
      <ambientLight intensity={0.7} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#6366f1" />
      <pointLight position={[-5, -3, -5]} intensity={0.6} color="#22d3ee" />
      {TECHS.map((label, i) => (
        <OrbitingTech
          key={label}
          label={label}
          color={COLORS[i]}
          radius={3.2}
          angleOffset={(i / TECHS.length) * Math.PI * 2}
          speed={0.25}
        />
      ))}
    </Canvas>
  )
}

export default TechScene
