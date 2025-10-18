'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export function WelcomeToast() {
  const [mounted, setMounted] = useState(false);

  // Ensure hydration safety by only running client-side logic after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // ignore if screen height is too small
    if (window.innerHeight < 650) return;
    if (!document.cookie.includes('welcome-toast=2')) {
      toast('🏪 Welcome to Finds of all Kinds - South!', {
        id: 'welcome-toast',
        duration: 7000, // Auto-close after 7 seconds
        onDismiss: () => {
          document.cookie = 'welcome-toast=2; max-age=31536000; path=/';
        },
        description: (
          <>
            Discover unique treasures from furniture to clothing in West Point, GA.{' '}
            <span className="text-teal-400 font-medium">
              Every find tells a story
            </span>
            . Shop sustainable, ship anywhere, or pickup 7AM-9PM daily.
          </>
        )
      });
    }
  }, [mounted]);

  return null;
}
