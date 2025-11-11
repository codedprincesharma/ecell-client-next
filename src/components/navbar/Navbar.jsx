'use client';

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [userImage, setUserImage] = useState(null);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Member", href: "/team" },
    { name: "Alumni", href: "/founder" },
    { name: "Event", href: "/event" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const profileLink = { name: "Profile", href: "/profile" };

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch("http://localhost:3000/api/auth/profile", {
          credentials: "include",
        });
        if (!res.ok) throw new Error("Profile fetch failed");
        const data = await res.json();
        setUserImage(data.user.picture);
      } catch (err) {
        console.warn("No user logged in or failed to fetch:", err);
        setUserImage(null);
      }
    }
    fetchProfile();
  }, []);

  const avatarSrc =
    userImage ||
    "https://ui-avatars.com/api/?name=User&background=3b82f6&color=fff&bold=true";

  return (
    <>
      {/* ✅ Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-sm z-50 rounded-b-2xl">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img className="w-12 rounded-full" src="/logo.png" alt="E-Cell Logo" />
            <h1 className="text-lg md:text-xl font-semibold text-gray-900">
              E-Cell HIT Haldia
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                  pathname === link.href
                    ? "bg-blue-500 text-white font-semibold shadow-md"
                    : "text-gray-800 hover:bg-blue-100"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Profile Avatar */}
            <Link
              href={profileLink.href}
              className={`flex items-center space-x-2 rounded-full transition-all duration-200 ${
                pathname === profileLink.href
                  ? "ring-2 ring-blue-500"
                  : "hover:ring-2 hover:ring-blue-400"
              }`}
            >
              <img
                src={avatarSrc}
                alt="User Profile"
                className="w-9 h-9 rounded-full object-cover border border-gray-300 shadow-sm"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="md:hidden p-2 rounded-full hover:bg-gray-100"
          >
            <Menu className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </nav>

      {/* ✅ Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white/70 backdrop-blur-md text-gray-900 transform transition-transform duration-300 shadow-2xl z-50 rounded-l-2xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col p-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`px-3 py-2 rounded-full transition-all duration-200 ${
                pathname === link.href
                  ? "bg-blue-500 text-white font-semibold"
                  : "hover:bg-blue-100 text-gray-800"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Profile Avatar in mobile */}
          <Link
            href={profileLink.href}
            onClick={() => setIsOpen(false)}
            className="flex items-center space-x-3 p-2 rounded-full hover:bg-blue-100 transition"
          >
            <img
              src={avatarSrc}
              alt="User Profile"
              className="w-9 h-9 rounded-full object-cover border border-gray-300"
            />
            <span className="font-medium">Profile</span>
          </Link>
        </div>
      </div>

      {/* ✅ Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
