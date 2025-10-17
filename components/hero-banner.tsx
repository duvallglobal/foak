export function HeroBanner() {
  return (
    <section className="spotlight-container relative w-full min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Dark background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#252525] to-[#1a1a1a]" />

      {/* Animated spotlight effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="spotlight animate-pulse-glow"
          style={{
            width: '600px',
            height: '600px',
            top: '-150px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main headline with animation */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight animate-fade-in">
          Uncommon Finds.
          <br />
          <span className="bg-gradient-to-r from-[#00d4ff] via-[#00a8cc] to-[#33e0ff] bg-clip-text text-transparent animate-slide-up">
            Unexpected Value.
          </span>
        </h1>

        {/* Subheadline with personality */}
        <p className="text-lg sm:text-xl text-neutral-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Every week brings fresh treasures discovered in auctioned storage units. Fashion, electronics, furniture, collectibles—the hunt never stops.
        </p>

        {/* CTA Button with enhanced effects */}
        <button 
          className="btn-accent text-lg font-bold transition-all duration-300 animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          Explore The Latest Finds
        </button>

        {/* Decorative elements - featured categories with glass morphism */}
        <div className="mt-16 pt-8 border-t border-neutral-700 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="text-center animate-fade-in glass-effect p-4 rounded-lg" style={{ animationDelay: '0.4s' }}>
            <div className="text-4xl mb-2">👜</div>
            <p className="text-sm text-neutral-300 font-medium">Fashion & Accessories</p>
          </div>
          <div className="text-center animate-fade-in glass-effect p-4 rounded-lg" style={{ animationDelay: '0.5s' }}>
            <div className="text-4xl mb-2">🎮</div>
            <p className="text-sm text-neutral-300 font-medium">Electronics & Gaming</p>
          </div>
          <div className="text-center animate-fade-in glass-effect p-4 rounded-lg" style={{ animationDelay: '0.6s' }}>
            <div className="text-4xl mb-2">🛋️</div>
            <p className="text-sm text-neutral-300 font-medium">Furniture</p>
          </div>
          <div className="text-center animate-fade-in glass-effect p-4 rounded-lg" style={{ animationDelay: '0.7s' }}>
            <div className="text-4xl mb-2">✨</div>
            <p className="text-sm text-neutral-300 font-medium">& Much More</p>
          </div>
        </div>
      </div>
    </section>
  );
}
