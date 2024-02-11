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
      <div className="grid grid-cols-1">
        {blogs.map(blog => (
          <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden flex mb-8">
            {blog.image && (
              <img
                src={blog.image}
                alt="Blog"
                className="w-1/3 h-40 object-cover"
              />
            )}
            <div className="flex-1 p-4">
              <Link to={`/blog/${blog.title.replace(/\s+/g, '-').toLowerCase()}/${blog.id}`} className="block">
                <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              </Link>
              <p className="text-gray-700">{blog.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
