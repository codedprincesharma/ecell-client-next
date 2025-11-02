'use client';

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Team", href: "/team" },
    { name: "Events", href: "/event" },
    { name: "Ideas", href: "/idea" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/innov8ors_ecell_hit", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/official-ecell-hit-haldia", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-2xl md:text-3xl font-black tracking-tight">E-Cell</h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-xs">
              Empowering innovation and entrepreneurship at HIT Haldia through events, mentorship, and startup support.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm md:text-base inline-flex items-center group"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex items-center gap-3 text-gray-400 group">
                <Mail className="w-4 h-4 text-blue-500 group-hover:text-white transition-colors" />
                <a
                  href="mailto:ecellhaldia@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  ecellhaldia@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 group">
                <Phone className="w-4 h-4 text-blue-500 group-hover:text-white transition-colors" />
                <a
                  href="tel:+916201885752"
                  className="hover:text-white transition-colors"
                >
                  +91 6201885752 (Head)
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 group">
                <Phone className="w-4 h-4 text-blue-500 group-hover:text-white transition-colors" />
                <a
                  href="tel:+919122180280"
                  className="hover:text-white transition-colors"
                >
                  +91 9122180280 (Co-Head)
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-6">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <Icon size={24} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500 space-y-1"
        >
          <p>© {currentYear} E-Cell HIT. All rights reserved.</p>
          <p className="text-gray-400">
            Made with <span className="text-red-500">❤️</span> by the E-Cell Team
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;