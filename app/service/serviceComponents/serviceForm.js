"use client";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ServiceForm.module.scss";

export default function ServiceForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
  const form = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const result = await emailjs.sendForm(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        form.current,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      );

      if (result.text === "OK") {
        setSubmitStatus({
          type: "success",
          message: "Thank you! We will contact you soon.",
        });
        reset();
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Book a Service</h2>
      <form
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
      >
        <div className={styles.formGroup}>
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <span className={styles.error}>{errors.name.message}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <span className={styles.error}>{errors.email.message}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            {...register("phone", { required: "Phone number is required" })}
          />
          {errors.phone && (
            <span className={styles.error}>{errors.phone.message}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="service">Service Type *</label>
          <select
            id="service"
            name="service"
            {...register("service", { required: "Please select a service" })}
          >
            <option value="">Select a service</option>
            <option value="tank_cleaning">Fish Tank Cleaning</option>
            <option value="pond_cleaning">Pond Cleaning</option>
            <option value="tank_setup">New Tank Setup</option>
            <option value="pond_setup">New Pond Setup</option>
            <option value="maintenance">Regular Maintenance</option>
            <option value="consultation">Consultation</option>
          </select>
          {errors.service && (
            <span className={styles.error}>{errors.service.message}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Additional Details</label>
          <textarea
            id="message"
            name="message"
            {...register("message")}
            rows="4"
            placeholder="Please provide any additional details about your service request..."
          />
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Book Service"}
        </button>

        {submitStatus.message && (
          <div
            className={`${styles.statusMessage} ${styles[submitStatus.type]}`}
          >
            {submitStatus.message}
          </div>
        )}
      </form>
    </div>
  );
}
