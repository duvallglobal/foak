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
