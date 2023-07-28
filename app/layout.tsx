import './globals.css'
import { Inter } from 'next/font/google'
import { Sidebar } from '../components/Sidebar/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'C言語勉強会',
  description: 'C言語の基礎を学ぶ',
}

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang='ja'>
      <body className={inter.className}>
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  )
}
