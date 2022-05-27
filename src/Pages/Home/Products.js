import React, { useEffect, useState } from 'react';
import Product from '../Dashboard/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://protected-dawn-69909.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])


    return (
        <div className='mb-20 px-40'>

            <h2 className='font-bold uppercase text-center text-2xl text-black py-3'>Our Products</h2>
            <div className='bg-black w-100 mb-3 ' style={{ height: '1px' }}></div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2    lg:grid-cols-3 gap-0'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>
                    )}
            </div>
        </div>
    );
};

export default Products;