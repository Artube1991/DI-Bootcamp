"use strict";
class Stack {
    constructor(elements = []) {
        this.elements = [];
        this.elements = elements;
    }
    push(element) {
        this.elements.push(element);
        console.log(this.elements);
    }
    pop() {
        return this.elements.pop();
    }
    isEmpty() {
        return this.elements.length === 0;
    }
}
let numbers = [42, 32424, 4321, 65365, 233, 3431, 563534, 231];
let numbersStack = new Stack(numbers);
numbersStack.push(1000);
numbersStack.pop();
console.log(numbersStack.pop());
numbersStack.isEmpty();
console.log(numbersStack.isEmpty());
