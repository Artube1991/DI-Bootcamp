numbers_23 = new Array()
function displayNumbersDivisible() {
    for (let i = 1; i <= 500; i++) {
        if (i % 23 === 0)
            {numbers_23.push(i)}
    }
    return numbers_23
}

displayNumbersDivisible()
console.log(numbers_23)

var sum = numbers_23.reduce(function(a, b){
    return a + b;
}, 0);
 
console.log("SUM " + sum);