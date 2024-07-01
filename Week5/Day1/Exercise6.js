const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
  }

phrase = new Array()

  for (let entries of Object.entries(details)) {
        phrase.push(entries)
}
console.log(phrase.toString())