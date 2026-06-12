const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');

router.get('/', pageController.renderHome);
router.get('/joelx-orbit-seo.html', pageController.renderHome); // for backward compatibility
router.get('/services.html', pageController.renderServices); // backward compatibility
router.get('/services', pageController.renderServices);
router.get('/quote.html', pageController.renderQuote); // backward compatibility
router.get('/quote', pageController.renderQuote);
router.get('/gallery', pageController.renderGallery);

module.exports = router;
