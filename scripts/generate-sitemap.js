import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const DOMAIN = 'https://primetoolshub.store';
const today = new Date().toISOString().split('T')[0];

function getProductIds() {
  const productsFilePath = path.join(rootDir, 'src', 'data', 'products.js');
  if (!fs.existsSync(productsFilePath)) {
    console.warn(`[sitemap-gen] Warning: ${productsFilePath} not found.`);
    return [];
  }
  const content = fs.readFileSync(productsFilePath, 'utf-8');
  const matches = [...content.matchAll(/id:\s*["']([^"']+)["']/g)];
  const ids = Array.from(new Set(matches.map(m => m[1])));
  return ids;
}

function generateSitemap() {
  const productIds = getProductIds();
  console.log(`[sitemap-gen] Found ${productIds.length} product IDs for sitemap generation.`);

  const urls = [
    { loc: `${DOMAIN}/`, priority: '1.0', changefreq: 'daily' },
    { loc: `${DOMAIN}/reviews`, priority: '0.8', changefreq: 'weekly' },
  ];

  productIds.forEach(id => {
    urls.push({
      loc: `${DOMAIN}/product/${id}`,
      priority: '0.9',
      changefreq: 'weekly',
    });
  });

  const xmlUrls = urls.map(u => `  <url>
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

  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml
`;

  // Write to public/
  const publicDir = path.join(rootDir, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const publicSitemapPath = path.join(publicDir, 'sitemap.xml');
  const publicRobotsPath = path.join(publicDir, 'robots.txt');

  fs.writeFileSync(publicSitemapPath, sitemapXml, 'utf-8');
  fs.writeFileSync(publicRobotsPath, robotsTxt, 'utf-8');
  console.log(`[sitemap-gen] Wrote ${publicSitemapPath} (${urls.length} URLs)`);
  console.log(`[sitemap-gen] Wrote ${publicRobotsPath}`);

  // Also write to dist/ if dist/ exists (for post-build safety)
  const distDir = path.join(rootDir, 'dist');
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
    fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt, 'utf-8');
    console.log(`[sitemap-gen] Wrote to dist/sitemap.xml and dist/robots.txt`);
  }
}

generateSitemap();
