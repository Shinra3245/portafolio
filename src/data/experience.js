import pyprimesImg from '../assets/images/projects/pyprimes.webp'
import siesifImg from '../assets/images/projects/siesif.webp'
import panaderiaImg from '../assets/images/projects/panaderia.webp'
import sistemasImg from '../assets/images/projects/sistemas.webp'
import rallyImg from '../assets/images/projects/rally.webp'
import playstationImg from '../assets/images/projects/playstation.webp'
import ilpeaImg from '../assets/images/projects/ilpea.webp'
import srascImg from '../assets/images/projects/SRASC.webp'
import recolectaImg from '../assets/images/projects/recolecta.webp'
import hackOnLincesImg from '../assets/images/projects/HackOnLinces.webp'
import { atlasGallery, dueloGallery, hackatecGallery, lincehackCertificateGallery, vivaOrdenGallery, vivaOrdenVideo, vivaOrdenVideoPoster } from './recentProjectMedia'
import { journeyToMarsGallery, nasaSpaceAppsGallery } from './nasaSpaceAppsMedia'

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
      date: '2023 – 2024',
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
      date: '2024 – Present',
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
      date: 'May 2025 – June 2025',
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
        'Esquema de base de datos para la gestión y seguimiento eficiente de tickets de soporte técnico e incidencias del área.',
    },
    en: {
      date: 'June 2025 – July 2025',
      title: 'Request Management Platform',
      role: 'Backend Developer · IT Department, Apaseo el Grande City Hall',
      description:
        'Database schema for efficient technical support ticket management and departmental issue tracking.',
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
        'Participé en un prototipo web para explorar cómo comunicar riesgos de inundación mediante un mapa y un panel meteorológico. La propuesta no se validó en campo; no se afirma monitoreo IoT continuo ni alertas automáticas operativas.',
      skills: ['Trabajo en equipo', 'Resolución de problemas', 'Gestión del tiempo', 'Trabajo bajo presión'],
    },
    en: {
      date: 'October 2025',
      badge: 'Participant · Early Warning',
      title: 'Latin American Innovation Rally',
      role: 'Full-Stack Web Developer · Code and Cells Team',
      description:
        'I helped build a web prototype exploring how to communicate flood risks through a map and a weather panel. The proposal was not field-validated; continuous IoT monitoring and operational automated alerts are not claimed.',
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
        'Construí la mayor parte de una maqueta didáctica sobre la arquitectura de PlayStation 2. Conecté indicadores LED y una pantalla, y programé un Arduino Uno para representar información y etapas del funcionamiento de la consola. No emula el hardware original.',
    },
    en: {
      date: 'December 2025',
      badge: 'Hardware · ASMP',
      title: 'PlayStation 2 Architecture Model',
      role: 'Hardware & Simulation Developer · Computer Architecture',
      description:
        'I built most of a teaching model about the PlayStation 2 architecture. I connected LED indicators and a display, then programmed an Arduino Uno to represent information and stages of the console process. It does not emulate the original hardware.',
    },
  },
  {
    id: 'lincehack',
    date: 'Abril 2026',
    type: 'hackathon',
    badge: '1.er Lugar · Reto ILPEA',
    gallery: lincehackCertificateGallery,
    es: {
      title: 'LinceHack 2026',
      role: 'Primer lugar · Reto presentado por ILPEA',
      description:
        'El equipo obtuvo el primer lugar en el reto presentado por ILPEA durante LinceHack 2026, realizado en el Instituto Tecnológico de Celaya. El certificado y las fotografías del reconocimiento documentan el resultado. Mi contribución se centró en el módulo de autenticación segura del Sistema Web ILPEA Transports (credenciales por empleado, RBAC y códigos QR dinámicos) bajo metodología Scrum.',
      skills: ['Liderazgo', 'Trabajo en equipo', 'Scrum', 'Trabajo bajo presión'],
    },
    en: {
      date: 'April 2026',
      badge: '1st Place · ILPEA Challenge',
      title: 'LinceHack 2026',
      role: 'First place · Challenge presented by ILPEA',
      description:
        'The team placed first in the challenge presented by ILPEA at LinceHack 2026, held at Instituto Tecnológico de Celaya. The certificate and award photos document the result. My contribution focused on the secure authentication module for the ILPEA Transports web system (per-employee credentials, RBAC and dynamic QR codes) under Scrum.',
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
      date: 'April 2026 – Present',
      title: 'ILPEA Transports Web System',
      role: 'Backend & Security Developer · Team Lead',
      description:
        'Web platform for managing users and logistics operations for a transport company, in production (ilpeatransports.site). Integrated Firebase as infrastructure and database to scale the project.',
    },
  },
  {
    id: 'bellezabot',
    date: 'Abril 2026',
    type: 'role',
    link: 'https://github.com/Shinra3245/BellezaBot',
    repoLink: true,
    techs: ['Node.js', 'PostgreSQL', 'React', 'WhatsApp Cloud API'],
    es: {
      title: 'BellezaBot',
      role: 'Desarrollo Full Stack · Automatización de citas',
      description:
        'Sistema para negocios de estética que integra un asistente de IA por WhatsApp con un panel web. Consultas de disponibilidad, reservas, reprogramaciones y recordatorios conectados con la agenda de cada negocio.',
    },
    en: {
      date: 'April 2026',
      title: 'BellezaBot',
      role: 'Full Stack Development · Appointment Automation',
      description:
        'A system for beauty businesses that connects an AI assistant on WhatsApp with a web panel. Availability checks, bookings, rescheduling and reminders are linked to each business calendar.',
    },
  },
  {
    id: 'srac',
    date: 'Mayo 2026',
    type: 'hardware',
    badge: 'Prototipo de robótica',
    image: srascImg,
    techs: ['ESP32', 'C++', 'Sensores', 'Servos', 'JavaScript'],
    es: {
      title: 'S.R.A.S.C.',
      role: 'Firmware & Interfaz Web · Materia Lenguaje de Interfaz',
      description:
        'Prototipo académico de robot móvil para saneamiento y clasificación de residuos. Integré programación con ESP32, sensores genéricos (línea, ultrasónico, color), motores y garra con servos; el alcance corresponde a pruebas en entorno controlado sin modelos de hardware inferidos.',
    },
    en: {
      date: 'May 2026',
      badge: 'Robotics prototype',
      title: 'S.R.A.S.C.',
      role: 'Firmware & Web Interface · Interface Languages Course',
      description:
        'Academic mobile-robot prototype for waste collection and sorting. I integrated ESP32 programming, generic sensors (line, ultrasonic, color), motors and a servo gripper; the scope corresponds to controlled-environment testing without inferred hardware models.',
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
        'En un equipo de cuatro, trabajé en la API FastAPI y el acceso a datos con PostgreSQL/Supabase, RLS y JWT por roles. La validación automática de domicilios con OCR no fue implementada.',
      skills: ['Liderazgo técnico', 'Trabajo en equipo', 'Comunicación', 'Resolución de problemas'],
    },
    en: {
      date: 'May 2026',
      badge: 'Participant · Privacy by Design',
      title: 'OnlinesHack 2026',
      role: 'Participant — Privacy by Design Category',
      description:
        'As part of a four-person team, I worked on the FastAPI API and data access with PostgreSQL/Supabase, RLS and role-based JWT. Automatic address validation with OCR was not implemented.',
      skills: ['Backend development', 'Teamwork', 'Communication', 'Problem solving'],
    },
  },
  {
    id: 'recolecta',
    date: 'Mayo 2026',
    type: 'role',
    image: recolectaImg,
    imagePortrait: true,
    techs: ['Flutter', 'FastAPI', 'PostgreSQL', 'Firebase'],
    es: {
      title: 'RECOLECTA APP',
      role: 'Backend y acceso a datos · Equipo de cuatro',
      description:
        'Propuesta de app móvil en Flutter para comunicar el tiempo estimado de llegada del camión sin exponer sus coordenadas GPS. Mi contribución se centró en la API FastAPI y el acceso a datos con PostgreSQL/Supabase, RLS y JWT por rol; algunas rutas y notificaciones son simuladas y no incluye validación OCR.',
    },
    en: {
      date: 'May 2026',
      title: 'RECOLECTA APP',
      role: 'Backend and Data Access · Four-person Team',
      description:
        'A Flutter mobile-app proposal that communicates the truck arrival estimate without exposing GPS coordinates. My contribution focused on the FastAPI API and data access with PostgreSQL/Supabase, RLS and role-based JWT; some routes and notifications are simulated and it does not include OCR validation.',
    },
  },
  {
    id: 'duelodev',
    date: 'Agosto 2026',
    type: 'role',
    image: dueloGallery[0].src,
    link: 'https://github.com/Shinra3245/Duelo-Dev/tree/feat/semana-0-cimientos',
    repoLink: true,
    techs: ['Next.js', 'TypeScript', 'Python', 'PostgreSQL', 'Redis'],
    es: {
      title: 'DueloDev',
      role: 'Desarrollo de plataforma de programación competitiva',
      description:
        'Proyecto de una plataforma de duelos de programación en Python. El diseño separa la interfaz web, API, comunicación y evaluación de soluciones; no se publican métricas de uso o rendimiento.',
    },
    en: {
      date: 'August 2026',
      title: 'DueloDev',
      role: 'Competitive Programming Platform Development',
      description:
        'A Python programming duel platform project. Its design separates the web interface, API, communication and solution evaluation; no usage or performance metrics are published.',
    },
  },
  {
    id: 'atlas',
    date: 'Septiembre 2026',
    type: 'role',
    image: atlasGallery[0].src,
    link: 'https://github.com/Shinra3245/ATLAS',
    repoLink: true,
    techs: ['Python', 'FastAPI', 'React', 'Leaflet'],
    es: {
      title: 'ATLAS',
      role: 'Desarrollo de plataforma de análisis territorial',
      description:
        'Plataforma para evaluar evidencia territorial y comparar ubicaciones de Irapuato y Celaya según el tipo de obra. Integra mapa, análisis explicable, fuentes y una ficha preliminar imprimible.',
    },
    en: {
      date: 'September 2026',
      title: 'ATLAS',
      role: 'Territorial Analysis Platform Development',
      description:
        'A platform to evaluate territorial evidence and compare locations in Irapuato and Celaya by project type. It combines a map, explainable analysis, sources and a printable preliminary report.',
    },
  },
  {
    id: 'hackatec-regional-2026',
    date: '28 de septiembre – 1 de octubre de 2026',
    type: 'hackathon',
    badge: 'Etapa Regional · Irapuato',
    gallery: hackatecGallery,
    es: {
      title: 'HackaTec Regional · InnovaTecNM 2026',
      role: 'Participante con ATLAS · Tecnológico de Irapuato',
      description:
        'Participé con el equipo de ATLAS en la etapa regional de HackaTec, dentro de InnovaTecNM 2026, celebrada del 28 de septiembre al 1 de octubre en el Tecnológico de Irapuato. Coordiné tareas y contribuí al backend/integración con Python y FastAPI; presentamos la plataforma para apoyar la prefactibilidad territorial en Irapuato y Celaya.',
      skills: ['Trabajo en equipo', 'Integración de sistemas', 'Comunicación técnica', 'Análisis territorial'],
    },
    en: {
      date: 'September 28 – October 1, 2026',
      badge: 'Regional Stage · Irapuato',
      title: 'Regional HackaTec · InnovaTecNM 2026',
      role: 'ATLAS Participant · Tecnológico de Irapuato',
      description:
        'I participated with the ATLAS team in the regional HackaTec stage of InnovaTecNM 2026, held September 28–October 1 at the Tecnológico de Irapuato. I coordinated tasks and contributed to the Python/FastAPI backend integration; we presented the platform to support territorial pre-feasibility in Irapuato and Celaya.',
      skills: ['Teamwork', 'Systems integration', 'Technical communication', 'Territorial analysis'],
    },
  },
  {
    id: 'vivaorden-pizzas-implementation-2026',
    date: '2026 – Presente',
    type: 'role',
    badge: 'Primera implementación · Pizzas a la Leña',
    gallery: vivaOrdenGallery,
    video: vivaOrdenVideo,
    videoPoster: vivaOrdenVideoPoster,
    es: {
      title: 'VivaOrden · Pizzas a la Leña',
      role: 'Desarrollo del sistema · Primer caso de implementación',
      description:
        'VivaOrden se desarrolló e implementó primero para Pizzas a la Leña. La demostración muestra el POS, el menú digital móvil y las pantallas de acceso de la app de reparto desde pruebas y capturas públicas del menú. No se muestra una comanda activa, una sesión de repartidor iniciada ni pagos en línea. El código fuente es privado.',
      skills: ['Diseño de sistemas', 'Operación de restaurantes', 'Integración de flujos'],
    },
    en: {
      date: '2026 – Present',
      badge: 'First implementation · Pizzas a la Leña',
      title: 'VivaOrden · Pizzas a la Leña',
      role: 'System development · First implementation case',
      description:
        'VivaOrden was first developed and implemented for Pizzas a la Leña. The demo shows the POS, mobile digital menu and delivery-app sign-in screens from the test environment and public menu captures. It does not show an active kitchen ticket, a signed-in courier session or online payments. The source code is private.',
      skills: ['Systems design', 'Restaurant operations', 'Workflow integration'],
    },
  },
  {
    id: 'nasa-space-apps-2026',
    date: '14–15 de noviembre de 2026',
    type: 'hackathon',
    badge: 'Participante · Houston, We Code',
    gallery: nasaSpaceAppsGallery,
    link: 'https://www.spaceappschallenge.org/2026/challenges/junior-astronaut-mission-trainer/',
    es: {
      title: 'NASA Space Apps Challenge · Querétaro',
      role: 'Participante del equipo Houston, We Code · UNAQ',
      description:
        'Con Houston, We Code participé en la planeación y coordinación del proyecto, el modelado 3D y la animación principal de Journey to Mars. El equipo publicó el prototipo de forma independiente y no lo envió a evaluación oficial de NASA Space Apps.',
      skills: ['Desarrollo colaborativo', 'Diseño de juegos educativos', 'Trabajo bajo presión'],
    },
    en: {
      date: 'November 14–15, 2026',
      badge: 'Participant · Houston, We Code',
      title: 'NASA Space Apps Challenge · Querétaro',
      role: 'Houston, We Code team participant · UNAQ',
      description:
        'With Houston, We Code, I contributed to project planning and coordination, 3D modeling and the main animation for Journey to Mars. The team independently published the prototype and did not submit it for official NASA Space Apps judging.',
      skills: ['Collaborative development', 'Educational game design', 'Working under pressure'],
    },
  },
  {
    id: 'journey-to-mars-project-2026',
    date: '14–15 de noviembre de 2026',
    type: 'role',
    badge: 'Proyecto del hackathon · Prototipo 3D',
    gallery: journeyToMarsGallery,
    link: 'https://nave-aurora-hack-nasa-2026.shinra3245.workers.dev/',
    techs: ['Three.js', 'JavaScript', 'Web Audio', 'glTF/GLB', 'Cloudflare Workers'],
    es: {
      title: 'Journey to Mars',
      role: 'Juego educativo 3D · Houston, We Code',
      description:
        'Videojuego educativo 3D para navegador, creado durante NASA Space Apps Challenge 2026 en Querétaro. La tripulación debe sobrevivir en Marte administrando recursos y tomando decisiones durante sus misiones. Contribuí a la planeación y coordinación, el modelado 3D y la animación principal. El prototipo se publicó de forma independiente y no se envió a evaluación oficial de NASA Space Apps.',
      skills: ['Desarrollo de juegos', 'Modelado 3D', 'Animación', 'Trabajo colaborativo'],
    },
    en: {
      date: 'November 14–15, 2026',
      badge: 'Hackathon project · 3D prototype',
      title: 'Journey to Mars',
      role: '3D educational game · Houston, We Code',
      description:
        'A browser-based 3D educational game created during NASA Space Apps Challenge 2026 in Querétaro. The crew must survive on Mars by managing resources and making decisions throughout its missions. I contributed to planning and coordination, 3D modeling and the main animation. The prototype was independently published and was not submitted for official NASA Space Apps judging.',
      skills: ['Game development', '3D modeling', 'Animation', 'Collaborative development'],
    },
  },
]
