#!/bin/bash

# 3D UI Components Setup Script for Next.js Commerce

set -e

echo "🎨 Creating 3D UI Components for Next.js Commerce..."
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

# Check if in Next.js project
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Run from project root."
    exit 1
fi

echo "${BLUE}📦 Step 1: Installing dependencies...${NC}"
# Detect package manager
PM=""
if [ -f "pnpm-lock.yaml" ] && command -v pnpm >/dev/null 2>&1; then
  PM="pnpm"
elif [ -f "yarn.lock" ] && command -v yarn >/dev/null 2>&1; then
  PM="yarn"
elif command -v npm >/dev/null 2>&1; then
  PM="npm"
else
  echo "❌ Error: No package manager found (pnpm, yarn, or npm)."
  exit 1
fi

if [ "$PM" = "pnpm" ]; then
  pnpm add framer-motion
elif [ "$PM" = "yarn" ]; then
  yarn add framer-motion
else
  npm install framer-motion
fi

echo ""
echo "${BLUE}📁 Step 2: Creating directory structure...${NC}"
mkdir -p components/pricing

echo ""
echo "${BLUE}📝 Step 3: Creating 3D component files...${NC}"

# FILE 1: pricing-card-3d.tsx
cat > components/pricing/pricing-card-3d.tsx << 'EOF'
'use client';

import { motion } from 'framer-motion';

interface PricingCardProps {
  priceRange: {
    low: number;
    median: number;
    high: number;
    average: number;
  };
  confidence: 'high' | 'medium' | 'low';
  totalComparables: number;
}

export function PricingCard3D({ priceRange, confidence, totalComparables }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.02,
        rotateX: 2,
        rotateY: 2,
      }}
      style={{
        transformStyle: 'preserve-3d',
        transform: 'translateZ(0)'
      }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[1px] shadow-2xl"
    >
      <div className="relative h-full rounded-2xl bg-white p-6 dark:bg-gray-900">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {confidence} confidence
          </span>
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800 dark:bg-green-900 dark:text-green-200">
            {totalComparables} found
          </span>
        </div>
        
        <div className="mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">Suggested Price</p>
          <p className="text-4xl font-bold text-gray-900 dark:text-white">${priceRange.median}</p>
        </div>
        
        <div className="space-y-2 border-t border-gray-200 pt-4 dark:border-gray-700">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500 dark:text-gray-400">Low</span>
            <span className="font-medium text-gray-900 dark:text-white">${priceRange.low}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500 dark:text-gray-400">High</span>
            <span className="font-medium text-gray-900 dark:text-white">${priceRange.high}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500 dark:text-gray-400">Average</span>
            <span className="font-medium text-gray-900 dark:text-white">${priceRange.average}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
EOF

echo "${GREEN}✓${NC} Created components/pricing/pricing-card-3d.tsx"

# FILE 2: comparable-card-3d.tsx
cat > components/pricing/comparable-card-3d.tsx << 'EOF'
'use client';

import { motion } from 'framer-motion';

interface ComparableCardProps {
  title: string;
  price: number;
  link: string;
  source: 'ebay' | 'google' | 'scrapingdog';
  soldDate?: string;
  condition?: string;
}

export function ComparableCard3D({ title, price, link, source, soldDate, condition }: ComparableCardProps) {
  const sourceColors = {
    ebay: 'from-blue-500 to-blue-600',
    google: 'from-green-500 to-green-600',
    scrapingdog: 'from-purple-500 to-purple-600'
  };

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ 
        scale: 1.03,
        y: -5,
        transition: { duration: 0.2 }
      }}
      style={{
        transformStyle: 'preserve-3d'
      }}
      className="block rounded-lg bg-white p-4 shadow-md hover:shadow-xl dark:bg-gray-800"
    >
      <div className="mb-2 flex items-center justify-between">
        <div className={`inline-block rounded px-2 py-1 text-xs font-semibold text-white bg-gradient-to-r ${sourceColors[source]}`}>
          {source.toUpperCase()}
        </div>
        {condition && (
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {condition}
          </span>
        )}
      </div>
      
      <h3 className="mb-2 line-clamp-2 text-sm font-medium text-gray-900 dark:text-white">
        {title}
      </h3>
      
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-gray-900 dark:text-white">
          ${price.toFixed(2)}
        </span>
        {soldDate && (
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {new Date(soldDate).toLocaleDateString()}
          </span>
        )}
      </div>
    </motion.a>
  );
}
EOF

echo "${GREEN}✓${NC} Created components/pricing/comparable-card-3d.tsx"

# FILE 3: comparables-grid-3d.tsx
cat > components/pricing/comparables-grid-3d.tsx << 'EOF'
'use client';

import { motion } from 'framer-motion';
import { ComparableCard3D } from './comparable-card-3d';

interface Comparable {
  title: string;
  price: number;
  link: string;
  source: 'ebay' | 'google' | 'scrapingdog';
  soldDate?: string;
  condition?: string;
}

interface ComparablesGridProps {
  comparables: Comparable[];
}

export function ComparablesGrid3D({ comparables }: ComparablesGridProps) {
  if (comparables.length === 0) {
    return (
      <div className="rounded-lg border-2 border-dashed border-gray-300 p-12 text-center dark:border-gray-700">
        <p className="text-gray-500 dark:text-gray-400">No comparables found</p>
      </div>
    );
  }

  return (
    <div>
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-4 text-xl font-bold text-gray-900 dark:text-white"
      >
        Found {comparables.length} Comparables
      </motion.h2>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {comparables.map((comp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <ComparableCard3D {...comp} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
EOF

echo "${GREEN}✓${NC} Created components/pricing/comparables-grid-3d.tsx"

# FILE 4: pricing-button-3d.tsx
cat > components/pricing/pricing-button-3d.tsx << 'EOF'
'use client';

import { motion } from 'framer-motion';

interface PricingButtonProps {
  onClick: () => void;
  loading?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
}

export function PricingButton3D({ onClick, loading = false, children, disabled = false }: PricingButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05, y: disabled ? 0 : -2 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      disabled={loading || disabled}
      onClick={onClick}
      className="relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg transition-shadow hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
      style={{
        transformStyle: 'preserve-3d',
        transform: 'translateZ(0)'
      }}
    >
      <span className="relative z-10 flex items-center gap-2">
        {loading && (
          <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        {loading ? 'Getting prices...' : children}
      </span>
      
      {!disabled && !loading && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  );
}
EOF

echo "${GREEN}✓${NC} Created components/pricing/pricing-button-3d.tsx"

# FILE 5: price-range-chart-3d.tsx
cat > components/pricing/price-range-chart-3d.tsx << 'EOF'
'use client';

import { motion } from 'framer-motion';

interface PriceRangeChartProps {
  low: number;
  median: number;
  high: number;
  average?: number;
}

export function PriceRangeChart3D({ low, median, high, average }: PriceRangeChartProps) {
  const range = high - low;
  const medianPosition = range > 0 ? ((median - low) / range) * 100 : 50;
  const averagePosition = average && range > 0 ? ((average - low) / range) * 100 : null;

  return (
    <div className="relative mb-8 rounded-xl bg-white p-6 shadow-lg dark:bg-gray-900">
      <h3 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">
        Price Range Analysis
      </h3>
      
      <div className="relative h-32 w-full">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="absolute bottom-16 h-3 w-full rounded-full bg-gradient-to-r from-green-400 via-blue-400 to-red-400 shadow-lg"
        />
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute bottom-0 flex flex-col items-start"
          style={{ left: '0%' }}
        >
          <div className="mb-1 rounded bg-green-100 px-2 py-1 text-xs font-semibold text-green-800 dark:bg-green-900 dark:text-green-200">
            Low
          </div>
          <span className="text-sm font-bold text-gray-900 dark:text-white">
            ${low.toFixed(2)}
          </span>
        </motion.div>
        
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute top-0 flex flex-col items-center"
          style={{ left: `${medianPosition}%`, transform: 'translateX(-50%)' }}
        >
          <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
            ${median.toFixed(2)}
          </span>
          <div className="mt-1 rounded bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            Median
          </div>
        </motion.div>
        
        {averagePosition && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute top-0 flex flex-col items-center"
            style={{ left: `${averagePosition}%`, transform: 'translateX(-50%)' }}
          >
            <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
              ${average.toFixed(2)}
            </span>
            <div className="mt-1 rounded bg-purple-100 px-2 py-1 text-xs font-semibold text-purple-800 dark:bg-purple-900 dark:text-purple-200">
              Avg
            </div>
          </motion.div>
        )}
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="absolute bottom-0 flex flex-col items-end"
          style={{ right: '0%' }}
        >
          <div className="mb-1 rounded bg-red-100 px-2 py-1 text-xs font-semibold text-red-800 dark:bg-red-900 dark:text-red-200">
            High
          </div>
          <span className="text-sm font-bold text-gray-900 dark:text-white">
            ${high.toFixed(2)}
          </span>
        </motion.div>
      </div>
    </div>
  );
}
EOF

echo "${GREEN}✓${NC} Created components/pricing/price-range-chart-3d.tsx"

# FILE 6: pricing-dashboard-3d.tsx (main container)
cat > components/pricing/pricing-dashboard-3d.tsx << 'EOF'
'use client';

import { useState } from 'react';
import { PricingButton3D } from './pricing-button-3d';
import { PricingCard3D } from './pricing-card-3d';
import { PriceRangeChart3D } from './price-range-chart-3d';
import { ComparablesGrid3D } from './comparables-grid-3d';

interface ProductData {
  product_name: string;
  brand?: string;
  model?: string;
  condition?: 'new' | 'used' | 'refurbished';
}

interface PricingDashboardProps {
  productData: ProductData;
}

export function PricingDashboard3D({ productData }: PricingDashboardProps) {
  const [pricing, setPricing] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getPricing = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const res = await fetch('/api/pricing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData)
      });

      if (!res.ok) {
        throw new Error('Failed to fetch pricing');
      }

      const data = await res.json();
      
      if (data.success) {
        setPricing(data.data);
      } else {
        setError(data.error || 'Failed to get pricing');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Market Pricing Analysis
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {productData.product_name}
          </p>
        </div>
        
        <PricingButton3D onClick={getPricing} loading={loading}>
          {pricing ? 'Refresh Pricing' : 'Get Market Pricing'}
        </PricingButton3D>
      </div>

      {error && (
        <div className="rounded-lg bg-red-50 p-4 text-sm text-red-800 dark:bg-red-900/20 dark:text-red-200">
          {error}
        </div>
      )}

      {pricing && (
        <>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <PricingCard3D
                priceRange={pricing.priceRange}
                confidence={pricing.confidence}
                totalComparables={pricing.totalComparables}
              />
            </div>
            
            <div className="lg:col-span-2">
              <PriceRangeChart3D
                low={pricing.priceRange.low}
                median={pricing.priceRange.median}
                high={pricing.priceRange.high}
                average={pricing.priceRange.average}
              />
              
              <div className="mt-4 flex flex-wrap gap-2">
                {pricing.dataSources.map((source: string) => (
                  <span
                    key={source}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  >
                    {source}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <ComparablesGrid3D comparables={pricing.comparables} />
        </>
      )}
    </div>
  );
}
EOF

echo "${GREEN}✓${NC} Created components/pricing/pricing-dashboard-3d.tsx"

# FILE 7: index.ts (barrel export)
cat > components/pricing/index.ts << 'EOF'
export { PricingCard3D } from './pricing-card-3d';
export { ComparableCard3D } from './comparable-card-3d';
export { ComparablesGrid3D } from './comparables-grid-3d';
export { PricingButton3D } from './pricing-button-3d';
export { PriceRangeChart3D } from './price-range-chart-3d';
export { PricingDashboard3D } from './pricing-dashboard-3d';
EOF

echo "${GREEN}✓${NC} Created components/pricing/index.ts"

echo ""
echo "${BLUE}🛠 Step 4: Creating API route /api/pricing...${NC}"
mkdir -p app/api/pricing

cat > app/api/pricing/route.ts << 'EOF'
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const product = body?.product_name ?? '';
    if (typeof product !== 'string' || product.trim().length === 0) {
      return NextResponse.json({ success: false, error: 'Invalid product_name' }, { status: 400 });
    }

    const priceRange = {
      low: 49,
      median: 129,
      high: 299,
      average: 158
    };

    const comparables = [
      { title: `${product} - excellent condition`, price: 135, link: 'https://example.com/ebay', source: 'ebay', soldDate: new Date().toISOString(), condition: 'Used' },
      { title: `${product} - fair condition`, price: 95, link: 'https://example.com/google', source: 'google', condition: 'Used' },
      { title: `${product} - new sealed`, price: 249, link: 'https://example.com/scrapingdog', source: 'scrapingdog', condition: 'New' }
    ];

    const data = {
      priceRange,
      confidence: 'medium' as const,
      totalComparables: comparables.length,
      dataSources: ['ebay', 'google', 'scrapingdog'],
      comparables
    };

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Failed to get pricing' }, { status: 500 });
  }
}
EOF

echo "${GREEN}✓${NC} Created app/api/pricing/route.ts"

echo ""
echo "${BLUE}🧩 Step 5: Creating /pricing page...${NC}"
mkdir -p app/pricing

cat > app/pricing/page.tsx << 'EOF'
import { PricingDashboard3D } from '@/components/pricing';

export const metadata = {
  title: 'Market Pricing',
  description: '3D pricing analysis and comparables'
};

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <PricingDashboard3D
        productData={{
          product_name: 'iPhone 13 Pro',
          brand: 'Apple',
          condition: 'used'
        }}
      />
    </div>
  );
}
EOF

echo "${GREEN}✓${NC} Created app/pricing/page.tsx"

echo ""
echo "${GREEN}✅ Setup Complete!${NC}"
echo ""
echo "📁 Created files:"
echo "   ├── components/pricing/pricing-card-3d.tsx"
echo "   ├── components/pricing/comparable-card-3d.tsx"
echo "   ├── components/pricing/comparables-grid-3d.tsx"
echo "   ├── components/pricing/pricing-button-3d.tsx"
echo "   ├── components/pricing/price-range-chart-3d.tsx"
echo "   ├── components/pricing/pricing-dashboard-3d.tsx"
echo "   ├── components/pricing/index.ts"
echo "   ├── app/api/pricing/route.ts"
echo "   └── app/pricing/page.tsx"
echo ""
echo "${BLUE}🎯 Usage:${NC}"
echo "Visit /pricing on your dev server to test the 3D components."
echo "The Pricing button will POST to /api/pricing and render sample data."
echo ""
echo "${GREEN}Done! Your 3D pricing components are ready.${NC}"