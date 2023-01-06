import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const cosmetics = [
        {
            "id": "63b82e7bd2a821e15f36e8cf",
            "price": "$2,128.91",
            "name": "Warner Pope"
        },
        {
            "id": "63b82e7b187f031baa46d465",
            "price": "$1,004.25",
            "name": "Lilly Pratt"
        },
        {
            "id": "63b82e7bbe65780e29c895f4",
            "price": "$1,072.22",
            "name": "Cameron Rose"
        },
        {
            "id": "63b82e7b86ae1cf6b255a61e",
            "price": "$2,586.85",
            "name": "Dale Snyder"
        },
        {
            "id": "63b82e7b050bf898d41c34e1",
            "price": "$2,665.63",
            "name": "Gomez Short"
        }
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