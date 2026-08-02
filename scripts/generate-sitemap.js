import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const DOMAIN = 'https://primetoolshub.store';
const today = new Date().toISOString().split('T')[0];

function getProductsData() {
  const productsFilePath = path.join(rootDir, 'src', 'data', 'products.js');
  if (!fs.existsSync(productsFilePath)) {
    console.warn(`[sitemap-gen] Warning: ${productsFilePath} not found.`);
    return [];
  }
  const content = fs.readFileSync(productsFilePath, 'utf-8');

  // Match product objects with id, name, and logo
  const products = [];
  const idRegex = /id:\s*["']([^"']+)["']/g;
  let match;
  while ((match = idRegex.exec(content)) !== null) {
    const id = match[1];
    // Find name near this id
    const subStr = content.substring(match.index, match.index + 300);
    const nameMatch = subStr.match(/name:\s*["']([^"']+)["']/);
    const name = nameMatch ? nameMatch[1] : id;
    
    // Map product image name
    let logoName = 'prime-tools-logo.webp';
    if (id.includes('chatgpt-go')) logoName = 'chatgpt-go.webp';
    else if (id.includes('chatgpt')) logoName = 'chatgpt.webp';
    else if (id.includes('veo')) logoName = 'veo-3.webp';
    else if (id.includes('gemini')) logoName = 'gemini-logo.webp';
    else if (id.includes('capcut')) logoName = 'capcut.webp';
    else if (id.includes('canva')) logoName = 'canva.webp';
    else if (id.includes('grok')) logoName = 'supergrok.webp';
    else if (id.includes('surfshark')) logoName = 'surfshark-vpn.webp';
    else if (id.includes('tiktok')) logoName = 'tiktok.webp';
    else if (id.includes('youtube')) logoName = 'youtube-premium.webp';
    else if (id.includes('nord')) logoName = 'nord-vpn.webp';
    else if (id.includes('lovable')) logoName = 'lovable.webp';
    else if (id.includes('heygen')) logoName = 'heygen.webp';
    else if (id.includes('notion')) logoName = 'notion.webp';
    else if (id.includes('figma')) logoName = 'figma.webp';

    if (!products.some(p => p.id === id)) {
      products.push({ id, name, logo: logoName });
    }
  }
  return products;
}

function generateSitemap() {
  const products = getProductsData();
  console.log(`[sitemap-gen] Found ${products.length} products for sitemap generation.`);

  const staticPages = [
    { loc: `${DOMAIN}/`, priority: '1.0', changefreq: 'daily' },
    { loc: `${DOMAIN}/seo-guide`, priority: '0.9', changefreq: 'weekly' },
    { loc: `${DOMAIN}/reviews`, priority: '0.8', changefreq: 'weekly' },
    { loc: `${DOMAIN}/html-sitemap`, priority: '0.7', changefreq: 'monthly' },
  ];

  const productUrls = products.map(p => ({
    loc: `${DOMAIN}/product/${p.id}`,
    priority: '0.9',
    changefreq: 'weekly',
  }));

  const allUrls = [...staticPages, ...productUrls];

  // 1. Standard XML Sitemap
  const xmlUrls = allUrls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>
`;

  // 2. Google Image Sitemap XML
  const imageEntries = [
    `  <url>
    <loc>${DOMAIN}/</loc>
    <image:image>
      <image:loc>${DOMAIN}/prime-tools-logo.webp</image:loc>
      <image:title>Prime Tools Hub Logo</image:title>
      <image:caption>Pakistan and Global #1 Marketplace for Premium AI Tools and Digital Subscriptions</image:caption>
    </image:image>
  </url>`
  ];

  products.forEach(p => {
    imageEntries.push(`  <url>
    <loc>${DOMAIN}/product/${p.id}</loc>
    <image:image>
      <image:loc>${DOMAIN}/photo/${p.logo}</image:loc>
      <image:title>${p.name} - Official Subscription</image:title>
      <image:caption>Genuine ${p.name} account with instant activation and replacement warranty at Prime Tools Hub.</image:caption>
    </image:image>
  </url>`);
  });

  const imageSitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${imageEntries.join('\n')}
</urlset>
`;

  // 3. Technical SEO Robots.txt
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /login
Disallow: /register
Disallow: /forgot-password
Disallow: /reset-password

# Major Search Engine Crawlers
User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /

User-agent: Bingbot
Allow: /

User-agent: ByteDance
Allow: /

User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml
Sitemap: ${DOMAIN}/sitemap-images.xml
`;

  // Write files to public/
  const publicDir = path.join(rootDir, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const publicSitemapPath = path.join(publicDir, 'sitemap.xml');
  const publicImageSitemapPath = path.join(publicDir, 'sitemap-images.xml');
  const publicRobotsPath = path.join(publicDir, 'robots.txt');

  fs.writeFileSync(publicSitemapPath, sitemapXml, 'utf-8');
  fs.writeFileSync(publicImageSitemapPath, imageSitemapXml, 'utf-8');
  fs.writeFileSync(publicRobotsPath, robotsTxt, 'utf-8');

  console.log(`[sitemap-gen] Wrote ${publicSitemapPath} (${allUrls.length} URLs)`);
  console.log(`[sitemap-gen] Wrote ${publicImageSitemapPath} (${products.length + 1} Image URLs)`);
  console.log(`[sitemap-gen] Wrote ${publicRobotsPath}`);

  // Also write to dist/ if dist/ exists
  const distDir = path.join(rootDir, 'dist');
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
    fs.writeFileSync(path.join(distDir, 'sitemap-images.xml'), imageSitemapXml, 'utf-8');
    fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt, 'utf-8');
    console.log(`[sitemap-gen] Wrote sitemaps and robots.txt to dist/`);
  }
}

generateSitemap();
