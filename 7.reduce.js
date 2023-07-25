//reduce---------->It adds the sum of products and give a resultant and we will use accumulator for initializing

const products = [
    {name: 'POCO C51 (Royal Blue, 64 GB)', price: 6499, quantity: 1},
    {name: 'SAMSUNG Galaxy F04 (Opal Green, 64 GB)', price: 16998, quantity: 2},
];

const totalAmount = products.reduce(function(acculumator, product) {  //accumalator is tempoarary storage the resulatant is stored in accumaltor and product is current value.
    return acculumator + product.price * product.quantity;
}, 0);  //---------------------> accumulator initialzed to 0

//const totalAmount = products.reduce((acculumator, product) => acculumator + product.price * product.quantity, 0);

console.log('Total Amount: ', totalAmount);