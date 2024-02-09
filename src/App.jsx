// App.jsx
import React from 'react';
import Project from './pages/Project';
import Header from './components/Header';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { redirect } from "react-router-dom";
const App = () => {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element:<div>
      
        <Header />
       </div>,
    },
    {
      path: "/projects",
      element:<div>
      
        <Header />
        <Project />
       </div>,
    },

  ]);

  return (
    <>
 
      <RouterProvider router={router} />
    </>
  )
}


export default App;
