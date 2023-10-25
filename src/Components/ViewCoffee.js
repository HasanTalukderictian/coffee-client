import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const ViewCoffee = () => {
   
    const coffee = useLoaderData();
    console.log(coffee);
    const { coffeeName, chefName, supplier, taste, category, details, photo } = coffee;


    return (
        <div className='lg:flex md:flex sm:grid my-20 mx-30 p-4 bg-base-100 shadow-xl '>
            <div>
                <Link to='/'><button className="btn btn-sm btn-warning">Back</button></Link>
            </div>
           <div className=' card my-4 mx-4 p-3 bg-base-100 shadow-2xl '> 
              <img className='w-[450px] rounded' src={photo} alt="" />
           </div>
           <div className=' card my-6 mx-4 px-4'>
               <h2 className='text-3xl'>Name: {coffeeName}</h2>
               <p>ChefName: {chefName}</p>
               <p>Supplier: {supplier}</p>
               <p>Taste: {taste}</p>
               <p>Category: {category}</p>
               <p>Details: {details}</p>
           </div>
        </div>
    );
};

export default ViewCoffee;