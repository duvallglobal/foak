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
