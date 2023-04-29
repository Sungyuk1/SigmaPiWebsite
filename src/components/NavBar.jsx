import React from 'react';
//Just lets you import icons
import {FaBars, FaTimes} from 'react-icons/fa'; 
import {useState} from "react";
import {Link} from "react-scroll"

const NavBar = () => {
    //fixed will fix the navigation bar on top so it will not move even if you scroll
    //text-white makes the text in the h1 white
    //bg-black makes the background black
    //px - padding on x axis
    //ml- margin left of blank
    //ul will have all of our link items. ul stands for unordered list
    //hover:scale-105 duration-200   -hover when above the list item, and duration is how long it should take to scale to 105
    
    //default state is false
    const [nav, setNav] = useState(false)

    const links=[
        {id:1,
        link: 'home'},
        {id:2,
        link: 'about'},
        {id:3,
        link: 'House'},
        {id:4,
        link: 'Brotherhood'},
        {id:5,
        link: 'Philanthropy'},
        {id:6,
            link: 'Social'},
        {id:7,
                link: 'Sweet Heart'},
        {id:8,
                    link: 'Rush'},

    ]
    
    return (
    <div className="flex justify-between items-center w-full h-20 text-white px-4
    bg-black fixed">
        <div>
            <h1 className="text-5xl font-signature ml-2">Sungyu</h1>
        </div>
        {/*This iterates through our links array and creates elements for them*/ }
        <ul className ="hidden md:flex">
            {links.map(({id, link})=>(
               <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500
               hover:scale-105 duration-200"><Link to={link} smooth duration ={500}>{link}</Link></li>

            ))}
            
        </ul>

        {/*md-hidden means hide if the screen size is medium*/}
        <div onClick={()=> setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
            {/*What this is doing is using the nav state. If it is clicked the nav state is cha
            to the opposite of what it was. It switches from the x icon to the bars icon for mobile*/}
            {nav ? <FaTimes size={30}/> : <FaBars size={30} />}
        </div>

       {/*This means show only is nav is true*/}
        {nav && (
             <ul className = "flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
             {links.map(({id, link})=>(
                <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">{link}</li>
 
             ))}
         </ul>
        )}
    </div>
  )
}

export default NavBar