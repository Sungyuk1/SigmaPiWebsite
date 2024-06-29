import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import LeftImage from "./components/LeftImage";
import RightImage from "./components/RightImage";
import GOLayout from "./components/GolfOuting/GOLayout"; // Import the new layout
import HousePic from "./assets/House Picture.jpg";
import Toronto from "./assets/Guys in toronto.jpg";
import rush from "./assets/rush.jpg";
import Volleyball2 from "./assets/Volleyball2.jpg";
import Social1 from "./assets/SophMagLiz.jpg";


const AppContent = () => {
  const location = useLocation();

  const isGolfOutingRoute = location.pathname.startsWith('/golf-outing');

  return (
    <>
      {!isGolfOutingRoute && <NavBar />}
      <Routes>
        <Route path="/" element={<div>
          <Home />
          <About />
          <LeftImage title={"Chapter House"} text={"Our brand new chapter house is located on 251 W Grand River. It is newly renovated and can house up to 40 brothers. \n We have chef and kitchen for those choosing to live in the house"} name={"House"} image={HousePic}/>
          <RightImage title={"Brotherhood"} text={"Sigma Pi at MSU is one of MSU's largest fraternities. We currently have 120 active brothers on campus. We value our brotherhood very much and hold brotherhood events throughout the school year."} name={"Brotherhood"} image={Toronto}/>
          <LeftImage title={"Philanthropy"} text={"We hold multiple Philanthropy events throughout the school year to help better our community. \n Some of our most popular Philanthropy events include Fight Night, our annual Volleyball Tournament, and our Pinball Petes fundraiser"} name={"Philanthropy"} image={Volleyball2}/>
          <RightImage title={"Social"} text={"We hold multiple socials every week for our brotherhood. \n We hold tailgates during football season as well. \n Our hardworking social chairs make sure that there is never a dull moment during the school year. "} name={"Social"} image={Social1}/>
          <LeftImage title={"Rush"} text={"If you are interested in rushing the house please reach out to our rush chair Dan Hughes. \n Also please feel free to DM us on Instagram as well."} name={"Rush"} image={rush}/>
          <SocialLinks name={"Links"}/>
        </div>} />
        <Route path="/golf-outing/*" element={<GOLayout />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;