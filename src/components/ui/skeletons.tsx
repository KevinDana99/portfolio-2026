'use client'

import { useId } from 'react'
import ContentLoader from 'react-content-loader'

const loaderColors = {
  backgroundColor: '#182341',
  foregroundColor: '#294477',
}

function SkeletonShape({ className = '', radius = 8 }: { className?: string; radius?: number }) {
  const id = useId()
  return (
    <ContentLoader
      {...loaderColors}
      speed={1.5}
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      uniqueKey={`shape-${id}`}
      className={className}
      role="img"
      aria-label="Cargando contenido"
    >
      <rect x="0" y="0" rx={radius} ry={radius} width="100" height="100" />
    </ContentLoader>
  )
}

export function TechnologySkeleton() {
  return (
    <div className="group relative min-w-[100px]" aria-hidden="true">
      <div className="glass relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl md:h-24 md:w-24">
        <SkeletonShape className="h-8 w-8 md:h-10 md:w-10" radius={16} />
      </div>
      <div className="mt-3 flex h-5 min-w-[100px] items-center justify-center">
        <SkeletonShape className="h-4 w-20" />
      </div>
    </div>
  )
}

export function HighlightSkeleton() {
  return (
    <div className="glass flex h-[120px] items-start gap-4 rounded-2xl p-5" aria-hidden="true">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-500/10">
        <SkeletonShape className="h-6 w-6" radius={14} />
      </div>
      <div className="flex h-full w-full flex-col justify-center gap-2">
        <SkeletonShape className="h-4 w-full" />
        <SkeletonShape className="h-4 w-4/5" />
        <SkeletonShape className="h-4 w-2/5" />
      </div>
    </div>
  )
}

export function ProjectCardSkeleton() {
  return (
    <article className="glass flex h-[650px] flex-col overflow-hidden rounded-3xl border border-dark-700/50 lg:h-[680px]" aria-hidden="true">
      <div className="relative aspect-video w-full shrink-0 bg-primary-500/5">
        <SkeletonShape className="absolute inset-0 h-full w-full" radius={0} />
      </div>
      <div className="flex flex-1 flex-col space-y-6 p-8">
        <SkeletonShape className="h-8 w-1/2 shrink-0" />
        <div className="space-y-3"><SkeletonShape className="h-4 w-full" /><SkeletonShape className="h-4 w-full" /><SkeletonShape className="h-4 w-3/4" /></div>
        <div className="flex flex-wrap gap-2"><SkeletonShape className="h-6 w-20" radius={20} /><SkeletonShape className="h-6 w-24" radius={20} /><SkeletonShape className="h-6 w-16" radius={20} /></div>
        <div className="mt-auto border-t border-dark-700/50 pt-4"><SkeletonShape className="h-5 w-32" /></div>
      </div>
    </article>
  )
}

export function ExperienceSkeleton() {
  return (
    <div className="relative flex min-h-[280px] flex-col items-start gap-6 md:min-h-[180px] md:flex-row" aria-hidden="true">
      <div className="absolute left-4 top-2 h-4 w-4 -translate-x-1/2 rounded-full bg-primary-500/20 md:left-1/2" />
      <div className="w-full pl-12 md:w-1/2 md:pl-0 md:pr-8">
        <div className="glass w-full space-y-3 rounded-2xl p-6"><SkeletonShape className="h-6 w-4/5" /><SkeletonShape className="h-4 w-1/2" /><SkeletonShape className="h-3 w-1/3" /></div>
      </div>
      <div className="w-full space-y-3 pl-12 md:w-1/2 md:pl-8 md:pt-3"><SkeletonShape className="h-4 w-full" /><SkeletonShape className="h-4 w-full" /><SkeletonShape className="h-4 w-4/5" /></div>
    </div>
  )
}

export function ContactCardSkeleton() {
  return (
    <div className="glass flex h-[175px] w-full flex-col items-center gap-4 rounded-2xl p-6" aria-hidden="true">
      <SkeletonShape className="h-7 w-7 shrink-0" radius={16} />
      <div className="flex w-full flex-col items-center gap-2"><SkeletonShape className="h-5 w-20" /><SkeletonShape className="h-4 w-4/5" /></div>
    </div>
  )
}

export function HeroSkeleton() {
  return (
    <section className="site-grid min-h-screen px-5 pb-16 pt-28 md:px-10 md:pb-20 md:pt-32 lg:px-16" aria-label="Cargando presentación">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[1fr_34%] lg:gap-10">
        <div className="flex flex-col justify-between">
          <SkeletonShape className="mb-14 h-10 w-80 max-w-full rounded-full" radius={30} />
          <div><SkeletonShape className="mb-5 h-6 w-[560px] max-w-full" /><SkeletonShape className="h-40 w-[680px] max-w-full md:h-64" /></div>
          <div className="mt-12 grid gap-px border-y border-dark-700 sm:grid-cols-3">{Array.from({ length: 3 }, (_, index) => <div key={index} className="space-y-2 py-4 sm:px-5"><SkeletonShape className="h-3 w-16" /><SkeletonShape className="h-5 w-32 max-w-full" /></div>)}</div>
        </div>
        <div className="relative mt-10 min-h-[440px] overflow-hidden rounded-[2rem] border border-primary-300/20 lg:mt-0"><SkeletonShape className="absolute inset-0 h-full w-full" radius={22} /></div>
      </div>
      <div className="mx-auto mt-8 flex max-w-[1440px] gap-3"><SkeletonShape className="h-12 w-36 rounded-full" radius={30} /><SkeletonShape className="h-12 w-36 rounded-full" radius={30} /></div>
    </section>
  )
}

function HeadingSkeleton() {
  return <div className="text-center"><SkeletonShape className="mx-auto h-4 w-32" /><SkeletonShape className="mx-auto mt-3 h-12 w-64 max-w-full" /></div>
}

export function AboutSectionSkeleton() {
  return (
    <section className="bg-dark-900/50 px-5 py-14 md:px-10 md:py-16 lg:px-16" aria-label="Cargando sobre mí">
      <div className="mx-auto max-w-5xl"><HeadingSkeleton /><div className="mx-auto mt-12 max-w-3xl space-y-3">{Array.from({ length: 4 }, (_, i) => <SkeletonShape key={i} className={`mx-auto h-5 ${i === 3 ? 'w-2/3' : 'w-full'}`} />)}</div><div className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-4">{Array.from({ length: 6 }, (_, i) => <div key={i} className="w-[200px] flex-none"><HighlightSkeleton /></div>)}</div></div>
    </section>
  )
}

export function TechnologiesSectionSkeleton() {
  return (
    <section className="bg-dark-900/50 px-5 py-14 md:px-10 md:py-16 lg:px-16" aria-label="Cargando tecnologías">
      <div className="mx-auto max-w-5xl"><HeadingSkeleton /><div className="mt-16 grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6 md:gap-8 lg:grid-cols-8">{Array.from({ length: 16 }, (_, i) => <div key={i} className={i >= 9 ? 'hidden lg:block' : ''}><TechnologySkeleton /></div>)}</div></div>
    </section>
  )
}

export function ProjectsSectionSkeleton() {
  return (
    <section className="bg-dark-900/50 px-5 py-14 md:px-10 md:py-16 lg:px-16" aria-label="Cargando proyectos">
      <div className="mx-auto w-full max-w-[1440px]"><HeadingSkeleton /><div className="mt-16 grid gap-8 lg:grid-cols-2">{Array.from({ length: 4 }, (_, i) => <ProjectCardSkeleton key={i} />)}</div></div>
    </section>
  )
}

export function ExperienceSectionSkeleton() {
  return (
    <section className="bg-dark-900/50 px-5 py-14 md:px-10 md:py-16 lg:px-16" aria-label="Cargando experiencia">
      <div className="mx-auto max-w-4xl"><HeadingSkeleton /><div className="mt-16 space-y-12">{Array.from({ length: 7 }, (_, i) => <ExperienceSkeleton key={i} />)}</div></div>
    </section>
  )
}

export function ContactSectionSkeleton() {
  return (
    <section className="flex min-h-[100svh] items-center px-5 py-14 md:px-10 md:py-16 lg:px-16" aria-label="Cargando contacto">
      <div className="mx-auto max-w-4xl text-center"><HeadingSkeleton /><div className="mx-auto mt-6 max-w-2xl space-y-3"><SkeletonShape className="h-5 w-full" /><SkeletonShape className="mx-auto h-5 w-4/5" /></div><div className="mt-16 flex flex-col justify-center gap-6 sm:flex-row">{Array.from({ length: 3 }, (_, i) => <ContactCardSkeleton key={i} />)}</div></div>
    </section>
  )
}

export function FooterSkeleton() {
  return (
    <footer className="border-t border-dark-800 px-5 py-12 md:px-10 lg:px-16" aria-label="Cargando pie de página">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-6 md:flex-row"><SkeletonShape className="h-7 w-56" /><SkeletonShape className="h-4 w-72 max-w-full" /></div>
    </footer>
  )
}
