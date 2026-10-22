import './globals.css'
import { metadata } from './metadata'
import { PreferencesProvider } from '@/context/PreferencesContext'

// eslint-disable-next-line react-refresh/only-export-components
export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased"><PreferencesProvider>{children}</PreferencesProvider></body>
    </html>
  )
}
