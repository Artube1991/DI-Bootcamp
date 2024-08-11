function getDetails(age: number, name: string) {
    let tpl = [age, name, `Hello, I am ${name}, ${age} years old. Hi from TypeSript!`];
    return tpl
};

console.log(getDetails(59, "Moby"))