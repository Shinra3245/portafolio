import { useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

// 4 filas, agrupadas como en un teclado real: Lenguajes / Backend / Frontend / Datos & DevOps
const ROWS = [
  {
    id: 'lenguajes',
    color: '#818cf8',
    keys: [
      { id: 'python', label: 'PY' },
      { id: 'jsts', label: 'JS/TS' },
      { id: 'dart', label: 'DART' },
      { id: 'php', label: 'PHP' },
    ],
  },
  {
    id: 'backend',
    color: '#22d3ee',
    keys: [
      { id: 'fastapi', label: 'API' },
      { id: 'flask', label: 'FLSK' },
      { id: 'node', label: 'NODE' },
    ],
  },
  {
    id: 'frontend',
    color: '#f472b6',
    keys: [
      { id: 'react', label: 'RCT' },
      { id: 'next', label: 'NEXT' },
      { id: 'vite', label: 'VITE' },
    ],
  },
  {
    id: 'datos',
    color: '#fbbf24',
    keys: [
      { id: 'postgres', label: 'PG' },
      { id: 'docker', label: 'DKR' },
      { id: 'git', label: 'GIT' },
      { id: 'firebase', label: 'FB' },
    ],
  },
]

function makeKeycapTexture(label, color) {
  const size = 128
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')

  ctx.fillStyle = color
  ctx.fillRect(0, 0, size, size)

  // viñeta sutil para dar profundidad a la cara de la tecla
  const grad = ctx.createRadialGradient(size / 2, size / 2, size * 0.1, size / 2, size / 2, size * 0.7)
  grad.addColorStop(0, 'rgba(255,255,255,0.18)')
  grad.addColorStop(1, 'rgba(0,0,0,0.12)')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, size, size)

  ctx.font = `bold ${label.length > 4 ? 22 : 30}px ui-monospace, Menlo, monospace`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.shadowColor = 'rgba(255,255,255,0.6)'
  ctx.shadowBlur = 6
  ctx.fillStyle = '#f8fafc'
  ctx.fillText(label, size / 2, size / 2 + 2)

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

function Keycap({ label, color, position }) {
  const groupRef = useRef(null)
  const [hovered, setHovered] = useState(false)
  const [pressed, setPressed] = useState(false)
  const texture = useMemo(() => makeKeycapTexture(label, color), [label, color])

  useFrame(() => {
    const targetY = pressed ? -0.06 : hovered ? 0.05 : 0
    groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.25
  })

  return (
    <group
      ref={groupRef}
      position={position}
      onPointerOver={(e) => {
        e.stopPropagation()
        setHovered(true)
      }}
      onPointerOut={() => setHovered(false)}
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
    >
      {/* cuerpo achaflanado: cilindro de 4 lados rotado 45° = frustum cuadrado */}
      <mesh castShadow>
        <cylinderGeometry args={[0.37, 0.44, 0.32, 4, 1, false, Math.PI / 4]} />
        <meshPhysicalMaterial
          color={color}
          roughness={0.32}
          metalness={0.08}
          clearcoat={0.55}
          clearcoatRoughness={0.22}
        />
      </mesh>
      {/* cara superior grabada con el nombre de la tecnología */}
      <mesh position={[0, 0.162, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.5, 0.5]} />
        <meshStandardMaterial map={texture} roughness={0.4} metalness={0.05} />
      </mesh>
    </group>
  )
}

function KeyboardRig() {
  const rowSpacing = 0.85
  const keySpacing = 0.62

  return (
    <Float speed={1.1} floatIntensity={0.35} rotationIntensity={0.12}>
      <group rotation={[0.1, 0, 0]}>
        {ROWS.map((row, rowIndex) => {
          const z = (rowIndex - (ROWS.length - 1) / 2) * rowSpacing
          return row.keys.map((key, keyIndex) => {
            const x = (keyIndex - (row.keys.length - 1) / 2) * keySpacing
            return <Keycap key={key.id} label={key.label} color={row.color} position={[x, 0, z]} />
          })
        })}
      </group>
    </Float>
  )
}

// Reemplaza los cubos planos de TechScene por un teclado de keycaps 3D realistas,
// agrupado por categoría (Lenguajes / Backend / Frontend / Datos-DevOps)
function KeyboardScene() {
  return (
    <Canvas camera={{ position: [0, 3.4, 5.6], fov: 42 }} shadows>
      <ambientLight intensity={0.55} />
      <pointLight position={[3, 4, 3]} intensity={1.3} color="#22d3ee" />
      <pointLight position={[-3, 2, -2]} intensity={0.9} color="#6366f1" />
      <directionalLight position={[0, 5, 2]} intensity={0.6} castShadow />
      <KeyboardRig />
    </Canvas>
  )
}

export default KeyboardScene
