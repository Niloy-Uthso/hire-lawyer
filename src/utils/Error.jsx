import React from 'react';
import { Link } from 'react-router';
import Navbar from '../components/Navbar';
import AwesomeComponent from './Loader';

const Error = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <AwesomeComponent></AwesomeComponent>
            <div className='flex mt-3 gap-4 flex-col items-center justify-between '>
                <img className='' src="/flat-design-404-error-page-260nw-2489201787.webp" alt="" />
                <h1 className='font-extrabold text-5xl text-pink-700'>404-Page not found</h1>
                <p>Oops!! the page you are looking for doesn't exist</p>
                <Link to={'/'}>
                <button className='text-white font-semibold bg-green-700 p-1 rounded-sm'>Go back Home</button>
          
                </Link>
            </div>
        </div>
    );
};

export default Error;