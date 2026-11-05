// ------------ Objects ---------------
// object ma order matter nhi karta
// object ko iterate nhi karty (Loop)
// Collection of key-value pairs.
// Used to represent real-world entities.

// https://www.w3schools.com/js/js_objects.asp

// --- kia kia use krskty hai key varble me object k ---
// a - z
// A - Z
// _ $
// 0-9 (except first)

let student = {
  firstName: "Hashir",
  lastName: "Dilmurad Zai",
  age: 22,
  isPresent: true,
  isPresident: false,
  gender: "Male",
  email: "hashirdilmuradzai@gmail.com",
  hobbies: ["Coding", "Gym", "Resiting Quran"],
  school: null,
  address: {
    city: "karachi",
    country: "Pakistan",
    postalCode: 76588,
    landmark: "Gulshan",
  },
};

console.log(student);

console.log(student.age); // kese specific object ky ander ko dekhny keliyee

student.rollNumber = 4567; // add krny keliyeee

console.log(student);

console.log(typeof student);

student.address.city = "Lahore"; // value update keliyee

console.log(student);

delete student.school; // delete krny keliyee

console.log(student);

if (student.grade === undefined) {
  console.log("No Found"); // logic nhi mily ye print kro
}

console.log(student.grade); // wrna undefined aaega

// loop in object (keys variable)

for (const a in student) {
  console.log(a);
}

const car = {
  company: "BMW",
  medel: "M5",
  color: "black",
};

console.log(car);

car.color = "blue"; // update value
car.year = 2025; // add value
car.new = "New"; // add value
car.company = "BMW"; // update value

console.log(car);

// object {
//   keys: values,
// }

console.log(Object.keys(car)); // Keys Variables ko sirf dekhna
console.log(Object.values(car)); // Assign Value ko dekhna
console.log(Object.entries(car)); // arrys me convert krna or her pair ko bhi array me dalna
// [[], [], []]; aesy

console.log(car["color"]); // kese aik value ko dekhna

for (const key in car) {
  console.log("Keys: ", key);
  console.log("Value: ", car[key]);
}

Object.freeze();

const bike = {
  model: "honda",
  year: 2026,
  color: "black",
};

console.log(bike);

Object.freeze(bike); // issy change nhi krsty value or na add / delte

bike.model = "super";

delete bike.year;

bike.price = 20000;

console.log(bike);

const xyz = Object.freeze({
  gh: "fgh",
}); // aesy bhi likh skty hai

let a = []; // Array ki datatype Object hoti hy

let b = [];

for (let i = 0; i < 1000000; i++) {
  b.push(i * i * i);
}

console.log(b); // lamba code

// Memory = RAM;
// Storage = ROM;

let a1 =
  "lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur deleniti numquam accusamus, commodi quia nostrum, ut at ipsa nam placeat aut unde, hic non sequi sed amet magni consequatur ipsum beatae. Sit quod iste voluptate iusto, nihil voluptatibus incidunt architecto modi soluta impedit ab commodi quasi magni! Esse blanditiis provident laudantium laboriosam voluptatum vero animi nobis, labore corporis obcaecati adipisci sint aspernatur rerum voluptatibus? Quidem alias fugiat quia veritatis voluptas magnam praesentium iste dolorum nobis expedita, quasi vitae mollitia quibusdam recusandae. Quisquam illum earum, quibusdam, incidunt veritatis eius animi similique, officia saepe fugiat quo! Culpa id eveniet amet. Porro!";

let test1 = [4, 5, 6, 6];

console.log(test1); // Set ma duplicate value nhi ho sagti

test1.push(5);

console.log(test1);

const test2 = new Set(["ali", "shezad", "fatima", "ali", "shezad"]);

console.log(test2); // Set me duplicate value nhi jaskty

test2.add("hashir"); // add ke zariyee value add krty hai

console.log(test2);

test2.delete("fatima"); // delete ky zariyeee delete krdkty hai

console.log(test2);

let c = "aabbccdd";

console.log(new Set(c));

let d = new Set(c);

console.log(d);
