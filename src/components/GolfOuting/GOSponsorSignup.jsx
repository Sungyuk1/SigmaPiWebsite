import React from 'react';
import sponsorSignImage from '../../assets/BlankSponsorSign.jpg';

const SponsorSignup = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen py-6 bg-gray-100">
      <div className="w-full max-w-6xl p-6">
        <div className="flex flex-col md:flex-row justify-between mb-8 gap-5">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Become a Sponsor</h2>
            <p className="text-gray-700 mb-8">
              Support our event by becoming a sponsor. Your contributions help make our event a success! 
              Sponsors will get their logo featured on a sign for one hole, and on this website! 
              If you wish to sponsor, please fill out the form below, we will reach out to you to get the logo. You can reach out to chadbeckeman@gmail.com with any questions.
            </p>
            <p className="text-gray-700 mb-4">
              Featured to the right is the sign you will get your logo/name on.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={sponsorSignImage} alt="Sponsor Sign Example" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
      <hr class="h-px my-8 bg-black border-0 w-3/4 mb-16"/>
      <div className="w-full flex justify-center">
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSfwn1-NqZ49YBLU58FCmVTUGJ3in4gcZNpTl2o5xWMo_0jgmg/viewform?embedded=true" 
          height="1200" 
          className="w-full max-w-3xl"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default SponsorSignup;
