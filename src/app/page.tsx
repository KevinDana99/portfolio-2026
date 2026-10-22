import { lazy, Suspense } from 'react'
import { Navbar } from '@/components/Navbar'
import { ScrollToTopButton } from '@/components/ScrollToTopButton'
import {
  AboutSectionSkeleton,
  ContactSectionSkeleton,
  ExperienceSectionSkeleton,
  FooterSkeleton,
  HeroSkeleton,
  ProjectsSectionSkeleton,
  TechnologiesSectionSkeleton,
} from '@/components/ui/skeletons'

const Hero = lazy(() => import('@/components/Hero'))
const About = lazy(() => import('@/components/About'))
const Technologies = lazy(() => import('@/components/Technologies'))
const Projects = lazy(() => import('@/components/Projects'))
const Experience = lazy(() => import('@/components/Experience'))
const Contact = lazy(() => import('@/components/Contact'))
const Footer = lazy(() => import('@/components/Footer'))

export default function Home() {
  return (
    <main className="relative min-h-screen bg-dark-950">
      <Navbar />
      <ScrollToTopButton />
      <Suspense fallback={<HeroSkeleton />}><Hero /></Suspense>
      <Suspense fallback={<AboutSectionSkeleton />}><About /></Suspense>
      <Suspense fallback={<TechnologiesSectionSkeleton />}><Technologies /></Suspense>
      <Suspense fallback={<ProjectsSectionSkeleton />}><Projects /></Suspense>
      <Suspense fallback={<ExperienceSectionSkeleton />}><Experience /></Suspense>
      <Suspense fallback={<ContactSectionSkeleton />}><Contact /></Suspense>
      <Suspense fallback={<FooterSkeleton />}><Footer /></Suspense>
    </main>
  )
}
