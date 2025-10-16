# Customization Guide - Finds of all Kinds - South

This guide will help you complete all the customization tasks for your ecommerce store.

## Overview

This document outlines the remaining customization tasks after initial branding setup. Complete them in order for best results.

## Phase 1: Visual Identity (Tasks 4-5)

### Task 4: Create Custom Logo and Favicon

**Files to Update:**
- `components/icons/logo.tsx` - Main logo component
- `public/favicon.ico` - Browser tab favicon
- `public/apple-touch-icon.png` - Apple device icon (optional)

**Instructions:**

1. **Create your logo:**
   - Design a logo for "Finds of all Kinds - South"
   - Recommended: SVG format for scalability, ~400x400px minimum
   - Include your color palette (we'll match with Tailwind theme)

2. **Update logo component:**
   ```tsx
   // components/icons/logo.tsx
   export function LogoIcon(props) {
     return (
       <svg width="32" height="32" viewBox="0 0 32 32" {...props}>
         {/* Your SVG content */}
       </svg>
     );
   }
   ```

3. **Add favicon:**
   - Generate favicon from your logo at [favicon.io](https://favicon.io/)
   - Save as `public/favicon.ico` (32x32 pixels)
   - Add to `app/layout.tsx` in the metadata:
     ```tsx
     icons: {
       icon: '/favicon.ico',
       apple: '/apple-touch-icon.png'
     }
     ```

### Task 5: Update Color Scheme and Styling

**Files to Update:**
- `tailwind.config.ts` - Tailwind color configuration
- `app/globals.css` - Global CSS variables
- Various component files for color usage

**Current Colors (Neutral/Minimal):**
- Backgrounds: Neutral-50/900
- Text: Black/White
- Accents: Teal-300, Pink-500

**Recommended Color Updates for Resale Store:**

Consider colors that convey:
- Treasure/discovery (warm golds, warm grays)
- Trustworthiness (deep blues, neutrals)
- Diversity/variety (complementary accent colors)
- Value (earth tones, wood tones)

1. **Update Tailwind Config:**
   ```ts
   // tailwind.config.ts
   theme: {
     extend: {
       colors: {
         'brand': {
           'primary': '#4B5563',    // Warm gray-blue
           'secondary': '#D4AF37',  // Gold (treasure/value)
           'accent': '#8B7355',     // Warm brown (earth tones)
         },
         'warm': {
           '50': '#FFF8F3',
           '100': '#FFE8DC',
           '200': '#FFD4C4',
         }
       }
     }
   }
   ```

2. **Update in `app/layout.tsx`:**
   - Change selection colors to match your palette
   - Update body class colors to reflect brand

3. **Update component colors:**
   - Search for hardcoded color classes
   - Replace with your custom colors

## Phase 2: Content & Pages (Tasks 6-9)

### Task 6: Customize Homepage Content

**File:** `app/page.tsx`

**Current Structure:**
- ThreeItemGrid - Featured items grid
- Carousel - Product carousel
- Footer - Store footer

**Customization Ideas:**

Create a welcoming homepage that highlights the treasure-hunting experience:

```tsx
// Add hero section with store tagline
export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-secondary py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Finds of all Kinds - South
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-4">
            Discover unique furniture, clothing, home goods, and more
          </p>
          <p className="text-lg opacity-80">
            Sourced from auctioned storage units - new treasures every week!
          </p>
        </div>
      </section>
      
      {/* Featured Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What You'll Find Here</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-4xl mb-2">🪑</div>
              <p className="font-semibold">Furniture</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">👕</div>
              <p className="font-semibold">Clothing</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🏠</div>
              <p className="font-semibold">Home Goods</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">✨</div>
              <p className="font-semibold">And More!</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Existing components */}
      <ThreeItemGrid />
      <Carousel />
      <Footer />
    </>
  );
}
```

### Task 7: Update Footer Information

**File:** `components/layout/footer.tsx`

**Add to Footer:**
- Store name and tagline
- Store address (South location)
- Phone number
- Email
- Hours of operation
- Social media links (Instagram/TikTok great for showing new finds!)
- Links to: About, Contact, Privacy Policy, Terms, Returns
- Payment methods accepted
- "New inventory weekly" or similar messaging

```tsx
// Example footer structure
const storeInfo = {
  name: 'Finds of all Kinds - South',
  tagline: 'Unique Finds from Auctioned Storage Units',
  address: '123 Main Street, South City, ST 12345',
  phone: '(555) 123-4567',
  email: 'info@findsofallkinds.com',
  hours: 'Mon-Sat: 10am-6pm, Sun: 12pm-5pm',
  social: {
    instagram: 'https://instagram.com/findsofallkinds',
    facebook: 'https://facebook.com/findsofallkinds',
    tiktok: 'https://tiktok.com/@findsofallkinds'
  },
  callouts: [
    'New Inventory Weekly!',
    'Shop Sustainably',
    'Furniture • Clothing • Home Goods & More'
  ]
};
```

### Task 8: Customize Navigation and Menu

**Files:**
- `components/layout/navbar/index.tsx`
- `components/layout/navbar/mobile-menu.tsx`

**Navigation Items to Add:**
- Home
- Shop (or Categories/Browse)
- About Us
- Contact
- Blog (optional)
- Cart (already implemented)

**Update Mobile Menu:**
- Ensure all navigation links are accessible
- Add store info in mobile menu footer
- Test on small screens

### Task 9: Update Product Descriptions and Templates

**Files:**
- `components/product/gallery.tsx`
- `components/product/product-description.tsx`

**Customize:**
- Product image galleries with multiple angles
- Clear description formatting including:
  - Item type and category (furniture, clothing, home goods, etc.)
  - Condition/quality assessment (like new, gently used, fair, etc.)
  - Dimensions for furniture and larger items
  - Material/fabric information where applicable
  - Any unique characteristics or stories
  - Care instructions (especially for clothing and delicate items)
- Size/fit information for clothing items
- Assembly requirements or condition notes for furniture
- Highlight unique or special finds

## Phase 3: Additional Pages (Tasks 12-14)

### Task 12: Create About Page

**Create File:** `app/about/page.tsx`

```tsx
export const metadata = {
  title: 'About Us',
  description: 'Learn the story of Finds of all Kinds - South'
};

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About Finds of all Kinds - South</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-lg leading-relaxed mb-4">
          Finds of all Kinds - South is your destination for unique, diverse treasures sourced from auctioned storage units. 
          We specialize in furniture, home goods, clothing, and an eclectic mix of items across all ages and styles.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Every item in our store has its own story, and we're passionate about giving these finds a second life. 
          From mid-century furniture to contemporary clothing, vintage home décor to practical everyday items, 
          you'll discover something special every time you shop with us.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Shop With Us?</h2>
        <ul className="text-lg space-y-3 list-disc list-inside">
          <li>Curated selection from carefully sourced auctioned storage units</li>
          <li>Diverse inventory: furniture, home goods, clothing, and more</li>
          <li>Great prices on quality items</li>
          <li>Sustainable shopping - giving items a second chance</li>
          <li>New inventory regularly as we source new storage units</li>
          <li>Support local - shop at our South location</li>
        </ul>
      </section>
      
      {/* Add more sections as needed */}
    </main>
  );
}
```

### Task 13: Add Contact Page

**Create File:** `app/contact/page.tsx`

Include:
- Contact form (consider using services like Formspree, Netlify Forms)
- Store location and hours
- Contact information
- Map embed (Google Maps)
- Social media links

### Task 14: Update Legal Pages

**Create Files:**
- `app/privacy/page.tsx` - Privacy Policy
- `app/terms/page.tsx` - Terms of Service
- `app/returns/page.tsx` - Return Policy (Shopify-specific)

Use templates from:
- [Termly](https://termly.io/)
- [iubenda](https://www.iubenda.com/)
- Shopify's built-in policy generator

## Phase 4: SEO & Performance (Tasks 15, 19)

### Task 15: Configure SEO and Meta Tags

**Files to Update:**
- `app/opengraph-image.tsx`
- Component-specific OG images
- Meta descriptions throughout the site

**Add to layouts:**
```tsx
export const metadata = {
  title: 'Page Title',
  description: 'Compelling description for search results',
  openGraph: {
    title: 'Page Title',
    description: 'OG description',
    images: ['/og-image.png']
  }
};
```

### Task 19: Optimize Images and Performance

**Optimizations:**
1. Use Next.js Image component everywhere
2. Add responsive image sizes
3. Enable AVIF format in next.config.ts (already enabled)
4. Lazy load images below the fold
5. Monitor Core Web Vitals using Vercel Analytics

## Testing Checklist (Tasks 17-18, 24)

### Task 17: Test Cart Functionality
- [ ] Add items to cart
- [ ] Edit quantities
- [ ] Remove items
- [ ] Proceed to checkout
- [ ] Mobile cart experience

### Task 18: Test Search and Collections
- [ ] Search functionality works
- [ ] Filters apply correctly
- [ ] Collection pages load
- [ ] Pagination works (if applicable)
- [ ] Mobile search experience

### Task 24: Test Cross-Browser
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari (macOS)
- [ ] Safari (iOS)
- [ ] Chrome (Android)
- [ ] Screen readers (accessibility)

## Deployment Tasks (Tasks 1, 20, 22)

### Task 1: Initialize GitHub Repository

See `GITHUB_SETUP.md` for detailed instructions.

### Task 20: Deploy to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables
4. Deploy (automatic on push)

### Task 22: Configure Domain

1. Purchase domain (if needed)
2. Add to Vercel
3. Update DNS records
4. Wait for DNS propagation (can take 24-48 hours)

## Monitoring & Analytics (Tasks 21, 25)

### Task 21: Set Up Analytics

**Google Analytics:**
1. Create GA4 property
2. Add tracking code to `app/layout.tsx`
3. Monitor user behavior

**Shopify Analytics:**
- Available in your Shopify admin
- Track sales, traffic, customer data

### Task 25: Set Up Error Tracking

**Sentry Setup:**
```bash
npm install @sentry/nextjs
```

Then configure in `next.config.ts`

## Quick Start Commands

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Check for formatting issues
pnpm prettier:check

# Format code
pnpm prettier

# Run tests
pnpm test
```

## File Organization Tips

- Keep components in `components/` directory organized by feature
- Utilities in `lib/` directory
- Styles specific to components in component files
- Global styles in `app/globals.css`
- TypeScript types in `lib/types.ts` or component-specific

## Next Steps

1. Review your brand identity (colors, logo, voice)
2. Complete Phase 1 customizations (visual identity)
3. Complete Phase 2 customizations (content)
4. Test thoroughly on all devices
5. Deploy and monitor

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Server Components](https://react.dev/reference/rsc/server-components)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shopify Storefront API](https://shopify.dev/api/storefront)
- [Vercel Deployment Guide](https://vercel.com/docs/concepts/deployments/overview)

---

Last Updated: October 16, 2025
