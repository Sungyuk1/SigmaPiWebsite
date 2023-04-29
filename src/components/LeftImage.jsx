import React from 'react'

function LeftImage({image, title, text, name}) {
  return (
    <div className='flex flex-row w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white' name={name}>
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <img src={image} alt=""/>
        <div className='flex flex-col'>
                <div className="pb-8">
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>{title}</p>
                </div>
                <p>{text}</p>
            </div>
        </div>
    </div>

  )
}

export default LeftImage