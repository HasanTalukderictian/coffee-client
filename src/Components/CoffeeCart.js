import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCart = ({ coffee, coffees, setCoffees }) => {

    const {_id, coffeeName, chefName, supplier, taste, category, details, photo } = coffee;
    const handleDelete =_id => {
          console.log(_id);
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            
              
            fetch(`http://localhost:5000/coffee/${_id}`, {
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0 ){
                    Swal.fire(
                            'Deleted!',
                            'Your Coffee has been deleted.',
                            'success'
                          )

                          const remaing = coffees.filter(cof => cof._id !== _id)
                          setCoffees(remaing);
                }
            })

            }
          })
    }
    return (

        <div className="card bg-base-200 p-3 ml-2 my-4">
            <div className='lg:flex justify-between mg:flex sm:flex'>
                <div className='lg:flex justify-between mg:flex sm:grid'>
                    <div className='mx-auto my-3 '>
                        <img className=' rounded-md w-[250px] px-4  my-4' src={photo} alt="Shoes" />
                    </div>
                    <div className="card my-6 mx-4 ">
                        <h2 className="card-title">Name:{coffeeName}</h2>
                        <h2 className="card-title">Chef-Name:{chefName}</h2>
                        <p >Supplier: {supplier}</p>
                        <p >Taste: {taste}</p>
                        <p >Category: {category}</p>
                        <p >Details: {details}</p>

                    </div>
                    <div className='lg:flex justify-between mg:flex sm:grid'>
                    <div className="card-actions justify-end my-3 ml-20 ">
                        <div className="btn-group btn-group-vertical space-y-4">
                            <button className="btn btn-active">View</button>
                            <Link to={`updateCoffee/${_id}`}><button className="btn btn-success">Update</button></Link>
                            <button onClick={()=> handleDelete(_id)} className="btn btn-warning">Delete</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CoffeeCart;