import { Carousel } from 'components/carousel';
import ErrorBoundary from 'components/error-boundary';
import { FeaturedCollections } from 'components/featured-collections';
import { ThreeItemGrid } from 'components/grid/three-items';
import { HeroBanner } from 'components/hero-banner';
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


      {/* Latest Treasures closer to hero */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Latest Treasures</h2>
          <p className="text-neutral-400">New items added weekly from auctioned storage units</p>
        </div>
        <ErrorBoundary componentName="ThreeItemGrid">
          <ThreeItemGrid />
        </ErrorBoundary>
      </section>

      {/* Featured Collections by Category */}
      <ErrorBoundary componentName="FeaturedCollections">
        <Suspense fallback={<div className="h-96 bg-[#1a1a1a]" />}>
          <FeaturedCollections />
        </Suspense>
      </ErrorBoundary>

      {/* Carousel */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <ErrorBoundary componentName="Carousel">
          <Carousel />
        </ErrorBoundary>
      </section>

    </>
  );
}
