import { useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Billboard, Text } from '@react-three/drei'
import { useTranslation } from 'react-i18next'
import * as THREE from 'three'
import {
  siPython,
  siJavascript,
  siTypescript,
  siDart,
  siPhp,
  siGnubash,
  siFastapi,
  siFlask,
  siNodedotjs,
  siExpress,
  siReact,
  siVuedotjs,
  siNextdotjs,
  siVite,
  siPostgresql,
  siMysql,
  siSqlite,
  siSupabase,
  siFirebase,
  siDocker,
  siGit,
  siGithub,
  siLinux,
  siRender,
  siVercel,
  siFlutter,
  siAndroidstudio,
  siNumpy,
  siPandas,
  siSympy,
  siFigma,
  siPostman,
} from 'simple-icons'

// Filas agrupadas por categoría, con el stack real del CV (lang/backend/frontend/datos/devops/otros)
const ROWS = [
  {
    id: 'lenguajes',
    titleKey: 'tech.rowLenguajes',
    color: '#818cf8',
    keys: [
      { id: 'python', icon: siPython, label: 'Python' },
      { id: 'javascript', icon: siJavascript, label: 'JavaScript' },
      { id: 'typescript', icon: siTypescript, label: 'TypeScript' },
      { id: 'dart', icon: siDart, label: 'Dart' },
      { id: 'php', icon: siPhp, label: 'PHP' },
      { id: 'bash', icon: siGnubash, label: 'Bash' },
    ],
  },
  {
    id: 'backend',
    titleKey: 'tech.rowBackend',
    color: '#22d3ee',
    keys: [
      { id: 'fastapi', icon: siFastapi, label: 'FastAPI' },
      { id: 'flask', icon: siFlask, label: 'Flask' },
      { id: 'node', icon: siNodedotjs, label: 'Node.js' },
      { id: 'express', icon: siExpress, label: 'Express' },
    ],
  },
  {
    id: 'frontend',
    titleKey: 'tech.rowFrontend',
    color: '#f472b6',
    keys: [
      { id: 'react', icon: siReact, label: 'React' },
      { id: 'vue', icon: siVuedotjs, label: 'Vue.js' },
      { id: 'next', icon: siNextdotjs, label: 'Next.js' },
      { id: 'vite', icon: siVite, label: 'Vite' },
    ],
  },
  {
    id: 'datos',
    titleKey: 'tech.rowDatos',
    color: '#fbbf24',
    keys: [
      { id: 'postgres', icon: siPostgresql, label: 'PostgreSQL' },
      { id: 'mysql', icon: siMysql, label: 'MySQL' },
      { id: 'sqlite', icon: siSqlite, label: 'SQLite' },
      { id: 'supabase', icon: siSupabase, label: 'Supabase' },
      { id: 'firebase', icon: siFirebase, label: 'Firebase' },
    ],
  },
  {
    id: 'devops',
    titleKey: 'tech.rowDevops',
    color: '#34d399',
    keys: [
      { id: 'docker', icon: siDocker, label: 'Docker' },
      { id: 'git', icon: siGit, label: 'Git' },
      { id: 'github', icon: siGithub, label: 'GitHub' },
      { id: 'linux', icon: siLinux, label: 'Linux' },
      { id: 'render', icon: siRender, label: 'Render' },
      { id: 'vercel', icon: siVercel, label: 'Vercel' },
    ],
  },
  {
    id: 'otros',
    titleKey: 'tech.rowOtros',
    color: '#a78bfa',
    keys: [
      { id: 'flutter', icon: siFlutter, label: 'Flutter' },
      { id: 'androidstudio', icon: siAndroidstudio, label: 'Android Studio' },
      { id: 'numpy', icon: siNumpy, label: 'NumPy' },
      { id: 'pandas', icon: siPandas, label: 'Pandas' },
      { id: 'sympy', icon: siSympy, label: 'SymPy' },
      { id: 'figma', icon: siFigma, label: 'Figma' },
      { id: 'postman', icon: siPostman, label: 'Postman' },
    ],
  },
]

function isDarkHex(hex) {
  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b
  return luminance < 60
}

// Todo el "bisel" se dibuja en 2D sobre el propio lienzo (marco de color + cara oscura
// interior) — la tecla no tiene geometría con profundidad, es un plano totalmente plano.
function makeKeyTexture(icon, label, color) {
  const size = 160
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')

  ctx.fillStyle = color
  ctx.beginPath()
  ctx.roundRect(0, 0, size, size, 20)
  ctx.fill()

  const inset = 9
  ctx.fillStyle = '#11142a'
  ctx.beginPath()
  ctx.roundRect(inset, inset, size - inset * 2, size - inset * 2, 13)
  ctx.fill()

  const iconSize = 62
  const scale = iconSize / 24
  ctx.save()
  ctx.translate(size / 2 - iconSize / 2, 24)
  ctx.scale(scale, scale)
  ctx.fillStyle = isDarkHex(icon.hex) ? '#e8ecf5' : `#${icon.hex}`
  ctx.fill(new Path2D(icon.path))
  ctx.restore()

  ctx.font = 'bold 15px ui-monospace, Menlo, monospace'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = '#e2e8f0'
  ctx.fillText(label, size / 2, size - 24)

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

// Cada tecla es un plano único (sin profundidad) envuelto en <Billboard>, así que
// siempre mira directo a la cámara sin importar la inclinación del tablero completo.
function Keycap({ icon, label, color, position }) {
  const meshRef = useRef(null)
  const [hovered, setHovered] = useState(false)
  const [pressed, setPressed] = useState(false)
  const texture = useMemo(() => makeKeyTexture(icon, label, color), [icon, label, color])

  useFrame(() => {
    const target = pressed ? 0.9 : hovered ? 1.1 : 1
    const s = meshRef.current.scale
    s.x += (target - s.x) * 0.25
    s.y += (target - s.y) * 0.25
  })

  return (
    <Billboard position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHovered(true)
        }}
        onPointerOut={() => setHovered(false)}
        onPointerDown={() => setPressed(true)}
        onPointerUp={() => setPressed(false)}
      >
        <planeGeometry args={[0.56, 0.56]} />
        <meshBasicMaterial map={texture} transparent />
      </mesh>
    </Billboard>
  )
}

function RowLabel({ text, color, position }) {
  return (
    <Billboard position={position}>
      <Text fontSize={0.15} color={color} anchorX="center" anchorY="middle" outlineWidth={0.006} outlineColor="#050816">
        {text}
      </Text>
    </Billboard>
  )
}

function KeyboardRig() {
  const { t } = useTranslation()
  const rowSpacing = 2.1
  const keySpacing = 0.62

  return (
    <group rotation={[0.12, 0, 0]}>
      {ROWS.map((row, rowIndex) => {
        const z = (rowIndex - (ROWS.length - 1) / 2) * rowSpacing
        return (
          <group key={row.id}>
            <RowLabel text={t(row.titleKey)} color={row.color} position={[0, 0.66, z]} />
            {row.keys.map((key, keyIndex) => {
              const x = (keyIndex - (row.keys.length - 1) / 2) * keySpacing
              return (
                <Keycap key={key.id} icon={key.icon} label={key.label} color={row.color} position={[x, 0, z]} />
              )
            })}
          </group>
        )
      })}
    </group>
  )
}

// Teclado plano: cada tecla es un plano 2D (sin profundidad) que siempre mira a la
// cámara, dispuesto en un tablero inclinado hacia adelante, con el nombre de la
// categoría flotando sobre cada fila.
function KeyboardScene() {
  return (
    <Canvas camera={{ position: [0, 4.5, 11], fov: 40 }}>
      <ambientLight intensity={0.8} />
      <KeyboardRig />
    </Canvas>
  )
}

export default KeyboardScene
