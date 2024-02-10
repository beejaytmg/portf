import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from "react-helmet"
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
    const contentLines = blog.content.split('\n');

    return contentLines.map((line, index) => {
      if (line.startsWith('# ')) {
        const headingText = line.substring(2);
        const boldRegex = /\*\*(.*?)\*\*/g;
        let lastIndex = 0;
        const elements = [];
        let match;
        while ((match = boldRegex.exec(headingText)) !== null) {
          if (match.index !== 0) {
            elements.push(headingText.substring(lastIndex, match.index));
          }
          elements.push(<strong key={index + '-' + match.index} className="font-bold">{match[1]}</strong>);
          lastIndex = boldRegex.lastIndex;
        }
        if (lastIndex < headingText.length) {
          elements.push(headingText.substring(lastIndex));
        }
        return (
          <h1 key={index} className="text-4xl font-bold mb-8">
            {elements}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        const subHeadingText = line.substring(3);
        const boldRegex = /\*\*(.*?)\*\*/g;
        let lastIndex = 0;
        const elements = [];
        let match;
        while ((match = boldRegex.exec(subHeadingText)) !== null) {
          if (match.index !== 0) {
            elements.push(subHeadingText.substring(lastIndex, match.index));
          }
          elements.push(<strong key={index + '-' + match.index} className="font-bold">{match[1]}</strong>);
          lastIndex = boldRegex.lastIndex;
        }
        if (lastIndex < subHeadingText.length) {
          elements.push(subHeadingText.substring(lastIndex));
        }
        return (
          <h2 key={index} className="text-2xl font-bold mb-3">
            {elements}
          </h2>
        );
      } else if (line.startsWith('- ')) {
        const listItemText = line.substring(2);
        const boldRegex = /\*\*(.*?)\*\*/g;
        let lastIndex = 0;
        const elements = [];
        let match;
        while ((match = boldRegex.exec(listItemText)) !== null) {
          if (match.index !== 0) {
            elements.push(listItemText.substring(lastIndex, match.index));
          }
          elements.push(<strong key={index + '-' + match.index} className="font-bold">{match[1]}</strong>);
          lastIndex = boldRegex.lastIndex;
        }
        if (lastIndex < listItemText.length) {
          elements.push(listItemText.substring(lastIndex));
        }
        return (
          <li key={index} className="list-disc ml-6">
            {elements}
          </li>
        );
      } else {
        const boldRegex = /\*\*(.*?)\*\*/g;
        let lastIndex = 0;
        const elements = [];
        let match;
        while ((match = boldRegex.exec(line)) !== null) {
          if (match.index !== 0) {
            elements.push(<span key={index + '-' + lastIndex}>{line.substring(lastIndex, match.index)}</span>);
          }
          elements.push(<strong key={index + '-' + match.index} className="font-bold">{match[1]}</strong>);
          lastIndex = boldRegex.lastIndex;
        }
        if (lastIndex < line.length) {
          elements.push(<span key={index + '-' + lastIndex}>{line.substring(lastIndex)}</span>);
        }
        return <p key={index} className="mb-4">{elements}</p>;
      }
    });
  };
  console.log("Blog Title:", blog.title); 
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Helmet>
        <title>{blog.title}t</title>
        <meta name='description' content={blog.meta} />
      </Helmet>
      <img src={blog.image} alt="Blog" className="rounded-lg mb-8" />
      {renderContent()}
    </div>
  );
};

export default BlogDetail;
