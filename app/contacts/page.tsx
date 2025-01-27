"use client"; // Mark this as a client component to allow hooks (if needed in the future)

import { useState } from "react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic (e.g., send data to a server or email)
    setIsSubmitted(true);
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="my-8 p-6 bg-gradient-to-r from-green-100 via-green-200 to-green-300 rounded-xl shadow-xl">
      <h2 className="text-4xl font-bold text-green-600 mb-6 text-center">Contact Me</h2>
      <p className="text-gray-700 text-lg mb-6 text-center">Feel free to reach out to me for collaborations, questions, or just a chat!</p>

      {/* Contact Links */}
      <div className="mb-8 flex justify-center space-x-6">
        <a href="mailto:princegupta9041@gmail.com" className="text-blue-600 hover:text-blue-800 transition-all">Email</a>
        <a href="https://linkedin.com/in/prince-gupta04" target="_blank" className="text-blue-600 hover:text-blue-800 transition-all">LinkedIn</a>
        <a href="https://github.com/princegupta04" target="_blank" className="text-blue-600 hover:text-blue-800 transition-all">GitHub</a>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all"
        >
          {isSubmitted ? "Message Sent!" : "Send Message"}
        </button>
      </form>
    </section>
  );
}
