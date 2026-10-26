'use client'

import { motion } from 'framer-motion'
import { IoLogoGithub } from 'react-icons/io5'
import { SiStorybook } from 'react-icons/si'
import { FadeIn, SectionWrapper } from '@/components/ui/animations'
import { ViewportSuspense } from '@/components/ui/ViewportSuspense'
import { ProjectCardSkeleton } from '@/components/ui/skeletons'
import { projects } from '@/data/content'
import { usePreferences } from '@/context/PreferencesContext'

export default function Projects() {
  const { t } = usePreferences()
  return (
    <SectionWrapper id="proyectos" className="bg-dark-900/50">
      <div className="mx-auto w-full max-w-5xl">
        <FadeIn className="text-center"><h2 className="text-4xl font-bold md:text-5xl"><span className="text-gradient">{t('Proyectos destacados')}</span></h2></FadeIn>
        <FadeIn delay={0.2}><div className="mt-16 grid gap-8 lg:grid-cols-2">{projects.map((project, index) => <ViewportSuspense key={project.id} fallback={<ProjectCardSkeleton />} className="h-full"><ProjectCard project={project} index={index} t={t} /></ViewportSuspense>)}</div></FadeIn>
      </div>
    </SectionWrapper>
  )
}

function ProjectCard({ project, index, t }: { project: (typeof projects)[number]; index: number; t: (text: string) => string }) {
  return (
    <motion.article initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.15, duration: 0.7 }} className="relative group glass flex h-full min-h-[650px] flex-col rounded-3xl overflow-hidden border border-dark-700/50 hover:border-primary-500/30 transition-all duration-500 lg:min-h-[680px]">
      <div className="shrink-0 overflow-hidden bg-dark-950">
        <img
          src={project.image}
          width={project.imageWidth}
          height={project.imageHeight}
          alt={`${t('Vista previa de')} ${project.name}`}
          loading="lazy"
          decoding="async"
          className="block h-auto w-full"
        />
      </div>
      <div className="flex flex-1 flex-col p-8">
        <div className="flex flex-col gap-4">
          <div>
            <p className="mb-2 text-xs font-medium text-primary-400">{t(project.context)}</p>
            <h3 className="text-2xl font-bold">{project.name}</h3>
          </div>
          <p className="text-sm leading-relaxed text-dark-300">{t(project.description)}</p>
          <div className="flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="project-technology-pill rounded-full border border-primary-500/20 bg-primary-500/10 px-3 py-1 text-xs font-medium text-primary-300">{tech}</span>)}</div>
        </div>
        <div className="mt-auto pt-6">
          <div className="flex min-h-[65px] flex-wrap items-center gap-3 border-t border-dark-700/50 pt-6">
            {project.demo ? (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-primary-500 px-5 text-sm font-bold text-white transition-colors hover:bg-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-800">{t(project.demoLabel ?? 'Ver demo')} <span aria-hidden="true">↗</span></a>
            ) : (
              <button type="button" disabled aria-label={`${t('Ver demo')}, ${t('Próximamente')}`} title={t('Próximamente')} className="inline-flex h-10 cursor-not-allowed items-center justify-center rounded-full bg-primary-500/40 px-5 text-sm font-bold text-white/60">{t('Ver demo')}</button>
            )}
            {project.repository && <a href={project.repository} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-dark-600 bg-dark-800/70 px-5 text-sm font-bold text-dark-100 transition-colors hover:border-primary-500/50 hover:bg-dark-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-800"><IoLogoGithub className="h-4 w-4" aria-hidden="true" /> {t('Ver código')}</a>}
            {project.showLibrary && (project.library ? (
              <a href={project.library} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-[#ff4785]/50 bg-[#ff4785]/10 px-5 text-sm font-bold text-[#ff7aa6] transition-colors hover:bg-[#ff4785]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff4785] focus-visible:ring-offset-2 focus-visible:ring-offset-dark-800"><SiStorybook className="h-4 w-4" aria-hidden="true" /> {t('Ver librería')}</a>
            ) : (
              <button type="button" disabled aria-label={`${t('Ver librería')}, ${t('Próximamente')}`} title={t('Próximamente')} className="inline-flex h-10 cursor-not-allowed items-center justify-center gap-2 rounded-full border border-[#ff4785]/25 bg-[#ff4785]/5 px-5 text-sm font-bold text-[#ff7aa6]/50"><SiStorybook className="h-4 w-4" aria-hidden="true" /> {t('Ver librería')}</button>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
