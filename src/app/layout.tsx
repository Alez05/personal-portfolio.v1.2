import { Geist, Geist_Mono } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
import '@styles/global.css'
import { Footer, Navbar } from "@components/shared";
import '@fortawesome/fontawesome-free/css/all.min.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto_Slab({
  subsets: ['latin'],
  weight: ["100","200", "300","400", "500", "600", "700", "800", "900" ],
  variable: '--font-roboto-slab'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${roboto.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
