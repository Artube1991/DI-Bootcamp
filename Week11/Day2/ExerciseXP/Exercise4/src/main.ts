class Stack<T> {
    elements: T[] = [] as T[];

    constructor(elements: T[] = []) {
        this.elements = elements;
    }
    push(element: T): void {
        this.elements.push(element);
        console.log(this.elements);
}
    pop(): T | undefined {
      return this.elements.pop();
  }

    isEmpty(): boolean {
    return this.elements.length === 0;
  }
}

let numbers = [42, 32424, 4321, 65365, 233, 3431, 563534, 231];
let numbersStack = new Stack<number>(numbers);
numbersStack.push(1000);
console.log(numbersStack.pop());
console.log(numbersStack.isEmpty());
