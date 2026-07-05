import { Canvas } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'

function DistortedOrb() {
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh position={[0, 0, -2]}>
        <icosahedronGeometry args={[1.1, 6]} />
        <MeshDistortMaterial
          color="#161b3d"
          emissive="#6366f1"
          emissiveIntensity={0.18}
          distort={0.35}
          speed={1.6}
          roughness={0.25}
          metalness={0.85}
          transparent
          opacity={0.9}
        />
      </mesh>
    </Float>
  )
}

// Reemplaza el <spline-viewer> del avatar del hero por una escena Three.js propia
function HeroAvatar() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 40 }} gl={{ alpha: true }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 4, 4]} intensity={1.2} color="#22d3ee" />
      <pointLight position={[-4, -2, -2]} intensity={0.9} color="#6366f1" />
      <DistortedOrb />
    </Canvas>
  )
}

export default HeroAvatar
