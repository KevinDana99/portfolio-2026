'use client'

import { motion } from 'framer-motion'
import { FadeIn, SectionWrapper } from '@/components/ui/animations'
import { ViewportSuspense } from '@/components/ui/ViewportSuspense'
import { ContactCardSkeleton } from '@/components/ui/skeletons'
import { contactInfo } from '@/data/content'
import { usePreferences } from '@/context/PreferencesContext'

export default function Contact() {
  const { t } = usePreferences()
  return (
    <SectionWrapper id="contacto" className="flex min-h-[100svh] items-center">
      <div className="mx-auto w-full max-w-4xl text-center">
        <FadeIn><h2 className="text-4xl font-bold md:text-5xl"><span className="text-gradient">{t('Contacto')}</span></h2><p className="mt-6 text-lg text-dark-300 max-w-2xl mx-auto leading-relaxed">{t('¿Tienes un proyecto en mente, una oportunidad laboral o necesitas una solución a medida? Estoy abierto a colaboraciones.')}</p></FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'GitHub', value: '@kevindana99', href: contactInfo.github, icon: <GithubIcon /> },
              { label: 'LinkedIn', value: 'linkedin.com/in/kevindana', href: contactInfo.linkedin, icon: <LinkedinIcon /> },
              { label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}`, icon: <MailIcon /> },
              { label: 'WhatsApp', value: contactInfo.whatsapp.number, href: contactInfo.whatsapp.href, icon: <WhatsappIcon /> },
            ].map((contact, index) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="h-full"
              >
                <ViewportSuspense fallback={<ContactCardSkeleton />} className="h-full">
                  <ContactCard {...contact} />
                </ViewportSuspense>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  )
}

function ContactCard({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
  return (
    <motion.a href={href} target="_blank" rel="noopener noreferrer" whileHover={{ y: -5 }} className="flex h-[175px] w-full flex-col items-center gap-4 p-6 glass rounded-2xl transition-all duration-300 hover:border-primary-500/50 hover:shadow-[0_0_30px_rgba(59,91,219,0.2)]">
      <motion.div whileHover={{ rotate: 5 }} className="flex items-center justify-center text-primary-400">{icon}</motion.div>
      <div><p className="font-medium text-dark-50">{label}</p><p className="text-sm text-dark-400 mt-1 break-all">{value}</p></div>
    </motion.a>
  )
}

function GithubIcon() { return <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .7a11.5 11.5 0 00-3.6 22.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.7-1.3-1.7-1.1-.8.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.3 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.5 11.5 0 0012 .7z" /></svg> }
function LinkedinIcon() { return <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.47-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.29zM5.32 7.41a2.07 2.07 0 110-4.13 2.07 2.07 0 010 4.13zm1.78 13.04H3.54V8.98H7.1v11.47z" /></svg> }
function MailIcon() { return <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> }
function WhatsappIcon() { return <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2a9.84 9.84 0 00-8.43 14.91L2 22l5.22-1.58A9.9 9.9 0 1012.04 2zm0 17.98a8.1 8.1 0 01-4.12-1.13l-.3-.18-3.1.94.98-3.02-.2-.31a8.13 8.13 0 116.74 3.7zm4.46-6.08c-.24-.12-1.45-.72-1.68-.8-.22-.08-.38-.12-.55.12-.16.25-.63.8-.78.97-.14.16-.28.18-.52.06-.25-.12-1.03-.38-1.96-1.21a7.4 7.4 0 01-1.36-1.7c-.14-.24-.02-.37.1-.49.11-.11.25-.28.37-.43.12-.14.16-.24.24-.4.08-.17.04-.31-.02-.43-.06-.12-.55-1.32-.75-1.81-.2-.47-.4-.4-.55-.41h-.47c-.16 0-.43.06-.65.3-.22.25-.85.84-.85 2.04s.87 2.36 1 2.52c.11.16 1.71 2.62 4.15 3.68.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.45-.6 1.66-1.17.2-.58.2-1.07.14-1.17-.06-.1-.22-.16-.46-.29z" /></svg> }
