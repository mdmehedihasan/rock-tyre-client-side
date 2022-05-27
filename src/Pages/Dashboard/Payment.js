import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1q7DHIBoCqtdS9xhpjgIX9993kbu6PGGFOtKxbV5kcVT6VDiPtgfm3MyNpgkaF6PnDavwbM03ko0yhkGnxbqjA00efMb85XM');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`;
    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className='text-success text-2xl font-bold'>Hello: {order.userName}</p>
                    <h2 class="card-title">Please Pay for : {order.productName}</h2>
                    <p>Please pay: ${order.totalPrice}</p>
                </div>
            </div>


            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;