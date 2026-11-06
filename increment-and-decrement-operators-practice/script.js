// BODMAS
// B ---- Bracket
// O ---- Orders
// D ---- Divide
// M ---- Multiply
// A ---- Addition
// S ---- Substriction


// Question 1

let a = 5;
let b = 3;

let result = a + b-- * ++a + b / --b - a++;
// let result = 5 + 3 * 6 + 2 / 1 - 6;

console.log("Question 1");
console.log("result:", result); // 19
console.log("a:", a); // 7
console.log("b:", b); // 1


// Question 2

let x = 4;
let y = 2;

let result2 = x++ + --y * ++x - y++ + x / y;
// let result2 = 4 + 1 * 6 - 1 + 6 / 2;

console.log("\nQuestion 2");
console.log("result:", result2); // 12
console.log("x:", x); // 6
console.log("y:", y); // 2


// Question 3

let a3 = 6;
let b3 = 4;

let result3 = --a3 + b3++ * a3 - ++b3 + a3-- / b3;
// let result3 = 5 + 4 * 5 - 6 + 5 / 6;

console.log("\nQuestion 3");
console.log("result:", result3); // 19.833
console.log("a3:", a3); // 4
console.log("b3:", b3); // 6


// Question 4

let m = 8;
let n = 5;

let result4 = ++m - n-- + m * --n + n++ - m--;
// let result4 = 9 - 5 + 9 * 3 + 3 - 9;

console.log("\nQuestion 4");
console.log("result:", result4); // 25
console.log("m:", m); // 8
console.log("n:", n); // 4


// Question 5

let p = 7;
let q = 3;

let result5 = p++ * ++q - --p + q-- + p / q;
// let result5 = 7 * 4 - 7 + 4 + 7 / 3;

console.log("\nQuestion 5");
console.log("result:", result5); // 27.333
console.log("p:", p); // 7
console.log("q:", q); // 3


// Question 6

let x6 = 10;
let y6 = 4;

let result6 = ++x6 + y6-- * x6++ - --y6 + x6 / ++y6 - x6--;
// let result6 = 11 + 4 * 11 - 2 + 12 / 3 - 12;

console.log("\nQuestion 6");
console.log("result:", result6); // 45
console.log("x6:", x6); // 11
console.log("y6:", y6); // 3