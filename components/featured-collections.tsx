import { getCollectionProducts, getCollections } from 'lib/shopify';
import Link from 'next/link';
import { GridTileImage } from './grid/tile';

export async function FeaturedCollections() {
  const collections = await getCollections();
  
  // Filter out the "All" collection and take first 4-6 collections
  const featuredCollections = collections
    .filter(collection => collection.handle !== '' && collection.title !== 'All')
    .slice(0, 6);

  return (
    <section className="w-full bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Shop By Category</h2>
          <p className="text-neutral-400 text-sm md:text-base">Browse our curated collections of amazing finds</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {featuredCollections.map(async (collection) => {
            const products = await getCollectionProducts({
              collection: collection.handle
            });
            const featuredProduct = products[0];

            if (!featuredProduct) return null;

            return (
              <Link
                key={collection.handle}
                href={`/search/${collection.handle}`}
                className="group relative overflow-hidden rounded-lg border border-neutral-700 transition-all duration-300 hover:border-[#00d4ff] hover:shadow-lg hover:shadow-[#00d4ff]/20"
              >
                <div className="aspect-square overflow-hidden bg-neutral-800">
                  {featuredProduct.featuredImage && (
                    <GridTileImage
                      alt={collection.title}
                      src={featuredProduct.featuredImage.url}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <div className="w-full">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{collection.title}</h3>
                    <p className="text-sm text-neutral-300">{products.length} items</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
