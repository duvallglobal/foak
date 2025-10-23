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
