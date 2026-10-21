// scripts/check-images.js
const { blogs } = require('../data/blogs');

async function testImages() {
  console.log('Testing all 40 image URLs...');
  const failures = [];
  for (let i = 0; i < blogs.length; i++) {
    const b = blogs[i];
    try {
      const res = await fetch(b.coverImage, {
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      if (!res.ok) {
        console.log(`[FAIL ${res.status}] Article #${i + 1} (${b.slug}) -> ${b.coverImage}`);
        failures.push({ index: i + 1, id: b.id, slug: b.slug, status: res.status, url: b.coverImage });
      } else {
        const contentType = res.headers.get('content-type');
        console.log(`[OK ${res.status}] Article #${i + 1} (${b.slug}) [${contentType}]`);
      }
    } catch (err) {
      console.log(`[ERROR] Article #${i + 1} (${b.slug}) -> ${err.message}`);
      failures.push({ index: i + 1, id: b.id, slug: b.slug, status: 'ERROR', error: err.message, url: b.coverImage });
    }
  }

  console.log('\n--- SUMMARY ---');
  console.log(`Total images checked: ${blogs.length}`);
  console.log(`Failed images: ${failures.length}`);
  if (failures.length > 0) {
    console.log(JSON.stringify(failures, null, 2));
  }
}

testImages();
