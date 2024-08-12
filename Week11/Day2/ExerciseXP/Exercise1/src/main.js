var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }
    Person.prototype.getFullName = function () {
        return "Hi, my name is ".concat(this.firstName, " ").concat(this.lastName, ", I'm ").concat(this.age, " years and live in ").concat(this.address);
    };
    ;
    return Person;
}());
var person1 = new Person('Vikont', 'De Barant', 27, 'Penanzse, France');
console.log(person1.getFullName());
console.log(person1.firstName);
console.log(person1.age);
console.log(person1.address);
