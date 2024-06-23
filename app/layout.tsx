import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import ThemeSwitch from '@/components/theme-switch'
import ThemeContextProvider from '@/context/theme-context'
import Footer from '@/components/footer'
import { Toaster } from 'react-hot-toast'
import photo from '../public/photo.png'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio-Syed',
  description: 'Syedis a Full Stack Engineer developer based in India.',
  imageUrl: photo,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-950 relative pt-28 sm:pt-36 dark:bg-black dark:text-gray-50 dark:text-opacity-90`}>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="bottom-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
