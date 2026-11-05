const students = [
  "ahmed",
  "anas",
  "fatima",
  "zohaib",
  "ayesha",
  "razzaq",
  "daniyal",
  "shehzad",
];

// array aur object hamesha const se banana hy!!!

students[2] = "Haseeb"; // array ki index 2 sy replace hojaega

students.sort(); // Alphaphatic wise sort Assending order

students.reverse(); // Decending order

console.log(students);

console.log(students.join("/")); // String me convert or her array ky baad jo sign diya hai wahy aaega

console.log(students.includes("Fatima")); // False // Jo value dogy wo check karega array me hai ya nhi

console.log(students.indexOf("fatima")); //2 // Array ka index btaega

students.push("Hashir"); // last me add hogy

students.pop(); // last sy remove

students.unshift("Hashir"); // start me add hogy

students.shift(); // start me remove hogy

console.log(students);

//

const marks = [450, 1000, -110, 130, 500];

marks.sort((a, b) => a - b); // number ko sort krny ka tricks // Assending

marks.sort((a, b) => b - a); // Desending

console.log(marks);
