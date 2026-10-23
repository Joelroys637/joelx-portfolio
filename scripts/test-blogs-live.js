// scripts/test-blogs-live.js
const { blogs } = require('../data/blogs');

async function run() {
  console.log('--- 1. Testing /blog main page ---');
  const blogRes = await fetch('http://localhost:3000/blog');
  const blogHtml = await blogRes.text();
  
  const cardCount = blogHtml.split('class="blog-card').length - 1;
  console.log('Status:', blogRes.status);
  console.log('Total blog cards on /blog:', cardCount);
  
  let missingLinks = 0;
  for (const b of blogs) {
    if (!blogHtml.includes(`/blog/${b.slug}`)) {
      console.error('Missing link on /blog for slug:', b.slug);
      missingLinks++;
    }
  }
  console.log('Missing slug links on /blog:', missingLinks);

  console.log('\n--- 2. Testing all 40 separate blog pages (/blog/:slug) ---');
  let failedPages = 0;
  for (let i = 0; i < blogs.length; i++) {
    const b = blogs[i];
    const res = await fetch(`http://localhost:3000/blog/${b.slug}`);
    if (res.status !== 200) {
      console.error(`FAILED [${res.status}]: /blog/${b.slug}`);
      failedPages++;
    } else {
      const pageHtml = await res.text();
      const hasTitle = pageHtml.includes(b.title);
      const hasContent = pageHtml.includes('article-content');
      if (!hasTitle || !hasContent) {
        console.error(`MISSING CONTENT on /blog/${b.slug}`);
        failedPages++;
      }
    }
  }
  console.log('Total individual blog pages tested:', blogs.length);
  console.log('Failed separate blog pages:', failedPages);

  console.log('\n--- 3. Testing 40 unique images ---');
  const images = blogs.map(b => b.coverImage);
  const uniqueImgs = new Set(images);
  console.log('Total blogs:', blogs.length);
  console.log('Unique images count:', uniqueImgs.size);
  
  if (cardCount === blogs.length && missingLinks === 0 && failedPages === 0 && uniqueImgs.size === blogs.length) {
    console.log(`\n✅ ALL ${blogs.length} BLOGS, SEPARATE PAGES, AND ${blogs.length} UNIQUE IMAGES ARE 100% OPERATIONAL!`);
  } else {
    console.error('\n❌ ISSUES DETECTED!');
    process.exit(1);
  }
}

run().catch(err => {
  console.error('Test execution failed:', err);
  process.exit(1);
});
