import React, { useEffect, useState } from 'react';
import Details from './Details';

const Booked = ({lawyer}) => {

    const [booKed,setBooked]=useState([])
     
    useEffect(() => {
        let c=true
        
        if (c) {
            console.log('klfj')
          setBooked(prev => [...prev, lawyer]);
          c=false
        }
      }, [lawyer]); 
     
    console.log(booKed)
     
    return (
        <div>
            <h1>My Today Appointments</h1>
            <p>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
       <div>
        {

           <div>

           </div>

        }
       </div>
        </div>
    );
};

export default Booked;