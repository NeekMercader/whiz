import { useEffect, useCallback } from 'react';
import { preloadCriticalImages, setupLazyLoading } from '../utils/imageOptimization';

/**
 * Hook for managing image optimization across the application
 */
export const useImageOptimization = () => {
  // Setup lazy loading observer
  useEffect(() => {
    const observer = setupLazyLoading();
    
    if (observer) {
      // Find all lazy images and observe them
      const lazyImages = document.querySelectorAll('img[data-src], img.lazy');
      lazyImages.forEach(img => observer.observe(img));
      
      return () => observer.disconnect();
    }
  }, []);

  // Preload critical images
  const preloadImages = useCallback((imageUrls: string[]) => {
    preloadCriticalImages(imageUrls);
  }, []);

  // Preload hero and above-the-fold images
  useEffect(() => {
    const criticalImages = [
      'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop', // Neek's photo
      'https://whiz.so/og-image.jpg' // OG image
    ];
    
    preloadImages(criticalImages);
  }, [preloadImages]);

  return {
    preloadImages
  };
};

/**
 * Hook for Core Web Vitals optimization
 */
export const useCoreWebVitals = () => {
  useEffect(() => {
    // Optimize Largest Contentful Paint (LCP)
    const optimizeLCP = () => {
      // Preload hero images
      const heroImages = document.querySelectorAll('img[data-priority="high"]');
      heroImages.forEach(img => {
        if (img instanceof HTMLImageElement) {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = img.src;
          document.head.appendChild(link);
        }
      });
    };

    // Optimize Cumulative Layout Shift (CLS)
    const optimizeCLS = () => {
      // Add aspect ratio to images without explicit dimensions
      const images = document.querySelectorAll('img:not([width]):not([height])');
      images.forEach(img => {
        if (img instanceof HTMLImageElement) {
          img.style.aspectRatio = '16/9'; // Default aspect ratio
        }
      });
    };

    // Optimize First Input Delay (FID)
    const optimizeFID = () => {
      // Defer non-critical JavaScript
      const scripts = document.querySelectorAll('script[data-defer]');
      scripts.forEach(script => {
        if (script instanceof HTMLScriptElement) {
          script.defer = true;
        }
      });
    };

    // Run optimizations
    optimizeLCP();
    optimizeCLS();
    optimizeFID();

    // Monitor performance
    if ('PerformanceObserver' in window) {
      // Monitor LCP
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Monitor CLS
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        console.log('CLS:', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Monitor FID
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('FID:', entry.processingStart - entry.startTime);
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      return () => {
        lcpObserver.disconnect();
        clsObserver.disconnect();
        fidObserver.disconnect();
      };
    }
  }, []);
};