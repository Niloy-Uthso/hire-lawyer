import React from 'react';
import { useLoaderData } from 'react-router';
import AwesomeComponent from '../utils/Loader';

const Blogs = () => {
    const blogs=useLoaderData()
    console.log(blogs)
    return (
        <div className='min-h-[80vh] flex flex-col justify-around items-center mt-4 gap-4'>
            <AwesomeComponent></AwesomeComponent>
               <h1 className='font-extrabold text-3xl '>Blogs</h1>
               <p className='font-light text-sm'>Lets explore some basic concept that will make you a good developer</p>
             <div className='flex flex-col gap-3'>
                   
                   {
                    blogs.map(blog=>(
                        <div className='border h-[20%] p-2 flex flex-col gap-2 bg-yellow-100 rounded-lg'>
                                <h1 className='text-xl font-semibold'>{blog.question}</h1>
                                <p className='font-light text-sm'>{blog.answer}</p>
                        </div>
                    ))
                   
                   }

             </div>

        </div>
    );
};

export default Blogs;