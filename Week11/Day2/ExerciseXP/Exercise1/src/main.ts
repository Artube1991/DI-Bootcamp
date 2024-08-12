class Person {
    private firstName: string;
    private lastName: string;
    public age: number;
    protected address: string;

constructor(firstName: string, lastName: string, age: number, address: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
}

getFullName() {
    return `Hi, my name is ${this.firstName} ${this.lastName}, I'm ${this.age} years and live in ${this.address}`
};
}

let person1 = new Person('Vikont', 'De Barant', 27, 'Penanzse, France');
console.log(person1.getFullName());
// console.log(person1.firstName);
// console.log(person1.age);
// console.log(person1.address);