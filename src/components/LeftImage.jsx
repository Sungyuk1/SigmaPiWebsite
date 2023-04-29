import React from 'react'

function LeftImage({image, title, text, name}) {
  return (
    <div className='flex flex-row w-full bg-gradient-to-b from-black to-gray-800 text-white' name={name}>
        <div className="max-w-screen-lg p-4 mx-auto flex flex-row justify-start w-full h-3/4">
        <img src={image} alt="" className='h-1/2 w-1/2 mr-5 object-scale-down'/>
        <div className='flex flex-col ml-5'>
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