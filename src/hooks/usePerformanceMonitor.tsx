import { useEffect, useRef } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
}

export const usePerformanceMonitor = () => {
  const metricsRef = useRef<PerformanceMetrics | null>(null);

  useEffect(() => {
    // Web Vitals monitoring
    if ('web-vital' in window) {
      return;
    }

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            console.log('FCP:', entry.startTime);
          }
        }
        
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
        }
      }
    });

    observer.observe({ type: 'paint', buffered: true });
    observer.observe({ type: 'largest-contentful-paint', buffered: true });

    // Monitor bundle size and loading performance
    const loadMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      metricsRef.current = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      };

      // Log performance metrics in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance Metrics:', metricsRef.current);
      }
    };

    if (document.readyState === 'complete') {
      loadMetrics();
    } else {
      window.addEventListener('load', loadMetrics);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('load', loadMetrics);
    };
  }, []);

  return metricsRef.current;
};