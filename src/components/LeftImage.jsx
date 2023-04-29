import React from 'react'

function LeftImage({image, title, text, name}) {
  return (
    <div className='flex flex-row' name={name}>
        <img src={image} alt=""/>
        <div className='flex flex-col'>
            <p>{title}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default LeftImage