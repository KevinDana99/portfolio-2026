export const navItems = [
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Tecnologías', href: '#tecnologias' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Contacto', href: '#contacto' }
]

export const heroContent = {
  name: 'Kevin Emanuel Dana',
  role: 'AI Engineer · Mid Frontend Developer · Full Stack Developer',
  tagline:
    'CEO de AION Technologies | Desarrollador Full Stack | +6 años de experiencia en React, Next.js, TypeScript y más.',
  ctaProjects: 'Ver proyectos'
}

export const aboutContent = {
  title: 'Sobre mí',
  description:
    'Desarrollador Full Stack con +6 años de experiencia. CEO de AION Technologies, agencia de desarrollo de software especializada en soluciones digitales modernas. Experto en React, Next.js y TypeScript, con experiencia comprobada en desarrollo de plugins para WordPress y Shopify, APIs REST/GraphQL y aplicaciones empresariales escalables.',
  highlights: [
    { text: 'Automatización de procesos con IA', icon: TbSparkles },
    { text: 'Aplicaciones y sitios web', icon: IoCodeSlash },
    { text: 'Plugins para Odoo, Shopify y WordPress', icon: IoExtensionPuzzle },
    { text: 'CEO de AION Technologies', icon: IoRocket },
    { text: 'Software empresarial a medida', icon: IoBusiness },
    { text: 'APIs REST/GraphQL e integraciones', icon: TbApi }
  ]
}

import {
  IoLogoReact,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoDocker,
  IoLogoWordpress,
  IoGitNetwork,
  IoDiamond,
  IoLeaf,
  IoRocket,
  IoBook,
  IoFlash,
  IoPhonePortrait,
  IoCart,
  IoCodeSlash,
  IoExtensionPuzzle,
  IoBusiness
} from 'react-icons/io5'
import {
  SiNextdotjs,
  SiTypescript,
  SiGraphql,
  SiRedux,
  SiTailwindcss,
  SiPostgresql,
  SiGit,
  SiJson,
  SiJsonwebtokens,
  SiLeaflet,
  SiMarkdown,
  SiModelcontextprotocol,
  SiMongoose,
  SiPhp,
  SiStyledcomponents,
  SiSwagger,
  SiClaude,
  SiBun,
  SiJest,
  SiTestinglibrary,
  SiHtml5,
  SiCss,
  SiN8N,
  SiStrapi
} from 'react-icons/si'
import {
  TbApi,
  TbBrandOpenai,
  TbBrandReactNative,
  TbMasksTheater,
  TbSparkles,
  TbSql,
  TbWebhook
} from 'react-icons/tb'

export const technologies = [
  { name: 'MCP', icon: SiModelcontextprotocol },
  { name: 'Agent Skills', icon: TbSparkles },
  { name: 'Codex', icon: TbBrandOpenai },
  { name: 'Claude', icon: SiClaude },
  { name: 'React', icon: IoLogoReact },
  { name: 'React Native', icon: TbBrandReactNative },
  { name: 'Next 16', icon: SiNextdotjs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'JavaScript', icon: IoLogoJavascript },
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss },
  { name: 'JSON', icon: SiJson },
  { name: 'Markdown', icon: SiMarkdown },
  { name: 'PHP', icon: SiPhp },
  { name: 'Node.js', icon: IoLogoNodejs },
  { name: 'Bun', icon: SiBun },
  { name: 'Express', icon: IoRocket },
  { name: 'GraphQL', icon: SiGraphql },
  { name: 'Apollo', icon: IoGitNetwork },
  { name: 'REST APIs', icon: TbApi },
  { name: 'Webhooks', icon: TbWebhook },
  { name: 'n8n', icon: SiN8N },
  { name: 'JWT', icon: SiJsonwebtokens },
  { name: 'Swagger', icon: SiSwagger },
  { name: 'Redux', icon: SiRedux },
  { name: 'Styled Components', icon: SiStyledcomponents },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Prisma', icon: IoDiamond },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'SQL', icon: TbSql },
  { name: 'MongoDB', icon: IoLeaf },
  { name: 'Mongoose', icon: SiMongoose },
  { name: 'Typegoose', icon: SiTypescript },
  { name: 'React Leaflet', icon: SiLeaflet },
  { name: 'Leaflet Routing', icon: SiLeaflet },
  { name: 'Storybook', icon: IoBook },
  { name: 'Jest', icon: SiJest },
  { name: 'React Testing Library', icon: SiTestinglibrary },
  { name: 'Playwright', icon: TbMasksTheater },
  { name: 'WebSockets', icon: IoFlash },
  { name: 'PWA', icon: IoPhonePortrait },
  { name: 'Docker', icon: IoLogoDocker },
  { name: 'Git', icon: SiGit },
  { name: 'Strapi', icon: SiStrapi },
  { name: 'WordPress', icon: IoLogoWordpress },
  { name: 'Shopify', icon: IoCart }
]

export interface Project {
  id: string
  name: string
  context: string
  description: string
  image: string
  technologies: string[]
  demo?: string
  demoLabel?: string
  library?: string
  showLibrary?: boolean
}

export const projects: Project[] = [
  {
    id: '5',
    name: 'Inteligencia Fiscal Jujuy',
    context: 'Responsable frontend · Kamakia',
    description:
      'Centralicé en un sistema los procesos que los contadores de Inteligencia Fiscal gestionaban en Excel. Lideré el frontend con arquitectura hexagonal y Spec-Driven Development. La plataforma automatiza tareas, cruza datos y genera resúmenes por contribuyente para analizar deudores con menos pasos manuales.',
    image: '/projects/inteligencia-fiscal-jujuy.gif',
    technologies: [
      'Next.js',
      'TypeScript',
      'Arquitectura hexagonal',
      'Bun',
      'Jest',
      'MCP de Figma'
    ],
    demo: 'https://inteligencia-fiscal-jujuy.vercel.app/',
    demoLabel: 'Ver demo'
  },

  {
    id: '1',
    name: 'Te Entrego Multiplatform',
    context: 'Full Stack Developer · Te_entrego',
    description:
      'Desarrollé desde cero un plugin que conecta Shopify y WooCommerce con Te Entrego. Construí el frontend, las integraciones y una arquitectura agnóstica de contenedores con routing propio. Automatiza la creación de envíos y el seguimiento, evitando que los comercios carguen manualmente cada operación.',
    image: '/projects/te-entrego.gif',
    technologies: [
      'React',
      'TypeScript',
      'Remix',
      'Styled Components',
      'PHP',
      'REST APIs'
    ]
  },
  {
    id: '2',
    name: 'YouMe WordPress Plugin',
    context: 'Full Stack Developer · Proyecto AION',
    description:
      'Desarrollé un plugin React para WooCommerce que geolocaliza al cliente y preselecciona la sucursal más cercana en el checkout. Integré Google Maps y una API propia para administrar credenciales y coordenadas. Operó en unas 10 sucursales y redujo recorridos y costos de envío.',
    image: '/projects/youme.gif',
    technologies: [
      'React',
      'WordPress',
      'WooCommerce',
      'Google Maps API',
      'PHP',
      'REST API'
    ]
  },
  {
    id: '3',
    name: 'Patagonia Chic',
    context: 'Frontend Developer · Relación de dependencia',
    description:
      'Reconstruimos el sitio desde cero, migrando de jQuery y CSS3 a React y Next.js con SSR. Creamos el sistema frontend, la librería Storybook, routing, modales con máquinas de estado y tokens visuales. La nueva plataforma optimizó el flujo de compra, las imágenes y los tiempos de carga.',
    image: '/projects/patagonia.gif',
    technologies: [
      'React',
      'Next.js',
      'Storybook',
      'SSR',
      'State Machines',
      'Design System'
    ],
    demo: 'https://patagoniachic.com',
    demoLabel: 'Ver sitio',
    showLibrary: true,
    library: 'https://patagonia-chic-sandy.vercel.app/'
  },
  {
    id: '4',
    name: 'Nueva Energía',
    context: 'Full Stack Developer · Proyecto AION',
    description:
      'Desarrollé un plugin de categorías y personalizaciones de temas sobre Odoo, priorizando JavaScript y complementándolo con Python. La solución hizo posible una navegación que el soporte anterior consideraba inviable, mejoró el acceso a productos y eliminó limitaciones y deuda técnica.',
    image: '/projects/nueva-energia.gif',
    technologies: ['Odoo', 'JavaScript', 'Python', 'Theme Development', 'IA'],
    demo: 'https://nuevaenergia.cl',
    demoLabel: 'Ver sitio'
  }
]

export interface ExperienceItem {
  id: string
  company: string
  role: string
  period: string
  employmentType?: string
  location?: string
  description: string
}

export const experience: ExperienceItem[] = [
  {
    id: '1',
    company: 'Kamakia',
    role: 'Ssr. Frontend Developer',
    period: 'Mar. de 2026 - Jul. de 2026 · 5 meses',
    employmentType: 'Jornada parcial',
    location: 'Jujuy, Argentina · En remoto',
    description:
      'Desarrollo de plataforma de rentas Jujuy. Encargado del maquetado de componentes, SSR con Next, data fetching, integración de varios servicios (APIs locales y de terceros).'
  },
  {
    id: '2',
    company: 'Te_entrego',
    role: 'Ssr. Fullstack Developer',
    period: 'Ago. de 2024 - Ene. de 2026 · 1 año 6 meses',
    employmentType: 'Contrato temporal',
    location: 'Bogotá, Distrito Capital, Colombia · En remoto',
    description:
      'Desarrollo de plugin multiplataforma en React para Shopify, WooCommerce y VTEX. Integración con APIs locales y de terceros. Gestión de servidor y uso de contenedores de Docker para despliegue en producción.'
  },
  {
    id: '3',
    company: 'Yoüme',
    role: 'Ssr. Fullstack Developer',
    period: 'Jun. de 2024 - Sept. de 2024 · 4 meses',
    employmentType: 'Contrato temporal',
    location: 'Barcelona y alrededores · En remoto',
    description:
      'Desarrollo de plugin para WordPress de geolocalización de tiendas. Implementación de API propia e integración de servicios de geolocalización. Integración con formulario de pago, pasarela de pagos y carrito de compras.'
  },
  {
    id: '4',
    company: 'Patagonia Chic',
    role: 'Desarrollador de front-end',
    period: 'Jun. de 2022 - May. de 2024 · 2 años',
    employmentType: 'Jornada completa',
    location: 'El Calafate, Santa Cruz, Argentina · En remoto',
    description:
      'Desarrollo de componentes reutilizables, librerías de componentes con Storybook e interfaces de usuario. Desarrollo del sitio público e integración de componentes y librerías de terceros. Planificación, creación e implementación de soluciones para problemas cotidianos de distinta complejidad.'
  },
  {
    id: '5',
    company: 'Toyota Argentina',
    role: 'Administrador de base de datos',
    period: 'Ene. de 2022 - Mar. de 2022 · 3 meses',
    employmentType: 'Jornada completa',
    location: 'Puerto Madryn, Chubut, Argentina',
    description:
      'Contrato temporal, administración de base de datos interna, fichaje de vehículos, recepción de clientes y gestión de agenda de citas.'
  },
  {
    id: '6',
    company: 'AION',
    role: 'Desarrollador de software',
    period: 'Ene. de 2020 - Feb. de 2022 · 2 años 2 meses',
    employmentType: 'Profesional independiente',
    location: 'Puerto Madryn, Chubut, Argentina',
    description:
      'Desarrollo independiente de soluciones web con JavaScript, HTML5 y tecnologías relacionadas.'
  },
  {
    id: '7',
    company: 'ACCEL SEGURIDAD INFORMATICA',
    role: 'Administrador de bases de datos',
    period: 'Ene. de 2019 - Jul. de 2019 · 7 meses',
    employmentType: 'Jornada parcial',
    location: 'Puerto Madryn, Chubut, Argentina',
    description:
      'Administración de bases de datos, presentación de productos a clientes y gestión de planillas de Excel.'
  }
]

export const contactInfo = {
  github: 'https://github.com/kevindana99',
  linkedin: 'https://www.linkedin.com/in/kevin-dana-3a2b19175/',
  email: 'kevindanadev@gmail.com',
  whatsapp: {
    number: '+5492804670313',
    href: 'https://wa.me/5492804670313?text=Hola%20Kevin%2C%20vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20contactarte.'
  }
}
