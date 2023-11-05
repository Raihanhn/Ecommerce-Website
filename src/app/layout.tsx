import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata= {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Flowmazon',
  description: 'we make your wallet cry',
 
  twitter: {
    card: 'summary_large_image',
    site: '@eMartiiin94',
    title: 'Title webtsite',
    description: 'this is the desciption',
    image: 'url/image.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className=' p-4 max-w-7xl m-auto min-w-[300px] ' >
        {children}
        </main>
   
        </body>
    </html>
  )
}
