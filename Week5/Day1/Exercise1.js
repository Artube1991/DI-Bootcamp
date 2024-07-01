const persons = ["Greg", "Mary", "Devon", "James"];
persons.shift()
persons[2] = 'Jason';
persons.push('Alex');
console.log(persons.indexOf('Mary'));
people = persons.splice(1, 2)
console.log(people)
console.log(persons.indexOf('Foo')) /* it returns -1 beacuse this element doesn't exist in the array */
last = people[people.length - 1]
console.log(last)