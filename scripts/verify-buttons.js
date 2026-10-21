// scripts/verify-buttons.js
const { blogs } = require('../data/blogs');
const http = require('http');

async function testAllButtons() {
  let passCount = 0;
  for (const b of blogs) {
    await new Promise((resolve) => {
      http.get('http://localhost:3000/blog/' + b.slug, (res) => {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
          if (body.includes('btn-cta-primary') && body.includes('style="color: #0e0e0e !important;')) {
            passCount++;
          } else {
            console.error('Failed button on:', b.slug);
          }
          resolve();
        });
      });
    });
  }
  console.log(`Passed articles with verified visible high-contrast button: ${passCount} / ${blogs.length}`);
}

testAllButtons();
