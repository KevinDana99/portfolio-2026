'use client'

import { motion } from 'framer-motion'
import { usePreferences } from '@/context/PreferencesContext'

export default function Footer() {
  const { t } = usePreferences()
  return (
    <footer className="border-t border-dark-800 px-5 py-12 md:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-6 md:flex-row">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-4"><span className="text-2xl font-bold text-gradient">KD</span><span className="text-dark-300">Kevin Emanuel Dana</span></motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center md:text-right"><p className="text-sm text-dark-400">© 2026 Kevin Emanuel Dana. {t('Todos los derechos reservados.')}</p></motion.div>
      </div>
    </footer>
  )
}
