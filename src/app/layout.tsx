import { Inter, Work_Sans } from "next/font/google";
import "@styles/global.css";
import { Footer, Navbar } from "../components/shared/index";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Inter for headings
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Work Sans for body
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${workSans.variable}`}>
      <body>
        {children}
        <Navbar />
        <Footer />
      </body>
    </html>
  );
}
