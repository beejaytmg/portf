import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login';
import UploadProject from './components/UploadProject';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail'; // Import BlogDetail component
import Project from './pages/Project';
import SrcRedirect from './src';
import VideoPlayer from './play';
import Home from './pages/Home';
import AdminHeader from './components/AdminHeader';
import Confession from './Confession';

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
        <>
          {isLoggedIn ? <AdminHeader /> : <Header/>}
          <Home />
        </>
      ),
    },
    {
      path: '/confessions',
      element: (
        <>
          
          <Confession />
        </>
      ),
    },
    {
      path: '/projects',
      element: (
        <>
          {isLoggedIn ? <AdminHeader /> : <Header/>}
          <Project />
        </>
      ),
    },
    {
      path: '/play',
      element: (
        <>
          
          <VideoPlayer />
        </>
      ),
    },
    {
      path: '/src',
      element: (
        <>
          
          <SrcRedirect />
        </>
      ),
    },
    {
      path: '/blogs',
      element: (
        <>
          {isLoggedIn ? <AdminHeader /> : <Header/>}
          <Blogs />
        </>
      ),
    },
    {
      path: '/login',
      element: (
        <>
          {isLoggedIn ? <AdminHeader /> : <Header/>}
          <Login />
        </>
      ),
    },
    {
      path: '/blog/:title/:id', // Route for inidual blog post
      element: (
        <>
          {isLoggedIn ? <AdminHeader /> : <Header/>}
          <BlogDetail />
        </>
      ),
    },
    {
      path: '/upload',
      element: (
        <>
          {isLoggedIn ? <AdminHeader /> : <Header/>}
          <UploadProject />
        </>
      ),
    }
  ]);

  return (
    <>
      
      <RouterProvider router={router} />
      
    </>
  );
};

export default App;
