import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { IoLogoYoutube } from 'react-icons/io5';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 h-56 bg-black mt-6 border'>
            <div className='flex justify-around items-center'>
                <img src="/logo-footer.png" alt="" />
                <p className='font-extrabold text-xl text-white'>Law.BD</p>
            </div>
            <div>
            <ul className="menu menu-horizontal px-1">
      <li>
           <NavLink
                     className={({ isActive }) =>
                       isActive ? 'text-indigo-600' : 'text-white'
                     }
                     to='/'
                   >
                     Home
                   </NavLink>
           </li>
           <li>
              
           <NavLink  className={({ isActive }) =>
                       isActive ? 'text-indigo-600' : 'text-white'
                     }
           to={'/booked'}>My-Bookings</NavLink>
           </li>
           <li><NavLink to={'/blogs'} className={({ isActive }) =>
                       isActive ? 'text-indigo-600' : 'text-white'
                     } >Blogs</NavLink></li>
           <li> <NavLink className={'text-white'}>Contact Us</NavLink></li>
    </ul>
            </div>
            <div className='flex gap-2'>
                <a className='bg-blue-700 rounded-full flex items-center w-6 h-6 justify-center' href="">
                <FaFacebook />

                </a>
                <a className='bg-blue-700 rounded-full flex items-center h-6 w-6 justify-center' href=""><FaSquareXTwitter />
                </a>
                <a className='bg-blue-700 rounded-full flex items-center h-6 w-6 justify-center' href=""><FaLinkedin />
                </a>
                <a className='bg-blue-700 rounded-full flex items-center w-6 h-6 justify-center' href=""><IoLogoYoutube /></a>
            </div>
        </div>
    );
};

export default Footer;