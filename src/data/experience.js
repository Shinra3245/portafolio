// Trayectoria cronológica real (CV.pdf) — usada por la sección Experiencia
// (MissionTrajectory: cada hito es una "estación" en la ruta)
// type: 'hackathon' | 'role' — solo afecta el icono/insignia que se usa en la estación

export const experience = [
  {
    id: 'pyprimes',
    date: '2023 – 2024',
    type: 'role',
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
    id: 'lincehack',
    date: 'Abril 2026',
    type: 'hackathon',
    badge: '1.er Lugar · Innovación y Tecnología',
    techs: ['JavaScript', 'Firebase', 'RBAC', 'QR'],
    es: {
      title: 'LinceHack 2026',
      role: '1.er Lugar — Categoría Innovación y Tecnología',
      description:
        'Líder de equipo en hackathon de 24 horas. Desarrollé la arquitectura completa de autenticación segura del Sistema Web ILPEA Transports (credenciales por empleado, RBAC, códigos QR dinámicos) bajo metodología Scrum, bajo presión de competencia.',
    },
    en: {
      title: 'LinceHack 2026',
      role: '1st Place — Innovation & Technology Category',
      description:
        'Team lead in a 24-hour hackathon. Built the full secure-authentication architecture for the ILPEA Transports web system (per-employee credentials, RBAC, dynamic QR codes) under Scrum, under competition pressure.',
    },
  },
  {
    id: 'ilpea',
    date: 'Abril 2026 – Presente',
    type: 'role',
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
    id: 'onlineshack',
    date: 'Mayo 2026',
    type: 'hackathon',
    badge: 'Participante · Privacidad por Diseño',
    techs: ['FastAPI', 'PostgreSQL', 'Supabase RLS'],
    es: {
      title: 'OnlinesHack 2026',
      role: 'Participante — Categoría Privacidad por Diseño',
      description:
        'Líder técnico de un equipo de 4 personas. Construí la arquitectura backend completa de RECOLECTA APP: API asíncrona en FastAPI, PostgreSQL con Row Level Security en Supabase, JWT con roles, y validación de domicilio con OCR que borra la imagen original.',
    },
    en: {
      title: 'OnlinesHack 2026',
      role: 'Participant — Privacy by Design Category',
      description:
        'Technical lead of a 4-person team. Built the complete backend architecture for RECOLECTA APP: async FastAPI API, PostgreSQL with Row Level Security on Supabase, JWT with roles, and address validation with OCR that deletes the original image.',
    },
  },
  {
    id: 'recolecta',
    date: 'Mayo 2026 – Presente',
    type: 'role',
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
