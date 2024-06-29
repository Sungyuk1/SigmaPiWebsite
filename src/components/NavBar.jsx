import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const navigate = useNavigate();

    const links = [
        { id: 1, link: 'home' },
        { id: 2, link: 'about' },
        { id: 3, link: 'House' },
        { id: 4, link: 'Brotherhood' },
        { id: 5, link: 'Philanthropy' },
        { id: 6, link: 'Social' },
        { id: 8, link: 'Rush' },
        { id: 9, link: 'Links' },
        { id: 10, link: 'Golf Outing', redirect: true }
    ];

    const handleRedirect = (link) => {
        if (link.redirect) {
            navigate('/golf-outing');
        }
    };

    return (
        <div className="flex justify-between items-center w-full h-20 text-white px-4 bg-black fixed">
            <div>
                <h1 className="text-4xl ml-2 text-gray-500">Sigma Pi MSU</h1>
            </div>
            <ul className="hidden md:flex">
                {links.map(({ id, link, redirect }) => (
                    <li key={id} className="px-2 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
                        {redirect ? (
                            <a onClick={() => handleRedirect({ redirect })}>{link}</a>
                        ) : (
                            <Link to={link} smooth duration={500}>{link}</Link>
                        )}
                    </li>
                ))}
            </ul>

            <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-40 text-gray-500 md:hidden">
                {nav ? <FaTimes size={30}/> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center w-screen-50 absolute top-0 right-0 left-0 h-screen-50 bg-black text-gray-500 z-30 outline outline-4">
                    {links.map(({ id, link, redirect }) => (
                        <li key={id} className="px-4 cursor-pointer capitalize py-3 text-2xl z-11">
                            {redirect ? (
                                <a onClick={() => handleRedirect({ redirect })}>{link}</a>
                            ) : (
                                <Link to={link} smooth duration={500}>{link}</Link>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NavBar;
