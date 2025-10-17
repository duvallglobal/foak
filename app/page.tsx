import { Carousel } from 'components/carousel';
import { FeaturedCollections } from 'components/featured-collections';
import { ThreeItemGrid } from 'components/grid/three-items';
import { HeroBanner } from 'components/hero-banner';
import Footer from 'components/layout/footer';
import { Suspense } from 'react';

export const metadata = {
  description:
    'Shop unique finds at Finds of all Kinds - South. Discover furniture, home goods, clothing, and more from our curated collection of auctioned storage unit items.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      
      {/* Featured Collections by Category */}
      <Suspense fallback={<div className="h-96 bg-[#1a1a1a]" />}>
        <FeaturedCollections />
      </Suspense>

      {/* Featured Finds */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Latest Treasures</h2>
          <p className="text-neutral-400">New items added weekly from auctioned storage units</p>
        </div>
        <ThreeItemGrid />
      </section>

      {/* Carousel */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <Carousel />
      </section>

      <Footer />
    </>
  );
}
