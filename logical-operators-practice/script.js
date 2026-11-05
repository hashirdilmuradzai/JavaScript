// https://www.w3schools.com/js/js_logical.asp


// AND Operator (aur) (&&) koi ak bhi false howa to false otherwise true

let test2 = true && false && true;

console.log(test2); // false

let x = 5;
let y = 16;

console.log(x < 10 && y > 1); // true

// aakhir truthy value return kare ga (dhondega jab tak isko false nhi miljata)

console.log(true && "hashir"); // hashir
console.log(true && ""); // ""
console.log("hashir" && true && "smit"); // smit
console.log(null && "hashir" && 56); // null
console.log(null && "" && 0); // null
console.log(54 && 55 && 56); // 56
console.log(true && "hashir" && 56); // 56
console.log(true && 0 && 56); // 0
console.log(true && 1 && false); // false
console.log("hh" && null); // null
console.log("hh" && "kk"); // kk


// OR operator (ya) (||) koi ak bhi true tw true (dhondega jab isko true nhi miljata)

let test1 = true || true;

console.log(test1); // true

let x1 = 5;
let y1 = 16;

console.log(x1 == 5 || y1 == 5); // true

// Phale truthy value return kare ga

console.log("hashir" || true); // hashir
console.log("" || null); // null
console.log("" || true); // true
console.log("hashir" || 0 || null || true); // hashir
console.log(null || " " || 56); // " "
console.log(true || "hashir" || 56); // true
console.log(false || 0 || 56); // 56
console.log("hh" || null); // hh
console.log("hh" || "kk"); // hh

// NOT operator (nhi) (!) ye olat krdega true ko false false ko true

let age = 55;

console.log(!(age > 18)); // false
console.log(!0); // true
console.log(!5); // false
console.log(!"false"); // true

let x2 = 5;
let y2 = 16;

console.log(!(x2 === y2)); // true


// Trick
console.log(false || false || false); // false
console.log(true || true || true); // true
console.log(false && false && false); // false
console.log(true && true && true); // true