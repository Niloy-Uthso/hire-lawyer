import React from 'react';

const Footer = () => {
    return (
        <div className='flex flex-col justify-around items-center gap-5'>
            <div className='flex justify-around items-center'>
                <img src="/logo-footer.png" alt="" />
                <p>Law.BD</p>
            </div>
            <div>
            <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li>
         
      <a>My-Bookings</a>
      </li>
      <li><a>Blogs</a></li>
      <li><a>Contact Us</a></li>
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