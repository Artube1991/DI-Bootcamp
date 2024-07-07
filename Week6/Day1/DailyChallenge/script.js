let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}


const displayGroceries = () => groceries.fruits.forEach(function(elem) {
	console.log(elem);
});

displayGroceries()



const cloneGroceries = () => {
    let user = client;
    client = "Betty";
    let shopping = groceries;
    groceries.totalPrice = "35$"
    groceries.paid = false;

    
    console.log(user)
    console.log(shopping.totalPrice)
    console.log(shopping.paid)
}

cloneGroceries()

// The name in the variable "user" didn't change because redeclaring
// the main variable, "client", inside the function
// cloneGroceries is not available because the "client" variable is inside 
// the function and redeclaring is limited by the borders of function's block.
//All the changes for object groceries were transferred to the shopping
// object because in JS objects are keeping in some place of memory. And when we clone 
// old object by creating new object they both have same reference to memory (this is how I 
// understood this).
