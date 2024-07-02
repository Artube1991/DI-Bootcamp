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
price_list = new Array();
let price = 0
let item = 0

    for (item in shopping_list) {
            console.log(item)
        }