'use client'

import { motion } from 'framer-motion'
import { FadeIn, SectionWrapper } from '@/components/ui/animations'
import { ViewportSuspense } from '@/components/ui/ViewportSuspense'
import { ExperienceSkeleton } from '@/components/ui/skeletons'
import { experience } from '@/data/content'
import { usePreferences } from '@/context/PreferencesContext'

export default function Experience() {
  const { t } = usePreferences()
  return (
    <SectionWrapper id="experiencia" className="bg-dark-900/50">
      <div className="max-w-4xl mx-auto">
        <FadeIn className="text-center"><h2 className="text-4xl font-bold md:text-5xl"><span className="text-gradient">{t('Experiencia')}</span></h2></FadeIn>
        <FadeIn delay={0.2}><div className="relative mt-16"><div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-dark-700 to-transparent" /><div className="space-y-12">{experience.map((item, index) => <ViewportSuspense key={item.id} fallback={<ExperienceSkeleton />}><ExperienceItem item={item} index={index} t={t} /></ViewportSuspense>)}</div></div></FadeIn>
      </div>
    </SectionWrapper>
  )
}

function ExperienceItem({ item, index, t }: { item: (typeof experience)[number]; index: number; t: (text: string) => string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.06, duration: 0.55 }} className="relative flex min-h-[280px] flex-col md:min-h-[180px] md:flex-row items-start gap-6">
      <div className="absolute top-2 left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-primary-500/30 bg-primary-500 transform -translate-x-1/2" />
      <div className="w-full pl-12 md:w-1/2 md:pl-0 md:pr-8"><div className="glass inline-block w-full rounded-2xl p-6 text-left"><h3 className="experience-card-title text-xl font-bold text-primary-300">{t(item.role)}</h3><p className="mt-1 text-sm text-dark-300">{item.company}{item.employmentType && <> · {t(item.employmentType)}</>}</p><p className="mt-1 text-xs text-dark-500">{t(item.period)}</p>{item.location && <p className="mt-1 text-xs text-dark-400">{t(item.location)}</p>}</div></div>
      <div className="w-full pl-12 md:w-1/2 md:pl-8"><p className="text-dark-300 leading-relaxed">{t(item.description)}</p></div>
    </motion.div>
  )
}
