import React from 'react';
import { Link } from 'react-router';

const Nolawer = () => {
    return (
        <div className='flex min-h-[80vh] flex-col items-center justify-center gap-5'>
            <h1 className='font-extrabold text-4xl '>No lawyer found </h1>
            <p className='font-light text-sm'>No lawyer found with this license no</p>
            <p>Bd hdgjfg</p>
            <Link to={'/'}>
                <button className='text-white font-semibold bg-green-700 p-1 rounded-sm'>View all lawyer</button>
          
                </Link>

        </div>
    );
};

export default Nolawer;