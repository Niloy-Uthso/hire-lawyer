import React from 'react';

const Secondcontainer = () => {
    return (
        <div className='flex border flex-col justify-between items-center'>
            <h1 className='font-extrabold text-3xl text-black'>We Provide Best Law Services</h1>
            <p className='font-normal text-sm'>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>

            <div className='flex border w-full justify-around items-center'>
                <div className='flex flex-col w-[20%]  border gap-2 justify-around items-center'>

                    <img src="/success-doctor.png" alt="" />
                    <p>199+</p>
                    <p>Total lawyer</p>
                </div>
                <div className='flex flex-col w-[20%]  border gap-2 justify-around items-center'>
                <img src="/success-doctor.png" alt="" />
                    <p>199+</p>
                    <p>Total lawyer</p>
                </div>
                <div className='flex flex-col w-[20%]  gap-2 border justify-around items-center'>
                <img src="/success-doctor.png" alt="" />
                    <p>199+</p>
                    <p>Total lawyer</p>
                </div>
                <div className='flex flex-col border w-[20%] gap-2 justify-around items-center'>
                <img src="/success-doctor.png" alt="" />
                    <p>199+</p>
                    <p>Total lawyer</p>
                </div>
            </div>
        </div>
    );
};

export default Secondcontainer;