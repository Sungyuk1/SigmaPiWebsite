import React from 'react'
import comp from '../assets/composite photo cropped.png'
import {MdOutlineKeyboardArrowRight} from "react-icons/md"

//Via is the midpoint for the gradient
const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b via-black from-black to-gray-800 text-white">
         <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center
             h-full px-4 md:flex-row">
             <div className='flex flex-col justify-center h-full'>
                <h2 className="text-4xl sm:text-7xl font-bold text-white">
                    I am a student at Michigan State University
                </h2>
                <p className="text-gray-500 py-4 max-w-md">
                    I am a senior and will be graduating in May 2023. I am 
                    a computer science major with a minor in business and Data Science

                </p>
                <div>
                    <button>
                        Portfolio
                        <span>
                             <MdOutlineKeyboardArrowRight/>
                        </span>
                    </button>
                </div>
             </div>
             <div>
                <img src={comp} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full"/>
             </div>
         </div>
    </div>
  )
}

export default Home