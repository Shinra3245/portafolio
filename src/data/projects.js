import panaderiaImg from '../assets/images/projects/panaderia.png'
import sistemasImg from '../assets/images/projects/sistemas.png'
import comercializadoraImg from '../assets/images/projects/comercializadora.png'
import portafolioImg from '../assets/images/projects/portafolio-alejandro.png'
import sikiImg from '../assets/images/projects/siki-mexico.png'

// Contenido real de los 5 proyectos (index.html + lang/projects-es.json + lang/projects-en.json)
export const projects = [
  {
    id: 1,
    slug: 'panaderia',
    image: panaderiaImg,
    url: 'https://panaderia-la-flor.infy.uk',
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
    image: sistemasImg,
    url: 'https://sistemas-presidencia.infinityfreeapp.com',
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
    image: comercializadoraImg,
    url: 'https://comercializadora-onaldi.ct.ws',
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
    image: portafolioImg,
    url: 'https://alejandro-sarmiento.netlify.app',
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
    image: sikiImg,
    url: 'https://siki.com.mx',
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
]
