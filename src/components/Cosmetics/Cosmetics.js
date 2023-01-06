import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const cosmetics = [
        { id: 1, name: 'Alta', price: 100 },
        { id: 2, name: 'Sonu', price: 200 },
        { id: 3, name: 'Pawder', price: 300 }
    ]

    return (
        <div>
            {cosmetics.map(cosmetic => <Cosmetic
                key={cosmetic.id}
                cosmetic={cosmetic}
            ></Cosmetic>)}
        </div>
    );
};

export default Cosmetics;