import React from 'react';
import './Cart.css';
import { RiDeleteBinFill } from 'react-icons/ri';

const Cart = (props) => {
    const { item, deleteItem } = props;
    return (
        <div className="d-flex justify-content-start my-3 align-items-center gx-3">
            <img src={item.picture} className="cart-img" alt="img" />
            <h5>{item.name}</h5>
            <span onClick={() => deleteItem(item.id)} className="delete-btn"><RiDeleteBinFill className="delete-btn-icon"></RiDeleteBinFill></span>
        </div>

    );
};

export default Cart;