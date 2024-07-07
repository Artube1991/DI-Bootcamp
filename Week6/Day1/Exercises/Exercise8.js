function makeJuice (juice_size) {
    const ingredients = [];
    function addIngredients (first, second, third) {
        ingredients.push(first, second, third)
        console.log("The client wants a " + juice_size + " juice, containing " + ingredients + " ingredients.")
        const sentence = "The client wants a " + juice_size + " juice, containing " + ingredients + " ingredients."
        let new_div = document.createElement("div");
        new_div.innerText = sentence;
        document.body.appendChild(new_div)
        return first, second, third
    }
    
    function displayJuice() {
        const sentence2 = "The client wants a " + juice_size + " juice, containing " + ingredients + " ingredients."
        let new_div2 = document.createElement("div");
        new_div2.innerText = sentence2;
        document.body.appendChild(new_div2)
    }

    addIngredients("apple", "vodka", "coconut");
    addIngredients("coke", "soda", "lime");
    displayJuice()
    // console.log(ingredients)
    // console.log(juice_size)
    return juice_size
}

makeJuice("medium")
