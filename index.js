// Dishes Data
const dishData = [
    { name: "Italian pasta", price: 9.55 },
    { name: "Rice with veggies", price: 8.65 },
    { name: "Chicken with potatoes", price: 15.55 },
    { name: "Vegetarian Pizza", price: 6.45 },
];

// Tax Value
const tax = 1.2;

// Implement getPrices()
function getPrices(taxBoolean) {

    for (let dish of dishData) {
        let finalPrice;
        if (taxBoolean === true) {
            finalPrice = dish.price * tax;
        } else if (taxBoolean === false) {
            finalPrice = dish.price;
        } else {
            console.log("You need to pass a boolean to the getPrices call!");
            return;
        }
        console.log(`Dish: ${dish.name} Price: $${finalPrice}`);
    }
};


// Implement getDiscount()
function getDiscount(taxBoolean, guests) {

    getPrices(taxBoolean);
    let discount;
    if (typeof guests === 'number' && guests > 0 && guests < 30) {
        if (guests < 5) {
            discount = 5;
        } else if (guests >= 5) {
            discount = 10;
        };
        console.log(`Discount is: $${discount}`);
    } else {
        console.log("The second argument must be a number between 0 and 30");
    };
};


getDiscount(true, 2); // log dishes with 20% tax + "Discount is: $5"
console.log('\n') // spacing for easy readablity

getDiscount(false, 10); // log dishes without tax + "Discount is: $10"
console.log('\n') // spacing for easy readablity

getDiscount('yes', 10); // log discount for the number and still trigger "You need to pass..." message
console.log('\n') // spacing for easy readablity

getDiscount(true, 40) // log dishes with 20% tax and still trigger "The second argument must be..." message
console.log('\n') // spacing for easy readablity

getDiscount() // trigger the defensive "You need to pass... + "The second argument must be..." message