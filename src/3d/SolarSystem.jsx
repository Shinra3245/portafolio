import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Line } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'

// ---------- PRNG determinista (para que las texturas no cambien en cada recarga) ----------
function mulberry32(seed) {
  let t = seed
  return function () {
    t |= 0
    t = (t + 0x6d2b79f5) | 0
    let r = Math.imul(t ^ (t >>> 15), 1 | t)
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296
  }
}

// ---------- Texturas procedurales de planetas (canvas 2D, sin assets externos) ----------
function makeEarthTexture() {
  const size = 256
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')
  const rand = mulberry32(7)

  ctx.fillStyle = '#1c5fa8'
  ctx.fillRect(0, 0, size, size)

  const landColors = ['#3f9142', '#2f6e35', '#6b8f3f']
  for (let i = 0; i < 24; i++) {
    const x = rand() * size
    const y = rand() * size
    const r = 10 + rand() * 26
    ctx.fillStyle = landColors[i % landColors.length]
    ctx.beginPath()
    for (let a = 0; a <= Math.PI * 2 + 0.4; a += 0.4) {
      const rr = r * (0.7 + rand() * 0.6)
      const px = x + Math.cos(a) * rr
      const py = y + Math.sin(a) * rr
      if (a === 0) ctx.moveTo(px, py)
      else ctx.lineTo(px, py)
    }
    ctx.closePath()
    ctx.fill()
  }

  ctx.globalAlpha = 0.3
  ctx.fillStyle = '#ffffff'
  for (let i = 0; i < 16; i++) {
    const x = rand() * size
    const y = rand() * size
    const r = 8 + rand() * 16
    ctx.beginPath()
    ctx.ellipse(x, y, r, r * 0.35, rand() * Math.PI, 0, Math.PI * 2)
    ctx.fill()
  }
  ctx.globalAlpha = 1

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

function makeRockyTexture(baseColor) {
  const size = 256
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')
  const rand = mulberry32(3)

  ctx.fillStyle = baseColor
  ctx.fillRect(0, 0, size, size)

  for (let i = 0; i < 90; i++) {
    const x = rand() * size
    const y = rand() * size
    const r = 2 + rand() * 7
    ctx.fillStyle = `rgba(0,0,0,${0.12 + rand() * 0.22})`
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = `rgba(255,255,255,${0.05 + rand() * 0.08})`
    ctx.beginPath()
    ctx.arc(x - r * 0.3, y - r * 0.3, r * 0.5, 0, Math.PI * 2)
    ctx.fill()
  }

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

function makeBandedTexture(palette) {
  const w = 256
  const h = 256
  const canvas = document.createElement('canvas')
  canvas.width = w
  canvas.height = h
  const ctx = canvas.getContext('2d')
  const rand = mulberry32(11)

  let y = 0
  while (y < h) {
    const bandHeight = 6 + rand() * 20
    ctx.fillStyle = palette[Math.floor(rand() * palette.length)]
    ctx.fillRect(0, y, w, bandHeight)
    y += bandHeight
  }

  ctx.globalAlpha = 0.15
  for (let i = 0; i < 40; i++) {
    ctx.fillStyle = rand() > 0.5 ? '#ffffff' : '#000000'
    const yy = rand() * h
    ctx.fillRect(0, yy, w, 1.5)
  }
  ctx.globalAlpha = 1

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

function usePlanetTexture(kind, opts) {
  return useMemo(() => {
    if (kind === 'earth') return makeEarthTexture()
    if (kind === 'rocky') return makeRockyTexture(opts.baseColor)
    if (kind === 'bands' || kind === 'ringed') return makeBandedTexture(opts.palette)
    return null
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kind])
}

const PLANETS = [
  { kind: 'earth', radius: 0.09, orbitRadius: 1.0, speed: 0.55, offset: 0, spin: 0.6 },
  { kind: 'rocky', radius: 0.13, orbitRadius: 1.55, speed: 0.38, offset: 2, spin: 0.3, baseColor: '#8b8fd6' },
  {
    kind: 'bands',
    radius: 0.11,
    orbitRadius: 2.1,
    speed: 0.26,
    offset: 4,
    spin: 0.9,
    palette: ['#f472b6', '#fb92cd', '#c084fc', '#f9a8d4'],
  },
  {
    kind: 'ringed',
    radius: 0.17,
    orbitRadius: 2.7,
    speed: 0.16,
    offset: 1,
    spin: 0.5,
    palette: ['#facc15', '#eab308', '#fde68a', '#ca8a04'],
    ring: true,
    ringColor: '#facc15',
  },
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

function Planet({ kind, radius, orbitRadius, speed, offset, spin, ring, ringColor, baseColor, palette }) {
  const orbitRef = useRef(null)
  const meshRef = useRef(null)
  const texture = usePlanetTexture(kind, { baseColor, palette })

  useFrame(({ clock }, delta) => {
    const t = clock.getElapsedTime() * speed + offset
    orbitRef.current.position.x = Math.cos(t) * orbitRadius
    orbitRef.current.position.z = Math.sin(t) * orbitRadius
    meshRef.current.rotation.y += delta * spin
  })

  return (
    <group ref={orbitRef}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial map={texture} roughness={0.85} metalness={0.05} />
      </mesh>
      {ring && (
        <mesh rotation={[Math.PI / 2.3, 0, 0]}>
          <ringGeometry args={[radius * 1.7, radius * 2.3, 48]} />
          <meshBasicMaterial color={ringColor} side={THREE.DoubleSide} transparent opacity={0.55} />
        </mesh>
      )}
    </group>
  )
}

// ---------- Sol: shader con ruido animado (llamaradas) + corona aditiva ----------
const sunVertexShader = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec3 vViewPosition;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = position;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vViewPosition = -mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
`

const sunFragmentShader = /* glsl */ `
  uniform float uTime;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec3 vViewPosition;

  vec3 mod289(vec3 x){return x - floor(x * (1.0/289.0)) * 289.0;}
  vec4 mod289(vec4 x){return x - floor(x * (1.0/289.0)) * 289.0;}
  vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

  float snoise(vec3 v){
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  void main() {
    float n1 = snoise(vPosition * 2.4 + vec3(0.0, 0.0, uTime * 0.15));
    float n2 = snoise(vPosition * 5.5 + vec3(3.1, 1.7, uTime * 0.4)) * 0.5;
    float n = (n1 + n2) * 0.5 + 0.5;

    vec3 deep = vec3(0.62, 0.10, 0.02);
    vec3 mid = vec3(0.98, 0.55, 0.08);
    vec3 hot = vec3(1.0, 0.94, 0.6);

    vec3 color = mix(deep, mid, smoothstep(0.2, 0.65, n));
    color = mix(color, hot, smoothstep(0.65, 0.95, n));

    vec3 viewDir = normalize(vViewPosition);
    float fresnel = pow(1.0 - max(dot(normalize(vNormal), viewDir), 0.0), 2.2);
    color += vec3(1.0, 0.65, 0.25) * fresnel * 0.9;

    gl_FragColor = vec4(color, 1.0);
  }
`

function SunCorona() {
  const ref = useRef(null)
  useFrame(({ clock }) => {
    const s = 1.18 + Math.sin(clock.getElapsedTime() * 1.4) * 0.05
    ref.current.scale.setScalar(s)
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.42, 32, 32]} />
      <meshBasicMaterial
        color="#ffb454"
        transparent
        opacity={0.16}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        side={THREE.BackSide}
      />
    </mesh>
  )
}

function Sun() {
  const matRef = useRef(null)
  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), [])

  useFrame(({ clock }) => {
    if (matRef.current) matRef.current.uniforms.uTime.value = clock.getElapsedTime()
  })

  return (
    <>
      <mesh>
        <sphereGeometry args={[0.42, 48, 48]} />
        <shaderMaterial
          ref={matRef}
          vertexShader={sunVertexShader}
          fragmentShader={sunFragmentShader}
          uniforms={uniforms}
        />
      </mesh>
      <SunCorona />
    </>
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
          <Planet key={p.kind + p.orbitRadius} {...p} />
        ))}
      </group>

      <EffectComposer>
        <Bloom intensity={0.6} luminanceThreshold={0.35} luminanceSmoothing={0.9} />
      </EffectComposer>
    </Canvas>
  )
}

export default SolarSystem
