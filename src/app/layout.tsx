import './globals.css'

import {Figtree} from 'next/font/google'
import localFont from 'next/font/local'

// Google Fonts
const figtree = Figtree({
  display: 'swap', //load font without delay
  subsets: ['latin'], //just load latin letter
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-figtree', //access to this variable for applying the font
})

// Local Font
const estedad = localFont({
  src: [
    {
      path: '../../public/fonts/estedad/Estedad-Light.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/estedad/Estedad-Regular.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/estedad/Estedad-Bold.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-estedad',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html dir='rtl' className={`${figtree.variable} ${estedad.variable}`}>
      <body className='flex flex-col min-h-screen font-bold uppercase' style={{fontWeight: '300'}}>
        <header className='bg-gray-200 flex items-center justify-center h-20'>
          دوره معماری ری اکت
        </header>
        <div className='flex-1 flex'>{children}</div>
        <footer className='bg-gray-200 flex items-center justify-center h-20'>footer</footer>
      </body>
    </html>
  )
}
