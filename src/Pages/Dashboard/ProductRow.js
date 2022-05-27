import React from 'react';

const ProductRow = ({ product, index }) => {
    const { name, image, available, } = product;
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
            <td><button class="btn btn-sm">Delete</button>
            </td>

        </tr>

    );
};

export default ProductRow;