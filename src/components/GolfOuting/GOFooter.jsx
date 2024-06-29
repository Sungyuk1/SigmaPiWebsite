import React from 'react';
import footerImage from '../../assets/testbackground.png';

const GOFooter = () => {
    return (
        <footer className="w-full bg-purple-900 p-6 flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col md:flex-row md:flex-wrap md:items-center text-white text-center md:text-left mb-4 md:mb-0 w-full md:w-auto">
            <div className="w-full md:w-auto mb-4 md:mb-0 md:mr-8">
              <p>Website Feedback: Reach out to <a href="mailto:tysonblance@gmail.com" className="underline">tysonblance@gmail.com</a></p>
            </div>
            <div className="w-full md:w-auto">
              <p>Golf Outing Questions: Reach out to <a href="mailto:chadbeckeman@gmail.com" className="underline">chadbeckeman@gmail.com</a></p>
            </div>
          </div>
          <div className="flex justify-center md:justify-end w-full md:w-auto">
            <img src={footerImage} alt="Footer Logo" className="w-1/3 md:w-1/6" />
          </div>
        </footer>
      );
    };

export default GOFooter;
