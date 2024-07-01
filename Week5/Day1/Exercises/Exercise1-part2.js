persons = ["Greg", "Mary", "Devon", "James"];
for (let x in persons) {
    console.log(persons[x])
}

for (let i = 0; i < persons.length; i++) {
    if (i === 3) {
        break;
    }
    console.log(persons[i])
}