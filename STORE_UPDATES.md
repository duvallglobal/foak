# Store Updates - October 16, 2025

## Changes Made

### 1. **Increased Logo Size** 📐
- **Component**: `components/logo-square.tsx`
- **Change**: Logo is now much larger with responsive sizing
  - Mobile: 48x48px
  - Tablet (sm): 56x56px
  - Desktop (md): 72x72px
  - Large Desktop (lg): 80x80px

### 2. **Featured Collections Section** 🏷️
- **Component**: `components/featured-collections.tsx` (NEW)
- **Feature**: Added new section on homepage that displays categories from your Shopify store
- **Display**:
  - Shows up to 6 featured collections/categories
  - Each category displays the first product as a preview image
  - Shows item count for each category
  - Clicking opens the collection's products
  - Responsive grid (1 col mobile → 2 col tablet → 3 col desktop)
  - Hover effects with glow animation

### 3. **Updated Homepage Layout** 🏠
- **File**: `app/page.tsx`
- **Changes**:
  - Added "Shop By Category" section using new FeaturedCollections component
  - Renamed "Featured Finds" to "Latest Treasures" for clarity
  - Improved section organization with better spacing

### 4. **Store Hours Updated** ⏰
- **Updated Files**:
  - `app/contact/page.tsx`
  - `components/layout/footer.tsx`
- **New Hours**: 7:00 AM - 9:00 PM, Monday - Sunday (every day)
- **Old Hours**: 24/7 HOA (removed)

### 5. **Shipping & Pickup Information Updated** 📦
- **File**: `app/contact/page.tsx` (FAQ section)
- **Changes**:
  - Updated "Can I visit the store in person?" to reflect correct hours
  - Updated "Do you ship items?" to mention:
    - Shipping available on selected items
    - Local pickup available 7 AM - 9 PM, Mon-Sun
    - Custom shipping quotes available for larger items

### 6. **Product Title Size Fixed** 📝
- **File**: `components/product/product-description.tsx`
- **Change**: Reduced product page title from text-5xl to responsive sizing
  - Mobile: text-2xl
  - Tablet: text-3xl
  - Desktop: text-4xl

## Features Added

### Featured Collections Component
```tsx
// Auto-fetches all Shopify collections
// Displays grid of categories
// Shows preview image from first product in collection
// Links to collection page
// Responsive and animated
```

## Build Status
✅ **Build Successful** - All changes compiled without errors

## Git Commit
- **Commit**: `8f45cfd9`
- **Message**: "feat: increase logo size, add featured collections/categories section, update store hours (7am-9pm) and shipping info"
- **Files Changed**: 7 files, 127 insertions(+), 52 deletions(-)

## Next Steps (Optional Enhancements)

1. **Add more products to Shopify** - The featured collections section will automatically display new categories
2. **Customize collection images** - Update featured product images in Shopify to better represent each category
3. **Add collection descriptions** - These will display if you add them to your Shopify store
4. **Deploy to Vercel** - Ready for production deployment
5. **Test on real devices** - Verify responsive design on mobile/tablet
6. **Add analytics** - Track which categories are most popular

## Notes
- Store is now properly represented as a 7 AM - 9 PM operation
- Customers know they can pick up locally OR get shipping
- Larger logo makes the brand more prominent
- Categories are pulled directly from your Shopify store (auto-updates as you add new collections)
