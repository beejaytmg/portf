import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { create } from 'xmlbuilder2';

const Sitemap = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('https://authapiko.pythonanywhere.com/blogs/')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error('Error fetching blogs:', error));
  }, []);

  const generateXml = () => {
    const root = create({ version: '1.0' }).ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });

    blogs.forEach(blog => {
      root.ele('url').ele('loc').txt(`https://bijayakumartamang.com.np/${blog.title.replace(/\s+/g, '-').toLowerCase()}/${blog.id}`);
    });

    return root.end({ prettyPrint: true });
  };

  const xmlString = generateXml();

  return (
    <textarea rows={20} cols={80} value={xmlString} readOnly />
  );
};

export default Sitemap;
