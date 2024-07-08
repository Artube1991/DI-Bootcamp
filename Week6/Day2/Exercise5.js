const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const phrase = epic.reduce(
    function (prev, curr) {
      return (prev + " " + curr);
    }
  );

console.log(phrase)