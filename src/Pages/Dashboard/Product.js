import React from 'react';

const Product = ({ product }) => {
    const { name, description, image, available, minimum, price } = product;
    return (
        <div className='px-6'>
            <div className=" p-4 card lg:max-w-lg bg-slate-100 shadow-xl ">
                <img className='my-3 border border rounded' src={image} alt="" />
                <p className='text-xl text-amber-500 text-center '>{name}</p>
                <p className='text-justify'>{description}</p>
                <p className='text-xl font-bold text-center'>Availebale:{available} pcs</p>
                <p className='text-center'>Minimum Order QTY:{minimum} pcs</p>
                <p className='text-center'>Price Per Product:{price} Taka</p>
                <div className="card-body items-center text-center">

                    <button className='btn btn-success'>Purchase Now</button>

                </div>
            </div>
        </div>
    );
};

export default Product;