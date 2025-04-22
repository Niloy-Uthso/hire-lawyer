 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';
import { Outlet, useNavigation, } from 'react-router';
 

const MainLayout = () => {
    const navigation = useNavigation();

    const isLoading = navigation.state === "loading";
  
    return (
        
        <>
             <div className='ml-28 mr-28'>
              

                <Navbar></Navbar>
                <Toaster position="top-right" reverseOrder={false} />
                {isLoading ? <p className='font-extrabold text-9xl text-black'>Loading.......</p> : <Outlet />}
                 
                
            </div> 

            <Footer></Footer>      
        </>
               
             
         
    );
};

export default MainLayout;