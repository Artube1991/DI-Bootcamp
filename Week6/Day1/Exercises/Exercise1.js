// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
//ANSWER: There will be an error beacause one constant cannot be declared twice in the same scope. In our function, it was declared first in the outer function and then in the inner function.

//#2
const a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
// funcTwo()
// funcThree()
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// ANSWER: In the first time (line 27) funcThree ran with alert inside the funcThree function 0,
// because it took the value of const a from the line 17.
// When funcTwo tried to redeclare the value of constant there was an error because the constant is not availabale outside for redeclaring.

//#3
function funcFour() {
    window.b = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${b}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()

//#4
const c = 1;
function funcSix() {
    const c = "test";
    alert(`inside the funcSix function ${c}`);
}


// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
// ANSWERS: The constants in lines 51 and 53 are declared in the different scopes.
// The funcSix has access only to the constanst within its block where it declared as "test".
// Because of that the alert (line 54) is: "inside the funcSix function test".

const d = 2;
if (true) {
    const d = 5;
    alert(`in the if block ${d}`);
}
alert(`outside of the if block ${d}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?
// ANSWER: If we will you the const instead of let the resulst will be the same
// as we'd use lets. This is because of blocks. The scope of const d (line 66) doesn't relate 
// to scope of const d in line 68 because the second const d is in the curly brackets of IF block 
// that has its own scope.