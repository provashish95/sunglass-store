import React from 'react';
import './Product.css';
import { BsFillCartCheckFill } from 'react-icons/bs';

const Product = (props) => {
    const { name, picture, price } = props.product;
    const { handleAddToCart } = props;

    return (
        <div className="col-12 col-md-4 d-flex justify-content-center">
            <div className="card shadow-lg p-3 mb-3 bg-body rounded text-center">
                <img src={picture} className="card-img-top" alt="img" />
                <div className="card-body">
                    <h5 className="card-title text-color-product">{name}</h5>
                    <p className="card-text">Price: $ {price}</p>
                    <button onClick={() => handleAddToCart(props.product)} className="btn cart-btn">Add to Cart <BsFillCartCheckFill className="btn-icon"></BsFillCartCheckFill></button>
                </div>
            </div>
        </div>
    );
};

export default Product;