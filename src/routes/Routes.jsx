import { createBrowserRouter } from "react-router";
 
import MainLayout from "../layout/MainLayout";


  const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement:<p>error</p>,
    children:[
        {
            path: "/",
            element:<p>present</p>
        },


        {
            path:'/favorite',
            element:<div>djfnkjf</div>
        }
    ]
  },
]);

export default router