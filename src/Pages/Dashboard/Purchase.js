import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    return (
        <div className='flex flex-col items-center justify-center my-10 px-40'>
            <img src={product.image} alt="" />
            <h3 className='text-xl'>Product Name:{product.name}</h3>
            <h3 className='text-xl text-justify'>Product Name:{product.description}</h3>
            <h3 className='text-xl text-justify'>Available Quantity:{product.available}</h3>
            <h3 className='text-xl text-justify'>Minimum Order QTY:{product.minimum}</h3>
            <h3 className='text-xl text-justify'>Price:{product.price}</h3>
            <div>


                <button className='btn border rounded-sm'>Confirm Purchase</button>
            </div>
        </div>
    );
};

export default Purchase;