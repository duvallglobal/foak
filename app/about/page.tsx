import Link from 'next/link';

export const metadata = {
  title: 'About Us',
  description: 'Learn the story of Finds of all Kinds - South. Discover unique treasures from auctioned storage units.'
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] text-neutral-100">
      {/* Hero section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">About Finds of all Kinds - South</h1>
              <p className="text-xl text-neutral-400">
                Discover the story behind West Point's most exciting treasure hunt destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#252525]">
        <div className="max-w-4xl mx-auto grid gap-12">
          {/* Story section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Story</h2>
              <p className="text-neutral-300 leading-relaxed mb-4">
                Finds of all Kinds - South started with a simple belief: every item has a story, and every treasure deserves a second chance. We source our inventory from auctioned storage units, discovering an incredible variety of furniture, clothing, electronics, and unique items that might otherwise go to waste.
              </p>
              <p className="text-neutral-300 leading-relaxed">
                What makes us special is the element of discovery. You never know what you'll find walking through our store—one day it's designer fashion, the next it's rare vintage gaming equipment or beautiful mid-century furniture. That's the thrill of the hunt.
              </p>
            </div>
          </div>

          {/* Why Shop section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Why Shop With Us?</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-neutral-700">
                <h3 className="text-xl font-semibold text-[#00d4ff] mb-3">🎯 Curated Selection</h3>
                <p className="text-neutral-400">
                  We carefully source items from auctioned storage units, selecting only quality pieces that offer genuine value.
                </p>
              </div>
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-neutral-700">
                <h3 className="text-xl font-semibold text-[#00d4ff] mb-3">💎 Unique Finds</h3>
                <p className="text-neutral-400">
                  Our diverse inventory spans furniture, clothing, electronics, collectibles, and so much more across all styles and eras.
                </p>
              </div>
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-neutral-700">
                <h3 className="text-xl font-semibold text-[#00d4ff] mb-3">💰 Unbeatable Value</h3>
                <p className="text-neutral-400">
                  Shop quality items at a fraction of retail prices. Great bargains for budget-conscious treasure hunters.
                </p>
              </div>
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-neutral-700">
                <h3 className="text-xl font-semibold text-[#00d4ff] mb-3">♻️ Sustainable Shopping</h3>
                <p className="text-neutral-400">
                  Give items a second life and reduce waste. Every purchase supports sustainable consumption and circular economy.
                </p>
              </div>
            </div>
          </div>

          {/* What We Offer section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">What We Offer</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-neutral-400">
              <div className="flex items-start gap-3">
                <span className="text-[#00d4ff] font-bold">👜</span>
                <div>
                  <p className="font-semibold text-white">Fashion & Accessories</p>
                  <p className="text-sm">Designer pieces, vintage clothing, accessories from all eras</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#00d4ff] font-bold">🎮</span>
                <div>
                  <p className="font-semibold text-white">Electronics & Gaming</p>
                  <p className="text-sm">Computer equipment, gaming consoles, tech gadgets</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#00d4ff] font-bold">🛋️</span>
                <div>
                  <p className="font-semibold text-white">Furniture</p>
                  <p className="text-sm">Mid-century modern, contemporary, rustic, and vintage pieces</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#00d4ff] font-bold">🏠</span>
                <div>
                  <p className="font-semibold text-white">Home Goods</p>
                  <p className="text-sm">Decor, kitchenware, collectibles, books, and more</p>
                </div>
              </div>
            </div>
          </div>

          {/* Store Info section */}
          <div className="bg-[#1a1a1a] p-8 rounded-lg border border-neutral-700">
            <h2 className="text-3xl font-bold text-white mb-6">Visit Us</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-white mb-2">Location</h3>
                <p className="text-neutral-400">West Point, GA</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Hours</h3>
                <p className="text-neutral-400">24/7 HOA</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Phone</h3>
                <a href="tel:7065852195" className="text-[#00d4ff] hover:text-[#33e0ff] transition">
                  (706) 585-2195
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Email</h3>
                <a href="mailto:info@findsofallkinds.store" className="text-[#00d4ff] hover:text-[#33e0ff] transition">
                  info@findsofallkinds.store
                </a>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-white mb-6">Ready to Find Your Next Treasure?</h2>
            <Link
              href="/search"
              className="inline-block bg-[#00d4ff] text-black font-bold py-3 px-8 rounded-lg hover:bg-[#33e0ff] transition-all shadow-lg hover:shadow-xl"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
