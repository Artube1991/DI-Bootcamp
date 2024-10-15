function anagramChecker(word, word2) {
    const w1 = word.trim().toLowerCase().replace(/\s+/g, "").split("");
    const w2 = word2.trim().toLowerCase().replace(/\s+/g, "").split("");
  
    if (w1.length !== w2.length) return false;
  
    w1.sort();
    w2.sort();
  
    for (let i = 0; i < w1.length; i++) {
      if (w1[i] !== w2[i]) {
        return false;
      }
    }
  
    return true;
  };

  
  console.log(anagramChecker("Astronomer", "Moon starer"));
  console.log(anagramChecker("School master", "The classroom"));
  console.log(anagramChecker("The Morse Code", "Here come dots"));
  console.log(anagramChecker(" Morse Code", "Here come dots"));
  console.log(anagramChecker("TTT Morse Code", "Here come dots"));