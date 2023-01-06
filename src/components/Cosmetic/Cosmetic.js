import React from 'react';
import { addToDb } from '../../Utilities/fakedb';
import './Cosmetic.css'
const Cosmetic = (porps) => {
    const { name, price, id } = porps.cosmetic;

    /*     const addToCart = (id) => {
            localStorage.setItem(id, 1)
        } */

    // const addToCartWithParameter =()=> addToCart(id);

    return (
        <div className='product'>
            {/* <h2>Buy this: {porps.cosmetic.name}</h2> */}
            <h2>Buy this: {name}</h2>
            <p>Only for: ${price}</p>
            <p><small>It has an ID: {id}</small></p>
            {/* <button onClick={addToCartWithParameter}>Add to Cart</button> */}
            <button onClick={() => addToDb(id)}>Add to cart Shortcut</button>
        </div>
    );
};

export default Cosmetic;