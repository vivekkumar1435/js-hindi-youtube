// ========= Reduce ========

const myNumber = [ 1, 2, 3];

const myTotal = myNumber.reduce((acc ,curr) => (acc + curr),0)
// console.log(myTotal)
var gstval = 2.65;
const costomer_shoping_list = [100, 250, 315, 10, 260, 89];

const costomer_bill = costomer_shoping_list.reduce((acc, curr) => (acc + curr),0 );

// console.log(costomer_bill  );

const  shoppingCart = [
    {
        itemName:"js course",
        price: 2999
    },
    {
        itemName:"py course",
        price: 999
    },
    {
        itemName:"mobile dev course",
        price: 5999
    },
    {
        itemName:"data scince course",
        price: 12999
    }
];

const bill = shoppingCart.reduce((acc , item ) => (acc + item.price),0)
console.log(bill);

