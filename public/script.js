// Dynamically update footer year to keep it fresh
const footerYear = document.getElementById('footer-year');
if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}

// Mobile Menu Toggle Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
  });

// Close menu when a link is clicked
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
    });
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

