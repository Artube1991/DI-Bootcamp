const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}

shopping_list = Array("banana", "orange", "apple");
item_to_buy = new Array();
price_list = new Array();
let price = 0

function my_bill() {
for (fruit of shopping_list) {
    if (stock[fruit] > 0) {
        item_to_buy.push(fruit)
    } 
    else {

        }
}

for (things of item_to_buy) {
    price = price + prices[things];
}

console.log(price)
}

my_bill()