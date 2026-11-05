let a = 6;

console.log(a++); // 6
console.log(++a); // 8
console.log(2 + a); // 10

// a++ // Post Increment // Aik Step Baad
// ++a // Pre Increment // Direct
// a-- // Post Decrement // Aik Step Baad
// --a // Pre Decrement // Direct

let sallery = 15000;

sallery = sallery + 5000; // aesy bhi likh skty hai
sallery += 2000; // or aesy bhi likh skty hai

console.log(sallery); // 5000 + 2000 so 22000 Answer

console.log(5 > 3 > 2); // Boolean chalega first true second false aesy chalega

// Decimal → Binary
console.log((12).toString(2)); // "1100" // Binary me convert krraha hai (0101) wali values me

let x = 0b1101; // Binary (13)

console.log(x);

let score = 51;

score = score + 5; // 56
score += 5; // 61
score++;

console.log(score); // 62 // Adds 1 only

let ab = 5;
let bc = 8;

bc = ++ab;

console.log("ab: ", ab); // 6
console.log("bc: ", bc); // 6

let nr1 = 4;
let nr2 = 5;
let nr3 = 2;

console.log(nr1++ + ++nr2 * nr3++); // 16
// console.log( 4  +  6  *  2  ); // 16

console.log((2 + 3) * 4); // 20

// ------

let userInputNumber = 4;
let myNum = 10;

myNum = myNum + 23 * 5 - 2 / userInputNumber;
// myNum = 10 + 23 * 5 - 2 / 4;

console.log("myNum: ", myNum); // 124.5

let userInputNumber2 = 17;

let result = userInputNumber2 % 5;
// let result = 17 % 5;

console.log("result: ", result); // 2

// -------------

let userInputNumber3 = 23;

userInputNumber3 = userInputNumber3 + 1; // 24
userInputNumber3 += 1; // 25
userInputNumber3++; // 25
userInputNumber3++; // 26
userInputNumber3--; // 27

console.log("userInputNumber: ", userInputNumber3); // 26

// --------

let input = 5;

let result2 = input + 1 + ++input + input++ + --input + input--;
// let result2 =   5   + 1 +    6    +   6     +    6    +   6;

console.log("result2: ", result2); // 30
console.log("input: ", input); // 5

// --------

let aa = 5;
let bb = 3;

let result3 = aa + bb-- * ++aa + bb / --bb - aa++;
// let result3 = 5  +  3   * 6    + 2 /    1  -  6;

console.log("result3: ", result3); // 19
console.log("aa: ", aa); // 7
console.log("bb: ", bb); // 1
