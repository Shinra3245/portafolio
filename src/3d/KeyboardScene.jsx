import { useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'
import {
  siPython,
  siJavascript,
  siTypescript,
  siDart,
  siPhp,
  siFastapi,
  siFlask,
  siNodedotjs,
  siReact,
  siNextdotjs,
  siVite,
  siPostgresql,
  siDocker,
  siGit,
  siFirebase,
} from 'simple-icons'

// 4 filas, agrupadas como en un teclado real: Lenguajes / Backend / Frontend / Datos & DevOps
const ROWS = [
  {
    id: 'lenguajes',
    color: '#818cf8',
    keys: [
      { id: 'python', icon: siPython, label: 'Python' },
      { id: 'javascript', icon: siJavascript, label: 'JavaScript' },
      { id: 'typescript', icon: siTypescript, label: 'TypeScript' },
      { id: 'dart', icon: siDart, label: 'Dart' },
      { id: 'php', icon: siPhp, label: 'PHP' },
    ],
  },
  {
    id: 'backend',
    color: '#22d3ee',
    keys: [
      { id: 'fastapi', icon: siFastapi, label: 'FastAPI' },
      { id: 'flask', icon: siFlask, label: 'Flask' },
      { id: 'node', icon: siNodedotjs, label: 'Node.js' },
    ],
  },
  {
    id: 'frontend',
    color: '#f472b6',
    keys: [
      { id: 'react', icon: siReact, label: 'React' },
      { id: 'next', icon: siNextdotjs, label: 'Next.js' },
      { id: 'vite', icon: siVite, label: 'Vite' },
    ],
  },
  {
    id: 'datos',
    color: '#fbbf24',
    keys: [
      { id: 'postgres', icon: siPostgresql, label: 'PostgreSQL' },
      { id: 'docker', icon: siDocker, label: 'Docker' },
      { id: 'git', icon: siGit, label: 'Git' },
      { id: 'firebase', icon: siFirebase, label: 'Firebase' },
    ],
  },
]

function makeKeyTexture(icon, label) {
  const size = 160
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')

  // cara de la tecla: plana y oscura (el color de categoría queda solo en el borde/marco)
  ctx.fillStyle = '#11142a'
  ctx.fillRect(0, 0, size, size)

  // logo real de la herramienta, en su color de marca oficial
  const iconSize = 66
  const scale = iconSize / 24
  ctx.save()
  ctx.translate(size / 2 - iconSize / 2, 24)
  ctx.scale(scale, scale)
  ctx.fillStyle = `#${icon.hex}`
  ctx.fill(new Path2D(icon.path))
  ctx.restore()

  // nombre de la herramienta, plano (sin relieve/sombra)
  ctx.font = 'bold 17px ui-monospace, Menlo, monospace'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = '#e2e8f0'
  ctx.fillText(label, size / 2, size - 24)

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

function Keycap({ icon, label, color, position }) {
  const groupRef = useRef(null)
  const [hovered, setHovered] = useState(false)
  const [pressed, setPressed] = useState(false)
  const texture = useMemo(() => makeKeyTexture(icon, label), [icon, label])

  useFrame(() => {
    const targetY = pressed ? -0.05 : hovered ? 0.06 : 0
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
      {/* marco/borde estilo 3D, coloreado por categoría — la tecla en sí queda plana */}
      <RoundedBox args={[0.58, 0.12, 0.58]} radius={0.025} smoothness={4} castShadow>
        <meshStandardMaterial color={color} roughness={0.35} metalness={0.25} />
      </RoundedBox>

      {/* cara plana con el logo real de la herramienta + su nombre */}
      <mesh position={[0, 0.068, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.46, 0.46]} />
        <meshStandardMaterial map={texture} roughness={0.6} metalness={0.05} />
      </mesh>
    </group>
  )
}

function KeyboardRig() {
  const rowSpacing = 0.85

  return (
    <Float speed={1.1} floatIntensity={0.35} rotationIntensity={0.12}>
      <group rotation={[0.1, 0, 0]}>
        {ROWS.map((row, rowIndex) => {
          const z = (rowIndex - (ROWS.length - 1) / 2) * rowSpacing
          const keySpacing = 0.66
          return row.keys.map((key, keyIndex) => {
            const x = (keyIndex - (row.keys.length - 1) / 2) * keySpacing
            return <Keycap key={key.id} icon={key.icon} label={key.label} color={row.color} position={[x, 0, z]} />
          })
        })}
      </group>
    </Float>
  )
}

// Teclado de keycaps planas con el logo real de cada tecnología grabado en la cara
function KeyboardScene() {
  return (
    <Canvas camera={{ position: [0, 3.6, 6.2], fov: 42 }} shadows>
      <ambientLight intensity={0.55} />
      <pointLight position={[3, 4, 3]} intensity={1.3} color="#22d3ee" />
      <pointLight position={[-3, 2, -2]} intensity={0.9} color="#6366f1" />
      <directionalLight position={[0, 5, 2]} intensity={0.6} castShadow />
      <KeyboardRig />
    </Canvas>
  )
}

export default KeyboardScene
