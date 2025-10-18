import { GridTileImage } from 'components/grid/tile';
import { getCollectionProducts, getProducts } from 'lib/shopify';
import type { Product } from 'lib/shopify/types';
import Link from 'next/link';

function ThreeItemGridItem({
  item,
  size,
  priority
}: {
  item: Product;
  size: 'full' | 'half';
  priority?: boolean;
}) {
  return (
    <div
      className={size === 'full' ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2 md:row-span-1'}
    >
      <Link
        className="relative block aspect-square h-full w-full"
        href={`/product/${item.handle}`}
        prefetch={true}
      >
        <GridTileImage
          src={item.featuredImage.url}
          fill
          sizes={
            size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'
          }
          priority={priority}
          alt={item.title}
          label={{
            position: size === 'full' ? 'center' : 'bottom',
            title: item.title as string,
            amount: item.priceRange.maxVariantPrice.amount,
            currencyCode: item.priceRange.maxVariantPrice.currencyCode
          }}
        />
      </Link>
    </div>
  );
}

export async function ThreeItemGrid() {
  try {
    // Try to get products from the hidden collection first, fall back to regular products
    let homepageItems;
    
    try {
      // Collections that start with `hidden-*` are hidden from the search page.
      homepageItems = await getCollectionProducts({
        collection: 'hidden-homepage-featured-items'
      });
    } catch (error) {
      console.warn('Featured items collection not found, using regular products');
      // Fallback to getting any products
      const allProducts = await getProducts({});
      homepageItems = allProducts;
    }

    // Ensure we have at least 3 products with valid data
    if (!homepageItems || homepageItems.length < 3) {
      return (
        <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-4">
          <div className="text-neutral-400 text-center py-12">
            Featured products coming soon...
          </div>
        </section>
      );
    }

    const [firstProduct, secondProduct, thirdProduct] = homepageItems;

    // Additional check to ensure all products exist
    if (!firstProduct || !secondProduct || !thirdProduct) {
      return (
        <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-4">
          <div className="text-neutral-400 text-center py-12">
            Featured products coming soon...
          </div>
        </section>
      );
    }

    return (
      <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100vh-200px)]">
        <ThreeItemGridItem size="full" item={firstProduct} priority={true} />
        <ThreeItemGridItem size="half" item={secondProduct} priority={true} />
        <ThreeItemGridItem size="half" item={thirdProduct} />
      </section>
    );
  } catch (error) {
    console.error('Error in ThreeItemGrid:', error);
    return (
      <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-4">
        <div className="text-neutral-400 text-center py-12">
          Featured products coming soon...
        </div>
      </section>
    );
  }
}
