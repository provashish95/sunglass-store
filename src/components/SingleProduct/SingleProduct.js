import React from 'react';
import './SingleProduct.css';

const SingleProduct = (props) => {
    const { name, picture, price } = props.singleProduct;
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="card mt-3  w-50 shadow-lg p-3 rounded">
                    <div className="row ">
                        <div className="col-md-6">
                            <img src={picture} className="img-fluid rounded-start" alt="img" />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title fw-bold">{name}</h5>
                                <p className="card-text">Price: only ${price}</p>
                                <p>This item best choice for you</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;