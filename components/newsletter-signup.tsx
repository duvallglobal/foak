"use client";

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error'; message?: string }>({ type: 'idle' });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus({ type: 'loading' });

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || 'Subscription failed');
      }

      setStatus({ type: 'success', message: 'Thanks for subscribing! Check your inbox for updates.' });
      setEmail('');
    } catch (err: any) {
      setStatus({ type: 'error', message: err?.message || 'Something went wrong.' });
    }
  }

  return (
    <section className="w-full py-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <div className="flex-1">
          <h2 className="text-base sm:text-lg font-semibold text-white">Get the drop before it hits the floor</h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">Subscribe for weekly arrivals, odd finds, and local deals—West Point only.</p>
        </div>
        <form onSubmit={handleSubmit} className="w-full sm:w-auto flex items-center gap-2">
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 sm:w-64 rounded-md bg-neutral-800 text-white placeholder-neutral-400 border border-neutral-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00d4ff]"
          />
          <button
            type="submit"
            disabled={status.type === 'loading'}
            className="btn-accent whitespace-nowrap px-4 py-2"
          >
            {status.type === 'loading' ? 'Subscribing…' : 'Subscribe'}
          </button>
        </form>
      </div>
      {status.type === 'error' && (
        <p className="mt-2 text-xs sm:text-sm text-red-400">{status.message}</p>
      )}
      {status.type === 'success' && (
        <p className="mt-2 text-xs sm:text-sm text-green-400">{status.message}</p>
      )}
    </section>
  );
}