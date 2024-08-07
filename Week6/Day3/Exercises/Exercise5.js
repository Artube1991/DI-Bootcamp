class Dog {
    constructor(name) {
      this.name = name;
    }
  };

  THE QUESTION: Analyze the options below. Which constructor will successfully extend the Dog class?

    // 1
class Labrador extends Dog {
    constructor(name, size) {
      this.size = size;
    }
  };

    // 2
class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };

    // 3
class Labrador extends Dog {
    constructor(size) {
      super(name);
      this.size = size;
    }
  };

    // 4
class Labrador extends Dog {
    constructor(name, size) {
      this.name = name;
      this.size = size;
    }
  };

//   THE ANSWER:
//   I think the third code is correct. The keyword "super" calls the parent class "Dog" that includes the property name and we don't need to declare this property
//   again like in fourth code.