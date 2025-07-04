// Image optimization utilities for Whiz application

export interface ImageOptimizationOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png' | 'auto';
  fit?: 'cover' | 'contain' | 'fill' | 'inside' | 'outside';
  position?: 'center' | 'top' | 'bottom' | 'left' | 'right';
}

/**
 * Optimizes Pexels image URLs with compression and sizing parameters
 */
export const optimizePexelsImage = (
  url: string, 
  options: ImageOptimizationOptions = {}
): string => {
  const {
    width = 800,
    height = 600,
    quality = 80,
    fit = 'crop'
  } = options;

  // Check if it's a Pexels URL
  if (!url.includes('pexels.com')) {
    return url;
  }

  // Parse existing URL parameters
  const urlObj = new URL(url);
  const params = new URLSearchParams(urlObj.search);

  // Set optimization parameters
  params.set('auto', 'compress');
  params.set('cs', 'tinysrgb');
  params.set('w', width.toString());
  params.set('h', height.toString());
  params.set('fit', fit);

  // Construct optimized URL
  urlObj.search = params.toString();
  return urlObj.toString();
};

/**
 * Optimizes Strapi image URLs with transformation parameters
 */
export const optimizeStrapiImage = (
  url: string,
  options: ImageOptimizationOptions = {}
): string => {
  const {
    width = 800,
    height = 600,
    quality = 80,
    format = 'webp'
  } = options;

  // If it's already a full URL, return as-is (external images)
  if (url.startsWith('http')) {
    return url;
  }

  // For Strapi images, we can add transformation parameters
  // This assumes Strapi is configured with image transformation plugin
  const baseUrl = import.meta.env.VITE_STRAPI_API_URL?.replace('/api', '') || '';
  const transformParams = `?format=${format}&width=${width}&height=${height}&quality=${quality}`;
  
  return `${baseUrl}${url}${transformParams}`;
};

/**
 * Generates responsive image srcSet for different screen sizes
 */
export const generateResponsiveSrcSet = (
  baseUrl: string,
  isStrapi: boolean = false
): string => {
  const sizes = [
    { width: 480, suffix: '480w' },
    { width: 768, suffix: '768w' },
    { width: 1024, suffix: '1024w' },
    { width: 1200, suffix: '1200w' },
    { width: 1600, suffix: '1600w' }
  ];

  return sizes
    .map(size => {
      const optimizedUrl = isStrapi 
        ? optimizeStrapiImage(baseUrl, { width: size.width })
        : optimizePexelsImage(baseUrl, { width: size.width });
      return `${optimizedUrl} ${size.suffix}`;
    })
    .join(', ');
};

/**
 * Generates appropriate sizes attribute for responsive images
 */
export const generateSizesAttribute = (breakpoints?: string[]): string => {
  const defaultBreakpoints = [
    '(max-width: 480px) 100vw',
    '(max-width: 768px) 100vw',
    '(max-width: 1024px) 50vw',
    '33vw'
  ];

  return (breakpoints || defaultBreakpoints).join(', ');
};

/**
 * Lazy loading intersection observer setup
 */
export const setupLazyLoading = (): IntersectionObserver | null => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        const src = img.dataset.src;
        const srcset = img.dataset.srcset;

        if (src) {
          img.src = src;
          img.removeAttribute('data-src');
        }

        if (srcset) {
          img.srcset = srcset;
          img.removeAttribute('data-srcset');
        }

        img.classList.remove('lazy');
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px 0px',
    threshold: 0.01
  });

  return imageObserver;
};

/**
 * Preload critical images
 */
export const preloadCriticalImages = (imageUrls: string[]): void => {
  if (typeof window === 'undefined') return;

  imageUrls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
};

/**
 * Generate WebP fallback for older browsers
 */
export const generateWebPFallback = (
  originalUrl: string,
  isStrapi: boolean = false
): { webp: string; fallback: string } => {
  const webp = isStrapi 
    ? optimizeStrapiImage(originalUrl, { format: 'webp' })
    : originalUrl; // Pexels handles WebP automatically

  const fallback = isStrapi 
    ? optimizeStrapiImage(originalUrl, { format: 'jpeg' })
    : originalUrl;

  return { webp, fallback };
};

/**
 * Calculate image aspect ratio for layout stability
 */
export const calculateAspectRatio = (width: number, height: number): string => {
  const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);
  const divisor = gcd(width, height);
  return `${width / divisor}/${height / divisor}`;
};

/**
 * Generate blur placeholder for smooth loading
 */
export const generateBlurPlaceholder = (
  originalUrl: string,
  isStrapi: boolean = false
): string => {
  return isStrapi 
    ? optimizeStrapiImage(originalUrl, { width: 20, height: 20, quality: 20 })
    : optimizePexelsImage(originalUrl, { width: 20, height: 20, quality: 20 });
};