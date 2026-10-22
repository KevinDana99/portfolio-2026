'use client'

import { motion } from 'framer-motion'
import { FadeIn, SectionWrapper } from '@/components/ui/animations'
import { ViewportSuspense } from '@/components/ui/ViewportSuspense'
import { HighlightSkeleton } from '@/components/ui/skeletons'
import { aboutContent } from '@/data/content'
import { usePreferences } from '@/context/PreferencesContext'

export default function About() {
  const { t } = usePreferences()
  return (
    <SectionWrapper id="sobre-mi" className="bg-dark-900/50">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center"><h2 className="text-4xl font-bold md:text-5xl"><span className="text-gradient">{t(aboutContent.title)}</span></h2></FadeIn>
        <div className="mt-12">
          <FadeIn delay={0.2} className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-dark-300">{t(aboutContent.description)}</p>
          </FadeIn>
          <div className="mx-auto mt-12 flex max-w-5xl flex-wrap items-stretch justify-center gap-4">
            {aboutContent.highlights.map((highlight, index) => (
              <ViewportSuspense key={highlight.text} fallback={<HighlightSkeleton />} className="flex w-[200px] max-w-full flex-none">
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -3 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="theme-card group relative flex h-[180px] w-[200px] max-w-full box-border flex-none flex-col items-center justify-start gap-4 overflow-hidden rounded-2xl border border-dark-700/60 bg-dark-800/60 px-4 py-6 backdrop-blur-xl transition-all duration-300 hover:border-primary-400/40 hover:bg-dark-800/80"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary-500/10 via-transparent to-primary-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <motion.div
                    initial={{ opacity: 0, rotate: -12, scale: 0.75 }}
                    whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.07 + 0.18 }}
                    className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-primary-400/20 bg-primary-500/20 text-xl text-primary-400"
                  >
                    <highlight.icon className="h-6 w-6" aria-hidden="true" />
                  </motion.div>
                  <p className="relative flex min-h-12 items-center text-center text-sm leading-relaxed text-dark-100">{t(highlight.text)}</p>
                </motion.div>
              </ViewportSuspense>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
