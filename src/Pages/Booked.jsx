import { useEffect, useState } from "react";
import Card from "../components/Card";
import { getBookings, removeBookings } from "../utils";
import Empty from "../utils/Empty";

  

const Booked = () => {
    
     
     const [displayCards, setdisplayCards]=useState([])

     useEffect(()=>{
    const savedLawer=getBookings()
    setdisplayCards(savedLawer)
     },[])
     
     const handleDelete=id=>{
        removeBookings(id)
        setdisplayCards(getBookings())
     }

     if(displayCards.length<1)return <Empty></Empty>
    return (
        <div className='grid grid-cols-1 gap-3 '>
        {
               displayCards.map(lawyer=>(
             
            //  <Card lawyer={lawyer}></Card>
            <div className="border">
                 <div className="flex justify-between items center">
                   <div> <p>{lawyer.name}</p>
                   <p>{lawyer.expertise}</p></div>
                   <p>Appoinment fee:{lawyer.fee}</p>
                 </div>
                   
                 <button onClick={()=>handleDelete(lawyer.id)}>Cancel appoinment</button>
            </div>
         ))
        }
             </div>
    );
};

export default Booked;