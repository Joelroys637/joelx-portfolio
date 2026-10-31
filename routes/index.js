const express = require('express');
const router = express.Router();
const path = require('path');
const pageController = require('../controllers/pageController');

// Technical SEO & Crawler Verification Routes
router.get('/ads.txt', pageController.renderAdsTxt);
router.get('/robots.txt', pageController.renderRobots);
router.get('/sitemap.xml', pageController.renderSitemap);
router.get('/sw.js', (req, res) => {
  res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
  res.setHeader('Service-Worker-Allowed', '/');
  res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
  res.sendFile(path.join(__dirname, '../public/sw.js'));
});

// Core Navigation Routes
router.get('/', pageController.renderHome);
router.get('/index.html', pageController.renderHome);
router.get('/about', pageController.renderAbout);
router.get('/about-us', pageController.renderAbout);
router.get('/about.html', pageController.renderAbout);

router.get('/services', pageController.renderServices);
router.get('/services.html', pageController.renderServices);

router.get('/tools', pageController.renderTools);
router.get('/products', pageController.renderTools);
router.get('/tools.html', pageController.renderTools);

router.get('/contact', pageController.renderContact);
router.get('/contact-us', pageController.renderContact);
router.get('/contact.html', pageController.renderContact);

router.get('/quote', pageController.renderQuote);
router.get('/quote.html', pageController.renderQuote);

router.get('/gallery', pageController.renderGallery);
router.get('/gallery.html', pageController.renderGallery);

// Blog & Tutorial Routes
router.get('/blog', pageController.renderBlog);
router.get('/blog/', pageController.renderBlog);
router.get('/blogs', (req, res) => res.redirect(301, '/blog'));
router.get('/blog.html', pageController.renderBlog);
router.get('/blog/:slug', pageController.renderBlogPost);

// Trust & Legal Policy Routes
router.get('/terms', pageController.renderTerms);
router.get('/terms-and-conditions', pageController.renderTerms);
router.get('/terms-and-conditions.html', pageController.renderTerms);

router.get('/privacy', pageController.renderPrivacy);
router.get('/privacy-policy', pageController.renderPrivacy);
router.get('/privacy-policy.html', pageController.renderPrivacy);

router.get('/disclaimer', pageController.renderDisclaimer);
router.get('/disclaimer.html', pageController.renderDisclaimer);

// Backward compatibility legacy redirects
router.get('/joelx-orbit-seo.html', (req, res) => res.redirect(301, '/'));

module.exports = router;
