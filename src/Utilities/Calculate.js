
const add = (first, second) => {
    return (first + second)
}
const multiply = (first, second) => {
    return (first * second)
}

/* //Reducer Example 1
const numbers =[2,4,6,8,10];
const sumReducer = (previous, current)=> previous + current;
const total = numbers.reduce(sumReducer, 0); */


/* //Reducer Example 2
const items =[
    {id:1, name: 'alta', price:100},
    {id:2, name: 'sono', price:200}, 
    {id:3, name: 'power', price:300},
    {id:4, name: 'rong', price:400}
];
const itemSumReducer = (previous, current)=> previous +current;
const itemTotal = items.reduce(itemSumReducer,0); */


const getTotalPrice = products => {
    const Reducer = (previous, current) => previous + current.price;
    const total = products.reduce(Reducer, 0);
    return total;
}

export { add, multiply, getTotalPrice as getTotal };