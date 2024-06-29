// GolfOutingLayout.js
// This page is the template for the golf outing app
import React from 'react';
import GONavBar from './GONavBar';
import GOHome from './GOHome';
import {Routes, Route, useLocation} from 'react-router-dom'
import SponsorSignup from './GOSponsorSignup';
import GORegister from './GORegister';
import footerImage from '../../assets/testbackground.png'



const GOLayout = () => {
  const location= useLocation();
  return (
    <div>
      <GONavBar />
      <Routes>
          <Route path="/" element={<GOHome />} />
          <Route path="/sponsors" element={<SponsorSignup />} />
          <Route path="/register" element={<GORegister />} />
      </Routes>
      <footer className="w-full bg-purple-900 h-48">
        <img src={footerImage} alt="Header Logo" className="w-1/3 m-auto py-12" /> {/* Set a fixed size */}
      </footer>
    </div>
  );
};

export default GOLayout;
