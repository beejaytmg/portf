import { generateSitemap } from '../generateSitemap.js';

export default async function handler(req, res) {
  try {
    // Run the generateSitemap function
    await generateSitemap();
    res.status(200).end('Sitemap generation triggered');
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).end('Error generating sitemap');
  }
}