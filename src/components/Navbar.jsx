import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <li>
      <NavLink
                className={({ isActive }) =>
                  isActive ? 'text-indigo-600' : ''
                }
                to='/'
              >
                Home
              </NavLink>
      </li>
      <li>
         
      <NavLink  className={({ isActive }) =>
                  isActive ? 'text-indigo-600' : ''
                }
      to={'/booked'}>My-Bookings</NavLink>
      </li>
      <li><NavLink to={'/blogs'} className={({ isActive }) =>
                  isActive ? 'text-indigo-600' : ''
                } >Blogs</NavLink></li>
      <li> <NavLink
      to={'/error'} className={({ isActive }) =>
        isActive ? 'text-indigo-600' : ''
      }
      >Contact Us</NavLink></li>
      </ul>
    </div>
    <div className='flex'>
        <img className='h-9 w-7' src="/logo.png" alt="" />
    <a className="font-bold text-xl">Law.BD</a>
    </div>
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
      <NavLink
                className={({ isActive }) =>
                  isActive ? 'text-indigo-600' : ''
                }
                to='/'
              >
                Home
              </NavLink>
      </li>
      <li>
         
      <NavLink  className={({ isActive }) =>
                  isActive ? 'text-indigo-600' : ''
                }
      to={'/booked'}>My-Bookings</NavLink>
      </li>
      <li><NavLink to={'/blogs'} className={({ isActive }) =>
                  isActive ? 'text-indigo-600' : ''
                } >Blogs</NavLink></li>
      <li> <NavLink
      to={'/error'} className={({ isActive }) =>
        isActive ? 'text-indigo-600' : ''
      }
      >Contact Us</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn  rounded-2xl p-1 w-20 md:w-32 font-bold text-sm text-white  bg-green-500">Contact Now</a>
  </div>
</div>
    );
};

export default Navbar;
