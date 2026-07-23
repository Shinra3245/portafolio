import pyprimesImg from '../assets/images/projects/pyprimes.png'
import siesifImg from '../assets/images/projects/siesif.png'
import panaderiaImg from '../assets/images/projects/panaderia.png'
import sistemasImg from '../assets/images/projects/sistemas.png'
import rallyImg from '../assets/images/projects/rally.jpeg'
import playstationImg from '../assets/images/projects/playstation.jpeg'
import ilpeaImg from '../assets/images/projects/ilpea.png'
import srascImg from '../assets/images/projects/SRASC.jpeg'
import recolectaImg from '../assets/images/projects/recolecta.jpeg'
import lincehackImg from '../assets/images/projects/Lincehack.jpeg'
import hackOnLincesImg from '../assets/images/projects/HackOnLinces.jpeg'

export const experience = [
  {
    id: 'pyprimes',
    date: '2023 – 2024',
    type: 'role',
    image: pyprimesImg,
    techs: ['Python', 'PyOpenGL', 'NumPy', 'SymPy'],
    es: {
      title: 'PyPrimes 3D',
      role: 'Desarrollador Python · Proyecto Personal',
      description:
        'Motor gráfico interactivo: núcleo en Python 3.11 con PyOpenGL para renderizado 3D en tiempo real y algoritmos de alto rendimiento para generación y factorización de números primos.',
    },
    en: {
      title: 'PyPrimes 3D',
      role: 'Python Developer · Personal Project',
      description:
        'Interactive graphics engine: a Python 3.11 core with PyOpenGL for real-time 3D rendering, plus high-performance algorithms for prime number generation and factorization.',
    },
  },
  {
    id: 'siesif',
    date: '2024 – Presente',
    type: 'role',
    image: siesifImg,
    techs: ['Python', 'Flask', 'SQLAlchemy', 'PostgreSQL'],
    es: {
      title: 'SIESIF',
      role: 'Arquitecto Backend & Desarrollador API',
      description:
        'Sistema Experto para Selección de Inversiones Financieras, en producción. Coordiné un equipo de 5 desarrolladores bajo Scrum, con despliegue en Render.',
    },
    en: {
      title: 'SIESIF',
      role: 'Backend Architect & API Developer',
      description:
        'Expert System for Financial Investment Selection, in production. Coordinated a team of 5 developers under Scrum, deployed on Render.',
    },
  },
  {
    id: 'panaderia',
    date: 'Mayo 2025 – Junio 2025',
    type: 'role',
    image: panaderiaImg,
    techs: ['PHP', 'MySQL', 'JavaScript'],
    es: {
      title: 'Sistema de Gestión para Panadería',
      role: 'Desarrollador Full-Stack · Proyecto Académico',
      description:
        'Carrito de compras, selección de productos y disminución automática de inventario, módulos de seguridad y autenticación, e integración de APIs de navegación y lectura de código de barras.',
    },
    en: {
      title: 'Bakery Management System',
      role: 'Full-Stack Developer · Academic Project',
      description:
        'Shopping cart, product selection and automatic inventory reduction, security and authentication modules, and integration of navigation APIs and barcode scanning.',
    },
  },
  {
    id: 'presidencia',
    date: 'Junio 2025 – Julio 2025',
    type: 'role',
    image: sistemasImg,
    techs: ['MySQL', 'PostgreSQL'],
    es: {
      title: 'Plataforma de Gestión de Solicitudes',
      role: 'Desarrollador Backend · Área de Sistemas, Presidencia de Apaseo el Grande',
      description:
        'Esquema de base de datos para gestión eficiente de tickets de soporte técnico, con interfaz de seguimiento de estatus que mejoró los tiempos de respuesta del área.',
    },
    en: {
      title: 'Request Management Platform',
      role: 'Backend Developer · IT Department, Apaseo el Grande City Hall',
      description:
        'Database schema for efficient technical support ticket management, with a status-tracking interface that improved the department\'s response times.',
    },
  },
  {
    id: 'rally',
    date: 'Octubre 2025',
    type: 'hackathon',
    badge: 'Participante · Alerta Temprana',
    link: 'https://shinra3245.github.io/PAGINA_WEB_AYUDA_MUNDIA_INUNDACIONES/',
    image: rallyImg,
    es: {
      title: 'Rally Latinoamericano de Innovación',
      role: 'Desarrollador Web Full-Stack · Equipo Code and Cells',
      description:
        'Hackathon de innovación donde mi equipo desarrolló SAT-IA, un sistema de alerta temprana de inundaciones basado en IoT: ESP32 con sensor ultrasónico y energía solar para monitorear el nivel del agua 24/7 y emitir alertas. Mi aportación fue la plataforma web: mapa interactivo de riesgo en tiempo real, dashboard meteorológico y alertas para autoridades y ciudadanos.',
      skills: ['Trabajo en equipo', 'Resolución de problemas', 'Gestión del tiempo', 'Trabajo bajo presión'],
    },
    en: {
      title: 'Latin American Innovation Rally',
      role: 'Full-Stack Web Developer · Code and Cells Team',
      description:
        'Innovation hackathon where my team built SAT-IA, an IoT-based flood early-warning system: an ESP32 with an ultrasonic sensor and solar power to monitor water levels 24/7 and issue alerts. My contribution was the web platform: a real-time interactive risk map, a weather dashboard, and alerts for authorities and citizens.',
      skills: ['Teamwork', 'Problem solving', 'Time management', 'Working under pressure'],
    },
  },
  {
    id: 'playstation',
    date: 'Diciembre 2025',
    type: 'hardware',
    badge: 'Hardware · ASMP',
    image: playstationImg,
    techs: ['Arduino', 'C++', 'Electrónica', 'Hardware'],
    es: {
      title: 'Maqueta Arquitectura PlayStation 2',
      role: 'Desarrollador de Hardware & Simulación · Arquitectura de Computadoras',
      description:
        'Maqueta electrónica funcional de la arquitectura de la PlayStation 2: el Emotion Engine (MIPS de 128 bits) y el Graphics Synthesizer bajo multiprocesamiento asimétrico (ASMP). Con Arduino simulé el flujo de datos y las señales de control durante el arranque de la consola.',
    },
    en: {
      title: 'PlayStation 2 Architecture Model',
      role: 'Hardware & Simulation Developer · Computer Architecture',
      description:
        'A functional electronic model of the PlayStation 2 architecture: the Emotion Engine (128-bit MIPS) and the Graphics Synthesizer under asymmetric multiprocessing (ASMP). Used Arduino to simulate the data flow and control signals during the console boot sequence.',
    },
  },
  {
    id: 'lincehack',
    date: 'Abril 2026',
    type: 'hackathon',
    badge: '1.er Lugar · Innovación y Tecnología',
    image: lincehackImg,
    es: {
      title: 'LinceHack 2026',
      role: '1.er Lugar — Categoría Innovación y Tecnología',
      description:
        'Líder de equipo en hackathon de 24 horas. Desarrollé la arquitectura completa de autenticación segura del Sistema Web ILPEA Transports (credenciales por empleado, RBAC, códigos QR dinámicos) bajo metodología Scrum, bajo presión de competencia.',
      skills: ['Liderazgo', 'Trabajo en equipo', 'Scrum', 'Trabajo bajo presión'],
    },
    en: {
      title: 'LinceHack 2026',
      role: '1st Place — Innovation & Technology Category',
      description:
        'Team lead in a 24-hour hackathon. Built the full secure-authentication architecture for the ILPEA Transports web system (per-employee credentials, RBAC, dynamic QR codes) under Scrum, under competition pressure.',
      skills: ['Leadership', 'Teamwork', 'Scrum', 'Working under pressure'],
    },
  },
  {
    id: 'ilpea',
    date: 'Abril 2026 – Presente',
    type: 'role',
    image: ilpeaImg,
    techs: ['JavaScript', 'Firebase', 'RBAC', 'QR'],
    es: {
      title: 'Sistema Web ILPEA Transports',
      role: 'Desarrollador Backend & Seguridad · Líder de Equipo',
      description:
        'Plataforma web para la gestión de usuarios y operaciones logísticas de transporte, en producción (ilpeatransports.site). Integré Firebase como infraestructura y base de datos para escalar el proyecto.',
    },
    en: {
      title: 'ILPEA Transports Web System',
      role: 'Backend & Security Developer · Team Lead',
      description:
        'Web platform for managing users and logistics operations for a transport company, in production (ilpeatransports.site). Integrated Firebase as infrastructure and database to scale the project.',
    },
  },
  {
    id: 'srac',
    date: 'Mayo 2026',
    type: 'hardware',
    badge: 'Robótica · IoT',
    image: srascImg,
    techs: ['ESP32', 'C++', 'IoT', 'Servo SG90', 'JavaScript'],
    es: {
      title: 'S.R.A.S.C.',
      role: 'Firmware & Interfaz Web · Materia Lenguaje de Interfaz',
      description:
        'Robot móvil autónomo de saneamiento que detecta y clasifica residuos con un brazo robótico de 4 grados de libertad. Programé el ESP32 (WiFi), los sensores (línea infrarroja y ultrasónico HC-SR04) y una interfaz web para control remoto y monitoreo en tiempo real.',
    },
    en: {
      title: 'S.R.A.S.C.',
      role: 'Firmware & Web Interface · Interface Languages Course',
      description:
        'Autonomous cleaning robot that detects and sorts waste with a 4-DOF robotic arm. Programmed the ESP32 (WiFi), the sensors (IR line + HC-SR04 ultrasonic) and a web interface for remote control and real-time monitoring.',
    },
  },
  {
    id: 'onlineshack',
    date: 'Mayo 2026',
    type: 'hackathon',
    badge: 'Participante · Privacidad por Diseño',
    image: hackOnLincesImg,
    imagePortrait: true,
    es: {
      title: 'OnlinesHack 2026',
      role: 'Participante — Categoría Privacidad por Diseño',
      description:
        'Líder técnico de un equipo de 4 personas. Construí la arquitectura backend completa de RECOLECTA APP: API asíncrona en FastAPI, PostgreSQL con Row Level Security en Supabase, JWT con roles, y validación de domicilio con OCR que borra la imagen original.',
      skills: ['Liderazgo técnico', 'Trabajo en equipo', 'Comunicación', 'Resolución de problemas'],
    },
    en: {
      title: 'OnlinesHack 2026',
      role: 'Participant — Privacy by Design Category',
      description:
        'Technical lead of a 4-person team. Built the complete backend architecture for RECOLECTA APP: async FastAPI API, PostgreSQL with Row Level Security on Supabase, JWT with roles, and address validation with OCR that deletes the original image.',
      skills: ['Technical leadership', 'Teamwork', 'Communication', 'Problem solving'],
    },
  },
  {
    id: 'recolecta',
    date: 'Mayo 2026 – Presente',
    type: 'role',
    image: recolectaImg,
    imagePortrait: true,
    techs: ['Flutter', 'FastAPI', 'PostgreSQL', 'Firebase'],
    es: {
      title: 'RECOLECTA APP',
      role: 'Líder Backend & Arquitecto de Seguridad',
      description:
        'App móvil en Flutter que notifica a ciudadanos el tiempo estimado de llegada del camión recolector sin exponer coordenadas GPS en tiempo real. Arquitectura de privacidad por diseño de punta a punta.',
    },
    en: {
      title: 'RECOLECTA APP',
      role: 'Backend Lead & Security Architect',
      description:
        'A Flutter mobile app that notifies citizens of the estimated arrival time of the collection truck without exposing real-time GPS coordinates. End-to-end privacy-by-design architecture.',
    },
  },
]
