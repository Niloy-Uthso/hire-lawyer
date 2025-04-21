import React from 'react';

const Banner = () => {
    return (
        <div  className='h-[66vh] bg-contain mt-5 rounded-2xl  bg-center flex flex-col justify-center items-center' style={{
            backgroundImage: "url('/banner-img-1.png')",
          }}>
           <div className='flex flex-col items-center justify-center gap-5'>
           <h1 className='font-extrabold   text-white text-4xl'>It avoids subjective claims or <br /> exaggeration that might raise red <br /> flags legally</h1>
           <p className='font-medium text-sm text-white'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
           </div>
        </div>
    );
};

export default Banner;