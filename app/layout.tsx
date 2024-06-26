import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from "./components/Navbar";
import { Providers } from "./providers";
import localFont from "next/font/local"; 

const myFont = localFont( {src: '../fonts/Comodo Stamp.otf'})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${myFont.className} light`} > 
      <head>
        <meta charSet="UTF-8"></meta>
      </head>
      <body>
        <div className="mx-auto max-w-screen-lg"> 
          <Providers>
            <Navigation />
            {children}
            <hr className="padded-hr" />
            <footer className='text-center py-4'>
              <p style={{fontSize: "10px", color: "white"}}>© 2023 FishPox, All Rights Reserved.</p>
            </footer>
          </Providers>
        </div>
      </body>
    </html>
  )
}
