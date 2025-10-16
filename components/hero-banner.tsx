export function HeroBanner() {
  return (
    <section className="spotlight-container relative w-full min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Dark background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#252525] to-[#1a1a1a]" />

      {/* Animated spotlight effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="spotlight"
          style={{
            width: '600px',
            height: '600px',
            top: '-150px',
            animation: 'pulse 4s ease-in-out infinite'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
          Uncommon Finds.
          <br />
          <span className="bg-gradient-to-r from-[#00d4ff] via-[#00a8cc] to-[#33e0ff] bg-clip-text text-transparent">
            Unexpected Value.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-neutral-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Curated fashion, electronics, and collectibles discovered weekly from auctioned storage units.
        </p>

        {/* CTA Button */}
        <button className="btn-accent text-lg font-bold hover:scale-105 transition-transform duration-200">
          Explore The Latest Finds
        </button>

        {/* Decorative elements - featured categories */}
        <div className="mt-16 pt-8 border-t border-neutral-700 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl mb-2">👜</div>
            <p className="text-sm text-neutral-400">Fashion & Accessories</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🎮</div>
            <p className="text-sm text-neutral-400">Electronics & Gaming</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🛋️</div>
            <p className="text-sm text-neutral-400">Furniture</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">✨</div>
            <p className="text-sm text-neutral-400">& Much More</p>
          </div>
        </div>
      </div>
    </section>
  );
}
