import { useEffect, useState } from 'react';

interface PreloadOptions {
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

export const useImagePreloader = (imageSrcs: string[], options: PreloadOptions = {}) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!imageSrcs.length) {
      setIsLoading(false);
      return;
    }

    const preloadPromises = imageSrcs.map((src) => {
      return new Promise<string>((resolve, reject) => {
        const img = new Image();
        
        img.onload = () => {
          setLoadedImages(prev => new Set([...prev, src]));
          options.onLoad?.();
          resolve(src);
        };
        
        img.onerror = () => {
          console.warn(`Failed to preload image: ${src}`);
          options.onError?.();
          reject(src);
        };

        img.src = src;
        
        // Set loading attribute for non-priority images
        if (!options.priority) {
          img.loading = 'lazy';
        }
      });
    });

    Promise.allSettled(preloadPromises).finally(() => {
      setIsLoading(false);
    });
  }, [imageSrcs, options.priority]);

  return {
    loadedImages,
    isLoading,
    isImageLoaded: (src: string) => loadedImages.has(src)
  };
};