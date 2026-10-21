const assert = require('assert');
const { slugify, validateQualityGate } = require('../scripts/generate-daily-blog');
const { blogs } = require('../data/blogs');
const pageController = require('../controllers/pageController');

function testSlugify() {
  console.log("Testing slugify function...");
  assert.strictEqual(slugify("Hello World! 2026"), "hello-world-2026");
  assert.strictEqual(slugify("  Agentic AI & WebDev  "), "agentic-ai-webdev");
  console.log("✅ testSlugify passed");
}

function testBlogsDataStructure() {
  console.log("Testing blogs data integrity...");
  assert(Array.isArray(blogs), "blogs must be an array");
  assert(blogs.length > 0, "blogs must not be empty");

  blogs.forEach(post => {
    assert(post.id, "post.id must exist");
    assert(post.slug, "post.slug must exist");
    assert.strictEqual(post.slug, post.slug.toLowerCase(), "post.slug must be lowercase");
    assert(post.title, "post.title must exist");
    assert(post.excerpt, "post.excerpt must exist");
    assert(post.category, "post.category must exist");
    assert(post.coverImage, "post.coverImage must exist");
    assert(Array.isArray(post.tags), "post.tags must be an array");
  });
  console.log("✅ testBlogsDataStructure passed");
}

function testQualityGate() {
  console.log("Testing SEO Quality Gate duplicate detection...");
  const mockIndex = [
    {
      slug: "existing-slug-2026",
      title: "Existing Title",
      primaryKeyword: "existing keyword"
    }
  ];

  const duplicateArticle = {
    title: "Existing Title",
    slug: "existing-slug-2026",
    excerpt: "This is a valid test excerpt describing the test article.",
    primaryKeyword: "existing keyword",
    content: "<p>" + "Content word ".repeat(50) + "</p>",
    coverImage: "https://images.unsplash.com/photo-1",
    imageSource: "https://unsplash.com",
    imageLicense: "Unsplash License"
  };

  const result = validateQualityGate(duplicateArticle, mockIndex);
  assert.strictEqual(result.passed, false, "Quality gate should reject duplicate article");
  assert(result.findings.some(f => f.includes("Duplicate slug")), "Should report duplicate slug");
  console.log("✅ testQualityGate passed");
}

function testSitemapAndRobotsGeneration() {
  console.log("Testing Sitemap and Robots.txt response generators...");
  let sitemapXml = '';
  let robotsTxt = '';

  const mockResSitemap = {
    header: () => {},
    send: (data) => { sitemapXml = data; }
  };

  const mockResRobots = {
    header: () => {},
    send: (data) => { robotsTxt = data; }
  };

  pageController.renderSitemap({}, mockResSitemap);
  assert(sitemapXml.includes('<?xml version="1.0" encoding="UTF-8"?>'), "Sitemap must be XML");
  assert(sitemapXml.includes('https://www.joelxorbit.in'), "Sitemap must contain base domain");
  assert(sitemapXml.includes('https://www.joelxorbit.in/blog/agentic-ai-enterprise-sdlc-2026'), "Sitemap must contain blog URLs");

  pageController.renderRobots({}, mockResRobots);
  assert(robotsTxt.includes('User-agent: *'), "Robots.txt must contain User-agent");
  assert(robotsTxt.includes('Sitemap: https://www.joelxorbit.in/sitemap.xml'), "Robots.txt must reference sitemap");

  console.log("✅ testSitemapAndRobotsGeneration passed");
}

function runAllTests() {
  console.log("================ RUNNING BLOG & SEO UNIT TESTS ================\n");
  testSlugify();
  testBlogsDataStructure();
  testQualityGate();
  testSitemapAndRobotsGeneration();
  console.log("\n================ ALL UNIT TESTS PASSED ✅ ================");
}

if (require.main === module) {
  runAllTests();
}

module.exports = { runAllTests };
