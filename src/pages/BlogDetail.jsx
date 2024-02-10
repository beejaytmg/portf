import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Import Axios

const BlogDetail = () => {
  const [blog, setBlog] = useState(null);

  const { title, id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogResponse = await axios.get(`https://authapiko.pythonanywhere.com/blogs/${id}`);
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
    const contentLines = blog.content.split('\n');

    return contentLines.map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index}>{line.replace('# ', '')}</h1>;
      } else if (line.startsWith('## ')) {
        return <h2 key={index}>{line.replace('## ', '')}</h2>;
      } else if (line.startsWith('- ')) {
        return <li key={index}>{line.replace('- ', '')}</li>;
      } else {
        return <p key={index}>{line}</p>;
      }
    });
  };

  return (
    <div>
      <h1>{blog.title}</h1>
      {renderContent()}
    </div>
  );
};

export default BlogDetail;
