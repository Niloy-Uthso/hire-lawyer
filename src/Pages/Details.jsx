import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import Booked from './Booked';
import { addBook } from '../utils';
// import { useLoaderData } from 'react-router';

const Details = () => {

    const location = useLocation();
  const { lawyer } = location.state || {};
 const navigate = useNavigate();
    // const details=useLoaderData()
    const {name,experience,expertise,licenceNo,img,fee,availability,details}=lawyer||{}

    console.log(details)
    const handleBooked=()=>{
        addBook(lawyer)
        navigate('/booked');
        
    }
    return (
        <div>
            <div className='flex rounded-xl flex-col items-center bg-[rgba(15,15,15,0.15)] justify-around mt-6 shadow-[0_0_0_1px_rgba(15,15,15,0.15)] h-36'>
                <h1 className='font-extrabold text-xl md:text-2xl text-black'>Lawyer’s Profile Details</h1>
                <p className='font-medium text-[10px] p-1  md:text-sm'>
               {details}
                </p>
                </div>  

                <div className='flex rounded-xl gap-2 items-center pl-2 mt-5 h-52 shadow-[0_0_0_1px_rgba(15,15,15,0.15)]'>
 
                     <img className='md:w-32  md:h-40 w-24 h-32 rounded-2xl' src={img} alt="" />
                     <div className='flex flex-col gap-1'>
                        <p className='font-medium text-xs  text-blue-500 p-0.5 pl-4  border rounded-full bg-blue-50 w-24'>{experience}</p>
                        <p className='font-extrabold text-xl md:text-2xl text-black'>{name}</p>
                        <div className='flex justify-around md:justify-between'><p className='font-medium common-font text-sm'>{expertise}</p>
                        <p className='font-medium common-font text-sm'>License no:{licenceNo}</p>
                        </div>
                         <p className='font-bold text-sm'>Availability: <span className='text-yellow-200'>{availability}</span> </p>
                         <p className='font-bold text-sm'>Consultation fee: <span className='text-green-600'>Taka {fee}</span></p>
                     </div>
                    
                </div>

                <div className='flex rounded-xl flex-col  gap-4 items-center mt-3 h-52 shadow-[0_0_0_1px_rgba(15,15,15,0.15)]'>
 
       <h1 className='font-bold text-base'>Book an Appointment</h1>
       <div className='flex justify-between w-full  pl-1 pr-1'>
          <p className='font-bold text-sm '> 
          Availability
            </p>
          <p className='font-medium text-xs text-green-500 p-0.5 border rounded-full bg-green-50'>
          Lawer available today
          </p>
          </div>
          <p className='font-medium text-[9px] md:text-sm text-amber-500 bg-amber-100 rounded-xl m-1 md:m-0 p-1'>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
             
              {/* <Link to={`/booked`} state={{lawyer}}> */}
              <button onClick={handleBooked} className='border w-[80%] rounded-xl text-white font-bold hover:bg-green-700 text-sm md:text-base bg-green-500'>Book Appoinment Now</button>
             
                {/* </Link> */}
                </div>
        </div>
    );
};

export default Details;