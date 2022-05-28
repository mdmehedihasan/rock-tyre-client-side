import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const notify = () => toast.success(`${product.name} - is added to your order page`);
    const { productId } = useParams();
    //for user name and email form auth
    const [user, loading, error] = useAuthState(auth);

    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `https://protected-dawn-69909.herokuapp.com/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    const handlePurchase = event => {
        event.preventDefault();
        const orderQuantity = event.target.orderQuantity.value;
        const perPrice = product.price;
        const totalPrice = perPrice * orderQuantity;

        const order = {
            purchaseId: product._id,
            productName: product.name,
            perPrice,
            availableQuantity: product.available,
            totalPrice,
            orderQuantity,
            userName: user.displayName,
            userEmail: user.email,
            phone: event.target.phone.value,

        }
        fetch('https://protected-dawn-69909.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    toast(`Order is confirmed for the Product: {product.name}`)
                }
            })


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



                </div>
            </div>
            <div >
                <h2 className='text-center text-2xl font-bold text-amber-500 py-4'>Purchase Details</h2>
                <form onSubmit={handlePurchase} className='grid grid-cols-1 gap-2 justify-items-center py-4'>
                    <input type="text" disabled value={product.name} placeholder="Type here" className="input input-bordered w-full max-w-lg" />
                    <input type="text" name="name" disabled value={user?.displayName} className="input input-bordered w-full max-w-lg" />
                    <input type="email" name="email" disabled value={user?.email} className="input input-bordered w-full max-w-lg" />
                    <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-lg" />
                    <input type="number" name="orderQuantity" placeholder="Order Quantity" className="input input-bordered w-full max-w-lg" />
                    <textarea placeholder='Your Address' className="input input-bordered w-full max-w-lg" name="address" id="" cols="30" rows="10"></textarea>
                    <input onClick={notify} type="submit" value="Confirm Purchase" className="btn bg-amber-400 my-4 w-full max-w-xs" />

                </form>
            </div>
        </div>


    );
};

export default Purchase;