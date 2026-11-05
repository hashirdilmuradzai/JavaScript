// phale kya solve hoga
// false || false && true // Pehly && solve hoga

// BNAO
// B >> Brackets ()
// N >> Not !
// A >> And &&
// O >> Or ||

console.log(false || (false && true)); // false

// 1

const test = "Pass";
const attendance = 75;

if (test === "Pass") {
  if (attendance >= 75) {
    console.log("Enter in class");
  } else {
    console.log("Test tw pass kr liya attendance per bhi focus karo");
  }
} else {
  console.log("Ghr jao");
}

// 2

const test2 = "Fail";
const attendance2 = 74;

if (test2 === "Pass" && attendance2 >= 75) {
  console.log("Enter in class");
} else {
  console.log("Ghr jao");
}

// 3 early return (only works with function)
