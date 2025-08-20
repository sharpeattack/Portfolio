// Performance monitoring script
(function() {
  'use strict';
  
  // Wait for page to load
  window.addEventListener('load', function() {
    // Get performance metrics
    const perfData = performance.getEntriesByType('navigation')[0];
    const paintTiming = performance.getEntriesByType('paint');
    
    // Log performance data
    console.log('🚀 Performance Metrics:');
    console.log(`Page Load Time: ${Math.round(perfData.loadEventEnd - perfData.loadEventStart)}ms`);
    console.log(`DOM Content Loaded: ${Math.round(perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart)}ms`);
    console.log(`First Paint: ${Math.round(paintTiming.find(p => p.name === 'first-paint')?.startTime || 0)}ms`);
    console.log(`First Contentful Paint: ${Math.round(paintTiming.find(p => p.name === 'first-contentful-paint')?.startTime || 0)}ms`);
    
    // Check for lazy loaded images
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    console.log(`Lazy Loaded Images: ${lazyImages.length}`);
    
    // Check for optimized videos
    const optimizedVideos = document.querySelectorAll('video[preload="none"]');
    console.log(`Optimized Videos: ${optimizedVideos.length}`);
  });
  
  // Monitor Core Web Vitals
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log(`🎯 Largest Contentful Paint: ${Math.round(entry.startTime)}ms`);
        }
      }
    });
    
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  }
})();
