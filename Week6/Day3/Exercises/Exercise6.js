// [2] === [2] => true
// {} === {} => false

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)
console.log(object3.number)
console.log(object4.number)
//In JS clonned objects are keeping in the same place of memory. Object 2 and object 3 are clones of 
// object 1 and by changing the object 1 we change both cloned objects. They all have the changed value of number - 4.
// The object4 is not a clone, that's why it saves its own value for number.

class Animal {
    constructor(name, type, color) {
      this.name = name;
      this.type = type;
      this.color = color;
    }
    speak(sound) {
        console.log(`${sound} I'm a ${this.type}, named ${this.name}, and I'm ${this.color}`)
      }
  };

class Mamal extends Animal {
    constructor(name, type, color, sound) {
      super(name, type, color);
    this.sound = sound;
    }
  };

let farmerCow = new Mamal("Buryonka", "little cow", "black-dotted and white")
farmerCow.speak("Moooo!")
let farmerCat = new Mamal("Lisa", "cat", "black and orange with black stripes")
farmerCat.speak("Mewwww!")