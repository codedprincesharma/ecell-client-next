// src/components/contact/ContactForm.jsx
'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import FormField from "./FormField";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/contact/submit",
        form
      );
      if (response.data.success) {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
      }
    } catch (err) {
      alert(err.response?.data?.message || "Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      onSubmit={handleSubmit}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6 hover:border-blue-500/20 transition-colors duration-300"
    >
      <FormField
        label="Full Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your full name"
        required
      />
      <FormField
        label="Email Address"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="you@hit.edu.in"
        required
      />
      <FormField
        label="Phone Number"
        name="phone"
        type="tel"
        value={form.phone}
        onChange={handleChange}
        placeholder="+91 98765 43210"
        required
      />
      <FormField
        label="Message"
        name="message"
        tag="textarea"
        rows={5}
        value={form.message}
        onChange={handleChange}
        placeholder="How can we help you today?"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 px-6 bg-blue-500 text-white font-bold rounded-xl
                 flex items-center justify-center gap-3 shadow-lg shadow-blue-500/20
                 hover:bg-blue-400 active:scale-98
                 transition-all duration-200 disabled:opacity-50"
      >
        {loading ? "Sending..." : <><Send className="h-5 w-5" /> Send Message</>}
      </button>
    </motion.form>
  );
}