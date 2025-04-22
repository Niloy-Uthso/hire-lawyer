import { useEffect, useState } from "react";
import Card from "../components/Card";
import { getBookings, removeBookings } from "../utils";
import Empty from "../utils/Empty";
import Footer from "../components/Footer";
import Charts from "../utils/Charts";
import AwesomeComponent from "../utils/Loader";


  

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

        
       <div className="min-h-[80vh] flex flex-col gap-5 mt-4 items-center ">
              <AwesomeComponent></AwesomeComponent>
        <Charts displayCards={displayCards}></Charts>
         
        <h1 className="font-extrabold text-xl mr-6 md:mr-0 md:text-3xl">My Today Appointments</h1>
        <p className="font-normal  text-sm">Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
        <div className='grid grid-cols-1 gap-3 w-full '>
        {
               displayCards.map(lawyer=>(
             
            //  <Card lawyer={lawyer}></Card>
            <div className="rounded-xl h-32 flex flex-col justify-around shadow-[0_0_0_1px_rgba(15,15,15,0.15)]  md:p-1 p-2   ">
                 <div className="flex justify-between items-center">
                   <div> 
                    <p className="font-bold text-base">{lawyer.name}</p>
                   <p className="font-medium text-base">{lawyer.expertise}</p>
                   </div>
                   <p className="font-medium text-base">Appointment fee:{lawyer.fee}</p>
                 </div>
                   
                 <button className="border w-full rounded-xl border-red-500 text-red-600" onClick={()=>handleDelete(lawyer.id)}>Cancel appoinment</button>
            </div>
         ))
        }
             </div>
       </div>
    );
};

export default Booked;