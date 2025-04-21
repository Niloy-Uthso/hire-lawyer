import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        

               <div className='ml-28 mr-28'>
                <Navbar></Navbar>
                <Outlet></Outlet>
                 <Footer></Footer>
            </div>
             
         
    );
};

export default MainLayout;