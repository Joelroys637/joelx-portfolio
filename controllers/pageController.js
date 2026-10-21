const fs = require('fs');
const path = require('path');
const { blogs, categories } = require('../data/blogs');

const BASE_URL = 'https://www.joelxorbit.in';

exports.renderHome = (req, res) => {
  const seo = {
    title: "JoelX Orbit | Web Development, Mobile Apps & Technical Software Solutions",
    description: "JoelX Orbit is an IT software development company founded by Joel Roys in Tiruchirappalli, Tamil Nadu, India. Specializing in high-performance web applications, cross-platform mobile apps (Flutter), custom CRM software, and developer tools.",
    keywords: "web development, mobile app development, Flutter apps, desktop applications, custom CRM, ASP.NET Core, Python, Node.js, developer tools, JoelX Orbit, Tamil IDE",
    canonicalUrl: `${BASE_URL}/`,
    ogType: "website",
    ogImage: `${BASE_URL}/joelx.png`,
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "JoelX Orbit",
        "alternateName": ["JoelXOrbit", "JoelX Orbit Software"],
        "url": `${BASE_URL}/`
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "JoelX Orbit",
        "image": `${BASE_URL}/joelx.png`,
        "@id": `${BASE_URL}/#organization`,
        "url": `${BASE_URL}/`,
        "telephone": "+91-8838343971",
        "email": "joelxorbit@gmail.com",
        "founder": {
          "@type": "Person",
          "name": "Joel Roys"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Tiruchirappalli",
          "addressRegion": "Tamil Nadu",
          "postalCode": "620001",
          "addressCountry": "IN"
        },
        "description": "IT software development company specializing in web applications, mobile apps, custom CRM solutions, desktop software, and developer tools."
      }
    ]
  };
  res.render('pages/home', { seo });
};

exports.renderAbout = (req, res) => {
  const seo = {
    title: "About Us | JoelX Orbit - Software Engineering & Company Mission",
    description: "Learn about JoelX Orbit, founded by Joel Roys in Tiruchirappalli, Tamil Nadu. Discover our mission, full-stack tech stack, developer tools, and client-first engineering philosophy.",
    keywords: "about JoelX Orbit, Joel Roys, software engineering company, Tiruchirappalli web development, IT solutions Tamil Nadu",
    canonicalUrl: `${BASE_URL}/about`,
    ogType: "website",
    ogImage: `${BASE_URL}/joelx.png`,
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About JoelX Orbit",
        "url": `${BASE_URL}/about`,
        "description": "Official company profile, leadership, and technical philosophy of JoelX Orbit."
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "About Us", "item": `${BASE_URL}/about` }
        ]
      }
    ]
  };
  res.render('pages/about', { seo });
};

exports.renderServices = (req, res) => {
  const seo = {
    title: "Our IT & Software Development Services | JoelX Orbit",
    description: "Explore enterprise software solutions, web development, cross-platform mobile apps (Flutter), cloud platform engineering, and custom desktop software by JoelX Orbit.",
    keywords: "web development services, mobile app development, custom CRM software, desktop applications, cloud solutions, ASP.NET development, Python automation",
    canonicalUrl: `${BASE_URL}/services`,
    ogType: "website",
    ogImage: `${BASE_URL}/joelx.png`,
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": `${BASE_URL}/services` }
        ]
      }
    ]
  };
  res.render('pages/services', { seo });
};

exports.renderTools = (req, res) => {
  const seo = {
    title: "Software Tools & Developer Utilities | JoelX Orbit",
    description: "Explore JoelX Orbit's developer products: Sindhai IDE (Tamil programming language on Microsoft Store), StreamLine WebRTC video calling, QR code utilities, and text-to-speech tools.",
    keywords: "software tools, developer utilities, Sindhai IDE, Tamil IDE, WebRTC video calling, QR code generator, text to speech tool, JoelX Orbit products",
    canonicalUrl: `${BASE_URL}/tools`,
    ogType: "website",
    ogImage: `${BASE_URL}/joelx.png`,
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Sindhai IDE",
        "operatingSystem": "Windows 10, Windows 11",
        "applicationCategory": "DeveloperApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Tools", "item": `${BASE_URL}/tools` }
        ]
      }
    ]
  };
  res.render('pages/tools', { seo });
};

exports.renderContact = (req, res) => {
  const seo = {
    title: "Contact Us | JoelX Orbit - Inquiries, Estimates & Support",
    description: "Contact the JoelX Orbit engineering team in Tiruchirappalli, Tamil Nadu. Submit an inquiry for web development, mobile apps, or custom CRM solutions. Email: joelxorbit@gmail.com, Phone: +91 88383 43971.",
    keywords: "contact JoelX Orbit, hire software developer, web development quote, software estimate, IT support Tiruchirappalli",
    canonicalUrl: `${BASE_URL}/contact`,
    ogType: "website",
    ogImage: `${BASE_URL}/joelx.png`,
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact JoelX Orbit",
        "url": `${BASE_URL}/contact`,
        "description": "Direct communication channels, inquiry submission, and contact details for JoelX Orbit."
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": `${BASE_URL}/contact` }
        ]
      }
    ]
  };
  res.render('pages/contact', { seo });
};

exports.renderQuote = (req, res) => {
  const seo = {
    title: "Get a Project Estimate & Consultation | JoelX Orbit",
    description: "Request a custom project quote for web development, mobile applications, CRM software, or enterprise IT solutions from JoelX Orbit.",
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
    title: "Project Portfolio & UI Design Gallery | JoelX Orbit",
    description: "Browse featured digital products, verified client projects, and UI design solutions built by JoelX Orbit.",
    keywords: "software portfolio, web development gallery, app showcase, JoelX Orbit work",
    canonicalUrl: `${BASE_URL}/gallery`,
    ogType: "website",
    ogImage: `${BASE_URL}/joelx.png`,
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Gallery", "item": `${BASE_URL}/gallery` }
        ]
      }
    ]
  };

  res.render('pages/gallery', { images, seo });
};

exports.renderBlog = (req, res) => {
  const selectedSlug = req.query.post || null;
  if (selectedSlug) {
    const post = blogs.find(b => b.slug === selectedSlug || b.id === selectedSlug);
    if (post) {
      return res.redirect(301, `/blog/${post.slug}`);
    }
  }

  const seo = {
    title: "IT Blog & Technical Tutorials | JoelX Orbit - Practical Software Engineering",
    description: "Original, in-depth technical tutorials covering ASP.NET Core MVC, Python QR tools, Flutter mobile architecture, WebRTC video streaming, Node.js Firebase, and Cloud Platform Engineering by JoelX Orbit.",
    keywords: "IT blog, ASP.NET Core CRUD, Python QR code, Flutter welcome screen, WebRTC video calling, Firebase Firestore, technical tutorials, software architecture",
    canonicalUrl: `${BASE_URL}/blog`,
    ogType: "website",
    ogImage: `${BASE_URL}/joelx.png`,
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Tech Blog", "item": `${BASE_URL}/blog` }
        ]
      }
    ]
  };

  res.render('pages/blog', { blogs, categories, seo });
};

exports.renderBlogPost = (req, res) => {
  const { slug } = req.params;
  const post = blogs.find(b => b.slug === slug || b.id === slug);
  if (!post) {
    return res.status(404).render('pages/404', {
      seo: {
        title: "Article Not Found | JoelX Orbit Tech Blog",
        description: "The requested technical tutorial or blog post could not be found.",
        canonicalUrl: `${BASE_URL}/blog`,
        ogType: "website",
        ogImage: `${BASE_URL}/joelx.png`
      }
    });
  }

  const postOgImage = post.coverImage.startsWith('http') ? post.coverImage : `${BASE_URL}${post.coverImage}`;
  const seo = {
    title: `${post.title} | JoelX Orbit Tech Blog`,
    description: post.excerpt,
    keywords: post.tags ? post.tags.join(', ') : 'IT tutorial, tech insights',
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
          "jobTitle": post.author ? post.author.role : "Lead Architect & Full-Stack Engineer"
        },
        "publisher": {
          "@type": "Organization",
          "name": "JoelX Orbit",
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
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${BASE_URL}/blog` },
          { "@type": "ListItem", "position": 3, "name": post.title, "item": `${BASE_URL}/blog/${post.slug}` }
        ]
      }
    ]
  };

  const relatedPosts = blogs
    .filter(b => b.slug !== post.slug)
    .sort((a, b) => (a.category === post.category ? -1 : 1))
    .slice(0, 3);

  res.render('pages/blog-detail', { post, relatedPosts, seo });
};

exports.renderTerms = (req, res) => {
  const seo = {
    title: "Terms & Conditions | JoelX Orbit",
    description: "Official terms and conditions for software development services, contracts, and website usage provided by JoelX Orbit.",
    keywords: "terms and conditions, legal agreement, software development terms, JoelX Orbit",
    canonicalUrl: `${BASE_URL}/terms`,
    ogType: "website",
    ogImage: `${BASE_URL}/joelx.png`,
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Terms & Conditions", "item": `${BASE_URL}/terms` }
        ]
      }
    ]
  };
  res.render('pages/terms', { seo });
};

exports.renderPrivacy = (req, res) => {
  const seo = {
    title: "Privacy Policy | JoelX Orbit",
    description: "Privacy policy detailing data collection, processing, security practices, and Google AdSense cookie disclosures at JoelX Orbit.",
    keywords: "privacy policy, data protection, GDPR, Google AdSense cookies, JoelX Orbit privacy",
    canonicalUrl: `${BASE_URL}/privacy`,
    ogType: "website",
    ogImage: `${BASE_URL}/joelx.png`,
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": `${BASE_URL}/privacy` }
        ]
      }
    ]
  };
  res.render('pages/privacy', { seo });
};

exports.renderDisclaimer = (req, res) => {
  const seo = {
    title: "Website & Technical Disclaimer | JoelX Orbit",
    description: "Review our disclaimer regarding technical tutorial code, developer utilities, third-party links, and informational content on JoelX Orbit.",
    keywords: "disclaimer, technical notice, software disclaimer, JoelX Orbit disclaimer",
    canonicalUrl: `${BASE_URL}/disclaimer`,
    ogType: "website",
    ogImage: `${BASE_URL}/joelx.png`,
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Disclaimer", "item": `${BASE_URL}/disclaimer` }
        ]
      }
    ]
  };
  res.render('pages/disclaimer', { seo });
};

exports.renderAdsTxt = (req, res) => {
  const adsContent = "google.com, pub-5342182227761563, DIRECT, f08c47fec0942fa0\n";
  res.header('Content-Type', 'text/plain; charset=utf-8');
  res.send(adsContent);
};

exports.renderSitemap = (req, res) => {
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/tools',
    '/contact',
    '/quote',
    '/gallery',
    '/blog',
    '/terms',
    '/privacy',
    '/disclaimer'
  ];

  const now = new Date().toISOString().split('T')[0];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  staticRoutes.forEach(r => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}${r}</loc>\n`;
    xml += `    <lastmod>${now}</lastmod>\n`;
    xml += '    <changefreq>' + (r === '' ? 'daily' : 'weekly') + '</changefreq>\n';
    xml += '    <priority>' + (r === '' ? '1.0' : '0.8') + '</priority>\n';
    xml += '  </url>\n';
  });

  blogs.forEach(post => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}/blog/${post.slug}</loc>\n`;
    xml += `    <lastmod>${now}</lastmod>\n`;
    xml += '    <changefreq>monthly</changefreq>\n';
    xml += '    <priority>0.7</priority>\n';
    xml += '  </url>\n';
  });

  xml += '</urlset>';

  res.header('Content-Type', 'application/xml; charset=utf-8');
  res.send(xml);
};

exports.renderRobots = (req, res) => {
  const robots = `User-agent: *
Allow: /

# Google AdSense Crawler
User-agent: Mediapartners-Google
Allow: /

# Google AdSense Verification File
Allow: /ads.txt

Sitemap: ${BASE_URL}/sitemap.xml
`;
  res.header('Content-Type', 'text/plain; charset=utf-8');
  res.send(robots);
};

exports.render404 = (req, res) => {
  const seo = {
    title: "Page Not Found (404) | JoelX Orbit",
    description: "The requested page could not be found. Explore JoelX Orbit services, tools, tutorials, and contact options.",
    canonicalUrl: `${BASE_URL}/404`,
    ogType: "website",
    ogImage: `${BASE_URL}/joelx.png`
  };
  res.status(404).render('pages/404', { seo });
};
