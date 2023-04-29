import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            <p className='text-xl mt-4'>
               Welcome to the Zeta Mu Chapter of the Sigma Pi Fraternity at Michigan State University
            </p>
        </div>
    </div>
  )
}

export default About