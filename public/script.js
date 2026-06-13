// Dynamically update footer year to keep it fresh
const footerYear = document.getElementById('footer-year');
if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}

// Mobile Menu Toggle Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenuCloseBtn = document.getElementById('mobile-menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
const mobileLinks = document.querySelectorAll('.mobile-link');

function openMobileMenu() {
  if (!mobileMenu || !mobileMenuOverlay) return;
  
  // Show elements
  mobileMenu.classList.remove('hidden');
  mobileMenu.classList.add('flex');
  mobileMenuOverlay.classList.remove('hidden');
  mobileMenuOverlay.classList.add('block');
  
  // Trigger reflow
  void mobileMenu.offsetWidth;
  
  // Animate in
  mobileMenu.classList.remove('translate-x-full');
  mobileMenu.classList.add('translate-x-0');
  mobileMenuOverlay.classList.remove('opacity-0');
  mobileMenuOverlay.classList.add('opacity-100');
  
  // Prevent body scroll
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  if (!mobileMenu || !mobileMenuOverlay) return;
  
  // Animate out
  mobileMenu.classList.remove('translate-x-0');
  mobileMenu.classList.add('translate-x-full');
  mobileMenuOverlay.classList.remove('opacity-100');
  mobileMenuOverlay.classList.add('opacity-0');
  
  // Hide elements after animation
  setTimeout(() => {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
    mobileMenuOverlay.classList.add('hidden');
    mobileMenuOverlay.classList.remove('block');
  }, 300);
  
  // Restore body scroll
  document.body.style.overflow = '';
}

if (mobileMenuBtn && mobileMenu && mobileMenuOverlay) {
  mobileMenuBtn.addEventListener('click', openMobileMenu);
  
  if (mobileMenuCloseBtn) {
    mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);
  }
  
  mobileMenuOverlay.addEventListener('click', closeMobileMenu);

  // Close menu when a link is clicked
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
}

// Auto-scroll logic for Projects Gallery
const projectsGallery = document.getElementById('projects-gallery');
if (projectsGallery) {
  let scrollAmount = 0;
  
  setInterval(() => {
    // Check if we've scrolled to the end (allow for a 1px rounding error)
    if (projectsGallery.scrollLeft + projectsGallery.clientWidth >= projectsGallery.scrollWidth - 1) {
      // Reset back to start
      projectsGallery.scrollLeft = 0;
    } else {
      // Find the width of the first project card plus gap
      const firstCard = projectsGallery.querySelector('a');
      if (firstCard) {
        // Gap is approx 24px (gap-6)
        const scrollStep = firstCard.clientWidth + 24;
        projectsGallery.scrollLeft += scrollStep;
      }
    }
  }, 2000);
}

// Service Page Loader Logic
document.addEventListener('DOMContentLoaded', () => {
  const serviceLinks = document.querySelectorAll('a[href="/services"]');
  
  if (serviceLinks.length > 0) {
    // Create loader overlay
    const loaderOverlay = document.createElement('div');
    loaderOverlay.id = 'service-page-loader';
    // Use fixed positioning with inline z-index to cover the whole screen properly
    loaderOverlay.className = 'fixed inset-0 bg-[#0e0e0e] flex flex-col items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300';
    loaderOverlay.style.zIndex = '99999';
    
    const loaderImg = document.createElement('img');
    loaderImg.src = '/assert/service page loader/giphy.gif';
    loaderImg.alt = 'Loading Services...';
    loaderImg.className = 'w-48 h-48 md:w-64 md:h-64 object-contain';
    
    const loaderText = document.createElement('p');
    loaderText.textContent = 'Loading Services...';
    loaderText.className = 'text-[#d2a373] mt-4 font-label font-bold tracking-widest uppercase animate-pulse';

    loaderOverlay.appendChild(loaderImg);
    loaderOverlay.appendChild(loaderText);
    document.body.appendChild(loaderOverlay);

    serviceLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        // Only intercept left clicks without modifier keys
        if (e.button === 0 && !e.ctrlKey && !e.shiftKey && !e.metaKey && !e.altKey) {
          e.preventDefault();
          
          // If we are in mobile menu, close it first so it doesn't glitch under the overlay
          closeMobileMenu();

          // Show loader
          loaderOverlay.classList.remove('opacity-0', 'pointer-events-none');
          loaderOverlay.classList.add('opacity-100', 'pointer-events-auto');
          
          // Wait 2 seconds then navigate
          setTimeout(() => {
            window.location.href = link.href;
          }, 2000);
        }
      });
    });
  }
});
