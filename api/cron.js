export default function handler(req, res) {
  // Run the generateSitemap.js script
  require('../generateSitemap.js');
  res.status(200).end('Sitemap generation triggered');
}