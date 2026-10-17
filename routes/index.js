const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');

// SEO Technical routes
router.get('/sitemap.xml', pageController.renderSitemap);
router.get('/robots.txt', pageController.renderRobots);

router.get('/', pageController.renderHome);
router.get('/joelx-orbit-seo.html', pageController.renderHome); // for backward compatibility
router.get('/services.html', pageController.renderServices); // backward compatibility
router.get('/services', pageController.renderServices);
router.get('/quote.html', pageController.renderQuote); // backward compatibility
router.get('/quote', pageController.renderQuote);
router.get('/gallery', pageController.renderGallery);
router.get('/blog', pageController.renderBlog);
router.get('/blog/', pageController.renderBlog);
router.get('/blogs', (req, res) => res.redirect(301, '/blog'));
router.get('/blog.html', pageController.renderBlog); // backward compatibility
router.get('/blog/:slug', pageController.renderBlogPost);
router.get('/terms', pageController.renderTerms);
router.get('/terms-and-conditions', pageController.renderTerms);
router.get('/terms-and-conditions.html', pageController.renderTerms);
router.get('/privacy', pageController.renderPrivacy);
router.get('/privacy-policy', pageController.renderPrivacy);
router.get('/privacy-policy.html', pageController.renderPrivacy);

module.exports = router;
