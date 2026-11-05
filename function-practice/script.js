// https://www.w3schools.com/js/js_functions.asp

function myFunction(fullName) {
  console.log("Welcome to", fullName);
}

myFunction("Hashir");
myFunction("Dilmurad ZAi");
myFunction();
let abc = myFunction; // function ko call/invoke kr rahe hyn
console.log(myFunction);

function sum(num1, num2) {
  // Parameters = num1 and num2 is parameter
  let result = num1 + num2;
  console.log("The Result is:", result);
}

sum(1, 2); // Arguments 3 and 2 is our arguments

function newFunction() {
  return 6; // Yha tak function khtam rukjata hai isky baad kch nhi chalta
  console.log("Hi");
}

console.log(newFunction());

function multiply(a, b, c = 1) {
  // let multiplyFunction = a * b * c;
  return a * b * c;
}

// console.log(multiply(2, 5, 6));
console.log(multiply(2, 5));

function cityFunction(city = "karachi") {
  return city; // kuxh ma milne per "karachi" as default parameter mil jaye ga
}

console.log(cityFunction("Lahore"));
