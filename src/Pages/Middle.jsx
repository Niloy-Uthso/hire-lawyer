import React from 'react';
import Banner from '../components/Banner';
import { useLoaderData } from 'react-router';
import Container from '../components/Container';
import Secondcontainer from '../components/Secondcontainer';
 

const Middle = () => {
    const info=useLoaderData()
   
    return (
        <div>
             <Banner></Banner> 
             <Container info={info}></Container>  

             <Secondcontainer></Secondcontainer>
            
                
        </div>
    );
};

export default Middle;