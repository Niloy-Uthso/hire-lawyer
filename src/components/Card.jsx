import React from 'react';
import Details from '../Pages/Details';
import { Link } from 'react-router';

const Card = ({lawyer}) => {
    const {name,experience,expertise,licenceNo,img}=lawyer||{}
    
    
     

    return (
        <div className='flex justify-around items-center shadow-[0_0_0_1px_rgba(15,15,15,0.15)] rounded-sm'>
            <div>
                <img className='w-24 h-28 rounded-xl' src={img} alt="" />
            </div>
            <div className='p-2 flex flex-col gap-2 '>
                <div className='flex gap-2'>
                    <p className='font-medium text-xs text-green-500 p-0.5 border rounded-full bg-green-50'>available</p>
                    <p className='font-medium text-xs text-blue-500 p-0.5 border rounded-full bg-blue-50'>{experience}</p>
                </div>
                <p className='font-extrabold text-xl text-black'>{name}</p>
                <p className='font-medium text-sm'>{expertise}</p>
                <p className='font-medium text-sm'>{licenceNo}</p>
                <Link to={`/favorite`} state={{lawyer}}>
                <button className='font-bold text-[12px] border rounded-full w-full  text-blue-500 p-1'>View-Details</button>
                </Link>
               
            </div>
        </div>
    );
};

export default Card;