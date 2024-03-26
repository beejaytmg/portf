import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from "react-helmet";
import { FaUserCircle } from 'react-icons/fa';

const Confession = () => {
  const [confessions, setConfessions] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [newConfession, setNewConfession] = useState('');

  const fetchConfessions = async (pageNum) => {
    try {
      setLoading(true);
      const url = `https://authapiko.pythonanywhere.com/confessions/?page=${pageNum}`;
      const response = await fetch(url);
      const data = await response.json();

      if (pageNum === 1) {
        setConfessions(data.results);
      } else {
        setConfessions((prevConfessions) => [...prevConfessions, ...data.results]);
      }

      setHasMore(!!data.next);
    } catch (error) {
      console.error('Error fetching confessions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchConfessions(nextPage);
  };

  const handleUploadConfession = async () => {
    try {
      const currentDate = new Date().toISOString();
      const response = await fetch('https://authapiko.pythonanywhere.com/confessions/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: newConfession, date_published: currentDate }),
      });
      const data = await response.json();
      console.log('Uploaded confession:', data);
      setNewConfession('');
      window.location.reload(); // Reload the page after successful upload
    } catch (error) {
      console.error('Error uploading confession:', error);
    }
  };

  useEffect(() => {
    fetchConfessions(1);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Helmet>
        <title>Confessions</title>
        <meta name='description' content='confession, use confession , confess lover' />
      </Helmet>
      <div className="flex-grow overflow-y-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {confessions.map((confession) => (
            <motion.div
              key={confession.id}
              className="bg-white p-4 rounded-lg mb-4 shadow-md flex items-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <FaUserCircle className="text-gray-500 mr-4 cursor-pointer" size={24} />
              <div>
                <p className="text-lg font-bold text-gray-800">{confession.messages}</p>
                <p className="text-sm text-gray-600">Published: {confession.date_published}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {loading && <div className="text-center text-white">Loading...</div>}
        {!loading && hasMore && (
          <div className="text-center mt-4">
            <button
              onClick={handleLoadMore}
              className="bg-white text-indigo-600 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-600 hover:text-white transition-colors duration-300"
            >
              Load More
            </button>
          </div>
        )}
        {!loading && !hasMore && (
          <div className="text-center mt-4 text-white">No more confessions to load.</div>
        )}
      </div>
      <div className="bg-white p-4 flex justify-center rounded-t-lg shadow-md">
        <input
          type="text"
          placeholder="Enter your confession..."
          className="border rounded-lg p-2 mr-2 flex-grow focus:outline-none focus:ring-2 focus:ring-indigo-600"
          value={newConfession}
          onChange={(e) => setNewConfession(e.target.value)}
        />
        <button
          onClick={handleUploadConfession}
          className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default Confession;