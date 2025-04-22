 
import Banner from '../components/Banner';
import { useLoaderData,} from 'react-router';

import Container from '../components/Container';
import Secondcontainer from '../components/Secondcontainer';
import { ClipLoader } from 'react-spinners';
import AwesomeComponent from '../utils/Loader';
 


const Middle = () => {
    
    const info=useLoaderData()
   
    return (
        <div>
            
           <AwesomeComponent></AwesomeComponent>
      
             <Banner></Banner> 
             <Container info={info}></Container>  

             <Secondcontainer></Secondcontainer>
            
                
        </div>
    );
};

export default Middle;