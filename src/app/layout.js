// src/app/layout.jsx
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { GeistSans, GeistMono } from "next/font/google";



export const metadata = {
  title: "E-Cell HIT Haldia",
  description: "Entrepreneurship Cell, Haldia Institute of Technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}