import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import xmlbuilder from 'xmlbuilder';

export async function generateSitemap() {
  try {
    // Fetch blogs from the API
    const response = await fetch('https://authapiko.pythonanywhere.com/blogs');
    const blogs = await response.json();

    const root = xmlbuilder.create('urlset', { encoding: 'utf-8' })
      .att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

    for (const blog of blogs) {
      root.ele('url')
        .ele('loc', `https://bijayakumartamang.com.np/blog/${blog.title.replace(/\s+/g, '-').toLowerCase()}/${blog.id}`)
        .up()
        .ele('changefreq', 'weekly')
        .up()
        .ele('priority', '0.8');
    }

    const xml = root.end({ pretty: true });

    // Ensure the 'public' directory exists
    const publicDir = path.join(path.dirname(import.meta.url), 'public');
    await fs.promises.mkdir(publicDir, { recursive: true });

    // Write the XML to sitemap.xml file
    const sitemapFilePath = path.join(publicDir, 'sitemap.xml');
    await fs.promises.writeFile(sitemapFilePath, xml, 'utf8');
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error fetching blogs:', error);
  }
}