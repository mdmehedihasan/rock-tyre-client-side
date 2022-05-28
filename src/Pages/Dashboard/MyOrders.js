import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`https://protected-dawn-69909.herokuapp.com/order?userEmail=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setOrders(data)
                });
        }
    }, [user])

    return (
        <div>
            <h3>My Order:{orders.length}</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>S/L </th>
                            <th>User Name</th>
                            <th>Product Name</th>
                            <th>Total Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((o, index) => <tr key={o._id}>
                                <th>{index + 1}</th>
                                <td>{o.userName}</td>
                                <td>{o.productName}</td>
                                <td>${o.totalPrice}</td>
                                <td>
                                    {(o.totalPrice && !o.paid) && <Link to={`/dashboard/payment/${o._id}`}><button className='btn btn-sm btn-error'>pay</button></Link>}
                                    {(o.totalPrice && o.paid) && <div>
                                        <p><span className='text-success'>paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{o.transactionId}</span></p>
                                    </div>}
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;