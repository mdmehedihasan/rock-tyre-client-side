import React, { useEffect, useState } from 'react';
import Product from '../Dashboard/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])


    return (
        <div className='mb-20'>
            <div className='text-center text-xl uppercase'>
                <h3 className='font-bold text-primary'>Our Products</h3>
                <h2>Our Product is heavy</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2    lg:grid-cols-3 gap-10'>
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