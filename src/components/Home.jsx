import React from 'react'
import FGT from '../assets/FGT.jpg'
import {MdOutlineKeyboardArrowRight} from "react-icons/md"

//Via is the midpoint for the gradient
const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b via-black from-black to-gray-800 text-white">
         <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center
             h-full px-4 md:flex-row">
                <h2 className="text-2xl sm:text-7xl font-bold text-white">
                    Sigma Pi at Michiagn State University
                </h2>
             <div>
                <img src={FGT} alt="Freddie Grant Tommy" className="rounded-2xl mx-auto w-2/3 md:w-full object-scale-down"/>
             </div>
         </div>
    </div>
  )
}

export default Home