import Link from 'next/link';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Finds of all Kinds - South. Find our store location, hours, and contact information.'
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] text-neutral-100">
      {/* Hero section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">Get In Touch</h1>
              <p className="text-xl text-neutral-400">
                Have questions? We'd love to hear from you. Reach out anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact information */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#252525]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact details */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-white">Store Information</h2>
              
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-neutral-700">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-[#00d4ff] mb-3">
                  <span className="text-2xl">📍</span> Location
                </h3>
                <p className="text-neutral-400">
                  West Point, GA
                </p>
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-neutral-700">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-[#00d4ff] mb-3">
                  <span className="text-2xl">🕐</span> Hours
                </h3>
                <p className="text-neutral-400">
                  Monday - Sunday
                </p>
                <p className="text-neutral-400">
                  7:00 AM - 9:00 PM
                </p>
                <p className="text-sm text-neutral-500 mt-2">
                  Open every day for your treasure hunting adventures!
                </p>
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-neutral-700">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-[#00d4ff] mb-3">
                  <span className="text-2xl">📞</span> Phone
                </h3>
                <a 
                  href="tel:7065852195"
                  className="text-neutral-300 hover:text-[#00d4ff] transition text-lg font-semibold"
                >
                  (706) 585-2195
                </a>
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-neutral-700">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-[#00d4ff] mb-3">
                  <span className="text-2xl">✉️</span> Email
                </h3>
                <a 
                  href="mailto:info@findsofallkinds.store"
                  className="text-neutral-300 hover:text-[#00d4ff] transition text-lg font-semibold break-all"
                >
                  info@findsofallkinds.store
                </a>
              </div>
            </div>

            {/* Contact form */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-white">Send Us a Message</h2>
              
              <form className="bg-[#1a1a1a] p-6 rounded-lg border border-neutral-700 space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 bg-[#2a2a2a] border border-neutral-600 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 bg-[#2a2a2a] border border-neutral-600 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition"
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
                    className="w-full px-4 py-2 bg-[#2a2a2a] border border-neutral-600 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 bg-[#2a2a2a] border border-neutral-600 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#00d4ff] text-black font-bold py-2 rounded-lg hover:bg-[#33e0ff] transition-all shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>

                <p className="text-xs text-neutral-500 text-center">
                  We'll get back to you as soon as possible!
                </p>
              </form>
            </div>
          </div>

          {/* FAQ section */}
          <div className="bg-[#1a1a1a] p-8 rounded-lg border border-neutral-700">
            <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-[#00d4ff] mb-2">Can I visit the store in person?</h3>
                <p className="text-neutral-400">
                  Yes! We're open Monday through Sunday from 7:00 AM to 9:00 PM. Visit us in West Point, GA to browse our collection and pick up any items you've purchased online.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#00d4ff] mb-2">Do you ship items?</h3>
                <p className="text-neutral-400">
                  Yes, we offer shipping on selected items. You can also pick up your purchases locally at our store during business hours (7 AM - 9 PM, Monday - Sunday). Contact us for custom shipping quotes on larger items.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#00d4ff] mb-2">What's your return policy?</h3>
                <p className="text-neutral-400">
                  As a resale store, most items are sold as-is and are final sale. However, we stand behind our merchandise. Please see our <Link href="/returns" className="text-[#00d4ff] hover:text-[#33e0ff] transition">Returns Policy</Link> for details.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#00d4ff] mb-2">Do you buy items or accept consignments?</h3>
                <p className="text-neutral-400">
                  Please contact us directly at (706) 585-2195 or info@findsofallkinds.store to inquire about buying or consignment opportunities.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#00d4ff] mb-2">How often do you get new inventory?</h3>
                <p className="text-neutral-400">
                  New items arrive regularly from storage unit auctions! For the latest finds, check back often or follow us on social media for updates.
                </p>
              </div>
            </div>
          </div>

          {/* Social media section */}
          <div className="mt-12 text-center">
            <h2 className="text-xl font-bold text-white mb-6">Connect With Us</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] border border-neutral-700 rounded-lg text-neutral-300 hover:text-[#00d4ff] hover:border-[#00d4ff] transition"
              >
                <span className="text-xl">📷</span> Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] border border-neutral-700 rounded-lg text-neutral-300 hover:text-[#00d4ff] hover:border-[#00d4ff] transition"
              >
                <span className="text-xl">👍</span> Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
