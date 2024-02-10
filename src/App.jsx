import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login';
import UploadProject from './components/UploadProject';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail'; // Import BlogDetail component
import Project from './pages/Project';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const access = localStorage.getItem('access');
    setIsLoggedIn(!!access);
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div>
          <Header />
        </div>
      ),
    },
    {
      path: '/projects',
      element: (
        <div>
          <Header />
          {isLoggedIn && <UploadProject />}
          <Project />
        </div>
      ),
    },
    {
      path: '/blogs',
      element: (
        <div>
          <Header />
          <Blogs />
        </div>
      ),
    },
    {
      path: '/login',
      element: (
        <div>
          <Header />
          <Login />
        </div>
      ),
    },
    {
      path: '/blog/:title/:id', // Route for individual blog post
      element: (
        <div>
          <Header />
          <BlogDetail />
        </div>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
