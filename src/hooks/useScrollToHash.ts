// src/hooks/useScrollToHash.ts

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Check if there is a hash in the URL (e.g., #about-section)
    if (hash) {
      // Get the ID by removing the '#' symbol
      const elementId = hash.substring(1); 
      
      // Use requestAnimationFrame to ensure the scroll happens after the browser finishes 
      // rendering any navigation/state updates, ensuring a smooth transition.
      requestAnimationFrame(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      });
    } else {
      // Optional: If you navigate to the root path ("/") with no hash, scroll to the top
      // This ensures a clean start when clicking the "Home" link.
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // Rerun whenever the path or hash changes
};