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
import ParticlesBackground from "@/components/ParticlesBackground"; // ✅ import

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
<body
  className={`${inter.className} relative pt-28 sm:pt-36
    bg-gradient-to-br from-white via-purple-50 to-purple-100
    text-gray-950
    dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-purple-950
    dark:text-gray-50 dark:text-opacity-90`}
>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <ParticlesBackground />   {/* 👈 background effect */}
            <Header />
            {children}
            <Footer />
            <Toaster position="bottom-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
