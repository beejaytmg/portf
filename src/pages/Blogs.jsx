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
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center">Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {blogs.map(blog => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            {blog.image && (
              <img
                src={blog.image}
                alt="Blog"
                className="h-48 w-full object-cover"
              />
            )}
            <div className="p-6">
              <Link
                to={`/blog/${blog.title.replace(/\s+/g, '-').toLowerCase()}/${
                  blog.id
                }`}
                className="block"
              >
                <h2 className="text-xl font-bold mb-2 text-gray-800">
                  {blog.title}
                </h2>
              </Link>
              <p className="text-gray-600 mb-4">{blog.summary}</p>
              <Link
                to={`/blog/${blog.title.replace(/\s+/g, '-').toLowerCase()}/${
                  blog.id
                }`}
                className="text-blue-500 hover:text-blue-700 font-medium"
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;