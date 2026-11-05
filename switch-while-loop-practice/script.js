// https://chatgpt.com/share/6ab40436-21b0-83ee-b78b-e63f2815966d

// Switch

// switch (key) {
//   case value:

//     break;

//   default:
//     break;
// }

let day = 3;

switch (day) {
  case 1: // ismy condition aaegy
    console.log("Monday");
    break; // ismy break lagana lazmi hai qk jha sy condition true hogy wha sy neechy tak print krdega

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Friday");
    break;

  default:
    console.log("Invalid Day"); // agr condition match na howy ye default rahega
    break;
}

let fruit = "mango";

switch (fruit) {
  case "apple":
    console.log("Apple");
    break;

  case "banana":
    console.log("Banana");
    break;

  case "mango":
    console.log("Mango");
    break;

  default:
    console.log("No Fruit Found");
    break;
}

// trim()

let a = "       Hashir Dilmurad Zai         ";

console.log(a);

a = a.trim(); // Start and End k Spacing Khtam karega

console.log(a);

let i = 1;

// While Loop

// pehly condition check phir code chalega

// while (condition) {

// }

while (i <= 5) {
  console.log(i);
  i++;
}

let fruits = ["apple", "mango", "banana"];

while (fruits.length) {
  console.log(fruits.pop());
}

// Do While Loop

// while ka olta pehly code chalega phir condition check

// do {

// } while (condition);

let number;

do {
  number = Number(prompt("Enter a number greater than 0"));
  console.log(`${number} is good number`);
  alert(`${number} is good number`);
} while (number <= 0);

let anumber = 6;

do {
  console.log(anumber);
} while (anumber < 5);

// for...of loop

// for...of loop ka use mostly array ke andar se direct values nikalne ke liye hota hai.

// for (const element of object) {

// }

let name = "Hashir Dilmurad Zai";

for (let char of name) {
  console.log(char);
}

for (let fruitarray of fruits) {
  console.log(fruitarray);
}

// for...in loop

// for (const key in object) {
//   if (!Object.hasOwn(object, key)) continue;

//   const element = object[key];

// }

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};

for (let key in car) {
  console.log("value:", car[key]);
  console.log("key:", key);
}

// 👉 Objects → for...in
// 👉 Arrays / strings → for...of

// | Loop       | Kya deta hai?   |
// | ---------- | --------------- |
// | `for...in` | **key / index** |
// | `for...of` | **value**       |

// Map()

// map() function JavaScript mein arrays ke saath use hota hai. Iska main kaam hai:

const numbers = [1, 2, 3, 4];

const result = numbers.map(function (num) {
  return num * 2; // map me return zarory hota wrna undefined hojaega
});

console.log(result);

fruits.map(function (a) {
  console.log(a);
});
