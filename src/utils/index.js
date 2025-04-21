export const getBookings=()=>{
    const bookings=localStorage.getItem('booked')
    if(bookings) return JSON.parse(bookings)

        return []
}

export const addBook=lawer=>{

const bookings=getBookings()
// console.log(bookings)
const isExist=bookings.find(l=>l.id===lawer.id)
 
if(isExist) return console.log('ache')
bookings.push(lawer)
localStorage.setItem('booked',JSON.stringify(bookings))
}

export const removeBookings=id=>{
    const bookings=getBookings()
 const remaingBooking=bookings.filter(law=>law.id!==id)
 localStorage.setItem('booked',JSON.stringify(remaingBooking))

}