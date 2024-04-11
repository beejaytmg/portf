import fs from 'fs';
import fetch from 'node-fetch';
import xmlbuilder from 'xmlbuilder';

// Fetch blogs from the API
fetch('https://authapiko.pythonanywhere.com/blogs')
    .then(response => response.json())
    .then(blogs => {
        const root = xmlbuilder.create('urlset', { encoding: 'utf-8' })
            .att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

        blogs.forEach(blog => {
            root.ele('url')
                .ele('loc', `https://bijayakumartamang.com.np/blog/${blog.title.replace(/\s+/g, '-').toLowerCase()}/${blog.id}`)
                .up()
                .ele('changefreq', 'weekly')
                .up()
                .ele('priority', '0.8');
        });

        const xml = root.end({ pretty: true });

        // Write the XML to sitemap.xml file
        fs.writeFileSync('public/sitemap.xml', xml, 'utf8');
        console.log('Sitemap generated successfully!');
    })
    .catch(error => {
        console.error('Error fetching blogs:', error);
    });
