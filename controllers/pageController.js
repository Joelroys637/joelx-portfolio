const fs = require('fs');
const path = require('path');

exports.renderHome = (req, res) => {
  res.render('pages/home');
};

exports.renderServices = (req, res) => {
  res.render('pages/services');
};

exports.renderQuote = (req, res) => {
  res.render('pages/quote');
};

exports.renderGallery = (req, res) => {
  const galleryDir = path.join(__dirname, '../public/assert/gallery image');
  let images = [];
  try {
    if (fs.existsSync(galleryDir)) {
      images = fs.readdirSync(galleryDir)
        .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
        .map(file => {
          const title = file.replace(/\.[^/.]+$/, "").replace(/-/g, ' ');
          return {
            filename: file,
            title: title.charAt(0).toUpperCase() + title.slice(1)
          };
        });
    }
  } catch (err) {
    console.error("Error reading gallery directory:", err);
  }
  
  res.render('pages/gallery', { images });
};
