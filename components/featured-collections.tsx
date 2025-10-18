import { getCollectionProducts, getCollections } from 'lib/shopify';
import Link from 'next/link';
import { GridTileImage } from './grid/tile';

export async function FeaturedCollections() {
  try {
    const collections = await getCollections();
    
    // Filter out the "All" collection and take first 4-6 collections
    const featuredCollections = collections
      .filter(collection => collection.handle !== '' && collection.title !== 'All')
      .slice(0, 6);

    // Fetch products for each collection
    const collectionsWithProducts = await Promise.all(
      featuredCollections.map(async (collection) => {
        try {
          const products = await getCollectionProducts({
            collection: collection.handle
          });
          return {
            collection,
            products,
            featuredProduct: products[0]
          };
        } catch (error) {
          console.error(`Error fetching products for collection ${collection.handle}:`, error);
          return null;
        }
      })
    );

    // Filter out collections without products and ensure type safety
    const validCollections = collectionsWithProducts.filter(
      (item): item is { collection: any; products: any[]; featuredProduct: any } => 
        item !== null && item.featuredProduct !== undefined && item.collection !== undefined
    );

    // Check if we have valid collections to display
    if (validCollections.length === 0) {
      return (
        <section className="w-full bg-[#1a1a1a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="mb-8 md:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Shop By Category</h2>
              <p className="text-neutral-400 text-sm md:text-base">Browse our curated collections of amazing finds</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
              <div className="text-neutral-400 text-sm col-span-full text-center py-12">
                Collections coming soon...
              </div>
            </div>
          </div>
        </section>
      );
    }

    return (
      <section className="w-full bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Shop By Category</h2>
            <p className="text-neutral-400 text-sm md:text-base">Browse our curated collections of amazing finds</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
            {validCollections.map(({ collection, products, featuredProduct }) => (
              <Link
                key={collection.handle}
                href={`/search/${collection.handle}`}
                className="group relative overflow-hidden rounded-lg border border-neutral-700 transition-all duration-300 hover:border-[#00d4ff] hover:shadow-lg hover:shadow-[#00d4ff]/20 aspect-square"
              >
                <div className="w-full h-full overflow-hidden bg-neutral-800">
                  {featuredProduct.featuredImage && (
                    <GridTileImage
                      alt={collection.title}
                      src={featuredProduct.featuredImage.url}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-end justify-end p-2 sm:p-3">
                  <div className="w-full text-right">
                    <h3 className="text-xs sm:text-sm font-bold text-white mb-0.5 line-clamp-2">{collection.title}</h3>
                    <p className="text-xs text-neutral-300">{products.length} items</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Error in FeaturedCollections:', error);
    return (
      <section className="w-full bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Shop By Category</h2>
            <p className="text-neutral-400 text-sm md:text-base">Browse our curated collections of amazing finds</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
            <div className="text-neutral-400 text-sm col-span-full text-center py-12">
              Collections coming soon...
            </div>
          </div>
        </div>
      </section>
    );
  }
}
