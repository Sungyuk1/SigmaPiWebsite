import React from 'react';
import championsImage from '../../assets/pastchampions/2023GolfOutingChamps.png';
import championsImage2 from '../../assets/pastchampions/2024GolfOutingChamps.JPG';

const PastChampions = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-100">
      <div className="w-full max-w-4xl p-6">
        <h1 className="text-4xl font-bold mb-6 text-center">Past Champions</h1>
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">2024 Champions</h2>
            <p className="text-lg"></p>
          </div>
          <img src={championsImage2} alt="Last Year's Champions" className="w-3/4 h-auto rounded-lg mb-6" />
        </div>
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">2023 Champions</h2>
            <p className="text-lg">Ric Balesky, Tommy Balesky, Will Barrott, Mark Barrott</p>
          </div>
          <img src={championsImage} alt="Last Year's Champions" className="w-3/4 h-auto rounded-lg mb-6" />
        </div>
      </div>
    </div>
  );
};

export default PastChampions;