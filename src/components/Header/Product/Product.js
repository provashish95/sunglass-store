import React from 'react';
import './Product.css';

const Product = (props) => {
    const { id, name, picture, price } = props.product;
    return (
        <div className="col-12 col-md-4">
            <div class="card" style={{ width: '15rem' }}>
                <img src={picture} class="card-img-top" alt="img" />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">Price: $ {price}</p>
                    <p>ID: {id}</p>
                    <button className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;