// https://chatgpt.com/share/6ae89c01-c980-83ee-97f7-84c00473e061
// Best OOP course on Youtube: https://youtube.com/playlist?list=PLnd7R4Mcw3rJicg4QtoI8gFkoefyCLvEq&si=U90LN81aoGM1HPcn

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log("constructor working...");
  }
}

const s1 = new Student("Hashir", 21);
const s2 = new Student("Dilmurad", 22);
const s3 = new Student("Zai", 23);

console.log(s1);
console.log(s2);
console.log(s3);

class Car {
  constructor(model, color, brand) {
    this.model = model;
    this.color = color;
    this.brand = brand;
  }

  start() {
    console.log("stuutututututuuu");
  }
}

// class Bike extends Car {}

c1 = new Car(2024, "Black", "BMW");
c2 = new Car(2025, "Red", "Ferrari");
c3 = new Car(2026, "Blue", "Bugatti");

console.log(c1);
console.log(c2);
console.log(c3);

c1.model = 2020;

console.log(c1.model);

c2.start();
