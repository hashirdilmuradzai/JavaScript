// https://media.geeksforgeeks.org/wp-content/uploads/20260128123038832588/operator.webp

console.log(Math.round(5.1)); // 5 // Roudfigure krta hai .1 sy .4 tak pehly value tak krta hai and .5 sy .9 tak agy value krta hai

console.log((5.18765432).toFixed(2)); // 5.19 // Decimal ky baad 2 values hony chaiyeee iska mtlb last value roundfigure hogy

console.log((5).toFixed(2)); // 5.00

console.log(Math.ceil(5.1)); // 6 // aik value berha deta hai or decimal ky badd sub values hatjaty hai

console.log(Math.floor(5.9)); // 5 // aik value kam krdeta hai lekin agr decimal ho decimal ko khtam krky wahy value print krdeta hai

console.log(Math.abs(-6)); // 6 // sab value ko positive kardeta hy

let dice = Math.floor(Math.random() * 6); // Ye 0 se lekar 1 ke beech random decimal number deta hai (random) or jis number tak chaiye ussy multiply krdo
console.log(dice + 1); // gives any random value between 0 to 6

let a = "5";

console.log(Number(a)); // String ko Number me change krna.
console.log(parseInt(a)); // Ye sirf numbers leta hai. Ye decimal ka point aate hi ruk jata hai.
console.log(parseFloat(a)); // Ye decimal bhi samajhta hai and only numbers leta hai.
console.log((a = +a)); // (Unary Plus) Ye bhi number me convert karta hai.

// ---- Examples ---- //

// Difference Example

let ab = "5abc";

console.log(Number(ab)); // NaN
console.log(parseInt(ab)); // 5
console.log(parseFloat(ab)); // 5
console.log(+ab); // NaN

// Decimal Example

let ac = "5.75";

console.log(Number(ac)); // 5.75
console.log(parseInt(ac)); // 5
console.log(parseFloat(ac)); // 5.75
console.log(+ac); // 5.75

// Empty String

let ad = "";

console.log(Number(ad)); // 0
console.log(parseInt(ad)); // NaN
console.log(parseFloat(ad)); // NaN
console.log(+ad); // 0

// ---- Examples ---- //

// | Method         | Kab use karte hain?                         |
// | -------------- | ------------------------------------------- |
// | `Number()`     | Jab poori value number honi chahiye.        |
// | `parseInt()`   | Jab sirf integer chahiye.                   |
// | `parseFloat()` | Jab decimal allow ho.                       |
// | `+`            | Chhota aur fast shortcut, `Number()` jaisa. |

// Yaad rakhne ka trick
// Number() → "Poora number banao, warna NaN."
// parseInt() → "Sirf integer lo."
// parseFloat() → "Decimal bhi lo."
// + → "Number() ka short form."

let b = 5;

console.log(String(b)); // Number ko String me change krna hai
console.log(b.toString()); // Dono tareeqen sy likh skty hai

// ----- Asal Topic --------
// Comparison Operator always returns a Boolean

console.log("hashir" == "HASHIR"); // false // == Equality bolty hai isy Ye values ko compare krta hai lekin Type nhi dikhta bus
console.log(5 == "5"); // true

console.log(7 != 7); // false // Not equal -->> equal ka ulat / ulta

console.log(5 === "5"); // false // Strick Equality bolty hai isy Ye values ko compare krta hai and Type bhi dekhta hai
console.log(5 === 5); // true

console.log(7 !== 6); // true // Not Strick equal -->> Strick equal ka ulat / ulta

console.log(7 > 6); // true // Greaterthan
console.log(7 > 7); // false

console.log(7 >= 6); // true // Greaterthan and Equal to
console.log(7 >= 7.0001); // false

console.log(7 < 5); // false // Lessthan
console.log(7 < 7); // false

console.log(7 <= 6); // false // Lessthan and Equal to
console.log(7.01 <= 7); // false
