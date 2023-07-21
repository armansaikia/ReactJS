// Arrow Function:
//     arrayName.forEach(function() {
//         return
//     });


//     arrayName.forEach(() => ); we will remove the function name and and curlybraces and return keyword
// used on single line operations and on multiple line operations we will use braces and return keyword

const products = [
    {name: 'POCO C51 (Royal Red, 64 GB)', price: 6499, quantity: 1},
    {name: 'SAMSUNG Galaxy F04 (Opal Green, 64 GB)', price: 16998, quantity: 2},
];

// const totalAmount = products.reduce(function(acculumator, product) {     //accumalator is tempoarary storage the resulatant is stored in accumaltor and product is current value.
//    return acculumator + product.price * product.quantity;
// }, 0);  //------------------------> accumulator initialzed to 0

const totalAmount = products.reduce((acculumator, product) => acculumator + product.price * product.quantity, 0);// use of arrow function

console.log('Total Amount: ', totalAmount);