// Dynamically update footer year to keep it fresh
const footerYear = document.getElementById('footer-year');
if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}

// Mobile Menu Toggle Logic
(function() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuCloseBtn = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  function openMobileMenu() {
    if (!mobileMenu || !mobileMenuOverlay) return;
    mobileMenu.classList.remove('translate-x-full', 'pointer-events-none');
    mobileMenu.classList.add('translate-x-0', 'pointer-events-auto');
    mobileMenuOverlay.classList.remove('opacity-0', 'pointer-events-none');
    mobileMenuOverlay.classList.add('opacity-100', 'pointer-events-auto');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (!mobileMenu || !mobileMenuOverlay) return;
    mobileMenu.classList.remove('translate-x-0', 'pointer-events-auto');
    mobileMenu.classList.add('translate-x-full', 'pointer-events-none');
    mobileMenuOverlay.classList.remove('opacity-100', 'pointer-events-auto');
    mobileMenuOverlay.classList.add('opacity-0', 'pointer-events-none');
    document.body.style.overflow = '';
  }

  window.openMobileMenu = window.openMobileMenu || openMobileMenu;
  window.closeMobileMenu = window.closeMobileMenu || closeMobileMenu;

  if (mobileMenuBtn && !mobileMenuBtn.hasAttribute('data-menu-bound')) {
    mobileMenuBtn.setAttribute('data-menu-bound', 'true');
    mobileMenuBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      openMobileMenu();
    });
  }

  if (mobileMenuCloseBtn && !mobileMenuCloseBtn.hasAttribute('data-menu-bound')) {
    mobileMenuCloseBtn.setAttribute('data-menu-bound', 'true');
    mobileMenuCloseBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      closeMobileMenu();
    });
  }

  if (mobileMenuOverlay && !mobileMenuOverlay.hasAttribute('data-menu-bound')) {
    mobileMenuOverlay.setAttribute('data-menu-bound', 'true');
    mobileMenuOverlay.addEventListener('click', function(e) {
      e.preventDefault();
      closeMobileMenu();
    });
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
})();

// Auto-scroll logic for Projects Gallery
const projectsGallery = document.getElementById('projects-gallery');
if (projectsGallery && !projectsGallery.hasAttribute('data-autoscroll-bound')) {
  projectsGallery.setAttribute('data-autoscroll-bound', 'true');
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

