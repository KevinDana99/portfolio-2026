'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FadeIn, SectionWrapper } from '@/components/ui/animations'
import { ViewportSuspense } from '@/components/ui/ViewportSuspense'
import { TechnologySkeleton } from '@/components/ui/skeletons'
import { CertificationsCarousel } from '@/components/CertificationsCarousel'
import { technologies } from '@/data/content'
import { usePreferences } from '@/context/PreferencesContext'

const featuredTechnologyNames = new Set([
  'MCP',
  'Agent Skills',
  'Codex',
  'React',
  'Next 16',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'Bun',
  'Express',
  'GraphQL',
  'REST APIs',
  'Webhooks',
  'n8n',
  'PostgreSQL',
  'Docker',
])

const featuredTechnologies = technologies.filter((tech) => featuredTechnologyNames.has(tech.name))
const additionalTechnologies = technologies.filter((tech) => !featuredTechnologyNames.has(tech.name))

export default function Technologies() {
  const [showAll, setShowAll] = useState(false)
  const { t } = usePreferences()
  const visibleTechnologies = showAll
    ? [...featuredTechnologies, ...additionalTechnologies]
    : featuredTechnologies

  return (
    <SectionWrapper id="tecnologias" className="bg-dark-900/50">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center"><h2 className="text-4xl font-bold md:text-5xl"><span className="text-gradient">{t('Stack tecnológico')}</span></h2></FadeIn>
        <FadeIn delay={0.2}>
          <div id="technology-list" className="mt-16 grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6 md:gap-8 lg:grid-cols-8" role="list" aria-label="Tecnologías">
            {visibleTechnologies.map((tech, index) => { const Icon = tech.icon; const animationIndex = showAll && index >= featuredTechnologies.length ? index - featuredTechnologies.length : index; return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: animationIndex * 0.03, type: 'spring', stiffness: 300, damping: 25 }}
                className={`min-w-[100px] ${!showAll && index >= 9 ? 'hidden lg:block' : ''}`}
              >
                <ViewportSuspense fallback={<TechnologySkeleton />} className="min-w-[100px]">
                  <div className="group relative">
                  <div className="relative w-20 h-20 md:w-24 md:h-24 glass rounded-2xl flex items-center justify-center mx-auto group-hover:border-primary-500/50 group-hover:shadow-[0_0_30px_rgba(59,91,219,0.2)] transition-all duration-500"><Icon className="w-8 h-8 md:w-10 md:h-10 text-primary-400" /><div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" /></div>
                  <p className="mt-3 text-sm font-medium text-dark-200 text-center min-w-[100px]">{tech.name}</p>
                  </div>
                </ViewportSuspense>
              </motion.div>
            )})}
          </div>
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              aria-expanded={showAll}
              aria-controls="technology-list"
              onClick={() => setShowAll((current) => !current)}
              className="inline-flex items-center gap-3 rounded-full border border-primary-300/30 bg-primary-500/5 px-6 py-3 text-sm font-bold text-dark-100 transition-colors hover:border-primary-300/50 hover:bg-primary-500/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900"
            >
              {showAll ? t('Ver menos') : t('Ver stack completo')}
              <motion.span animate={{ rotate: showAll ? 180 : 0 }} aria-hidden="true" className="text-lg leading-none">⌄</motion.span>
            </button>
          </div>
          <CertificationsCarousel />
        </FadeIn>
      </div>
    </SectionWrapper>
  )
}
