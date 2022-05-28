import React from 'react';
import useOrder from '../../Hooks/useOrder';
import OrderRow from './OrderRow';




const ManageOrders = () => {
    const [orders] = useOrder();

    return (
        <div>
            <h3 className='text-2xl'>All Orders:{orders.length}</h3>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>S/L</th>
                            <th>User Name</th>
                            <th>Product Name</th>
                            <th>Payment History</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <OrderRow
                                key={order._id}
                                order={order}
                                index={index}
                            ></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageOrders;