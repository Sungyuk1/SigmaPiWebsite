import React from 'react';

const GOInfoTile = ({ title, children }) => {
  return (
    <div className="bg-slate-100 p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="text-center">
        {children}
      </div>
    </div>
  );
};

export default GOInfoTile;
