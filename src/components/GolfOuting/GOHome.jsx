import React from 'react';
import InfoTile from './GOInfoTile'; 

// sponsor tile object...could be moved into own component
const SponsorTile = ({ name, logo }) => {
    return (
      <div className="bg-white p-4 rounded shadow-md flex items-center justify-center h-48"> {/* Increased height */}
        <img src={logo} alt={name} className="h-full w-full object-contain" /> {/* Adjusted image size */}
      </div>
    );
  };

// collects all past sponsors from sponsor folder
const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
};

const images = importAll(require.context('../../assets/pastsponsors', false, /\.(png|jpe?g|svg)$/));

const Home = () => {
  const sponsors = Object.keys(images).map(key => ({
    name: key.split('.')[0],
    logo: images[key]
  }));

  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to the MSU Sigma Pi 2024 Golf Outing Sign-up</h1>
          <p className="text-lg px-12">
            We are excited to have you join us for an incredible day of golf, fun, and camaraderie. The event will take place this year on Sunday, August 29, which is the day after the OSU game. Please scroll down to find more information about the event.
          </p>
        </div>
      </section>
      <section className="py-16 bg-white flex flex-col items-center">
        <div className="container px-12">
          <h2 className="text-3xl font-bold mb-4 text-center">Event Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <InfoTile title="Schedule">
              <p>8:00 AM - Registration</p>
              <p>9:00 AM - Tee-off</p>
              <p>~ 2:00 PM - Food at chapter house</p>
              <p>~ 3:00 PM - Awards Ceremony</p>
            </InfoTile>
            <InfoTile title="Location">
              <p>Meridian Sun Golf Course</p>
              <p>1018 Haslett Rd</p>
              <p>Haslett, MI 48840</p>
            </InfoTile>
            <InfoTile title="Price">
              <p>Active Brothers: $55</p>
              <p>Others: $85</p><br />
              <p>Includes range balls before the event, as well as</p>
              <p>Food and beverages at the chapter house following the end of play</p>
            </InfoTile>
            <InfoTile title="Contact">
              <p>Email: chadbeckeman@gmail.com</p>
            </InfoTile>
            <InfoTile title="Prizes">
              <p>Prizes will be awarded for the winning foursome,</p>
              <p>as well as the closest to the pin and longest drive winners.</p>
            </InfoTile>
            <InfoTile title="Sponsors">
              <p>Please consider sponsoring a hole for $150,</p>
              <p>as most of our proceeds come from this.</p>
              <p>More information can be found on the Sponsors page</p>
            </InfoTile>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">This Year's Sponsors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          </div>
        </div>
      </section>
      <section className="py-16 bg-white my-24">
        <div className="container mx-auto px-12">
          <h2 className="text-3xl font-bold mb-4 text-center">Past Sponsors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sponsors.map((sponsor, index) => (
              <SponsorTile key={index} name={sponsor.name} logo={sponsor.logo} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
