import { createBrowserRouter } from "react-router";
 
import MainLayout from "../layout/MainLayout";
import Middle from "../Pages/Middle";
import Details from "../Pages/Details";
import Booked from "../Pages/Booked";
import { Component } from "react";
import Blogs from "../Pages/Blogs";
import Error from "../utils/Error";
import Nolawer from "../Pages/Nolawer";
 


  const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement:<Error></Error>,
    children:[
        {
            path: "/",
            Component:Middle,
            loader:()=> fetch('../info.json')
        },


        {
            path:'/favorite',
             Component:Details,
            
        },
        {
            path:'/booked',
            Component:Booked
        },
       {
        path:'/blogs',
        Component:Blogs,
        loader:()=> fetch('blogs.json')
       },
       {
        path:'/favorite/:kj',
        Component:Nolawer,
       }
    ]
  },
]);

export default router