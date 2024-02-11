import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBlog, faBriefcase, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text font-bold tracking-wider">Bijaya Kumar Tamang</h1>
        <nav className="flex gap-8">
          <Link to={"/"}>
            <FontAwesomeIcon icon={faUser} className="text-xl transition duration-300 ease-in-out hover:text-yellow-300" />
          </Link>
          <Link to={"/blogs"}>
            <FontAwesomeIcon icon={faBlog} className="text-xl transition duration-300 ease-in-out hover:text-yellow-300" />
          </Link>
          <Link to={"/projects"}>
            <FontAwesomeIcon icon={faBriefcase} className="text-xl transition duration-300 ease-in-out hover:text-yellow-300" />
          </Link>
          <Link to={"/login"}>
            <FontAwesomeIcon icon={faUserTie} className="text-xl transition duration-300 ease-in-out hover:text-yellow-300" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
