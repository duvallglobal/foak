'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormState {
  loading: boolean;
  success: boolean;
  error: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formState, setFormState] = useState<FormState>({
    loading: false,
    success: false,
    error: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (formState.error) {
      setFormState(prev => ({ ...prev, error: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setFormState({
      loading: true,
      success: false,
      error: ''
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong');
      }

      setFormState({
        loading: false,
        success: true,
        error: ''
      });

      // Clear form on success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setFormState(prev => ({ ...prev, success: false }));
      }, 5000);

    } catch (error) {
      setFormState({
        loading: false,
        success: false,
        error: error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#1a1a1a] p-6 rounded-lg border border-neutral-700 space-y-5">
      {/* Success Message */}
      {formState.success && (
        <div className="bg-green-900/20 border border-green-800 text-green-300 px-4 py-3 rounded-lg">
          <p className="font-medium">✅ Message sent successfully!</p>
          <p className="text-sm text-green-400">We'll get back to you as soon as possible.</p>
        </div>
      )}

      {/* Error Message */}
      {formState.error && (
        <div className="bg-red-900/20 border border-red-800 text-red-300 px-4 py-3 rounded-lg">
          <p className="font-medium">❌ {formState.error}</p>
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={formState.loading}
          className="w-full px-4 py-2 bg-[#2a2a2a] border border-neutral-600 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="Your name"
          maxLength={100}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={formState.loading}
          className="w-full px-4 py-2 bg-[#2a2a2a] border border-neutral-600 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          disabled={formState.loading}
          className="w-full px-4 py-2 bg-[#2a2a2a] border border-neutral-600 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="How can we help?"
          maxLength={200}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          disabled={formState.loading}
          className="w-full px-4 py-2 bg-[#2a2a2a] border border-neutral-600 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition resize-none disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="Tell us what's on your mind..."
          maxLength={1000}
        />
        <p className="text-xs text-neutral-500 mt-1">
          {formData.message.length}/1000 characters
        </p>
      </div>

      <button
        type="submit"
        disabled={formState.loading}
        className="w-full bg-[#00d4ff] text-black font-bold py-2 rounded-lg hover:bg-[#33e0ff] transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#00d4ff] disabled:shadow-lg"
      >
        {formState.loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </button>

      <p className="text-xs text-neutral-500 text-center">
        We'll get back to you as soon as possible!
      </p>
    </form>
  );
}