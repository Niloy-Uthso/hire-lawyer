import React, { useEffect, useState } from 'react';
import Card from './Card';

const Container = ({info}) => {
     

    const [displayCards, setdisplayCards]=useState([])
    const [showAll,setshowAll]=useState(false)

    useEffect(()=>{

       if(showAll)
        setdisplayCards(info)

       else
       setdisplayCards(info.slice(0,6))
    },
    
    [info,showAll])
     
    
    return (
        <div className=''>
           <div className='border flex flex-col justify-between items-center'>
           <h1>Our Best Lawyers</h1>
            <p>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine <br /> checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
       
           </div>
       <div className='grid grid-cols-2 gap-3 '>
               {
                      displayCards.map(lawyer=>(
                    
                    <Card lawyer={lawyer}></Card>
                ))
               }
       </div>
       <button onClick={()=>setshowAll(prev=>!prev)}>{showAll?'show less':'show all'}</button>
        </div>
    );
};

export default Container;