import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ignacio Mejías Cisternas',
  description: `
    Soy un Desarrollador Web FullStack con 
    2 años de experiencia en la creación de 
    Aplicaciones Web. Mi principal área de 
    enfoque es el desarrollo Front end utilizando 
    ReactJS con TypeScript y su entorno asociado. 
    Además, tengo sólidos conocimientos en desarrollo 
    Back end con el entorno de NodeJS Me gusta aprender 
    constantemente sobre nuevas tecnologías y mantenerme 
    al día con las últimas tendencias.Actualmente estoy 
    cursando la carrera Analista Programador del Centro 
    de Formación Técnica INACAP.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex items-center flex-col dark:bg-slate-900 dark:text-white`}>
        <Header />
        <main className='w-5/6 md:w-3/5'>
          {children}
        </main>
      </body>
    </html>
  )
}
