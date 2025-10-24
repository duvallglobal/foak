import { GridTileImage } from "components/grid/tile";
import { getCollectionProducts, getProducts } from "lib/shopify";
import type { Product } from "lib/shopify/types";
import Link from "next/link";

function ThreeItemGridItem({
  item,
  size,
  priority,
}: Readonly<{
  item: Product;
  size: "full" | "half";
  priority?: boolean;
}>) {
  return (
    <div
      className={
        size === "full"
          ? "md:col-span-4 md:row-span-2"
          : "md:col-span-2 md:row-span-1"
      }
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
            size === "full"
              ? "(min-width: 768px) 66vw, 100vw"
              : "(min-width: 768px) 33vw, 100vw"
          }
          priority={priority}
          alt={item.title}
          available={item.availableForSale}
          label={{
            position: size === "full" ? "center" : "bottom",
            title: item.title,
            amount: item.priceRange.maxVariantPrice.amount,
            currencyCode: item.priceRange.maxVariantPrice.currencyCode,
          }}
        />
      </Link>
    </div>
  );
}

export async function ThreeItemGrid() {
  try {
    // Try to get products from the hidden collection first, fall back to regular products
    let homepageItems: Product[] = [];

    try {
      // Collections that start with `hidden-*` are hidden from the search page.
      homepageItems = await getCollectionProducts({
        collection: "hidden-homepage-featured-items",
      });
    } catch (error) {
      console.warn(
        "Featured items collection not found, using regular products:",
        error
      );
      // Fallback to getting any products
      const allProducts = await getProducts({});
      homepageItems = allProducts || [];
    }

    // If we have products, show as many as we have (up to 3). If none, render placeholder.
    const itemCount = homepageItems?.length || 0;

    if (itemCount === 0) {
      return (
        <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-4">
          <div className="text-neutral-400 text-center py-12">
            No featured products yet. Check back soon.
          </div>
        </section>
      );
    }

    // Choose layout based on how many items are available
    if (itemCount === 1) {
      const firstProduct = homepageItems[0]!;
      return (
        <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100vh-200px)]">
          <ThreeItemGridItem size="full" item={firstProduct} priority={true} />
        </section>
      );
    }

    if (itemCount === 2) {
      const firstProduct = homepageItems[0]!;
      const secondProduct = homepageItems[1]!;
      return (
        <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-1">
          <ThreeItemGridItem size="half" item={firstProduct} priority={true} />
          <ThreeItemGridItem size="half" item={secondProduct} priority={true} />
        </section>
      );
    }

    // 3 or more products: show first three in the original layout
    const firstProduct = homepageItems[0]!;
    const secondProduct = homepageItems[1]!;
    const thirdProduct = homepageItems[2]!;

    return (
      <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100vh-200px)]">
        <ThreeItemGridItem size="full" item={firstProduct} priority={true} />
        <ThreeItemGridItem size="half" item={secondProduct} priority={true} />
        <ThreeItemGridItem size="half" item={thirdProduct} />
      </section>
    );
  } catch (error) {
    console.error("Error in ThreeItemGrid:", error);
    return (
      <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-4">
        <div className="text-neutral-400 text-center py-12">
          Unable to load featured products right now.
        </div>
      </section>
    );
  }
}
