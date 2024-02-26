import { Libre_Baskerville } from 'next/font/google'
import './globals.css'

const libre_baskerville = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-libre-baskerville'
})

export const metadata = {
  title: "Frontend Mentor | Galleria slideshow site",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${libre_baskerville.variable}`}>
      <body>{children}</body>
    </html>
  )
}
