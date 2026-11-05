let fruits = ["mango", "apple", "watermelon", "apple", "grape", "apple"];

// ----- han ya na ky value mili hy ya nhi (start) ----------------------
// flag variable (think of it as button)

let isFound = false;

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "pineapple") {
    isFound = true;
  }
}

if (isFound === true) {
  console.log("Value milgae");
} else {
  console.log("Value nhi mili");
}

// ----- han ya na ky value mili hy ya nhi (end) ----------------------

let count = 0;

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "apple") {
    count++;
  }
}

console.log("Fruits Count: ", count);
