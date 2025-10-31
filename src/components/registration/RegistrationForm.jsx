// src/components/registration/RegistrationForm.jsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { motion } from "framer-motion";
import Link from "next/link";
import DepartmentSelect from "@/components/registration/DepartmentSelect"
import RollAndYear from "@/components/registration/RollAndYear"
import FormField from "./FormField";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";
import { CheckCircle, ArrowLeft } from "lucide-react";

export default function RegistrationForm({ eventId }) {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const payload = {
        fullName: { firstName: data.firstName, lastName: data.lastName },
        email: data.email,
        department: data.department,
        classRollNo: data.classRollNo,
        year: data.year,
        phoneNumber: data.phoneNumber,
      };

      const { data: res } = await axios.post(
        `http://localhost:8080/api/v1/registation/${eventId}/register`,
        payload
      );

      if (res.success) {
        setSuccess(true);
        reset();
        setTimeout(() => setSuccess(false), 4000);
      } else {
        setError(res.message || "Registration failed");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {success && <SuccessMessage />}
      {error && <ErrorMessage error={error} />}

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6"
      >
        {/* Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label="First Name"
            name="firstName"
            register={register}
            errors={errors}
            placeholder="Prince"
            required
          />
          <FormField
            label="Last Name"
            name="lastName"
            register={register}
            errors={errors}
            placeholder="Sharma"
            required
          />
        </div>

        <FormField
          label="Email Address"
          name="email"
          type="email"
          register={register}
          errors={errors}
          placeholder="you@hit.edu.in"
          required
        />

        <DepartmentSelect register={register} errors={errors} />
        <RollAndYear register={register} errors={errors} />
        <FormField
          label="Phone Number"
          name="phoneNumber"
          type="tel"
          register={register}
          errors={errors}
          placeholder="6299193036"
          required
        />

        <button
          type="submit"
          disabled={submitting}
          className="w-full py-4 px-6 bg-blue-500 text-white font-bold rounded-xl 
            flex items-center justify-center gap-3 shadow-lg shadow-blue-500/20 
            hover:bg-blue-400 active:scale-98 transition-all duration-200 
            disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? (
            "Submitting..."
          ) : (
            <>
              <CheckCircle className="h-5 w-5" />
              Complete Registration
            </>
          )}
        </button>

        <div className="text-center mt-6">
          <Link
            href={`/event/${eventId}`}
            className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Event
          </Link>
        </div>
      </motion.form>
    </>
  );
}
