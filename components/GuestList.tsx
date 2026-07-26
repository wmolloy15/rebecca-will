// components/GuestList.tsx
'use client';

import { useForm } from '@formspree/react';

export default function GuestList() {
  const [state, handleSubmit] = useForm('xykrbqoz');

  if (state.succeeded) {
    return (
      <section id="guestlist" className="py-20 px-4 bg-cream">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="heading text-4xl md:text-5xl text-center mb-8">Guest List</h2>
          <p className="body-text text-lg text-green-600">
            Thank you! We've received your details.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="guestlist" className="py-20 px-4 bg-cream">
      <div className="max-w-2xl mx-auto">
        <h2 className="heading text-4xl md:text-5xl text-center mb-8">Guest List</h2>
        <p className="body-text text-lg md:text-xl text-center text-ink/70 mb-8">
          Please provide your details so we can keep you updated.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block body-text text-sm font-medium text-ink/80 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 rounded-lg border border-ink/20 focus:border-gold focus:outline-none body-text"
            />
          </div>
          <div>
            <label htmlFor="email" className="block body-text text-sm font-medium text-ink/80 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-lg border border-ink/20 focus:border-gold focus:outline-none body-text"
            />
          </div>
          <div>
            <label htmlFor="address" className="block body-text text-sm font-medium text-ink/80 mb-1">
              Home Address
            </label>
            <textarea
              id="address"
              name="address"
              rows={3}
              className="w-full px-4 py-2 rounded-lg border border-ink/20 focus:border-gold focus:outline-none body-text"
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-gold text-cream py-3 rounded-lg heading uppercase tracking-widest text-sm hover:bg-ink transition-colors disabled:opacity-50"
          >
            {state.submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </section>
  );
}