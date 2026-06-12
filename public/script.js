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

