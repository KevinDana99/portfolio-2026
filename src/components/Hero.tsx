'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { heroContent } from '@/data/content'
import { usePreferences } from '@/context/PreferencesContext'

export default function Hero() {
  const [showPresentationVideo, setShowPresentationVideo] = useState(false)
  const [revealPresentationVideo, setRevealPresentationVideo] = useState(false)
  const { t } = usePreferences()

  const openPresentationVideo = () => {
    setRevealPresentationVideo(false)
    setShowPresentationVideo(true)
  }

  const closePresentationVideo = () => {
    setRevealPresentationVideo(false)
    setShowPresentationVideo(false)
  }

  return (
    <section id="hero" className="site-grid relative flex min-h-screen flex-col justify-center overflow-hidden px-5 pb-16 pt-28 md:px-10 md:pb-20 md:pt-32 lg:px-16">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.65 }} className="mx-auto grid w-full max-w-[1440px] lg:grid-cols-[1fr_34%] lg:gap-10">
        <div className="flex flex-col justify-between">
          <div className="mb-14 flex w-fit items-center gap-3 rounded-full border border-primary-400/20 bg-primary-500/10 px-4 py-2 text-sm text-primary-200">
            <span className="h-2.5 w-2.5 rounded-full bg-primary-400 shadow-[0_0_14px_rgba(91,184,255,.8)]" />
            {t('Disponible para proyectos selectos · Argentina / remoto')}
          </div>
          <div>
            <p className="mb-5 max-w-xl text-lg leading-relaxed text-dark-300 md:text-xl">{t('Construyendo productos digitales, mejorando sistemas y procesos para que negocios y empresas trabajen de manera más eficiente y escalable.')}</p>
            <h1 className="display-type max-w-5xl text-[clamp(4.5rem,12vw,11rem)] font-black leading-[0.78] text-dark-50">Kevin<br /><span className="text-primary-400">Dana.</span></h1>
          </div>
          <div className="mt-12 grid border-y border-dark-700 sm:grid-cols-3">
            <HeroFact label={t('Roles')} value={t(heroContent.role)} />
            <HeroFact label={t('Experiencia')} value={t('+6 años construyendo software')} />
            <HeroFact label={t('También')} value={t('Fundador de AION Technologies')} />
          </div>
        </div>
        <div className="relative mt-10 min-h-[440px] lg:mt-0 lg:min-h-0">
          <div className="absolute -inset-3 rounded-[2.5rem] bg-primary-500/20 blur-2xl" />
          <div className="theme-card absolute inset-0 overflow-hidden rounded-[2rem] border border-primary-300/30 bg-dark-900 shadow-2xl shadow-primary-900/40 transition-shadow duration-300">
            {showPresentationVideo ? (
              <>
                <video
                  className={`h-full w-full bg-dark-950 object-cover object-[50%_35%] transition-opacity duration-700 ${revealPresentationVideo ? 'opacity-100' : 'opacity-0'}`}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  poster="/profile.jpeg"
                  onPlaying={() => setRevealPresentationVideo(true)}
                  onEnded={closePresentationVideo}
                  aria-label={t('Video de presentación de Kevin Dana')}
                >
                  <source src="/kevin-dana-presentacion.mp4" type="video/mp4" />
                  {t('Tu navegador no puede reproducir este video.')}
                </video>
                <div
                  className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${revealPresentationVideo ? 'opacity-0' : 'opacity-100'}`}
                  aria-hidden="true"
                >
                  <img src="/profile.jpeg" alt="" className="h-full w-full object-cover object-[50%_35%] grayscale contrast-110 opacity-90" />
                  <div className="absolute inset-0 bg-primary-700/20 mix-blend-color" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/75 via-transparent to-dark-950/10" />
                  <div className="absolute inset-x-0 bottom-8 flex items-center justify-center gap-2 text-xs font-medium text-white/80">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-primary-300" />
                    {t('Preparando presentación…')}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={closePresentationVideo}
                  className="absolute right-4 top-4 z-10 rounded-full border border-white/20 bg-dark-950/80 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md transition-colors hover:bg-dark-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
                  aria-label={t('Cerrar video y volver a la portada')}
                >
                  {t('Volver a la portada')}
                </button>
              </>
            ) : (
              <>
                <img src="/profile.jpeg" alt={heroContent.name} className="h-full w-full object-cover object-[50%_35%] grayscale contrast-110 opacity-90" />
                <div className="absolute inset-0 bg-primary-700/20 mix-blend-color" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/75 via-transparent to-dark-950/10" />
                <button
                  type="button"
                  onClick={openPresentationVideo}
                  className="group absolute inset-0 z-10 flex items-center justify-center text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-300"
                  aria-label={t('Reproducir video de presentación')}
                  aria-pressed={showPresentationVideo}
                >
                  <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/35 bg-dark-950/65 shadow-[0_12px_45px_rgba(0,0,0,0.45)] backdrop-blur-md transition-transform duration-300 group-hover:scale-105 group-hover:border-primary-300 group-hover:bg-primary-500/80">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-8 w-8" aria-hidden="true">
                      <path d="M8 5.8v12.4c0 .8.88 1.28 1.55.84l9.3-6.2a1 1 0 0 0 0-1.68l-9.3-6.2A1 1 0 0 0 8 5.8Z" />
                    </svg>
                  </span>
                </button>
              </>
            )}
          </div>
          {!showPresentationVideo && <div className="pointer-events-none absolute bottom-4 left-4 z-20 rounded-full border border-primary-300/30 bg-dark-950/80 px-4 py-2 backdrop-blur-md"><p className="font-mono text-xs text-primary-300">IA / React / Next.js / Node.js / TypeScript</p></div>}
        </div>
      </motion.div>
      <div className="mx-auto mt-8 flex w-full max-w-[1440px] flex-wrap items-center gap-3">
        <a href="#proyectos" className="inline-flex h-12 items-center justify-center rounded-full bg-primary-500 px-6 text-sm font-bold text-white shadow-lg shadow-primary-900/30 transition-colors hover:bg-primary-400">{t(heroContent.ctaProjects)}</a>
        <a href="/kevin-dana-cv.pdf" download="Kevin-Dana-CV.pdf" className="inline-flex h-12 items-center justify-center rounded-full border border-primary-300/30 bg-primary-500/5 px-6 text-sm font-bold text-dark-100 transition-colors hover:bg-primary-500/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-950">{t('Descargar CV')}</a>
        <a
          href="https://github.com/kevindana99"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub de Kevin Dana"
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary-300/30 bg-primary-500/5 text-dark-100 transition-colors hover:bg-primary-500/15 hover:text-primary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-950"
        >
          <FaGithub className="h-5 w-5" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

function HeroFact({ label, value }: { label: string; value: string }) {
  return <div className="border-b border-dark-700 py-4 last:border-b-0 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0"><p className="mb-1 font-mono text-[10px] text-dark-500">{label}</p><p className="text-sm font-semibold text-dark-100">{value}</p></div>
}
