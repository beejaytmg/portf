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
    <div>
      <h1>Blog Posts</h1>
      {blogs.map(blog => (
        <div key={blog.id}>
        <Link to={`/blog/${blog.title.replace(/\s+/g, '-').replace(/'/g, '')}/${blog.id}`}>
          <h2>{blog.title}</h2>
          {blog.image && <img src={blog.image} alt="Blog" style={{ maxWidth: '100%' }} />}
        </Link>


        </div>
      ))}
    </div>
  );
};

export default Blogs;
