import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const { productId } = useParams();
    //for user name and email form auth
    const [user, loading, error] = useAuthState(auth);

    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    const handlePurchase = event => {
        event.preventDefault();
        const name = event.target.name.value;
        console.log(product._id, product.name);

    }

    return (
        <div>
            <div className='flex flex-col items-center justify-center my-10 px-40'>
                <img src={product.image} alt="" />
                <h3 className='text-2xl text-amber-500 pt-4'>{product.name}</h3>
                <h3 className='text-xl text-justify'>Product Name:{product.description}</h3>
                <h3 className='text-xl text-justify'>Available Quantity:{product.available}</h3>
                <h3 className='text-xl text-justify'>Minimum Order QTY:{product.minimum}</h3>
                <h3 className='text-xl text-justify pb-3'>Price:{product.price}</h3>
                <div>


                    <button className='btn border rounded-sm'>Confirm Purchase</button>
                </div>
            </div>
            <div >
                <h2 className='text-center text-2xl font-bold text-amber-500 py-4'>Purchase Details</h2>
                <form onSubmit={handlePurchase} className='grid grid-cols-1 gap-2 justify-items-center py-4'>
                    <input type="text" disabled value={product.name} placeholder="Type here" className="input input-bordered w-full max-w-lg" />
                    <input type="text" name="name" disabled value={user?.displayName} className="input input-bordered w-full max-w-lg" />
                    <input type="email" name="email" disabled value={user?.email} className="input input-bordered w-full max-w-lg" />
                    <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-lg" />
                    <input type="number" placeholder="Product Quantity" className="input input-bordered w-full max-w-lg" />
                    <textarea className="input input-bordered w-full max-w-lg" name="address" id="" cols="30" rows="10"> Your Address</textarea>
                    <input type="submit" value="Confirm Purchase" placeholder="Type here" className="btn btn-primary w-full max-w-xs" />

                </form>
            </div>
        </div>


    );
};

export default Purchase;