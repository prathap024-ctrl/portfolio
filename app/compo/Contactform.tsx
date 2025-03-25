"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    // Use NEXT_PUBLIC_ prefix for client-side environment variables in Next.js
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Check if credentials are available
    if (!serviceID || !templateID || !publicKey) {
      setStatus("Error: EmailJS configuration is missing");
      setIsSubmitting(false);
      console.error("EmailJS credentials are not properly configured");
      return;
    }

    const form = e.target as HTMLFormElement;

    emailjs
      .sendForm(serviceID, templateID, form, publicKey)
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setStatus("Message sent successfully!");
          form.reset();
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          setStatus("Failed to send message. Please try again.");
        }
      )
      .catch((error) => {
        console.error("Unexpected error:", error);
        setStatus("An unexpected error occurred");
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setStatus(""), 3000);
      });
  };

  return (
    <div className="py-12">
      <div className="container px-4 mx-auto">
        <div className="mx-auto">
          <div className="max-w-md mx-auto px-8 py-6 bg-settheme rounded-lg border-2 border-settheme">
            <h2 className="text-2xl font-semibold text-settheme mb-4">
              Contact Us
            </h2>
            <form onSubmit={sendEmail}>
              <div className="mb-4">
                <label className="block text-settheme mb-1" htmlFor="name">
                  Your Name
                </label>
                <input
                  className="w-full px-4 py-2 bg-settheme rounded-lg focus:outline-none border-b-2 transition duration-300"
                  placeholder="Enter your name"
                  type="text"
                  name="name"
                  id="name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-settheme mb-1" htmlFor="email">
                  Your Email
                </label>
                <input
                  className="w-full px-4 py-2 bg-settheme rounded-lg focus:outline-none border-b-2 transition duration-300"
                  placeholder="Enter your email"
                  name="email"
                  id="email"
                  type="email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-settheme mb-1" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  className="w-full px-4 py-2 bg-settheme rounded-lg focus:outline-none border-b-2 transition duration-300"
                  rows={4}
                  placeholder="Enter your message"
                  name="message"
                  id="message"
                  required
                />
              </div>
              <button
                className="w-full bg-yellow-300 text-black py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300 disabled:opacity-50"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {status && (
                <p
                  className={`mt-2 text-center ${
                    status.includes("success")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;