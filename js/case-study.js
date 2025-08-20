

function makeMarquee() {
  try {
    // Get all elements with marquee class
    const marquees = document.querySelectorAll('.marquee');
    
    // Process each marquee element
    marquees.forEach((span, index) => {
      const title = span.textContent.trim();
      if (title) {
        // Create repeated text for smooth marquee effect
        const marqueeText = new Array(50).fill(title).join(' — ');
        span.innerHTML = marqueeText;
      }
    });
  } catch (error) {
    console.warn('Marquee initialization failed:', error);
  }
}

// Initialize marquee when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', makeMarquee);
} else {
  makeMarquee();
}




 