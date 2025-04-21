import React from 'react';
import { Link, useLocation } from 'react-router';
import Booked from './Booked';
import { addBook } from '../utils';
// import { useLoaderData } from 'react-router';

const Details = () => {

    const location = useLocation();
  const { lawyer } = location.state || {};
    // const details=useLoaderData()
    const {name,experience,expertise,licenceNo,img,fee,availability}=lawyer||{}
    // console.log(lawyer)
    const handleBooked=()=>{
        addBook(lawyer)
    }
    return (
        <div>
            <div className='flex flex-col items-center justify-around mt-6'>
                <h1>Lawyer’s Profile Details</h1>
                <p>
                Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis <br /> turpis imperdiet mattis donec dignissim volutpat.
                </p>
                </div>  

                <div className='flex gap-2 items-center p-3 mt-5 border'>
 
                     <img className='w-24 h-32' src={img} alt="" />
                     <div className='flex flex-col gap-1'>
                        <p>{experience}</p>
                        <p>{name}</p>
                        <div className='flex justify-between'><p>{expertise}</p>
                        <p>{licenceNo}</p>
                        </div>
                         <p>Availability:{availability}</p>
                         <p>Consultation fee:{fee}</p>
                     </div>
                    
                </div>

                <div className='flex flex-col gap-2 items-center mt-3 border'>
 
       <h1>Book an Appointment</h1>
       <div className='flex justify-between '>
          <p>
          Availability
            </p>
          <p>
          Availability
          </p>
          </div>
          <p>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
             
              {/* <Link to={`/booked`} state={{lawyer}}> */}
              <button onClick={handleBooked} className='border'>Book Appoinment Now</button>
             
                {/* </Link> */}
                </div>
        </div>
    );
};

export default Details;