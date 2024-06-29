import React from 'react';

const Register = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-100">
          <div className="w-full max-w-6xl p-6">
            <div className="flex flex-col md:flex-row justify-between gap-5">
              <div className=" mb-6 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">2024 Registration</h2>
                <div className="flex flex-col">
                    <p className="text-gray-700 mb-4">
                    Thank you for your interest in our 4th annual golf outing! Please fill out the form below, and we will assign you your team.
                    You may select up to three other players you wish to play with, or we will match you with a group for you.
                    </p>
                    <ul className="test-gray-700 mb-4">
                        <li>
                            <b>Date: </b><span>Sunday, October 29</span>
                        </li>
                        <li>
                            <b>Start Time: </b><span>9:00 AM</span>
                        </li>
                        <li>
                            <b>Format: </b><span>Four-man scramble</span>
                        </li>
                        <li className="mb-4">
                            <b>Price: </b><span>$55 for active brothers, and $85 for all others</span>
                        </li>
                        <li>
                            <span>This price includes golf, range balls before the event, and 
                            food/beverage at the house following conclusion of the event.</span>
                        </li>
                    </ul>
                    <p>
                    You can pay in check, cash, or venmo @msusigmapi. This is our house Venmo, so you will have to go to the 'businesses' tab to find the account.
                    When paying over venmo, <b>please</b> make sure to include your name, if you are a brother/parent/alumni/other, and other names if you are paying for multiple people. (For example: Chad Beckeman - Brother)
                    </p>
                </div>
              </div>
            </div>
            </div>
            <hr class="h-px bg-black border-0 w-3/4 mb-10 mt-2"/>
            <div className="w-full flex justify-center">
                <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLScTQwSPpyLuniIWJPgOIJVQ-NFxPsxXakHivUDLC3savltsVw/viewform?embedded=true" 
                height="1200" 
                className="w-full max-w-3xl"
                >
                Loading…
                </iframe>
            </div>          
        </div>
      );
    };

export default Register