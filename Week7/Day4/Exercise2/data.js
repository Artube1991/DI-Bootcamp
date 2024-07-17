const persons = [{name: "Abraham", age: 900, location: "Israel"}, {name: "Jacob", age: 2000, location: "Island"}, {name: "Moby", age: 59, location: "Los Angeles"}]

let x = 0;
let y = 0;

export function averageAge() {
    for (let i = 0; i < persons.length; i++) {
        x = x + persons[i].age;
        y++;
    }
    // console.log(x);
    // console.log(y);
    console.log(x / y);
}

