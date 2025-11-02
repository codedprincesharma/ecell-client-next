// src/app/layout.jsx
import Loader from "@/components/events/EventLoading";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer"
import { GeistSans, GeistMono } from "next/font/google";


export const metadata = {
  title: "E-Cell HIT Haldia",
  description: "Entrepreneurship Cell, Haldia Institute of Technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scrollbar-hide">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&display=swap" rel="stylesheet" />
      </head>
      <body>
      <Loader/>
        <Navbar />
        <main className=" scrollbar-hide min-h-screen">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}