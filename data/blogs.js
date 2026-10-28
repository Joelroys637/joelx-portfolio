// data/blogs.js - Curated High-Quality IT Tutorials & Tech Insights for JoelX Orbit

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "Cloud & DevOps",
  "Artificial Intelligence",
  "Cybersecurity",
  "Data & AI"
];

const microsoftLayoffsArticle = require('./article-microsoft-layoffs');
const phpSecurityArticle = require('./article-php-security');
const batch1 = require('./articles-1-10');
const batch2 = require('./articles-11-20');
const batch3 = require('./articles-21-30');
const batch4 = require('./articles-31-40');

const blogs = [
  microsoftLayoffsArticle,
  phpSecurityArticle,
  ...batch1,
  ...batch2,
  ...batch3,
  ...batch4
];

module.exports = {
  categories,
  blogs
};
