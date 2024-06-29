// GolfOutingHeader.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Adjust import based on your routing needs
import { FaBars, FaTimes } from 'react-icons/fa';
import GONavTile from './GONavTile'; // Adjust the import path

const GONavBar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const navItems = [
        { id: 1, name: 'Home', path: '/golf-outing' },
        //{ id: 2, name: 'About', path: '/about' },
        //{ id: 3, name: 'Schedule', path: '/schedule' },
        { id: 4, name: 'Sponsors', path: '/golf-outing/sponsors' },
        { id: 5, name: 'Register', path: '/golf-outing/register' },
        //{ id: 6, name: 'Login', path: '/golf-outing/login' }, // Add login item
        //{ id: 7, name: 'Create Account', path: '/golf-outing/createaccount' } // Add create account item
        {id: 8, name: 'Past Champs', path: '/golf-outing/past-champs'}
      ];

      const handleToggleNav = () => {
        setNavOpen(!navOpen);
      };
      return (
        <nav className="bg-gray-100 shadow-md w-full">
          <div className="container mx-auto p-4 flex justify-end items-center">
            <div className="md:hidden">
              <button onClick={handleToggleNav} className="text-gray-700 focus:outline-none">
                {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
            <ul className="hidden md:flex justify-end space-x-4 w-full">
              {navItems.map(item => (
                <GONavTile key={item.id} path={item.path} name={item.name} />
              ))}
            </ul>
          </div>
          {navOpen && (
            <ul className="flex flex-col md:hidden bg-gray-100 w-full border-t border-gray-300">
              {navItems.map(item => (
                <li key={item.id} className="py-2 px-4 border-b border-gray-300">
                  <Link to={item.path} onClick={() => setNavOpen(false)}>{item.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
      );
    };
    
export default GONavBar;