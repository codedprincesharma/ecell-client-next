// src/components/Navbar.jsx
'use client';

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Founder", href: "/founder" },
    { name: "Member", href: "/team" },
    { name: "Idea", href: "/idea" },
    { name: "Event", href: "/event" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Desktop + Mobile Navbar */}
      <nav className="bg-white/50 backdrop-blur-md fixed top-0 right-0 left-0 text-black px-6 shadow-md z-10">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 py-3">
            <img className="w-14" src="/logo.png" alt="E-cell Logo" />
            <h1 className="text-xl capitalize font-serif">E-cell HIT haldia</h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={
                  pathname === link.href
                    ? "text-blue-500 text-xl font-extrabold font-[Orbitron]"
                    : "text-black font-medium hover:text-blue-500 transition"
                }
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)} aria-label="Open menu">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col p-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={
                pathname === link.href
                  ? "text-blue-400 font-semibold"
                  : "text-white hover:text-blue-400"
              }
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}