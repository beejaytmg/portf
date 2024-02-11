import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBlog, faBriefcase, faUserTie, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const AdminHeader = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text font-bold tracking-wider">Bijaya Kumar Tamang</h1>
        <nav className="flex gap-0">
          <Link to={"/"} className="relative group">
            <FontAwesomeIcon icon={faUser} className="text-xl transition duration-300 ease-in-out group-hover:text-yellow-300" />
            <span className="text-xs py-1 px-2 rounded-full opacity-0 transition duration-300 ease-in-out pointer-events-none group-hover:opacity-100 bg-yellow-300">Profile</span>
          </Link>
          <Link to={"/blogs"} className="relative group">
            <FontAwesomeIcon icon={faBlog} className="text-xl transition duration-300 ease-in-out group-hover:text-yellow-300" />
            <span className="text-xs py-1 px-2 rounded-full opacity-0 transition duration-300 ease-in-out pointer-events-none group-hover:opacity-100 bg-yellow-300">Blogs</span>
          </Link>
          <Link to={"/projects"} className="relative group">
            <FontAwesomeIcon icon={faBriefcase} className="text-xl transition duration-300 ease-in-out group-hover:text-yellow-300" />
            <span className="text-xs py-1 px-2 rounded-full opacity-0 transition duration-300 ease-in-out pointer-events-none group-hover:opacity-100 bg-yellow-300">Projects</span>
          </Link>
          <Link to={"/login"} className="relative group">
            <FontAwesomeIcon icon={faUserTie} className="text-xl transition duration-300 ease-in-out group-hover:text-yellow-300" />
            <span className="text-xs py-1 px-2 rounded-full opacity-0 transition duration-300 ease-in-out pointer-events-none group-hover:opacity-100 bg-yellow-300">Login</span>
          </Link>
          <Link to={"/upload"} className="relative group">
            <FontAwesomeIcon icon={faPlus} className="text-xl transition duration-300 ease-in-out group-hover:text-yellow-300" />
            <span className="text-xs py-1 px-2 rounded-full opacity-0 transition duration-300 ease-in-out pointer-events-none group-hover:opacity-100 bg-yellow-300">Upload</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default AdminHeader;
