import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('https://authapiko.pythonanywhere.com/blogs/')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error('Error fetching blogs:', error));
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map(blog => (
          <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link to={`/blog/${blog.title.replace(/\s+/g, '-').toLowerCase()}/${blog.id}`} className="block">
              {blog.image && <img src={blog.image} alt="Blog" className="w-full h-auto" />}
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                <p className="text-gray-700">{blog.summary}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
