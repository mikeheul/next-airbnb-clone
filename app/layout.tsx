import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
