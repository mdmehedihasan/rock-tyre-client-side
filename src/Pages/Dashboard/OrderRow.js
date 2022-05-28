import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, index }) => {
    const { userName, productName, paid, totalPrice, _id } = order;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{userName}</td>
            <td>{productName}</td>
            <td>{totalPrice}</td>

            <td>
                {(totalPrice && !paid) && <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-sm btn-error'>Delete</button></Link>}

            </td>



        </tr>
    );
};

export default OrderRow;