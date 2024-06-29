// GolfOutingHeader.js
import React from 'react';
import { Link } from 'react-router-dom';

const GONavTile = ({ path, name }) => {
  return (
    <li className="">
      <Link to={path} className="block px-4 py-4 bg-black text-white rounded-lg hover:bg-purple-800 hover:text-white text-center">
        {name}
      </Link>
    </li>
  );
};

export default GONavTile;