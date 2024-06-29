// GolfOutingLayout.js
// This page is the template for the golf outing app
import React from 'react';
import GONavBar from './GONavBar';
import GOHome from './GOHome';
import {Routes, Route, useLocation} from 'react-router-dom'
import SponsorSignup from './GOSponsorSignup';
import GORegister from './GORegister';
import footerImage from '../../assets/testbackground.png'
import GOPastChamps from '../GolfOuting/GOPastChamps'
import GOFooter from '../GolfOuting/GOFooter'


const GOLayout = () => {
  const location= useLocation();
  return (
    <div>
      <GONavBar />
      <Routes>
          <Route path="/" element={<GOHome />} />
          <Route path="/sponsors" element={<SponsorSignup />} />
          <Route path="/register" element={<GORegister />} />
          <Route path="/past-champs" element={<GOPastChamps />} />
      </Routes>
      <GOFooter/>
    </div>
  );
};

export default GOLayout;
