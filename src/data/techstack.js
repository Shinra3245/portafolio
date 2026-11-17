import { siJsonwebtokens, siLeaflet, siNumpy, siSympy, siThreedotjs } from 'simple-icons'

import pythonIcon from '../assets/icons/tech/python.svg'
import javascriptIcon from '../assets/icons/tech/javascript.svg'
import typescriptIcon from '../assets/icons/tech/typescript.svg'
import javaIcon from '../assets/icons/tech/java.svg'
import cppIcon from '../assets/icons/tech/cpp.svg'
import arduinoIcon from '../assets/icons/tech/arduino.svg'
import esp32Icon from '../assets/icons/tech/esp32.svg'
import dartIcon from '../assets/icons/tech/dart.svg'
import phpIcon from '../assets/icons/tech/php_dark.svg'
import bashIcon from '../assets/icons/tech/bash_dark.svg'
import html5Icon from '../assets/icons/tech/html5.svg'
import css3Icon from '../assets/icons/tech/css.svg'
import fastapiIcon from '../assets/icons/tech/fastapi.svg'
import flaskIcon from '../assets/icons/tech/flask-dark.svg'
import nodeIcon from '../assets/icons/tech/nodejs.svg'
import expressIcon from '../assets/icons/tech/expressjs_dark.svg'
import reactIcon from '../assets/icons/tech/react_dark.svg'
import vueIcon from '../assets/icons/tech/vue.svg'
import nextIcon from '../assets/icons/tech/nextjs_icon_dark.svg'
import viteIcon from '../assets/icons/tech/vite.svg'
import postgresqlIcon from '../assets/icons/tech/postgresql.svg'
import mysqlIcon from '../assets/icons/tech/mysql-icon-dark.svg'
import sqliteIcon from '../assets/icons/tech/sqlite.svg'
import supabaseIcon from '../assets/icons/tech/supabase.svg'
import firebaseIcon from '../assets/icons/tech/firebase.svg'
import dockerIcon from '../assets/icons/tech/docker.svg'
import gitIcon from '../assets/icons/tech/git.svg'
import githubIcon from '../assets/icons/tech/github_dark.svg'
import renderIcon from '../assets/icons/tech/render_white.svg'
import vercelIcon from '../assets/icons/tech/vercel_dark.svg'
import flutterIcon from '../assets/icons/tech/flutter.svg'

// Tecnologías con evidencia vinculada a proyectos y herramientas en etapa de exploración.
export const techStack = [
  {
    id: 'principal',
    titleKey: 'tech.rowLenguajes',
    tier: 'primary',
    evidenceSlugs: ['atlas', 'siesif', 'recolecta', 'pyprimes'],
    items: [
      { id: 'python', icon: pythonIcon, label: 'Python' },
      { id: 'fastapi', icon: fastapiIcon, label: 'FastAPI' },
      { id: 'flask', icon: flaskIcon, label: 'Flask' },
    ],
  },
  {
    id: 'web',
    titleKey: 'tech.rowWeb',
    tier: 'complementary',
    evidenceSlugs: ['vivaorden', 'atlas', 'tickets', 'ilpea'],
    items: [
      { id: 'javascript', icon: javascriptIcon, label: 'JavaScript' },
      { id: 'react', icon: reactIcon, label: 'React' },
      { id: 'vite', icon: viteIcon, label: 'Vite' },
      { id: 'node', icon: nodeIcon, label: 'Node.js' },
      { id: 'express', icon: expressIcon, label: 'Express' },
      { id: 'html5', icon: html5Icon, label: 'HTML5' },
      { id: 'css3', icon: css3Icon, label: 'CSS3' },
      { id: 'php', icon: phpIcon, label: 'PHP' },
    ],
  },
  {
    id: 'mobile',
    titleKey: 'tech.rowOtros',
    tier: 'complementary',
    evidenceSlugs: ['recolecta'],
    items: [
      { id: 'dart', icon: dartIcon, label: 'Dart' },
      { id: 'flutter', icon: flutterIcon, label: 'Flutter' },
    ],
  },
  {
    id: 'datos',
    titleKey: 'tech.rowDatos',
    tier: 'complementary',
    evidenceSlugs: ['vivaorden', 'siesif', 'recolecta'],
    items: [
      { id: 'postgres', icon: postgresqlIcon, label: 'PostgreSQL' },
      { id: 'mysql', icon: mysqlIcon, label: 'MySQL' },
      { id: 'sqlite', icon: sqliteIcon, label: 'SQLite' },
      { id: 'supabase', icon: supabaseIcon, label: 'Supabase' },
      { id: 'firebase', icon: firebaseIcon, label: 'Firebase' },
    ],
  },
  {
    id: 'devops',
    titleKey: 'tech.rowDevops',
    tier: 'complementary',
    evidenceSlugs: ['vivaorden', 'siesif', 'rally'],
    items: [
      { id: 'git', icon: gitIcon, label: 'Git' },
      { id: 'github', icon: githubIcon, label: 'GitHub' },
      { id: 'vercel', icon: vercelIcon, label: 'Vercel' },
      { id: 'render', icon: renderIcon, label: 'Render' },
    ],
  },
  {
    id: 'hardware',
    titleKey: 'tech.rowHardware',
    tier: 'complementary',
    evidenceSlugs: ['srac', 'playstation'],
    items: [
      { id: 'arduino', icon: arduinoIcon, label: 'Arduino' },
      { id: 'esp32', icon: esp32Icon, label: 'ESP32' },
      { id: 'cpp', icon: cppIcon, label: 'C++' },
    ],
  },
  {
    id: 'seguridad',
    titleKey: 'tech.rowSecurity',
    tier: 'complementary',
    evidenceSlugs: ['recolecta', 'ilpea'],
    items: [{ id: 'jwt', icon: siJsonwebtokens, label: 'JWT' }],
  },
  {
    id: 'geospatial',
    titleKey: 'tech.rowGeospatial',
    tier: 'complementary',
    evidenceSlugs: ['atlas'],
    items: [{ id: 'leaflet', icon: siLeaflet, label: 'Leaflet' }],
  },
  {
    id: '3d',
    titleKey: 'tech.row3d',
    tier: 'complementary',
    evidenceSlugs: ['journey-to-mars', 'pyprimes'],
    items: [{ id: 'three', icon: siThreedotjs, label: 'Three.js' }],
  },
  {
    id: 'analitica',
    titleKey: 'tech.rowAnalitica',
    tier: 'complementary',
    evidenceSlugs: ['pyprimes'],
    items: [
      { id: 'numpy', icon: siNumpy, label: 'NumPy' },
      { id: 'sympy', icon: siSympy, label: 'SymPy' },
    ],
  },
  {
    id: 'exploradas',
    titleKey: 'tech.rowExploradas',
    tier: 'explored',
    evidenceSlugs: ['duelodev'],
    items: [
      { id: 'typescript', icon: typescriptIcon, label: 'TypeScript' },
      { id: 'java', icon: javaIcon, label: 'Java' },
      { id: 'bash', icon: bashIcon, label: 'Bash' },
      { id: 'vue', icon: vueIcon, label: 'Vue.js' },
      { id: 'next', icon: nextIcon, label: 'Next.js' },
      { id: 'docker', icon: dockerIcon, label: 'Docker' },
    ],
  },
]
