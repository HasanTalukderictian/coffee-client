import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const coffeeName = form.coffeeName.value;
        const chefName = form.chefName.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { coffeeName, chefName, supplier, taste, category, details, photo };
        console.log(newCoffee);

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    form.reset();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Coffee Item  Added to Server',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })



    }

    return (
        <div className='my-8 mx-10'>

            <div className='my-12 mx-5 px-4'>
                <Link to='/'><button className="btn btn-warning">Back to Home</button></Link>
            </div>

            <div className='mx-4 my-5 bg-[#F4F3F0]'>

                <h3 className='text-3xl font-semibold text-black text-center my-6 py-4 '>Add a Coffee</h3>
                <p className='my-3 mx-2 text-center'>It is a long established fact that a reader will be
                    <br /> distraceted by the readable content of a page when looking at its layout.
                    <br />
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, <br />
                    as opposed to using Content here.</p>

                <form onSubmit={handleAddCoffee} className='my-4 mx-4'>
                    <div className='mx-8 my-3 px-5 py-5'>
                        <div className='flex my-4 space-x-4'>
                            <div className="form-control w-full md:w-1/2 ">
                                <label className="label">
                                    <span className="label-text">Name</span>

                                </label>
                                <input type="text" placeholder="Coffee Name" name='coffeeName' className="input input-bordered w-full " />

                            </div>
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Chef</span>

                                </label>
                                <input type="text" placeholder="Enter Coffee Chef" name='chefName' className="input input-bordered w-full" />

                            </div>
                        </div>
                        <div className='flex my-4 space-x-4'>
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Supplier</span>

                                </label>
                                <input type="text" placeholder="Enter Coffee Supplier" name='supplier' className="input input-bordered w-full" />

                            </div>
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Taste</span>

                                </label>
                                <input type="text" placeholder="Enter Coffee Taste" name='taste' className="input input-bordered w-full " />

                            </div>
                        </div>
                        <div className='flex my-4 space-x-4'>
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Category</span>

                                </label>
                                <input type="text" placeholder="Enter Coffee Category" name='category' className="input input-bordered w-full " />

                            </div>
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Details</span>

                                </label>
                                <input type="text" placeholder="Enter Coffee Details" name='details' className="input input-bordered w-full" />

                            </div>
                        </div>
                        <div className="form-control w-full  ">
                            <label className="label">
                                <span className="label-text">Photo URL</span>

                            </label>
                            <input type="text" placeholder="Enter Photo URL" name='photo' className="input input-bordered w-full " />

                        </div>
                        <input type="submit" value="Add Coffee" className="btn btn-block btn-warning text-center my-4 px-4" />

                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;