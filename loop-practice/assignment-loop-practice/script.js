// Shuru kahan se karna hy aur kahan rukna hy

// Shuru = 1
// Khatam = 12

// Assignment 1 Start

let tableOf = 8;

for (let i = 1; i <= 12; i++) {
  console.log(tableOf + " x " + i + " = " + tableOf * i);
}

// Assignment 1 End

// Assignment 2 Start

const productsPrice = [1200, 500, 800];

console.log(productsPrice[0]);
console.log(productsPrice[1]);
console.log(productsPrice[2]);

// Dynamic Method Start

let sum = 0;

for (let i = 0; i < productsPrice.length; i++) {
  sum = sum + productsPrice[i];
}

console.log(sum);

// Dynamic Method start

// Static Method Start

const sumOfProductsPrice =
  productsPrice[0] + productsPrice[1] + productsPrice[2];

console.log(sumOfProductsPrice);

// Static Method End

// Assignment 2 End

let abc = 5;

for (console.log("Running"); abc <= 30; console.log("Hello")) {
  console.log(abc);
  abc++;
}
