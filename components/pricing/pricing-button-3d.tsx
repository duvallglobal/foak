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
