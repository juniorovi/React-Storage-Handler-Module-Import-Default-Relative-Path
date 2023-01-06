import React from 'react';

const Cosmetic = (porps) => {
    const { name, price, id } = porps.cosmetic;
    return (
        <div>
            {/* <h2>Buy this: {porps.cosmetic.name}</h2> */}
            <h2>Buy this: {name}</h2>
            <p>Only for: ${price}</p>
            <p><small>It has an ID: {id}</small></p>
        </div>
    );
};

export default Cosmetic;