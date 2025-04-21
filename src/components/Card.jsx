import React from 'react';
import Details from '../Pages/Details';
import { Link } from 'react-router';

const Card = ({lawyer}) => {
    const {name,experience,expertise,licenceNo,img}=lawyer||{}
    
    
     

    return (
        <div className='flex justify-around items-center border'>
            <div>
                <img className='w-20 h-24' src={img} alt="" />
            </div>
            <div>
                <div className='flex gap-2'>
                    <p>available</p>
                    <p>{experience}</p>
                </div>
                <p className='font-extrabold text-xl text-black'>{name}</p>
                <p className='font-medium text-sm'>{expertise}</p>
                <p className='font-medium text-sm'>{licenceNo}</p>
                <Link to={`/favorite`} state={{lawyer}}>
                <button>View-Details</button>
                </Link>
               
            </div>
        </div>
    );
};

export default Card;