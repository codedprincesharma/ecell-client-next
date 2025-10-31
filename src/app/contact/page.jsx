// src/app/contact/page.jsx
'use client';

import ContactHeader from "@/components/contact/ContactHeader";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactMap from "@/components/contact/ContactMap";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <section className="bg-black text-white py-24 px-6 overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-10">
            <ContactHeader />
            <ContactInfo />
            <ContactMap />
          </div>
          {/* Right Column */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}