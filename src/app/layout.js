import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { Raleway } from 'next/font/google'
import './globals.css'

const inter = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'SeekService',
  description: 'Aplicación para encontrar servicios en tu lugar más cercano',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang='es'>
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
