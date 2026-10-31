const http = require('http');
const app = require('../server');

const PORT = 3099;
let server;

const routesToTest = [
  { path: '/', expectedStatus: 200, checkContent: 'Build Resilient' },
  { path: '/about', expectedStatus: 200, checkContent: 'About JoelX Orbit' },
  { path: '/services', expectedStatus: 200, checkContent: 'Web &amp; Mobile' },
  { path: '/tools', expectedStatus: 200, checkContent: 'Live QR Code Generator' },
  { path: '/contact', expectedStatus: 200, checkContent: 'Direct Communication' },
  { path: '/quote', expectedStatus: 200, checkContent: 'Start Your' },
  { path: '/gallery', expectedStatus: 200, checkContent: 'Project' },
  { path: '/blog', expectedStatus: 200, checkContent: 'Tech Blog' },
  { path: '/blog/aspnet-student-crud-sqlserver-tutorial', expectedStatus: 200, checkContent: 'Building a Student CRUD' },
  { path: '/blog/python-qr-code-generator-tutorial', expectedStatus: 200, checkContent: 'QR Code Generator Using Python' },
  { path: '/blog/flutter-welcome-screen-ui-beginners', expectedStatus: 200, checkContent: 'Flutter Welcome' },
  { path: '/terms', expectedStatus: 200, checkContent: 'Terms & Conditions' },
  { path: '/privacy', expectedStatus: 200, checkContent: 'Google AdSense' },
  { path: '/disclaimer', expectedStatus: 200, checkContent: 'Website &amp; Technical' },
  { path: '/ads.txt', expectedStatus: 200, checkContent: 'pub-5342182227761563' },
  { path: '/robots.txt', expectedStatus: 200, checkContent: 'Mediapartners-Google' },
  { path: '/sitemap.xml', expectedStatus: 200, checkContent: '<loc>https://www.joelxorbit.in</loc>' },
  { path: '/sw.js', expectedStatus: 200, checkContent: '5gvci.com' },
  { path: '/random-missing-route-test', expectedStatus: 404, checkContent: 'HTTP 404 - Resource Not Found' }
];

function fetchRoute(path) {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:${PORT}${path}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ statusCode: res.statusCode, headers: res.headers, body: data }));
    }).on('error', reject);
  });
}

async function runVerification() {
  console.log("================ RUNNING WEBSITE INTEGRATION CHECKS ================\n");

  server = app.listen(PORT);
  let failed = 0;

  for (const r of routesToTest) {
    try {
      const res = await fetchRoute(r.path);
      const statusOk = res.statusCode === r.expectedStatus;
      const contentOk = res.body.includes(r.checkContent);

      // Check for duplicate canonical tags in HTML responses
      const canonicalMatches = (res.body.match(/<link[^>]+rel=["']canonical["']/gi) || []).length;
      const duplicateCanonical = canonicalMatches > 1;

      // Check for duplicate title tags
      const titleMatches = (res.body.match(/<title>/gi) || []).length;
      const duplicateTitle = titleMatches > 1;

      if (statusOk && contentOk && !duplicateCanonical && !duplicateTitle) {
        console.log(`[PASS] ${r.path} -> Status: ${res.statusCode} | Content verified`);
      } else {
        console.error(`[FAIL] ${r.path} -> Status: ${res.statusCode} (expected ${r.expectedStatus}), Content Match: ${contentOk}, Duplicate Canonical: ${duplicateCanonical}, Duplicate Title: ${duplicateTitle}`);
        failed++;
      }
    } catch (err) {
      console.error(`[ERROR] ${r.path} -> ${err.message}`);
      failed++;
    }
  }

  // Parse sitemap URLs and verify all URLs exist in routes
  console.log("\nVerifying sitemap.xml URLs...");
  const sitemapRes = await fetchRoute('/sitemap.xml');
  const locRegex = /<loc>(https:\/\/www\.joelxorbit\.in[^<]*)<\/loc>/g;
  let match;
  let sitemapCount = 0;
  let sitemapFailures = 0;

  while ((match = locRegex.exec(sitemapRes.body)) !== null) {
    sitemapCount++;
    const fullUrl = match[1];
    const pathPart = fullUrl.replace('https://www.joelxorbit.in', '') || '/';
    const checkRes = await fetchRoute(pathPart);
    if (checkRes.statusCode !== 200) {
      console.error(`  [Sitemap FAIL] ${fullUrl} returned status ${checkRes.statusCode}`);
      sitemapFailures++;
    }
  }
  console.log(`  Sitemap URLs verified: ${sitemapCount} total. Failures: ${sitemapFailures}`);

  server.close();
  console.log("\n====================================================================");
  if (failed === 0 && sitemapFailures === 0) {
    console.log("✅ ALL VERIFICATION CHECKS PASSED PERFECTLY!");
    console.log("====================================================================");
    process.exit(0);
  } else {
    console.error(`❌ VERIFICATION COMPLETED WITH ${failed + sitemapFailures} FAILURES.`);
    console.log("====================================================================");
    process.exit(1);
  }
}

runVerification();
