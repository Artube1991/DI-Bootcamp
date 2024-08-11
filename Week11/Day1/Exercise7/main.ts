function createPerson(name: string, age: number) {
    let person: object = {
        name: name,
        age: age,
    }
    return person
}

console.log(createPerson("Cartman", 10))