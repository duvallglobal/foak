export function HeroBanner() {
  return (
    <section className="spotlight-container relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Dark background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#252525] to-[#1a1a1a]" />

      {/* Animated spotlight effect - responsive sizing */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="spotlight animate-pulse-glow"
          style={{
            width: 'clamp(300px, 80vw, 600px)',
            height: 'clamp(300px, 80vw, 600px)',
            top: '-150px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        {/* Elevated tagline */}
        <p className="text-xs sm:text-sm md:text-base text-[#00d4ff] tracking-wide uppercase mb-3 sm:mb-4 animate-fade-in">
          Treasure hunting made simple — West Point, GA
        </p>

        {/* Main headline with animation */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight tracking-tight animate-fade-in">
          We find the deals.
          <br />
          <span className="bg-gradient-to-r from-[#00d4ff] via-[#00a8cc] to-[#33e0ff] bg-clip-text text-transparent animate-slide-up">
            You find the steals.
          </span>
        </h1>

        {/* Subheadline with personality */}
        <p className="text-base sm:text-lg md:text-xl text-neutral-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Storage auctions → your home. Real finds, real prices. New drops weekly—fashion, electronics, furniture, collectibles, and the occasional oddity—right here in West Point, GA.
        </p>

        {/* CTA Button becomes a link */}
        <a 
          href="/search"
          className="btn-accent text-base sm:text-lg font-bold transition-all duration-300 animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          Shop New Arrivals
        </a>

        {/* Decorative elements - featured categories with glass morphism */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-neutral-700 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
          <div className="text-center animate-fade-in glass-effect p-3 sm:p-4 rounded-lg" style={{ animationDelay: '0.4s' }}>
            <div className="text-3xl sm:text-4xl mb-2">👜</div>
            <p className="text-xs sm:text-sm text-neutral-300 font-medium">Fashion & Accessories</p>
          </div>
          <div className="text-center animate-fade-in glass-effect p-3 sm:p-4 rounded-lg" style={{ animationDelay: '0.5s' }}>
            <div className="text-3xl sm:text-4xl mb-2">🎮</div>
            <p className="text-xs sm:text-sm text-neutral-300 font-medium">Electronics & Gaming</p>
          </div>
          <div className="text-center animate-fade-in glass-effect p-3 sm:p-4 rounded-lg" style={{ animationDelay: '0.6s' }}>
            <div className="text-3xl sm:text-4xl mb-2">🛋️</div>
            <p className="text-xs sm:text-sm text-neutral-300 font-medium">Furniture</p>
          </div>
          <div className="text-center animate-fade-in glass-effect p-3 sm:p-4 rounded-lg" style={{ animationDelay: '0.7s' }}>
            <div className="text-3xl sm:text-4xl mb-2">✨</div>
            <p className="text-xs sm:text-sm text-neutral-300 font-medium">& Much More</p>
          </div>
        </div>
      </div>
    </section>
  );
}
