import React, { Suspense, useEffect, useState } from 'react';
import Card from './Card';
import AwesomeComponent from '../utils/Loader';
 
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
        <div className='mt-14  flex flex-col justify-between  gap-4 mb-5'>
            
           <div className=' flex flex-col justify-between items-center'>
           <h1 className='font-extrabold text-3xl text-black'>Our Best Lawyers</h1>
            <p className='font-normal text-sm'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine <br /> checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
       
           </div>
       <div className='grid grid-cols-2 gap-3 mt-4'>
               
              {
                      displayCards.map(lawyer=>(
                    
                    <Card lawyer={lawyer}></Card>
                ))
               }
               
       </div>
       <button className='mx-auto border rounded-2xl p-1 w-32 font-bold text-sm text-white  bg-green-500' onClick={()=>setshowAll(prev=>!prev)}>{showAll?'Show less':'Show all'}</button>
        </div>
    );
};

export default Container;