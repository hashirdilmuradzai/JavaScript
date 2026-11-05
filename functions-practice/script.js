// https://www.w3schools.com/js/js_functions.asp

function hello() {
  console.log("Welcome to Mr. Hashir");
}

hello(); // function ko call / invoke kr rahe hyn

function hello2(fullName) {
  console.log("Welcome to Mr.", fullName);
}

hello2("Hashir"); // function ko call / invoke kr rahe hyn

hello2("Dilmurad Zai");

hello2();

let abc = hello2;

console.log(abc());

// Parameters = num1 and num2 is parameter

function sum(num1, num2) {
  const result = num1 + num2;
  console.log("Result:", result);
}

sum(3, 2); // Arguments 3 and 2 is our arguments
sum(5, 5);
sum(15, 15);

function myNewFunction() {
  return "Hashir";
}

console.log(myNewFunction());

function myNewFunction2() {
  return 6;
  console.log("Ye kabhi bhi nhi chalega"); // return ky baad kch bhi nhi chalta
}

console.log(myNewFunction2());

// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

// Default Parameter
function multiply(a, b, c = 1) {
  // C ko default value milgae
  return a * b * c;
}

console.log(multiply(6, 5, 2));

console.log(multiply(7, 3));

console.log(multiply(5, 5));

// Default Parameter
function newFunc(city = "karachi") {
  console.log(city); // kuxh ma milne per "karachi" as default parameter mil jaye ga
}

// newFunc();

// newFunc("lahore");

//

// Rest parameters
function test2(a, ...b) {
  // pehly wali value pehli ko milegy baqy dosry rest parameter wali ko
  console.log(a); // Apple
  console.log(b); // All other values
}

test2("apple", "banana", "pineapple", "grapes");

function someFunction() {
  console.log("Working...");
}

setTimeout(someFunction, 5000); // jitna time dogy utny time baad nazar aaega

setInterval(someFunction, 2500); // jitna time dogy utny time baad bhrta chala jaega

// https://www.w3schools.com/js/js_precedence.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

// Arrow functions
