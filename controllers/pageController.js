const fs = require('fs');
const path = require('path');
const { blogs, categories } = require('../data/blogs');

const BASE_URL = 'https://joelxorbit.in';

exports.renderHome = (req, res) => {
  const seo = {
    title: "Joelx Orbit | Global Web Service, Mobile App Development, CRM & Desktop Application",
    description: "Joelx Orbit is a leading global IT service company specializing in top-tier web development, mobile app development (Android & iOS), custom CRM solutions, and robust desktop applications.",
    keywords: "best IT company, web development, app development, custom CRM web application, billing app, global web service, mobile app development, CRM software development, desktop application development",
    canonicalUrl: `${BASE_URL}/`,
    ogType: "website",
    ogImage: `${BASE_URL}/joelx.png`
  };
  res.render('pages/home', { seo });
};

exports.renderServices = (req, res) => {
  const seo = {
    title: "Our IT & Software Development Services | Joelx Orbit",
    description: "Explore enterprise software solutions, web development, cross-platform mobile apps, cloud platform engineering, and custom desktop software by Joelx Orbit.",
    keywords: "web development services, mobile app development, CRM software, desktop applications, cloud solutions",
    canonicalUrl: `${BASE_URL}/services`,
    ogType: "website",
    ogImage: `${BASE_URL}/joelx.png`
  };
  res.render('pages/services', { seo });
};

exports.renderQuote = (req, res) => {
  const seo = {
    title: "Get a Project Estimate & Consultation | Joelx Orbit",
    description: "Request a custom project quote for web development, mobile applications, CRM software, or enterprise IT solutions from Joelx Orbit.",
    keywords: "IT consultation, project quote, web development pricing, software estimate",
    canonicalUrl: `${BASE_URL}/quote`,
    ogType: "website",
    ogImage: `${BASE_URL}/joelx.png`
  };
  res.render('pages/quote', { seo });
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

  const seo = {
    title: "Project Portfolio & UI Design Gallery | Joelx Orbit",
    description: "Browse featured digital products, luxury client projects, and UI design solutions built by Joelx Orbit.",
    keywords: "software portfolio, web development gallery, app showcase, Joelx Orbit work",
    canonicalUrl: `${BASE_URL}/gallery`,
    ogType: "website",
    ogImage: `${BASE_URL}/joelx.png`
  };

  res.render('pages/gallery', { images, seo });
};

exports.renderBlog = (req, res) => {
  const selectedSlug = req.query.post || null;
  let seo = {
    title: "IT Blog & Tech Insights | Joelx Orbit - Modern Software & Technology Trends",
    description: "Explore in-depth articles on Agentic AI, Cloud-Native Platform Engineering, Zero Trust Cybersecurity, Full-Stack Frameworks, and Mobile Architecture by Joelx Orbit.",
    keywords: "IT blog, Agentic AI, cloud engineering, cybersecurity, Flutter vs KMP, fullstack development, vector databases, software architecture, Joelx Orbit blog",
    canonicalUrl: `${BASE_URL}/blog`,
    ogType: "website",
    ogImage: `${BASE_URL}/joelx.png`
  };

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
  const seo = {
    title: "Terms & Conditions | Joelx Orbit",
    description: "Terms and conditions for software development services and website usage provided by Joelx Orbit.",
    keywords: "terms and conditions, legal, Joelx Orbit terms",
    canonicalUrl: `${BASE_URL}/terms`,
    ogType: "website",
    ogImage: `${BASE_URL}/joelx.png`
  };
  res.render('pages/terms', { seo });
};

exports.renderPrivacy = (req, res) => {
  const seo = {
    title: "Privacy Policy | Joelx Orbit",
    description: "Privacy policy detailing data collection, processing, and protection practices at Joelx Orbit.",
    keywords: "privacy policy, data protection, Joelx Orbit privacy",
    canonicalUrl: `${BASE_URL}/privacy`,
    ogType: "website",
    ogImage: `${BASE_URL}/joelx.png`
  };
  res.render('pages/privacy', { seo });
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
