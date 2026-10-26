'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { SiPlatzi } from 'react-icons/si'
import { Autoplay, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { usePreferences } from '@/context/PreferencesContext'

const certifications = [
  { title: 'Next.js Avanzado', image: '/certifications/next-avanzado-certificate.png' },
  { title: 'React.js', image: '/certifications/react-certificate.png' },
  { title: 'GraphQL con Node.js', image: '/certifications/gql-node-certificate.png' },
  { title: 'API REST Profesional', image: '/certifications/api-rest-pro-certificate.png' },
  { title: 'API REST Práctico', image: '/certifications/api-rest-practico-certificate.png' },
  { title: 'API REST', image: '/certifications/api-rest-certificate.png' },
  { title: 'Asincronismo con JavaScript', image: '/certifications/async-javascript-certificate.png' },
  { title: 'ECMAScript 6+', image: '/certifications/es6-javascript-certificate.png' },
  { title: 'POO con JavaScript', image: '/certifications/js-poo-certificate.png' },
  { title: 'POO Intermedio con JavaScript', image: '/certifications/js-poo-intermedio-certificate.png' },
  { title: 'JavaScript V8 Engine', image: '/certifications/js-v8-engine-certificate.png' },
  { title: 'Arrays con JavaScript', image: '/certifications/arrays-javascript-certificate.png' },
  { title: 'Debugging con DevTools', image: '/certifications/debugging-devtools-certificate.png' },
  { title: 'Animaciones CSS Práctico', image: '/certifications/animaciones-css-practico-certificate.png' },
]

const allCertificationsUrl = 'https://drive.google.com/drive/u/0/folders/1dD1u1GxA1sWVLgSv6Ke4PP_xr6vadPCL'

type Certification = (typeof certifications)[number]

export function CertificationsCarousel() {
  const prefersReducedMotion = useReducedMotion()
  const { t } = usePreferences()
  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!selectedCertification) return

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedCertification(null)
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', closeOnEscape)
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [selectedCertification])

  return (
    <div className="mt-24 w-full min-w-0 overflow-hidden">
      <div className="mb-10 text-center">
        <h3 className="text-4xl font-bold md:text-5xl">
          <span className="text-gradient">{t('Certificaciones')}</span>
        </h3>
        <p className="mx-auto mt-6 max-w-2xl text-sm text-dark-400">{t('Arrastrá para explorar · seleccioná una card para ver el certificado')}</p>
      </div>

      <div className="relative">
        <Swiper
          modules={[Autoplay, A11y]}
          slidesPerView="auto"
          spaceBetween={16}
          grabCursor
          loop
          speed={650}
          autoplay={prefersReducedMotion ? false : {
            delay: 1800,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          a11y={{
            containerMessage: t('Certificaciones profesionales'),
            itemRoleDescriptionMessage: t('Certificación'),
          }}
          className="w-full !overflow-hidden"
        >
          {certifications.map((certification) => (
            <SwiperSlide key={certification.image} className="!h-[100px] !w-[300px]">
              <button
                type="button"
                onClick={() => setSelectedCertification(certification)}
                className="theme-card group flex h-[100px] w-[300px] cursor-pointer select-none items-center gap-3 rounded-xl border border-dark-700/60 bg-dark-800/70 px-4 py-3 text-left backdrop-blur-xl transition-all hover:border-primary-400/40 hover:bg-dark-800/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
                aria-label={`${t('Ver certificado')}: ${certification.title}`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary-400/25 bg-primary-500/10 text-primary-400" aria-hidden="true">
                  <SiPlatzi className="h-6 w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="line-clamp-2 text-xs font-semibold leading-snug text-dark-100">{certification.title}</p>
                  <p className="mt-1 text-[10px] leading-tight text-dark-400">Platzi</p>
                  <span className="mt-2 inline-block rounded-lg border border-primary-400/35 bg-primary-500/10 px-3 py-1.5 text-[10px] font-bold leading-tight text-primary-300 transition-colors group-hover:bg-primary-500/20">
                    {t('Ver certificado')}
                  </span>
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className="carousel-fade-left pointer-events-none absolute inset-y-0 left-0 z-10 w-28 sm:w-40"
          aria-hidden="true"
        />
        <div
          className="carousel-fade-right pointer-events-none absolute inset-y-0 right-0 z-10 w-28 sm:w-40"
          aria-hidden="true"
        />
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href={allCertificationsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary-500 px-6 text-sm font-bold text-white shadow-lg shadow-primary-900/25 transition-colors hover:bg-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900"
        >
          {t('Ver todos los certificados')}
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <AnimatePresence>
        {selectedCertification && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-dark-950/85 p-4 backdrop-blur-md"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedCertification(null)
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-modal-title"
          >
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 8 }}
              className="relative w-full max-w-5xl rounded-2xl border border-primary-300/20 bg-dark-900 p-3 shadow-2xl shadow-black/50 sm:p-5"
            >
              <h4 id="certificate-modal-title" className="sr-only">{t('Certificación')}: {selectedCertification.title}</h4>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setSelectedCertification(null)}
                className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-dark-600 bg-dark-950/80 text-xl text-dark-200 transition-colors hover:border-primary-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
                aria-label={t('Cerrar certificado')}
              >
                ×
              </button>

              <div className="flex max-h-[85vh] items-center justify-center overflow-hidden rounded-xl bg-white">
                <img
                  src={selectedCertification.image}
                  alt={`Certificado de ${selectedCertification.title} otorgado a Kevin Dana`}
                  className="max-h-[85vh] w-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
