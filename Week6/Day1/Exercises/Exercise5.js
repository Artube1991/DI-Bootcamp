function kgToGr(kilos) {
    return 1000 * kilos
}

const kgToGr2 = function(kilos) {
    return 1000 * kilos
}

// The function declaration is a writing code of function with its name. 
// Untill it gets invoked by its name it stays "frozen".
// The function expression is a writing and at the same time invoking the function
// with the name of the variable.

const kgToGr3 = (kilos) => 1000 * kilos
kgToGr3(3.7)