function makeJuice (juice_size) {
    const ingredients = [];
    function addIngredients (first, second, third) {
        ingredients.push(first, second, third)
        console.log("The client wants a " + juice_size + " juice, containing " + first + ", " + second + " and " + third + " ingredients.")
        return first, second, third
    }
    function displayJuice() {
        console.log("The client wants a " + juice_size + " juice, containing " + ingredients)
    }

    addIngredients("apple", "vodka", "coconut");
    addIngredients("coke", "soda", "lime");
    displayJuice()
    // console.log(ingredients)
    // console.log(juice_size)
    return juice_size
}

makeJuice("medium")
