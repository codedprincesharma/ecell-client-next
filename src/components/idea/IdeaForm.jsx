// src/components/idea/IdeaForm.jsx
'use client';

import { useState, useRef, useEffect } from "react";
import axios from "axios";
import gsap from "gsap";
import FormField from "./FormField";
import SubmitButton from "./SubmitButton";
import SuccessMessage from "./SuccessMessage";

export default function IdeaForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      inputsRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.3,
      }
    );
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/idea/submitIdea",
        formData
      );

      if (data.success) {
        setSubmitted(true);
        setFormData({ fullName: "", email: "", description: "" });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (err) {
      alert(err.response?.data?.message || "Submission failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {submitted && <SuccessMessage />}
      <form onSubmit={handleSubmit} className="space-y-8">
        <FormField
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your name"
          ref={(el) => el && inputsRef.current.push(el)}
          required
        />
        <FormField
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@hit.edu.in"
          ref={(el) => el && inputsRef.current.push(el)}
          required
        />
        <FormField
          label="Your Startup Idea"
          name="description"
          tag="textarea"
          rows={6}
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe your idea in detail — problem, solution, target market..."
          ref={(el) => el && inputsRef.current.push(el)}
          required
        />
        <SubmitButton loading={loading} ref={(el) => el && inputsRef.current.push(el)} />
      </form>

      <p className="text-center text-blue-500/60 text-xs mt-10 font-medium tracking-wider">
        All submissions are confidential. Selected ideas receive mentorship.
      </p>
    </>
  );
}