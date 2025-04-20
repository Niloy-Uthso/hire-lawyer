import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const MainLayout = () => {
    return (
        <>
             <Navbar></Navbar>
            <Outlet></Outlet>
            <div>footer</div>
        </>
    );
};

export default MainLayout;