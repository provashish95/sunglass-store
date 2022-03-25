import React from 'react';
import './SingleProduct.css';

const SingleProduct = ({ singleProduct }) => {

    return (
        <div>
            <h2>{singleProduct ? singleProduct.name : "Please Choose Again"}</h2>
        </div>
    );
};

export default SingleProduct;