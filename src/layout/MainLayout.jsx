import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        
        <>
             <div className='ml-28 mr-28'>
                <Navbar></Navbar>
                <Toaster position="top-right" reverseOrder={false} />
                <Outlet></Outlet>
                 
                
            </div> 

            <Footer></Footer>      
        </>
               
             
         
    );
};

export default MainLayout;