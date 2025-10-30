'use client';

import { useState } from 'react';

/**
 * ContactForm Component
 * Simple contact form that uses mailto functionality to open user's default email client
 * Collects name, email, and message then pre-fills an email with the form data
 * Styled with coral theme colors and supports dark/light mode
 */
export default function ContactForm() {
  // Form state to track input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle form submission by creating and opening mailto URL
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto URL with form data
    const subject = `Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoUrl = `mailto:Zack@sparkline.pro?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open default email client with pre-filled email
    window.location.href = mailtoUrl;
  };

  // Handle input changes and update form state
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      {/* Name input field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          // Styling: Coral focus ring, theme-aware backgrounds and text colors
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />
      </div>

      {/* Email input field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          // Styling: Same theme-aware styling as name field
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />
      </div>

      {/* Message textarea field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
          // Styling: Textarea with resize disabled and same theme styling
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
        />
      </div>

      {/* Submit button with coral theme colors */}
      <button
        type="submit"
        className="w-full bg-coral-500 hover:bg-coral-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
