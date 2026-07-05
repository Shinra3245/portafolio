import panaderiaImg from '../assets/images/projects/panaderia.png'
import sistemasImg from '../assets/images/projects/sistemas.png'
import comercializadoraImg from '../assets/images/projects/comercializadora.png'
import portafolioImg from '../assets/images/projects/portafolio-alejandro.png'
import sikiImg from '../assets/images/projects/siki-mexico.png'

// category: 'web' | 'python' | 'movil' — usado para los tabs de la sección Proyectos
// image/video: null = todavía no enviado; ProjectCard/ProjectModal muestran un placeholder
// mientras tanto (pendiente: Omar enviará capturas/video de cada proyecto)

// Contenido real de los 5 proyectos (index.html + lang/projects-es.json + lang/projects-en.json)
export const projects = [
  {
    id: 1,
    slug: 'panaderia',
    category: 'web',
    image: panaderiaImg,
    video: null,
    url: 'https://panaderia-la-flor.infy.uk',
    repo: null,
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
    category: 'web',
    image: sistemasImg,
    video: null,
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
    id: 3,
    slug: 'comercializadora',
    category: 'web',
    image: comercializadoraImg,
    video: null,
    url: 'https://comercializadora-onaldi.ct.ws',
    repo: null,
    techs: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    es: {
      tag: 'Negocio',
      title: 'Página de Comercializadora',
      badge: 'Sitio Web Corporativo',
      description:
        'Página estática diseñada para presentar la imagen y catálogo de una empresa distribuidora. Su objetivo es facilitar el contacto comercial y mejorar la presencia digital del negocio.',
      features: [
        'Encabezado personalizado y diseño adaptable',
        'Sección de productos y servicios organizada por categorías',
        'Carruseles dinámicos para una mejor visualización de productos y promociones',
        'Presentación clara de servicios destacados',
        'Canal de contacto directo para clientes potenciales (WhatsApp, formulario o correo)',
      ],
    },
    en: {
      tag: 'Business',
      title: 'Comercializadora',
      badge: 'Corporate Website',
      description:
        "Static page designed to present the branding and catalog of a distribution company. Its goal is to facilitate commercial contact and improve the business's digital presence.",
      features: [
        'Custom header and responsive design',
        'Product and service section organized by categories',
        'Dynamic carousels for better visualization of products and promotions',
        'Clear presentation of featured services',
        'Direct contact channel for potential clients (WhatsApp, form or email)',
      ],
    },
  },
  {
    id: 4,
    slug: 'portafolio',
    category: 'web',
    image: portafolioImg,
    video: null,
    url: 'https://alejandro-sarmiento.netlify.app',
    repo: null,
    techs: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    es: {
      tag: 'Portafolio',
      title: 'Portafolio Digital Audiovisual',
      badge: 'Sitio Web Profesional',
      description:
        'Portafolio digital profesional de un especialista en edición de video y audio, desarrollado para mostrar proyectos audiovisuales que van desde contenido para redes sociales hasta piezas publicitarias y documentales.',
      features: [
        'Diseño responsive y moderno',
        'Galería de proyectos multimedia',
        'Secciones categorizadas por tipo',
        'Formulario de contacto funcional',
        'Integración con WhatsApp',
      ],
    },
    en: {
      tag: 'Portfolio',
      title: 'Digital Audiovisual Portfolio',
      badge: 'Professional Website',
      description:
        'Professional digital portfolio of a video and audio editing specialist, developed to showcase audiovisual projects ranging from social media content to advertising pieces and documentaries.',
      features: [
        'Modern and responsive design',
        'Multimedia project gallery',
        'Sections categorized by type',
        'Functional contact form',
        'WhatsApp integration',
      ],
    },
  },
  {
    id: 5,
    slug: 'siki',
    category: 'web',
    image: sikiImg,
    video: null,
    url: 'https://siki.com.mx',
    repo: null,
    techs: ['Tiendanube', 'HTML5', 'CSS3', 'JavaScript'],
    es: {
      tag: 'E-commerce',
      title: 'Siki México',
      badge: 'Tienda E-commerce',
      description:
        'Tienda en línea especializada en uniformes deportivos de alta calidad para equipos amateurs y profesionales. Plataforma desarrollada en Tiendanube con diseño responsivo y estructura adaptada a las necesidades específicas del negocio.',
      features: [
        'Tienda en línea completamente funcional',
        'Diseño responsivo y moderno',
        'Catálogo organizado por categorías',
        'Sistema de pagos integrado',
        'Optimización para conversiones',
      ],
    },
    en: {
      tag: 'E-commerce',
      title: 'Siki Mexico',
      badge: 'E-commerce Store',
      description:
        'Online store specializing in high-quality sports uniforms for amateur and professional teams. Platform developed on Tiendanube with a responsive design and a structure adapted to the specific needs of the business.',
      features: [
        'Fully functional online store',
        'Responsive and modern design',
        'Catalog organized by categories',
        'Integrated payment system',
        'Conversion optimization',
      ],
    },
  },
  {
    id: 6,
    slug: 'ilpea',
    category: 'web',
    image: null,
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
    category: 'python',
    image: null,
    video: null,
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
    category: 'movil',
    image: null,
    video: null,
    url: null,
    repo: 'https://github.com/Shinra3245/RECOLECTA_APP',
    techs: ['Flutter', 'FastAPI', 'PostgreSQL', 'Firebase'],
    es: {
      tag: 'App Móvil',
      title: 'RECOLECTA APP',
      badge: '1er Lugar OnlinesHack 2026',
      description:
        'Sistema de recolección inteligente de residuos: app móvil en Flutter que notifica a los ciudadanos el tiempo estimado de llegada del camión recolector sin exponer coordenadas GPS en tiempo real. Arquitectura de privacidad por diseño: el ciudadano solo recibe texto ("Llega en ~15 min"), el mapa con coordenadas es exclusivo del panel admin.',
      features: [
        'Backend API REST asíncrona en FastAPI + SQLAlchemy',
        'PostgreSQL vía Supabase con Row Level Security (RLS)',
        'Notificaciones push por topic de ruta con Firebase Cloud Messaging',
        'Validación de domicilio con OCR (Tesseract) que borra la imagen tras extraer la dirección',
        'Roles: ciudadano, chofer y admin',
      ],
    },
    en: {
      tag: 'Mobile App',
      title: 'RECOLECTA APP',
      badge: '1st Place OnlinesHack 2026',
      description:
        'Smart waste-collection system: a Flutter mobile app that notifies citizens of the estimated arrival time of the collection truck without exposing real-time GPS coordinates. Privacy-by-design architecture: citizens only receive text ("Arriving in ~15 min"), the map with coordinates is exclusive to the admin panel.',
      features: [
        'Asynchronous REST API backend in FastAPI + SQLAlchemy',
        'PostgreSQL via Supabase with Row Level Security (RLS)',
        'Route-topic push notifications with Firebase Cloud Messaging',
        'Address validation with OCR (Tesseract) that deletes the image after extracting the address',
        'Roles: citizen, driver, and admin',
      ],
    },
  },
  {
    id: 9,
    slug: 'pyprimes',
    category: 'python',
    image: null,
    video: null,
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
]
