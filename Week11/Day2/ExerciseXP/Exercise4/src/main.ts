class Stack<T> {
    elements: T[] = [];

    // constructor(amount: number) {}
    push(element: T): void {
        this.elements.push(element);
}
    pop(): T {
      return this.elements.pop();
  }

    isEmpty(): boolean {
    return this.elements.length === 0;
  }
}
