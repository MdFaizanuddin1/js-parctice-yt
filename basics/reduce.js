const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "java course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceTopay = shoppingCart.reduce((acc, item) => (item.price + acc), 0)
console.log(priceTopay);

