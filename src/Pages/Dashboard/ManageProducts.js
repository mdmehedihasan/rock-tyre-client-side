import React from 'react';
import useProduct from '../../Hooks/useProduct';
import ProductRow from './ProductRow';


const ManageProducts = () => {
    const [products] = useProduct();

    return (
        <div>
            <h3 className='text-2xl'>Manage Products:{products.length}</h3>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>S/L</th>
                            <th>Product Image</th>
                            <th>Name</th>
                            <th>Available</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ProductRow
                                key={product._id}
                                product={product}
                                index={index}
                            ></ProductRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageProducts;