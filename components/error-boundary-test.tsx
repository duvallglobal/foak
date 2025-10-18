'use client';

import { useState } from 'react';

export default function ErrorBoundaryTest() {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error('Test error for ErrorBoundary validation');
  }

  return (
    <div className="rounded-lg border border-neutral-700 bg-neutral-800 p-4">
      <h3 className="mb-2 text-lg font-semibold text-white">ErrorBoundary Test Component</h3>
      <p className="mb-4 text-neutral-300">
        This component can throw an error to test the ErrorBoundary functionality.
      </p>
      <button
        onClick={() => setShouldThrow(true)}
        className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700"
      >
        Throw Test Error
      </button>
    </div>
  );
}