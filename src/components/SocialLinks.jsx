import React from 'react';
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const SocialLinks = ({name}) => {

    const links = [
        {id: 1,
        child: (
            <><FaInstagram size={30}/></>
        ),
        href:"https://www.instagram.com/msusigmapi/?hl=en"
        },
        {id: 2,
            child: (
                <><HiOutlineMail size={30}/></>
            ),
            href:"mailto:kwonsun7@msu.edu"
        }
    ]
  return (
    <div className="flex flex-row justify-end bg-black" name={name}>
            {links.map((link)=>( <li key={link.id} className="flex justify-start items-center w-16 h-32 px-4">
                <a href={link.href} className='flex justify-between items-center w-full text-white' download={link.download} target='_blank' rel="noreferrer">
                    {link.child}
                </a>
            </li>))}
    </div>
  )
}

export default SocialLinks