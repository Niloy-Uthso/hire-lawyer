import React from 'react';
import CountUp from 'react-countup';

const Secondcontainer = () => {
    return (
        <div  className='flex w-80 md:w-full  flex-col gap-4 justify-between items-center p-3'>
            <h1 className='font-extrabold text-xl md:text-3xl text-black'>We Provide Best Law Services</h1>
            <p className='font-normal text-sm'>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>

            <div className='flex w-full justify-around items-center'>
                <div className='flex flex-col w-[24%] md:w-[20%] h-40   rounded-xl gap-2 justify-around items-start  bg-[rgba(15,15,15,0.15)] p-2'>

                    <img src="/success-doctor.png" alt="" />
                    <p className='font-bold text-xl'> <CountUp start={0} end={199} duration={10}></CountUp>+</p>
                    <p className='md:text-base text-sm'>Total lawyer</p>
                </div>
                <div className='flex flex-col w-[24%] md:w-[20%] h-40  rounded-xl gap-2 justify-around items-start bg-[rgba(15,15,15,0.15)] p-2'>
                <img src="/success-review.png" alt="" />
                    <p className='font-bold text-xl'><CountUp start={0} end={467} duration={10}></CountUp>+</p>
                    <p className='md:text-base text-sm'>Total Review</p>
                </div>
                <div className='flex flex-col w-[24%] md:w-[20%] h-40  gap-2 rounded-xl justify-around  items-start bg-[rgba(15,15,15,0.15)] p-2'>
                <img src="/success-patients.png" alt="" />
                    <p className='font-bold text-xl'><CountUp start={0} end={1900} duration={10}></CountUp>+</p>
                    <p className='md:text-base text-sm'>Cases Initiated</p>
                </div>
                <div className='flex flex-col  w-[24%] md:w-[20%] h-40 gap-2 justify-around items-start bg-[rgba(15,15,15,0.15)] p-2 rounded-xl'>
                <img src="/success-staffs.png" alt="" />
                    <p className='font-bold text-xl'><CountUp start={0} end={300} duration={10}></CountUp>+</p>
                    <p className='md:text-base text-sm'>Total Stuffs</p>
                </div>
            </div>
        </div>
    );
};

export default Secondcontainer;