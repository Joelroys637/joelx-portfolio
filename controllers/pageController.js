const fs = require('fs');
const path = require('path');
const { blogs, categories } = require('../data/blogs');

const BASE_URL = 'https://joelxorbit.in';

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

exports.renderBlog = (req, res) => {
  const selectedSlug = req.query.post || null;
  let seo = null;

  if (selectedSlug) {
    const post = blogs.find(b => b.slug === selectedSlug || b.id === selectedSlug);
    if (post) {
      const postOgImage = post.coverImage.startsWith('http') ? post.coverImage : `${BASE_URL}${post.coverImage}`;
      seo = {
        title: `${post.title} | Joelx Orbit Tech Blog`,
        description: post.excerpt,
        keywords: post.tags ? post.tags.join(', ') : 'IT blog, tech insights',
        canonicalUrl: `${BASE_URL}/blog/${post.slug}`,
        ogType: "article",
        ogImage: postOgImage,
        structuredData: [
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `${BASE_URL}/blog/${post.slug}`
            },
            "headline": post.title,
            "description": post.excerpt,
            "image": [postOgImage],
            "datePublished": post.date,
            "dateModified": post.date,
            "author": {
              "@type": "Person",
              "name": post.author ? post.author.name : "Joel Roys",
              "jobTitle": post.author ? post.author.role : "Lead Architect & Tech Strategist"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Joelx Orbit",
              "logo": {
                "@type": "ImageObject",
                "url": `${BASE_URL}/joelx.png`
              }
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": `${BASE_URL}/`
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": `${BASE_URL}/blog`
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": `${BASE_URL}/blog/${post.slug}`
              }
            ]
          }
        ]
      };
    }
  }

  res.render('pages/blog', { blogs, categories, selectedSlug, seo });
};

exports.renderBlogPost = (req, res) => {
  const { slug } = req.params;
  const post = blogs.find(b => b.slug === slug || b.id === slug);
  if (!post) {
    return res.redirect('/blog');
  }

  const postOgImage = post.coverImage.startsWith('http') ? post.coverImage : `${BASE_URL}${post.coverImage}`;
  const seo = {
    title: `${post.title} | Joelx Orbit Tech Blog`,
    description: post.excerpt,
    keywords: post.tags ? post.tags.join(', ') : 'IT blog, tech insights',
    canonicalUrl: `${BASE_URL}/blog/${post.slug}`,
    ogType: "article",
    ogImage: postOgImage,
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `${BASE_URL}/blog/${post.slug}`
        },
        "headline": post.title,
        "description": post.excerpt,
        "image": [postOgImage],
        "datePublished": post.date,
        "dateModified": post.date,
        "author": {
          "@type": "Person",
          "name": post.author ? post.author.name : "Joel Roys",
          "jobTitle": post.author ? post.author.role : "Lead Architect & Tech Strategist"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Joelx Orbit",
          "logo": {
            "@type": "ImageObject",
            "url": `${BASE_URL}/joelx.png`
          }
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${BASE_URL}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": `${BASE_URL}/blog`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": `${BASE_URL}/blog/${post.slug}`
          }
        ]
      }
    ]
  };

  res.render('pages/blog', { blogs, categories, selectedSlug: post.slug, seo });
};

exports.renderTerms = (req, res) => {
  res.render('pages/terms');
};

exports.renderPrivacy = (req, res) => {
  res.render('pages/privacy');
};

exports.renderSitemap = (req, res) => {
  const staticRoutes = [
    '',
    '/services',
    '/gallery',
    '/quote',
    '/blog',
    '/terms',
    '/privacy'
  ];

  const now = new Date().toISOString().split('T')[0];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  staticRoutes.forEach(r => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}${r}</loc>\n`;
    xml += `    <lastmod>${now}</lastmod>\n`;
    xml += '    <changefreq>daily</changefreq>\n';
    xml += '    <priority>' + (r === '' ? '1.0' : '0.8') + '</priority>\n';
    xml += '  </url>\n';
  });

  blogs.forEach(post => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}/blog/${post.slug}</loc>\n`;
    xml += `    <lastmod>${now}</lastmod>\n`;
    xml += '    <changefreq>weekly</changefreq>\n';
    xml += '    <priority>0.7</priority>\n';
    xml += '  </url>\n';
  });

  xml += '</urlset>';

  res.header('Content-Type', 'application/xml');
  res.send(xml);
};

exports.renderRobots = (req, res) => {
  const robots = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;
  res.header('Content-Type', 'text/plain');
  res.send(robots);
};
