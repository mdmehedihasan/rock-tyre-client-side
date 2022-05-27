import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((o, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{o.userName}</td>
                                <td>{o.productName}</td>
                                <td>{o.perPrice * o.orderQuantity}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;