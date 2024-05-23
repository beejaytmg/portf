import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

const BlogDetail = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogResponse = await axios.get(`https://authapiko.pythonanywhere.com/blogs/${id}/`);
        const fetchedBlogData = blogResponse.data;
        setBlog(fetchedBlogData);
      } catch (error) {
        console.error("Couldn't fetch blog");
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  const renderContent = () => {
    const cleanHtml = DOMPurify.sanitize(blog.content);
    return parse(cleanHtml);
  };

  return (
    <>
      <Helmet>
        <title>{blog.title}</title>
        <meta name="description" content={blog.meta} />
      </Helmet>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <img src={blog.image} alt="Blog" className="w-full h-80 object-cover" />
          <div className="px-8 py-10">
            {renderContent()}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
