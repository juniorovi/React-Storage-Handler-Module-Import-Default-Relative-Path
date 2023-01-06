import React from 'react';
import {add, multiply } from '../../Utilities/Calculate';

const Cosmetics = () => {
    const first = 54;
    const second = 7;
    const total = add(first, second);
    const minimumCost = multiply(first, second)
    return (
        <div>
            <h1>Welcome to our cosmetics store</h1>
            <h4>Price with vat: {total}</h4>
            <h5>You will get 1% off for Minimum Spend: {minimumCost}</h5>
        </div>
    );
};

export default Cosmetics;