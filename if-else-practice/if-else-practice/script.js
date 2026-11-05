const food = true;
const tea = true;
const drink = true;

if (food || tea || drink) {
  console.log("le aao");
} else {
  console.log("Ghr jao");
}

//

const isEnroll = true;
const passed = true;
const age = 20;

if (isEnroll || passed || age > 18) {
  console.log("Pharhai karo class ma");
} else {
  console.log("Ghr jao");
}

// if ya else ma se koi ak chalta hy dono ak sath kabhi kabhi bhi nhi chal sagty

// Nested

const inputNumber = Number(
  prompt("Enter your number to check your grade in one subject."),
);

if (inputNumber > 100) {
  alert("Please input valid number");
} else if (inputNumber >= 90) {
  alert("Grade: A+");
} else if (inputNumber >= 80) {
  alert("Grade: A");
} else if (inputNumber >= 70) {
  alert("Grade: B");
} else if (inputNumber >= 60) {
  alert("Grade: C");
} else if (inputNumber >= 50) {
  alert("Grade: D");
} else {
  alert("Grade: F");
}

// ------------------------

const voteAge = 18;
const a = voteAge - 18;

if (Math.abs(a) === a) {
  console.log("vote kr sakta hy");
} else {
  console.log("Sabar karo!");
}
