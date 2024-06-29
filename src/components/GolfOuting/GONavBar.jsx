// GolfOutingHeader.js
import React, {useContext} from 'react';
import { Link } from 'react-router-dom'; // Adjust import based on your routing needs
import GONavTile from './GONavTile'; // Adjust the import path

const GONavBar = () => {

    const navItems = [
        { id: 1, name: 'Home', path: '/golf-outing' },
        //{ id: 2, name: 'About', path: '/about' },
        //{ id: 3, name: 'Schedule', path: '/schedule' },
        { id: 4, name: 'Sponsors', path: '/golf-outing/sponsors' },
        { id: 5, name: 'Register', path: '/golf-outing/register' },
        //{ id: 6, name: 'Login', path: '/golf-outing/login' }, // Add login item
        //{ id: 7, name: 'Create Account', path: '/golf-outing/createaccount' } // Add create account item
      ];

  return (
    <header>
        <nav className=" p-4 w-full top-3 z-50 right-3 bg-gray-100">
            <ul className="flex justify-end space-x-4">
                {navItems.map(item => (
                <GONavTile key={item.id} path={item.path} name={item.name} />
                ))}
            </ul>
        </nav>
    </header>
  );
};

export default GONavBar;