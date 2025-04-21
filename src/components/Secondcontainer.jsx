import React from 'react';

const Secondcontainer = () => {
    return (
        <div className='flex  flex-col gap-4 justify-between items-center p-3'>
            <h1 className='font-extrabold text-3xl text-black'>We Provide Best Law Services</h1>
            <p className='font-normal text-sm'>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>

            <div className='flex  w-full justify-around items-center'>
                <div className='flex flex-col w-[20%] rounded-xl gap-2 justify-around items-start  bg-[rgba(15,15,15,0.15)] p-2'>

                    <img src="/success-doctor.png" alt="" />
                    <p>199+</p>
                    <p>Total lawyer</p>
                </div>
                <div className='flex flex-col w-[20%]  rounded-xl gap-2 justify-around items-start bg-[rgba(15,15,15,0.15)] p-2'>
                <img src="/success-doctor.png" alt="" />
                    <p>199+</p>
                    <p>Total lawyer</p>
                </div>
                <div className='flex flex-col w-[20%]  gap-2 rounded-xl justify-around  items-start bg-[rgba(15,15,15,0.15)] p-2'>
                <img src="/success-doctor.png" alt="" />
                    <p>199+</p>
                    <p>Total lawyer</p>
                </div>
                <div className='flex flex-col  w-[20%] gap-2 justify-around items-start bg-[rgba(15,15,15,0.15)] p-2 rounded-xl'>
                <img src="/success-doctor.png" alt="" />
                    <p>199+</p>
                    <p>Total lawyer</p>
                </div>
            </div>
        </div>
    );
};

export default Secondcontainer;