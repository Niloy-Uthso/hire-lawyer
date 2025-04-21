import { createBrowserRouter } from "react-router";
 
import MainLayout from "../layout/MainLayout";
import Middle from "../Pages/Middle";
import Details from "../Pages/Details";
import Booked from "../Pages/Booked";
import { Component } from "react";
import Blogs from "../Pages/Blogs";


  const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement:<p>error</p>,
    children:[
        {
            path: "/",
            Component:Middle,
            loader:()=> fetch('info.json')
        },


        {
            path:'/favorite',
             Component:Details,
            // loader:()=> fetch('../info.json')
        },
        {
            path:'/booked',
            Component:Booked
        },
       {
        path:'/blogs',
        Component:Blogs
       }
    ]
  },
]);

export default router