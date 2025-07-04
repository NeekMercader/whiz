import React, { useState, useRef, useEffect } from 'react';
import { 
  optimizePexelsImage, 
  optimizeStrapiImage, 
  generateResponsiveSrcSet,
  generateSizesAttribute,
  generateWebPFallback,
  generateBlurPlaceholder,
  ImageOptimizationOptions
} from '../utils/imageOptimization';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  quality?: number;
  lazy?: boolean;
  responsive?: boolean;
  isStrapi?: boolean;
  blurPlaceholder?: boolean;
  optimizationOptions?: ImageOptimizationOptions;
  fallbackSrc?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width = 800,
  height = 600,
  quality = 80,
  lazy = true,
  responsive = true,
  isStrapi = false,
  blurPlaceholder = true,
  optimizationOptions = {},
  fallbackSrc,
  className = '',
  style = {},
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(!lazy);
  const imgRef = useRef<HTMLImageElement>(null);

  // Merge default options with provided options
  const options: ImageOptimizationOptions = {
    width,
    height,
    quality,
    ...optimizationOptions
  };

  // Generate optimized URLs
  const optimizedSrc = isStrapi 
    ? optimizeStrapiImage(src, options)
    : optimizePexelsImage(src, options);

  const { webp, fallback } = generateWebPFallback(src, isStrapi);
  const blurSrc = blurPlaceholder ? generateBlurPlaceholder(src, isStrapi) : undefined;
  const responsiveSrcSet = responsive ? generateResponsiveSrcSet(src, isStrapi) : undefined;
  const sizesAttr = responsive ? generateSizesAttribute() : undefined;

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy || !imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px 0px', threshold: 0.01 }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [lazy]);

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Handle image error
  const handleError = () => {
    setHasError(true);
    if (fallbackSrc && imgRef.current) {
      imgRef.current.src = fallbackSrc;
    }
  };

  // Calculate aspect ratio for layout stability
  const aspectRatio = width && height ? (height / width) * 100 : undefined;

  // Combine classes
  const combinedClassName = [
    className,
    lazy && !isLoaded ? 'lazy' : '',
    isLoaded ? 'loaded' : '',
    hasError ? 'error' : ''
  ].filter(Boolean).join(' ');

  // Combine styles
  const combinedStyle = {
    ...style,
    transition: 'opacity 0.3s ease-in-out',
    opacity: isLoaded || !lazy ? 1 : 0,
    ...(aspectRatio && { aspectRatio: `${width}/${height}` })
  };

  // If using modern browser with picture element support
  if (responsive && 'HTMLPictureElement' in window) {
    return (
      <picture>
        <source srcSet={webp} type="image/webp" />
        <source srcSet={fallback} type="image/jpeg" />
        <img
          ref={imgRef}
          src={isInView ? optimizedSrc : blurSrc}
          srcSet={isInView && responsiveSrcSet ? responsiveSrcSet : undefined}
          sizes={sizesAttr}
          alt={alt}
          width={width}
          height={height}
          className={combinedClassName}
          style={combinedStyle}
          onLoad={handleLoad}
          onError={handleError}
          loading={lazy ? 'lazy' : 'eager'}
          decoding="async"
          {...props}
        />
      </picture>
    );
  }

  // Fallback for older browsers
  return (
    <img
      ref={imgRef}
      src={isInView ? optimizedSrc : blurSrc}
      srcSet={isInView && responsiveSrcSet ? responsiveSrcSet : undefined}
      sizes={sizesAttr}
      alt={alt}
      width={width}
      height={height}
      className={combinedClassName}
      style={combinedStyle}
      onLoad={handleLoad}
      onError={handleError}
      loading={lazy ? 'lazy' : 'eager'}
      decoding="async"
      {...props}
    />
  );
};

export default OptimizedImage;