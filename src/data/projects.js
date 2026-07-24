import panaderiaImg from '../assets/images/projects/panaderia.png'
import sistemasImg from '../assets/images/projects/sistemas.png'
import ilpeaImg from '../assets/images/projects/ilpea.png'
import siesifImg from '../assets/images/projects/siesif.png'
import recolectaImg from '../assets/images/projects/recolecta.jpeg'
import pyprimesImg from '../assets/images/projects/pyprimes.png'
import rallyImg from '../assets/images/projects/rally.jpeg'
import playstationImg from '../assets/images/projects/playstation.jpeg'


export const projects = [
  {
    id: 1,
    slug: 'panaderia',
    planet: 'mercury',
    category: 'web',
    image: panaderiaImg,
    video: '/videos/panaderia.mp4',
    url: 'https://panaderia-la-flor.infy.uk',
    repo: 'https://github.com/Shinra3245/Panaderia-La-Flor',
    techs: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    credentials: {
      admin: { email: 'AdminPanaderia@gmail.com', password: '123' },
      customer: { email: 'usuario@panaderia.com', password: '123' },
    },
    es: {
      tag: 'Negocio',
      title: 'Panadería La Flor',
      badge: 'Sistema Completo',
      description:
        'Este sistema busca digitalizar la gestión interna y externa de una panadería, permitiendo administrar productos, usuarios, ventas y clientes desde un panel administrativo. Mejora la eficiencia operativa y ofrece una experiencia accesible al cliente.',
      features: [
        'Página dinámica con base de datos',
        'Panel de administración para productos y usuarios',
        'Autenticación de usuarios con roles (empleado, admin, cliente)',
        'Seguridad: los usuarios sin permisos de administración no pueden acceder al panel de control',
        'Generación de reportes en PDF y Excel',
      ],
    },
    en: {
      tag: 'Business',
      title: 'La Flor Bakery',
      badge: 'Complete System',
      description:
        'This system aims to digitalize the internal and external management of a bakery, allowing the administration of products, users, sales, and clients through an admin panel. It improves operational efficiency and provides an accessible customer experience.',
      features: [
        'Dynamic page with database',
        'Admin panel for products and users',
        'User authentication with roles (employee, admin, client)',
        'Security: users without admin permissions cannot access the control panel',
        'PDF and Excel report generation',
      ],
    },
  },
  {
    id: 2,
    slug: 'tickets',
    planet: 'venus',
    category: 'web',
    image: sistemasImg,
    video: '/videos/tickets.mp4',
    url: 'https://sistemas-presidencia.infinityfreeapp.com',
    repo: null,
    techs: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    es: {
      tag: 'Aplicación',
      title: 'Sistema de Tickets',
      badge: 'Gestión Completa',
      description:
        'Este sistema permite a los usuarios reportar problemas técnicos y recibir seguimiento por parte del área de sistemas. Agiliza la atención de fallas y mejora la organización del trabajo interno.',
      features: [
        'Gestión y administración de tickets por parte del área responsable',
        'Generación de reportes detallados en formato PDF',
        'Seguridad en el envío de formularios: validación de campos y protección contra inyecciones SQL',
        'Implementación de caché para evitar envíos duplicados, spam y bots',
        'Los datos del formulario se conservan aunque el usuario recargue la página o reciba un error',
      ],
    },
    en: {
      tag: 'Application',
      title: 'Ticket System',
      badge: 'Complete Management',
      description:
        'This system allows users to report technical issues and receive follow-up from the IT department. It speeds up issue resolution and improves internal work organization.',
      features: [
        'Ticket management and administration by the responsible department',
        'Detailed report generation in PDF format',
        'Form submission security: field validation and SQL injection protection',
        'Cache implementation to prevent duplicate submissions, spam, and bots',
        'Form data is preserved even if the page is refreshed or an error occurs',
      ],
    },
  },
  {
    id: 6,
    slug: 'ilpea',
    planet: 'earth',
    category: 'web',
    image: ilpeaImg,
    video: null,
    url: 'https://ilpeatransports.site',
    repo: null,
    techs: ['JavaScript', 'Firebase', 'RBAC', 'QR'],
    es: {
      tag: 'Plataforma Web',
      title: 'ILPEA Transports',
      badge: 'Gestión Logística',
      description:
        'Plataforma web para la gestión de usuarios y operaciones logísticas de transporte. Incluye un sistema completo de autenticación segura: asignación de credenciales por empleado, control de acceso basado en roles y generación de códigos QR dinámicos para seguimiento logístico.',
      features: [
        'Autenticación segura con credenciales por empleado',
        'Control de acceso basado en roles (RBAC)',
        'Generación de códigos QR dinámicos para seguimiento logístico',
        'Firebase como infraestructura y base de datos',
        'Liderazgo técnico bajo metodología Scrum',
      ],
    },
    en: {
      tag: 'Web Platform',
      title: 'ILPEA Transports',
      badge: 'Logistics Management',
      description:
        'Web platform for managing users and logistics operations for a transport company. Includes a complete secure authentication system: per-employee credentials, role-based access control, and dynamic QR code generation for logistics tracking.',
      features: [
        'Secure authentication with per-employee credentials',
        'Role-based access control (RBAC)',
        'Dynamic QR code generation for logistics tracking',
        'Firebase as infrastructure and database',
        'Technical leadership under Scrum methodology',
      ],
    },
  },
  {
    id: 7,
    slug: 'siesif',
    planet: 'mars',
    category: 'python',
    image: siesifImg,
    video: '/videos/siesif.mp4',
    url: 'https://siesif.onrender.com',
    repo: 'https://github.com/Shinra3245/SIESIF',
    techs: ['Python', 'Flask', 'SQLAlchemy', 'PostgreSQL'],
    es: {
      tag: 'Sistema Experto',
      title: 'SIESIF',
      badge: 'API en Producción',
      description:
        'Sistema Experto para Selección de Inversiones Financieras. API RESTful desacoplada en Python con Flask y SQLAlchemy, con un motor de inferencia lógico que retorna recomendaciones financieras dinámicas procesando peticiones JSON en tiempo real.',
      features: [
        'Motor de inferencia lógico con recomendaciones dinámicas',
        'Base de datos PostgreSQL para instrumentos financieros y perfiles de riesgo',
        'Coordiné un equipo de 5 desarrolladores bajo Scrum',
        'Despliegue en Render (Linux/Debian)',
        'Documentación técnica completa',
      ],
    },
    en: {
      tag: 'Expert System',
      title: 'SIESIF',
      badge: 'API in Production',
      description:
        'Expert System for Financial Investment Selection. A decoupled RESTful API in Python with Flask and SQLAlchemy, with a logical inference engine that returns dynamic financial recommendations by processing JSON requests in real time.',
      features: [
        'Logical inference engine with dynamic recommendations',
        'PostgreSQL database for financial instruments and risk profiles',
        'Coordinated a team of 5 developers under Scrum',
        'Deployed on Render (Linux/Debian)',
        'Complete technical documentation',
      ],
    },
  },
  {
    id: 8,
    slug: 'recolecta',
    planet: 'jupiter',
    category: 'movil',
    image: recolectaImg,
    video: null,
    url: null,
    repo: 'https://github.com/Shinra3245/RECOLECTA_APP',
    techs: ['Flutter', 'Riverpod', 'FastAPI', 'Supabase', 'Firebase FCM', 'OpenAI'],
    es: {
      tag: 'App Móvil',
      title: 'RECOLECTA APP',
      badge: '1er Lugar OnlinesHack 2026',
      description:
        'Sistema inteligente de recolección de residuos para el Servicio de Limpia de Celaya, Guanajuato. App móvil en Flutter que informa al ciudadano el tiempo estimado de llegada (ETA) del camión recolector sin exponer coordenadas GPS. Privacidad por diseño: el backend traduce la posición de la ruta (1→8) a texto ("Llega en ~15 min") y las notificaciones FCM nunca incluyen lat/lng.',
      features: [
        'Backend asíncrono en FastAPI con simulación de ruta cada 10s (APScheduler)',
        'PostgreSQL + Auth vía Supabase con Row Level Security (RLS) y JWT por rol',
        'Notificaciones push por topic de ruta con Firebase Cloud Messaging',
        'Chatbot de IA "Eco" (GPT-4o-mini) para guiar la separación de residuos',
        'Panel de administración para gestionar rutas, unidades y conductores',
        'Tres roles diferenciados: ciudadano, conductor y administrador',
      ],
    },
    en: {
      tag: 'Mobile App',
      title: 'RECOLECTA APP',
      badge: '1st Place OnlinesHack 2026',
      description:
        'Smart waste-collection system for the Sanitation Service of Celaya, Guanajuato. A Flutter mobile app that tells citizens the estimated arrival time (ETA) of the collection truck without exposing GPS coordinates. Privacy by design: the backend translates the route position (1→8) into text ("Arriving in ~15 min") and FCM notifications never include lat/lng.',
      features: [
        'Async FastAPI backend with a route simulation every 10s (APScheduler)',
        'PostgreSQL + Auth via Supabase with Row Level Security (RLS) and per-role JWT',
        'Route-topic push notifications with Firebase Cloud Messaging',
        'AI chatbot "Eco" (GPT-4o-mini) that guides waste separation',
        'Admin panel to manage routes, units and drivers',
        'Three differentiated roles: citizen, driver and administrator',
      ],
    },
  },
  {
    id: 9,
    slug: 'pyprimes',
    planet: 'saturn',
    category: 'python',
    image: pyprimesImg,
    video: '/videos/pyprimes.mp4',
    url: null,
    repo: 'https://github.com/Shinra3245/PyPrimes3D',
    techs: ['Python', 'PyOpenGL', 'NumPy', 'SymPy'],
    es: {
      tag: 'Proyecto Personal',
      title: 'PyPrimes 3D',
      badge: 'Motor Gráfico Interactivo',
      description:
        'Núcleo en Python 3.11 con PyOpenGL para renderizado 3D en tiempo real, usando programación orientada a objetos avanzada. Algoritmos de alto rendimiento con NumPy y SymPy para generación y factorización de números primos.',
      features: [
        'Renderizado 3D en tiempo real con PyOpenGL',
        'Algoritmos de generación y factorización de números primos',
        'Programación orientada a objetos avanzada',
        'Ejecutable portable optimizado',
      ],
    },
    en: {
      tag: 'Personal Project',
      title: 'PyPrimes 3D',
      badge: 'Interactive Graphics Engine',
      description:
        'A Python 3.11 core using PyOpenGL for real-time 3D rendering, built with advanced object-oriented programming. High-performance NumPy and SymPy algorithms for prime number generation and factorization.',
      features: [
        'Real-time 3D rendering with PyOpenGL',
        'Prime number generation and factorization algorithms',
        'Advanced object-oriented programming',
        'Optimized portable executable',
      ],
    },
  },
  {
    id: 10,
    slug: 'rally',
    planet: 'uranus',
    category: 'web',
    image: rallyImg,
    video: '/videos/rally.mp4',
    url: 'https://shinra3245.github.io/PAGINA_WEB_AYUDA_MUNDIA_INUNDACIONES/',
    repo: null,
    techs: ['React', 'Vite', 'Tailwind', 'Leaflet', 'Firebase'],
    es: {
      tag: 'Competencia',
      title: 'Alerta Temprana de Inundaciones',
      badge: 'Rally Latinoamericano de Innovación',
      description:
        'Plataforma web de alerta temprana ante inundaciones en Latinoamérica, desarrollada para el Rally Latinoamericano de Innovación. Centraliza monitoreo meteorológico en tiempo real y alertas automatizadas para comunidades vulnerables.',
      features: [
        'Mapa interactivo con zonas de riesgo por código de color (verde/amarillo/rojo)',
        'Dashboard meteorológico en tiempo real (precipitación, humedad, pronóstico 24h)',
        'Sistema de alertas automatizado según umbrales de precipitación',
        'Reportes ciudadanos verificados y geolocalización del usuario',
        'Notificaciones push y feed de noticias de último momento',
      ],
    },
    en: {
      tag: 'Competition',
      title: 'Flood Early-Warning System',
      badge: 'Latin American Innovation Rally',
      description:
        'Web platform for early flood warnings across Latin America, built for the Latin American Innovation Rally. It centralizes real-time weather monitoring and automated alerts for vulnerable communities.',
      features: [
        'Interactive map with color-coded risk zones (green/yellow/red)',
        'Real-time weather dashboard (rainfall, humidity, 24h forecast)',
        'Automated alert system based on precipitation thresholds',
        'Verified citizen reports and user geolocation',
        'Push notifications and a breaking-news feed',
      ],
    },
  },
  {
    id: 11,
    slug: 'playstation',
    planet: 'sun',
    category: 'hardware',
    image: playstationImg,
    video: '/videos/playstation.mp4',
    url: null,
    repo: null,
    techs: ['Arduino', 'C++', 'Electrónica', 'Hardware'],
    es: {
      tag: 'Hardware',
      title: 'Maqueta Arquitectura PlayStation 2',
      badge: 'Arquitectura de Computadoras',
      description:
        'Maqueta electrónica funcional que representa la arquitectura de hardware de la Sony PlayStation 2, elegida por su diseño heterogéneo y su multiprocesamiento asimétrico (ASMP). Trasciende la teoría con una representación visual y tangible del arranque de la consola.',
      features: [
        'Emula la interacción entre el Emotion Engine (MIPS de 128 bits) y el Graphics Synthesizer',
        'Simulación del flujo de datos y las señales de control durante el arranque',
        'Control mediante Arduino Uno y elementos electrónicos',
        'Representación tangible del multiprocesamiento asimétrico (ASMP)',
      ],
    },
    en: {
      tag: 'Hardware',
      title: 'PlayStation 2 Architecture Model',
      badge: 'Computer Architecture',
      description:
        'A functional electronic model representing the hardware architecture of the Sony PlayStation 2, chosen for its heterogeneous design and asymmetric multiprocessing (ASMP). It goes beyond theory with a visual, tangible representation of the console boot process.',
      features: [
        'Emulates the interaction between the Emotion Engine (128-bit MIPS) and the Graphics Synthesizer',
        'Simulation of the data flow and control signals during boot',
        'Controlled by an Arduino Uno and electronic components',
        'Tangible representation of asymmetric multiprocessing (ASMP)',
      ],
    },
  },
  {
    id: 12,
    slug: 'srac',
    planet: 'sun',
    planetHue: 190,
    category: 'hardware',
    image: null,
    video: '/videos/srac.mp4',
    url: null,
    repo: null,
    techs: ['ESP32', 'C++', 'IoT', 'Servo SG90', 'JavaScript'],
    es: {
      tag: 'Robótica',
      title: 'S.R.A.S.C.',
      badge: 'Robótica autónoma · IoT',
      description:
        'Sistema Robótico Autónomo de Saneamiento y Clasificación: prototipo de robot móvil que se desplaza en un entorno controlado, detecta residuos con sensores y los clasifica con un brazo robótico de 4 grados de libertad. Integra electrónica, programación embebida, redes e interfaces gráficas en una sola solución IoT.',
      features: [
        'Control y monitoreo en tiempo real desde una interfaz web (ESP32 con WiFi)',
        'Brazo robótico de 4 grados de libertad con servos SG90 (PWM)',
        'Seguimiento de línea con sensores infrarrojos TCRT5000',
        'Evasión de obstáculos con sensor ultrasónico HC-SR04',
        'Arquitectura cliente-servidor sobre hardware de bajo costo',
      ],
    },
    en: {
      tag: 'Robotics',
      title: 'S.R.A.S.C.',
      badge: 'Autonomous robotics · IoT',
      description:
        'Autonomous Cleaning and Sorting Robotic System: a mobile robot prototype that moves through a controlled environment, detects waste with sensors and sorts it with a 4-DOF robotic arm. It integrates electronics, embedded programming, networking and graphical interfaces into a single IoT solution.',
      features: [
        'Real-time control and monitoring from a web interface (ESP32 with WiFi)',
        '4-DOF robotic arm with SG90 servos (PWM)',
        'Line following with TCRT5000 infrared sensors',
        'Obstacle avoidance with an HC-SR04 ultrasonic sensor',
        'Client-server architecture on low-cost hardware',
      ],
    },
  },
]
