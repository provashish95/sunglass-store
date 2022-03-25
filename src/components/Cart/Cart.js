import React from 'react';
import './Cart.css';

const Cart = ({ item }) => {
    //console.log(item);
    return (
        <div>
            <h3>{item.name}</h3>
        </div>

    );
};

export default Cart;