import React from 'react'

function RightImage({image, text, title, name}) {
  return (
    <div className='flex flex-row w-full bg-gradient-to-b from-gray-800 to-black text-white' name={name}>
        <div className="max-w-screen-lg p-4 mx-auto flex flex-row items-center justify-end w-full h-full">
        <div className='flex flex-col mr-5'>
            <div className="pb-8">
                <p className='text-xs md:text-4xl font-bold inline border-b-4 border-gray-500'>{title}</p>
            </div>
            <p className='text-xs md:text-base'>{text}</p>
        </div>
        <img src={image} alt="" className='ml-5 h-1/2 w-1/2 object-scale-down'/>
        </div>
    </div>
  )
}

export default RightImage