import React from 'react';
import { Link } from 'react-router';
import AwesomeComponent from './Loader';

const Empty = () => {
    return (
        <div className='min-h-[80vh]  flex flex-col items-center justify-around'>
            <AwesomeComponent></AwesomeComponent>
             <div className=' flex flex-col justify-between h-44 items-center'>
                <h1 className='font-extrabold text-5xl '>No Appointments Yet </h1>

                <Link to={`/`} >
                <button className='bg-yellow-300 rounded-xl p-1 text-blue-900'>Return Home</button>
                </Link>
               
             </div>
        </div>
    );
};

export default Empty;