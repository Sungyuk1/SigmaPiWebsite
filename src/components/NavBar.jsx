import React from 'react'
//Just lets you import icons
import {FaBars, FaTimes} from 'react-icons/fa' 

const NavBar = () => {
    //fixed will fix the navigation bar on top so it will not move even if you scroll
    //text-white makes the text in the h1 white
    //bg-black makes the background black
    //px - padding
    //ml- margin left of blank
    return (
    <div className="flex justify-between items-center w-full h-20 text-white px-4
    bg-black fixed">
        <div>
            <h1 className="text-5xl font-signature ml-2">Sungyu</h1>
        </div>
    </div>
  )
}

export default NavBar