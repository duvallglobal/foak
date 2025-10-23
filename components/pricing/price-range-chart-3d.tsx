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
  const averageNum = typeof average === 'number' ? average : null;
  const averagePosition = averageNum !== null && range > 0 ? ((averageNum - low) / range) * 100 : null;

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
        
        {averagePosition !== null && averageNum !== null && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute top-0 flex flex-col items-center"
            style={{ left: `${averagePosition}%`, transform: 'translateX(-50%)' }}
          >
            <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
              ${averageNum.toFixed(2)}
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
