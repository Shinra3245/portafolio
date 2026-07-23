import { siAndroidstudio, siNumpy, siPandas, siSympy, siFedora, siDebian, siPopos } from 'simple-icons'

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
import linuxIcon from '../assets/icons/tech/linux.svg'
import ubuntuIcon from '../assets/icons/tech/ubuntu.svg'
import flutterIcon from '../assets/icons/tech/flutter.svg'
import figmaIcon from '../assets/icons/tech/figma.svg'
import postmanIcon from '../assets/icons/tech/postman.svg'
import geminiIcon from '../assets/icons/tech/gemini.svg'
import claudeIcon from '../assets/icons/tech/claude-ai-icon.svg'
import antigravityIcon from '../assets/icons/tech/antigravity.svg'
import cursorIcon from '../assets/icons/tech/cursor_dark.svg'

// Stack real del CV, agrupado por categoría — usado en la sección Tecnologías (lista plana de pills)
// Los iconos son SVGs a color reales de svgl.app; Android Studio, NumPy, Pandas, SymPy,
// Fedora, Debian y Pop!_OS no tienen equivalente ahí, así que siguen usando simple-icons.
export const techStack = [
  {
    id: 'lenguajes',
    titleKey: 'tech.rowLenguajes',
    items: [
      { id: 'python', icon: pythonIcon, label: 'Python' },
      { id: 'javascript', icon: javascriptIcon, label: 'JavaScript' },
      { id: 'typescript', icon: typescriptIcon, label: 'TypeScript' },
      { id: 'java', icon: javaIcon, label: 'Java' },
      { id: 'cpp', icon: cppIcon, label: 'C++' },
      { id: 'dart', icon: dartIcon, label: 'Dart' },
      { id: 'php', icon: phpIcon, label: 'PHP' },
      { id: 'html5', icon: html5Icon, label: 'HTML5' },
      { id: 'css3', icon: css3Icon, label: 'CSS3' },
      { id: 'bash', icon: bashIcon, label: 'Bash' },
    ],
  },
  {
    id: 'backend',
    titleKey: 'tech.rowBackend',
    items: [
      { id: 'fastapi', icon: fastapiIcon, label: 'FastAPI' },
      { id: 'flask', icon: flaskIcon, label: 'Flask' },
      { id: 'node', icon: nodeIcon, label: 'Node.js' },
      { id: 'express', icon: expressIcon, label: 'Express' },
    ],
  },
  {
    id: 'frontend',
    titleKey: 'tech.rowFrontend',
    items: [
      { id: 'react', icon: reactIcon, label: 'React' },
      { id: 'vue', icon: vueIcon, label: 'Vue.js' },
      { id: 'next', icon: nextIcon, label: 'Next.js' },
      { id: 'vite', icon: viteIcon, label: 'Vite' },
    ],
  },
  {
    id: 'datos',
    titleKey: 'tech.rowDatos',
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
    items: [
      { id: 'docker', icon: dockerIcon, label: 'Docker' },
      { id: 'git', icon: gitIcon, label: 'Git' },
      { id: 'github', icon: githubIcon, label: 'GitHub' },
      { id: 'render', icon: renderIcon, label: 'Render' },
      { id: 'vercel', icon: vercelIcon, label: 'Vercel' },
    ],
  },
  {
    id: 'sistemas',
    titleKey: 'tech.rowSistemas',
    items: [
      { id: 'linux', icon: linuxIcon, label: 'Linux' },
      { id: 'ubuntu', icon: ubuntuIcon, label: 'Ubuntu' },
      { id: 'popos', icon: siPopos, label: 'Pop!_OS' },
      { id: 'fedora', icon: siFedora, label: 'Fedora' },
      { id: 'debian', icon: siDebian, label: 'Debian' },
    ],
  },
  {
    id: 'ia',
    titleKey: 'tech.rowIA',
    items: [
      { id: 'gemini', icon: geminiIcon, label: 'Gemini' },
      { id: 'claude', icon: claudeIcon, label: 'Claude' },
      { id: 'claudecode', icon: claudeIcon, label: 'Claude Code' },
      { id: 'antigravity', icon: antigravityIcon, label: 'Antigravity' },
      { id: 'cursor', icon: cursorIcon, label: 'Cursor' },
    ],
  },
  {
    id: 'hardware',
    titleKey: 'tech.rowHardware',
    items: [
      { id: 'arduino', icon: arduinoIcon, label: 'Arduino' },
      { id: 'esp32', icon: esp32Icon, label: 'ESP32' },
    ],
  },
  {
    id: 'otros',
    titleKey: 'tech.rowOtros',
    items: [
      { id: 'flutter', icon: flutterIcon, label: 'Flutter' },
      { id: 'androidstudio', icon: siAndroidstudio, label: 'Android Studio' },
      { id: 'numpy', icon: siNumpy, label: 'NumPy' },
      { id: 'pandas', icon: siPandas, label: 'Pandas' },
      { id: 'sympy', icon: siSympy, label: 'SymPy' },
      { id: 'figma', icon: figmaIcon, label: 'Figma' },
      { id: 'postman', icon: postmanIcon, label: 'Postman' },
    ],
  },
]
