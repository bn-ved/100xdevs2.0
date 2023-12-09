class Animal {
  // Defining the fields and constructor
  constructor(name, legCount) {
    this.name = name;
    this.legCount = legCount;
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`;
  }
}

// Creating Animal object "dog"
let dog = new Animal("Doggie", "4");

console.log(dog.describe());
