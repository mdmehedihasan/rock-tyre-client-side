import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

const AddProduct = () => {

    const notify = () => toast("Wow! Your product has been added");

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }
    return (
        <div className='bg-slate-300 px-40'>
            <h2 className='font-bold uppercase text-center text-2xl text-black py-3'>Add Products</h2>
            <div className='bg-black w-100 mb-3' style={{ height: '1px' }}></div>
            <div className='w-50 flex flex-col items-center justify-center  py-9'>


                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    {/* name field */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Product Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>


                    {/* description field */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Product Description"
                            className="input input-bordered w-full max-w-xs"
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: 'Description is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                        </label>
                    </div>

                    {/* minimum quantity field */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Minimum Order Quantity</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Minimum Quantiy"
                            className="input input-bordered w-full max-w-xs"
                            {...register("minimum", {
                                required: {
                                    value: true,
                                    message: 'Minimum quantity is Required'
                                },
                                quantity: {
                                    value: / [1-100]? /,
                                    message: 'Provide minimum quantity'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.minimum?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimum.message}</span>}
                            {errors.minimum?.type === 'quantity' && <span className="label-text-alt text-red-500">{errors.minimum.message}</span>}
                        </label>
                    </div>

                    {/* available quantity field */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Available Order Quantity</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Available Order Quantiy"
                            className="input input-bordered w-full max-w-xs"
                            {...register("available", {
                                required: {
                                    value: true,
                                    message: 'Minimum quantity is Required'
                                },

                            })}
                        />
                        <label className="label">
                            {errors.available?.type === 'required' && <span className="label-text-alt text-red-500">{errors.available.message}</span>}

                        </label>
                    </div>

                    {/* price per item */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price Per Product</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Product Price"
                            className="input input-bordered w-full max-w-xs"
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: 'Price is Required'
                                },

                            })}
                        />
                        <label className="label">
                            {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}

                        </label>
                    </div>

                    {/* image per item */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Image Link</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Image Per Product"
                            className="input input-bordered w-full max-w-xs"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Image link is Required'
                                },

                            })}
                        />
                        <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}

                        </label>
                    </div>



                    <input className='mb-2 p-2 border-2 border-black rounded-lg cursor-pointer' onClick={notify} type="submit" value="Add Product" />
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default AddProduct;