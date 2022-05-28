import React from 'react';
import useProduct from '../../Hooks/useProduct';


const ProductRow = ({ product, index }) => {
    const [products, setProducts] = useProduct();
    const { name, image, available } = product;

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://protected-dawn-69909.herokuapp.com/product/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    }


    return (

        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-20 rounded">
                    <img src={image} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{available}</td>
            <td><button className='btn btn-sm' onClick={() => handleDelete(product._id)}>Delete</button>
            </td>

        </tr>

    );
};

export default ProductRow;