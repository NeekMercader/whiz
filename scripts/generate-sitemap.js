const fs = require('fs');
const path = require('path');

// Configuration
const SITE_URL = 'https://whiz.so';
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');

// Static pages with their priorities and change frequencies
const staticPages = [
  { url: '/', priority: 1.0, changefreq: 'weekly' },
  { url: '/contact', priority: 0.9, changefreq: 'monthly' },
  { url: '/portfolio', priority: 0.8, changefreq: 'monthly' },
  { url: '/blog', priority: 0.8, changefreq: 'weekly' },
  { url: '/roi-calculator', priority: 0.7, changefreq: 'monthly' },
  { url: '/workflow-killer', priority: 0.8, changefreq: 'monthly' },
  { url: '/free-app-friday', priority: 0.7, changefreq: 'weekly' },
  { url: '/book-call', priority: 0.6, changefreq: 'monthly' },
  { url: '/resources/app-audit-checklist', priority: 0.6, changefreq: 'monthly' },
  { url: '/resources/diy-vs-done-for-you', priority: 0.6, changefreq: 'monthly' },
  { url: '/resources/free-app-audit', priority: 0.6, changefreq: 'monthly' },
  { url: '/resources/nda-template', priority: 0.5, changefreq: 'monthly' },
  { url: '/terms', priority: 0.3, changefreq: 'yearly' },
  { url: '/privacy', priority: 0.3, changefreq: 'yearly' },
  { url: '/refund', priority: 0.3, changefreq: 'yearly' }
];

// Function to fetch blog posts from Strapi
async function fetchBlogPosts() {
  try {
    const STRAPI_API_URL = process.env.VITE_STRAPI_API_URL || 'https://your-strapi-instance.strapi.app/api';
    
    const response = await fetch(`${STRAPI_API_URL}/blog-posts?pagination[limit]=100&sort=publishedAt:desc`);
    
    if (!response.ok) {
      console.warn('Failed to fetch blog posts from Strapi, using fallback');
      return [
        { slug: 'diy-app-builders-hidden-costs', publishedAt: '2025-01-15T00:00:00.000Z' },
        { slug: '5-signs-business-needs-custom-app', publishedAt: '2025-01-10T00:00:00.000Z' }
      ];
    }
    
    const data = await response.json();
    return data.data.map(post => ({
      slug: post.attributes.slug,
      publishedAt: post.attributes.publishedAt
    }));
  } catch (error) {
    console.warn('Error fetching blog posts:', error);
    return [
      { slug: 'diy-app-builders-hidden-costs', publishedAt: '2025-01-15T00:00:00.000Z' },
      { slug: '5-signs-business-needs-custom-app', publishedAt: '2025-01-10T00:00:00.000Z' }
    ];
  }
}

// Function to generate XML sitemap
function generateSitemap(pages, blogPosts) {
  const currentDate = new Date().toISOString().split('T')[0];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">

`;

  // Add static pages
  pages.forEach(page => {
    xml += `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>

`;
  });

  // Add blog posts
  blogPosts.forEach(post => {
    const lastmod = new Date(post.publishedAt).toISOString().split('T')[0];
    xml += `  <url>
    <loc>${SITE_URL}/blog/${post.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>

`;
  });

  xml += `</urlset>`;
  
  return xml;
}

// Main function
async function main() {
  try {
    console.log('Generating sitemap...');
    
    // Fetch dynamic content
    const blogPosts = await fetchBlogPosts();
    
    // Generate sitemap
    const sitemap = generateSitemap(staticPages, blogPosts);
    
    // Write to file
    fs.writeFileSync(OUTPUT_PATH, sitemap, 'utf8');
    
    console.log(`✅ Sitemap generated successfully at ${OUTPUT_PATH}`);
    console.log(`📄 Included ${staticPages.length} static pages and ${blogPosts.length} blog posts`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { main, generateSitemap, fetchBlogPosts };