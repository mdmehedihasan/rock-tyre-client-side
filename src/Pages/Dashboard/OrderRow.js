import React from 'react';
import useOrder from '../../Hooks/useOrder';


const OrderRow = ({ order, index }) => {
    const { userName, productName, paid, totalPrice } = order;
    const [orders, setOrders] = useOrder();


    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://protected-dawn-69909.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                })
        }
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{userName}</td>
            <td>{productName}</td>
            <td>{totalPrice}</td>

            <td>
                {(totalPrice && !paid) && <button className='btn btn-sm' onClick={() => handleDelete(order._id)}>Delete</button>}
            </td>
        </tr>
    );
};

export default OrderRow;