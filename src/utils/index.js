import toast from "react-hot-toast"
 
 
 


export const getBookings=()=>{
    const bookings=localStorage.getItem('booked')
    if(bookings) return JSON.parse(bookings)

        return []
}

export const addBook=lawer=>{
    
const bookings=getBookings()
 
const isExist=bookings.find(l=>l.id===lawer.id)

 
if(isExist)
{     
    toast.error('You have already booked this appointment!')

    return 
}
    
   
bookings.push(lawer)
localStorage.setItem('booked',JSON.stringify(bookings))


toast.success(`Appointment of ${lawer.name} booked successfully!`)
}

export const removeBookings=id=>{
    const bookings=getBookings()
 const remaingBooking=bookings.filter(law=>law.id!==id)
 localStorage.setItem('booked',JSON.stringify(remaingBooking))
 toast.success('Appointment Cancelled successfully!')

}