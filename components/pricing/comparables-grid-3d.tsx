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
