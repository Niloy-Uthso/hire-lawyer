import React from 'react';
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
                <a href="">facebook</a>
                <a href="">ex</a>
                <a href="">linkdin</a>
                <a href="">youtube</a>
            </div>
        </div>
    );
};

export default Footer;