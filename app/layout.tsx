import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"],})

export const metadata: Metadata = {
  title: "Airbnb Clone Next App",
  description: "Airnbnb Clone App with Next.js, App Router, Tailwind, Prisma, MongoDB and NextAuth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        <div className='pb-20 pt-20'>
          {children}
        </div>
      </body>
    </html>
  );
}
