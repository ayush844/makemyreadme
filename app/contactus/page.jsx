"use client"; // Ensures client-side rendering only.

import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const recipientEmail = "makemyreadme@gmail.com";
    const subject = `Inquiry about makemyreadme`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`;

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Redirect to the mailto link
    window.location.href = mailtoLink;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Reset after 3s
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center py-10 px-4">
      <div className="border-2 border-gray-400 w-full max-w-3xl p-16 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-200 text-center mb-4">
          Contact Us
        </h1>
        <p className="text-gray-100 text-center mb-6">
          We'd love to hear from you! Please fill out the form below, and we'll
          get back to you soon.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-100"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-100"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-100"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Type your message here"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#9333ea] text-white font-bold rounded-lg hover:bg-[#a855f7] transition"
          >
            Send Message
          </button>
        </form>

        {submitted && (
          <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-800 rounded">
            Thank you for reaching out! We'll get back to you soon.
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
