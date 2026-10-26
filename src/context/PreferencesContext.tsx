'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type Theme = 'dark' | 'light'
type Language = 'es' | 'en'

const english: Record<string, string> = {
  'Sobre mí': 'About me',
  'Tecnologías': 'Technologies',
  'Proyectos': 'Projects',
  'Experiencia': 'Experience',
  'Contacto': 'Contact',
  'Disponible para proyectos selectos · Argentina / remoto': 'Available for select projects · Argentina / remote',
  'Construyendo productos digitales, mejorando sistemas y procesos para que negocios y empresas trabajen de manera más eficiente y escalable.': 'Building digital products and improving systems and processes so businesses can work more efficiently and scale.',
  'Roles': 'Roles',
  '+6 años construyendo software': '6+ years building software',
  'También': 'Also',
  'Fundador de AION Technologies': 'Founder of AION Technologies',
  'AI Engineer · Mid Frontend Developer · Full Stack Developer': 'AI Engineer · Mid Frontend Developer · Full Stack Developer',
  'Ver proyectos': 'View projects',
  'Descargar CV': 'Download résumé',
  'Reproducir video de presentación': 'Play introduction video',
  'Video de presentación de Kevin Dana': 'Kevin Dana introduction video',
  'Tu navegador no puede reproducir este video.': 'Your browser cannot play this video.',
  'Cerrar video y volver a la portada': 'Close video and return to cover',
  'Volver a la portada': 'Back to cover',
  'Desarrollador Full Stack con +6 años de experiencia. CEO de AION Technologies, agencia de desarrollo de software especializada en soluciones digitales modernas. Experto en React, Next.js y TypeScript, con experiencia comprobada en desarrollo de plugins para WordPress y Shopify, APIs REST/GraphQL y aplicaciones empresariales escalables.': 'Full Stack Developer with 6+ years of experience. CEO of AION Technologies, a software agency focused on modern digital solutions. Specialized in React, Next.js and TypeScript, with proven experience building WordPress and Shopify plugins, REST/GraphQL APIs and scalable business applications.',
  'Aplicaciones y sitios web': 'Applications and websites',
  'Plugins para Odoo, Shopify y WordPress': 'Plugins for Odoo, Shopify and WordPress',
  'CEO de AION Technologies': 'CEO of AION Technologies',
  'Software empresarial a medida': 'Custom business software',
  'Automatización de procesos con IA': 'AI process automation',
  'APIs REST/GraphQL e integraciones': 'REST/GraphQL APIs and integrations',
  'Stack tecnológico': 'Technology stack',
  'Ver menos': 'Show less',
  'Ver stack completo': 'View full stack',
  'Certificaciones': 'Certifications',
  'Arrastrá para explorar · seleccioná una card para ver el certificado': 'Drag to explore · select a card to view the certificate',
  'Certificaciones profesionales': 'Professional certifications',
  'Certificación': 'Certification',
  'Ver certificado': 'View certificate',
  'Ver todos los certificados': 'View all certificates',
  'Cerrar certificado': 'Close certificate',
  'Proyectos destacados': 'Featured projects',
  'Vista previa de': 'Preview of',
  'Responsable frontend · Kamakia': 'Frontend lead · Kamakia',
  'Centralicé en un sistema los procesos que los contadores de Inteligencia Fiscal gestionaban en Excel. Lideré el frontend con arquitectura hexagonal y Spec-Driven Development. La plataforma automatiza tareas, cruza datos y genera resúmenes por contribuyente para analizar deudores con menos pasos manuales.': 'I centralized the processes that Inteligencia Fiscal accountants managed in Excel into a single system. I led the frontend using hexagonal architecture and Spec-Driven Development. The platform automates tasks, cross-checks data and produces taxpayer summaries to analyze debtors with fewer manual steps.',
  'Full Stack Developer · Te_entrego': 'Full Stack Developer · Te_entrego',
  'Desarrollé desde cero un plugin que conecta Shopify y WooCommerce con Te Entrego. Construí el frontend, las integraciones y una arquitectura agnóstica de contenedores con routing propio. Automatiza la creación de envíos y el seguimiento, evitando que los comercios carguen manualmente cada operación.': 'I built a plugin from scratch that connects Shopify and WooCommerce with Te Entrego. I developed the frontend, integrations and a container-agnostic architecture with its own routing. It automates shipment creation and tracking, removing manual data entry for merchants.',
  'Full Stack Developer · Proyecto AION': 'Full Stack Developer · AION project',
  'Desarrollé un plugin React para WooCommerce que geolocaliza al cliente y preselecciona la sucursal más cercana en el checkout. Integré Google Maps y una API propia para administrar credenciales y coordenadas. Operó en unas 10 sucursales y redujo recorridos y costos de envío.': 'I developed a React plugin for WooCommerce that geolocates customers and preselects the closest branch at checkout. I integrated Google Maps and a custom API to manage credentials and coordinates. It ran across roughly 10 branches and reduced travel distance and shipping costs.',
  'Frontend Developer · Relación de dependencia': 'Frontend Developer · Full-time role',
  'Reconstruimos el sitio desde cero, migrando de jQuery y CSS3 a React y Next.js con SSR. Creamos el sistema frontend, la librería Storybook, routing, modales con máquinas de estado y tokens visuales. La nueva plataforma optimizó el flujo de compra, las imágenes y los tiempos de carga.': 'We rebuilt the site from scratch, migrating from jQuery and CSS3 to React and Next.js with SSR. We created the frontend system, Storybook library, routing, state-machine modals and visual tokens. The new platform improved the purchasing flow, image delivery and loading times.',
  'Desarrollé un plugin de categorías y personalizaciones de temas sobre Odoo, priorizando JavaScript y complementándolo con Python. La solución hizo posible una navegación que el soporte anterior consideraba inviable, mejoró el acceso a productos y eliminó limitaciones y deuda técnica.': 'I developed an Odoo category plugin and theme customizations, led by JavaScript and supported with Python. The solution enabled navigation previously considered unfeasible, improved product access and removed limitations and technical debt.',
  'Ver demo': 'View demo',
  'Ver sitio': 'View website',
  'Ver librería': 'View library',
  'Próximamente': 'Coming soon',
  'Ssr. Frontend Developer': 'Mid-level Frontend Developer',
  'Ssr. Fullstack Developer': 'Mid-level Full Stack Developer',
  'Desarrollador de front-end': 'Frontend Developer',
  'Administrador de base de datos': 'Database Administrator',
  'Administrador de bases de datos': 'Database Administrator',
  'Desarrollador de software': 'Software Developer',
  'Jornada parcial': 'Part-time',
  'Jornada completa': 'Full-time',
  'Contrato temporal': 'Temporary contract',
  'Profesional independiente': 'Freelance',
  'Jujuy, Argentina · En remoto': 'Jujuy, Argentina · Remote',
  'Bogotá, Distrito Capital, Colombia · En remoto': 'Bogotá, Colombia · Remote',
  'Barcelona y alrededores · En remoto': 'Barcelona area · Remote',
  'El Calafate, Santa Cruz, Argentina · En remoto': 'El Calafate, Argentina · Remote',
  'Mar. de 2026 - Jul. de 2026 · 5 meses': 'Mar 2026 – Jul 2026 · 5 months',
  'Ago. de 2024 - Ene. de 2026 · 1 año 6 meses': 'Aug 2024 – Jan 2026 · 1 year 6 months',
  'Jun. de 2024 - Sept. de 2024 · 4 meses': 'Jun 2024 – Sep 2024 · 4 months',
  'Jun. de 2022 - May. de 2024 · 2 años': 'Jun 2022 – May 2024 · 2 years',
  'Ene. de 2022 - Mar. de 2022 · 3 meses': 'Jan 2022 – Mar 2022 · 3 months',
  'Ene. de 2020 - Feb. de 2022 · 2 años 2 meses': 'Jan 2020 – Feb 2022 · 2 years 2 months',
  'Ene. de 2019 - Jul. de 2019 · 7 meses': 'Jan 2019 – Jul 2019 · 7 months',
  'Desarrollo de plataforma de rentas Jujuy. Encargado del maquetado de componentes, SSR con Next, data fetching, integración de varios servicios (APIs locales y de terceros).': 'Development of Jujuy’s tax platform. Responsible for component implementation, SSR with Next.js, data fetching and the integration of local and third-party APIs.',
  'Desarrollo de plugin multiplataforma en React para Shopify, WooCommerce y VTEX. Integración con APIs locales y de terceros. Gestión de servidor y uso de contenedores de Docker para despliegue en producción.': 'Development of a cross-platform React plugin for Shopify, WooCommerce and VTEX. Integration with local and third-party APIs, server management and Docker-based production deployment.',
  'Desarrollo de plugin para WordPress de geolocalización de tiendas. Implementación de API propia e integración de servicios de geolocalización. Integración con formulario de pago, pasarela de pagos y carrito de compras.': 'Development of a WordPress store-geolocation plugin. Built a custom API, integrated geolocation services, checkout forms, payment gateways and shopping carts.',
  'Desarrollo de componentes reutilizables, librerías de componentes con Storybook e interfaces de usuario. Desarrollo del sitio público e integración de componentes y librerías de terceros. Planificación, creación e implementación de soluciones para problemas cotidianos de distinta complejidad.': 'Development of reusable components, Storybook component libraries and user interfaces. Built the public website, integrated third-party components and libraries, and delivered solutions for day-to-day problems of varying complexity.',
  'Contrato temporal, administración de base de datos interna, fichaje de vehículos, recepción de clientes y gestión de agenda de citas.': 'Temporary contract managing the internal database, vehicle records, customer reception and appointment scheduling.',
  'Desarrollo independiente de soluciones web con JavaScript, HTML5 y tecnologías relacionadas.': 'Independent development of web solutions using JavaScript, HTML5 and related technologies.',
  'Administración de bases de datos, presentación de productos a clientes y gestión de planillas de Excel.': 'Database administration, product presentations for clients and Excel spreadsheet management.',
  '¿Tienes un proyecto en mente, una oportunidad laboral o necesitas una solución a medida? Estoy abierto a colaboraciones.': 'Have a project in mind, a job opportunity or need a custom solution? I am open to collaborations.',
  'Todos los derechos reservados.': 'All rights reserved.',
  'Volver arriba': 'Back to top',
  'Cambiar a tema claro': 'Switch to light theme',
  'Cambiar a tema oscuro': 'Switch to dark theme',
  'Cambiar idioma a inglés': 'Switch language to English',
  'Cambiar idioma a español': 'Switch language to Spanish',
}

interface PreferencesContextValue {
  theme: Theme
  language: Language
  toggleTheme: () => void
  toggleLanguage: () => void
  t: (text: string) => string
}

const PreferencesContext = createContext<PreferencesContextValue | null>(null)

export function PreferencesProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [language, setLanguage] = useState<Language>('es')

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme | null
    const savedLanguage = localStorage.getItem('portfolio-language') as Language | null
    if (savedTheme === 'dark' || savedTheme === 'light') setTheme(savedTheme)
    if (savedLanguage === 'es' || savedLanguage === 'en') setLanguage(savedLanguage)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
    document.documentElement.style.colorScheme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem('portfolio-language', language)
  }, [language])

  const value = useMemo<PreferencesContextValue>(() => ({
    theme,
    language,
    toggleTheme: () => setTheme((current) => current === 'dark' ? 'light' : 'dark'),
    toggleLanguage: () => setLanguage((current) => current === 'es' ? 'en' : 'es'),
    t: (text) => language === 'en' ? english[text] ?? text : text,
  }), [language, theme])

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePreferences() {
  const context = useContext(PreferencesContext)
  if (!context) throw new Error('usePreferences must be used within PreferencesProvider')
  return context
}
