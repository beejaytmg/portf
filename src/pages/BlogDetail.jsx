import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from "react-helmet";

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

  const renderBoldText = (text, index, lastIndex) => {
    const boldRegex = /\*\*(.*?)\*\*/g;
    const elements = [];
    let match;
    while ((match = boldRegex.exec(text)) !== null) {
      if (match.index !== 0) {
        elements.push(<span key={index + '-' + lastIndex} className="text-gray-600">{text.substring(lastIndex, match.index)}</span>);
      }
      elements.push(<strong key={index + '-' + match.index} className="font-bold text-gray-800">{match[1]}</strong>);
      lastIndex = boldRegex.lastIndex;
    }
    if (lastIndex < text.length) {
      elements.push(<span key={index + '-' + lastIndex} className="text-gray-600">{text.substring(lastIndex)}</span>);
    }
    return elements;
  };

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
            elements.push(<span key={index + '-' + lastIndex} className="text-gray-800">{headingText.substring(lastIndex, match.index)}</span>);
          }
          elements.push(<strong key={index + '-' + match.index} className="font-bold text-5xl text-gray-800">{match[1]}</strong>);
          lastIndex = boldRegex.lastIndex;
        }
        if (lastIndex < headingText.length) {
          elements.push(<span key={index + '-' + lastIndex} className="text-gray-800">{headingText.substring(lastIndex)}</span>);
        }
        return (
          <h1 key={index} className="text-5xl font-bold mb-10 text-gray-800 leading-tight">
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
            elements.push(<span key={index + '-' + lastIndex} className="text-gray-700">{subHeadingText.substring(lastIndex, match.index)}</span>);
          }
          elements.push(<strong key={index + '-' + match.index} className="font-bold text-3xl text-gray-700">{match[1]}</strong>);
          lastIndex = boldRegex.lastIndex;
        }
        if (lastIndex < subHeadingText.length) {
          elements.push(<span key={index + '-' + lastIndex} className="text-gray-700">{subHeadingText.substring(lastIndex)}</span>);
        }
        return (
          <h2 key={index} className="text-3xl font-bold mb-6 text-gray-700 leading-tight">
            {elements}
          </h2>
        );
      } else if (line.startsWith('###')) {
        const subHeadingText = line.substring(4);
        const boldRegex = /\*\*(.*?)\*\*/g;
        let lastIndex = 0;
        const elements = [];
        let match;
        while ((match = boldRegex.exec(subHeadingText)) !== null) {
          if (match.index !== 0) {
            elements.push(<span key={index + '-' + lastIndex} className="text-gray-700">{subHeadingText.substring(lastIndex, match.index)}</span>);
          }
          elements.push(<strong key={index + '-' + match.index} className="font-bold text-3xl text-gray-700">{match[1]}</strong>);
          lastIndex = boldRegex.lastIndex;
        }
        if (lastIndex < subHeadingText.length) {
          elements.push(<span key={index + '-' + lastIndex} className="text-gray-700">{subHeadingText.substring(lastIndex)}</span>);
        }
        return (
          <h3 key={index} className="text-3xl font-bold mb-6 text-gray-700 leading-tight">
            {elements}
          </h3>
        );
      } else if (line.startsWith('- ')) {
        const listItemText = line.substring(2);
        const boldRegex = /\*\*(.*?)\*\*/g;
        let lastIndex = 0;
        const elements = [];
        let match;
        while ((match = boldRegex.exec(listItemText)) !== null) {
          if (match.index !== 0) {
            elements.push(<span key={index + '-' + lastIndex} className="text-gray-700">{listItemText.substring(lastIndex, match.index)}</span>);
          }
          elements.push(<strong key={index + '-' + match.index} className="font-bold text-gray-700">{match[1]}</strong>);
          lastIndex = boldRegex.lastIndex;
        }
        if (lastIndex < listItemText.length) {
          elements.push(<span key={index + '-' + lastIndex} className="text-gray-700">{listItemText.substring(lastIndex)}</span>);
        }
        return (
          <li key={index} className="list-disc ml-6 text-gray-700 mb-2">
            {elements}
          </li>
        );
      } else if (line.includes('[ads]')) {
        return (
          <div key={index}>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9631856282418168" crossorigin="anonymous"></script>
            <ins className="adsbygoogle" style={{ display: 'block', textAlign: 'center' }} data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-9631856282418168" data-ad-slot="6345990221"></ins>
            <script>
              (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
          </div>
        );
      } else {
        const linkRegex = /\[(.*?)\]\((.*?)\)/g;
        const boldRegex = /\*\*(.*?)\*\*/g;
        let lastIndex = 0;
        const elements = [];
        let match;

        while ((match = linkRegex.exec(line)) !== null) {
          if (match.index !== 0) {
            const beforeLink = line.substring(lastIndex, match.index);
            const boldElements = renderBoldText(beforeLink, index, lastIndex);
            elements.push(...boldElements);
          }
          elements.push(
            <a
              key={index + '-' + match.index}
              href={match[2]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              {match[1]}
            </a>
          );
          lastIndex = linkRegex.lastIndex;
        }

        const remainingText = line.substring(lastIndex);
        const boldElements = renderBoldText(remainingText, index, lastIndex);
        elements.push(...boldElements);

        return <p key={index} className="mb-6 text-gray-700 leading-relaxed">{elements}</p>;
      }
    });
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
