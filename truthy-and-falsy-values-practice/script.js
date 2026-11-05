// https://www.freecodecamp.org/news/what-are-falsey-values-in-javascript

// RULE: falsy ky illawa sab turthy hyn

// The 8 Falsy Values

// false: The Boolean keyword itself.
// 0: The number zero.
// -0: Negative number zero.
// 0n: BigInt zero.
// "": Empty string value (also '' or `````).
// null: Explicit absence of any object value.
// undefined: Automatically assigned value of uninitialized variables.
// NaN: Not-a-Number value resulting from invalid math operations.

// Examples Practice

console.log(Boolean(-1)); // true
console.log(Boolean("0")); // true
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(1)); // true
console.log(Boolean("0")); // true
console.log(Boolean([])); // true // An empty array
console.log(Boolean({})); // true // An empty object
console.log(Boolean(-0)); // false
console.log(!!(15 % 5)); // false // q k Reminder 0

// mcq

let car;
console.log(!!car); // Boolean or !! (same call krany keliyeee true or false)

// if (boolean) {
// if ki body
// } // sub value true hogy if kaam karega otherwise not kaam

if (undefined) {
  console.log("Kaam kro");
} // (ye dekho value false hai kaam nhi kra)

const testing = Boolean(-10);
console.log("Testing: ", testing);

// false, 0, "", null, undefined, NaN

if (0) {
  console.log("Tree");
} else {
  console.log("Grass");
}

// 8 falsy values in JS

// ----------

let variable = true;

let weather = Number(prompt("Enter a Temperature"));

let a = weather < 20;

if (weather < 10) {
  console.log("Serdi hai 🥶");
} else if (weather < 32 || weather <= 28) {
  console.log("moderate");
} else {
  console.log("Ghrmi hai 🌞");
}

// OR operator (||) koi ak bhi true tw true
// weather = 67
// weather <  32 || weather <= 28
// false || true

console.log(false || false); // false
console.log(true || false); // true
console.log(false || true); // true
console.log(true || true); // true

console.log(false || false || true || false); // true

// AND Operator (&&) koi ak bhi false tw false

console.log(false && false); // false
console.log(true && false); // false
console.log(false && true); // false
console.log(true && true); // true

console.log(false && false && true && false); // false
