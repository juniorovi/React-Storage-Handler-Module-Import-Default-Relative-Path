import React from 'react';
import './Cosmetic.css'
const Cosmetic = (porps) => {
    const { name, price, id } = porps.cosmetic;
    const addToCart = (id) => {
        console.log('Item Added', id)
    }
    return (
        <div className='product'>
            {/* <h2>Buy this: {porps.cosmetic.name}</h2> */}
            <h2>Buy this: {name}</h2>
            <p>Only for: ${price}</p>
            <p><small>It has an ID: {id}</small></p>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
};

export default Cosmetic;