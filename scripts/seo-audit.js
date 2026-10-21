const { blogs } = require('../data/blogs');

const BASE_DOMAIN = 'https://www.joelxorbit.in';

function runSeoAudit() {
  console.log("================ JOELX ORBIT SEO AUDIT REPORT ================\n");

  let totalIssues = 0;
  const slugsSeen = new Set();
  const titlesSeen = new Set();

  blogs.forEach((post, idx) => {
    console.log(`[Article ${idx + 1}/${blogs.length}] ${post.title}`);
    const issues = [];

    // 1. Slug check
    if (!post.slug || post.slug !== post.slug.toLowerCase()) {
      issues.push("Slug is missing or not lowercase.");
    }
    if (slugsSeen.has(post.slug)) {
      issues.push(`Duplicate slug: ${post.slug}`);
    }
    slugsSeen.add(post.slug);

    // 2. Title check
    if (!post.title || post.title.length < 15) {
      issues.push("Title is missing or too short (<15 chars).");
    }
    if (titlesSeen.has(post.title.toLowerCase())) {
      issues.push(`Duplicate title: ${post.title}`);
    }
    titlesSeen.add(post.title.toLowerCase());

    // 3. Excerpt / Meta description check
    if (!post.excerpt || post.excerpt.length < 50) {
      issues.push("Excerpt/meta description is missing or too short (<50 chars).");
    }

    // 4. Image check
    if (!post.coverImage || !post.coverImage.startsWith('http')) {
      issues.push("Cover image URL is missing or not absolute.");
    }

    // 5. Category & Tags check
    if (!post.category) issues.push("Category is missing.");
    if (!post.tags || post.tags.length === 0) issues.push("Tags are missing.");

    if (issues.length === 0) {
      console.log("  Status: ✅ PASSED (No SEO defects detected)");
    } else {
      console.log("  Status: ⚠️ DEFECTS FOUND:");
      issues.forEach(iss => console.log(`    - ${iss}`));
      totalIssues += issues.length;
    }
    console.log("");
  });

  console.log("-------------------------------------------------------------");
  console.log(`SEO Audit Completed. Total articles audited: ${blogs.length}. Total defects found: ${totalIssues}`);
  console.log("=============================================================");

  if (totalIssues > 0) {
    process.exit(1);
  }
}

if (require.main === module) {
  runSeoAudit();
}

module.exports = { runSeoAudit };
