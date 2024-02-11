import React from 'react';
import bijay from '../assets/bijay.jpg';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <div className="flex items-center justify-center mb-8">
          <img
            className="w-24 h-24 rounded-full mr-4 transition duration-300 ease-in-out transform hover:scale-110"
            src={bijay}
            alt="Your Profile Pic"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900 hover:text-purple-600 transition duration-300 ease-in-out">
              Bijaya Kumar Tamang
            </h1>
            <p className="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out">
              Full Stack Developer
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700 hover:text-green-600 transition duration-300 ease-in-out">
            I am a passionate Full Stack Developer with a strong interest in AI
            and Machine Learning. I love coding and building things that make a
            difference. In the future, I aspire to pursue a career in AI and ML
            to contribute to cutting-edge technologies that shape the future.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Skills</h2>
          <ul className="grid grid-cols-2 gap-4">
            <li className="text-gray-700 hover:text-indigo-600 transition duration-300 ease-in-out">
              HTML
            </li>
            <li className="text-gray-700 hover:text-indigo-600 transition duration-300 ease-in-out">
              CSS
            </li>
            <li className="text-gray-700 hover:text-indigo-600 transition duration-300 ease-in-out">
              JavaScript
            </li>
            <li className="text-gray-700 hover:text-indigo-600 transition duration-300 ease-in-out">
              React
            </li>
            <li className="text-gray-700 hover:text-indigo-600 transition duration-300 ease-in-out">
              Tailwind CSS
            </li>
            <li className="text-gray-700 hover:text-indigo-600 transition duration-300 ease-in-out">
              Django
            </li>
            <li className="text-gray-700 hover:text-indigo-600 transition duration-300 ease-in-out">
              Python
            </li>
            <li className="text-gray-700 hover:text-indigo-600 transition duration-300 ease-in-out">
              Rest Api
            </li>
            {/* Add more skills as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
