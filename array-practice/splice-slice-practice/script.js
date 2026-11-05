// 18/Jul/2026
// Splice and Slice

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

// array aur object hamesha const se bana hy!!!

console.log(students);

students.sort(); // alphaphatic sorting // original array change ho jaye ga

const a = students.toSorted(); // alphaphatic sorting // original array change NHI ho jaye ga // unko varibale bnakr likha jata hai

console.log(students);

console.log("Students array:", a);

// slice(start, end); // kha sy start krna hai kha tak jana hai aik value agy krky likhegy end keliyee
// slice original array ko change nhi krta

const result = students.slice(1, 4); // 1 sy 4 tak value laega 4 nhi laega

console.log("Result:", result);

// splice(index, how many delete, "New Value"); // pehly bolegy kha sy start kro phir bolo kitny delete krny hai phir unky jgah
// koe new add krna hai
// splice original array ko change krta hai

const deletedContent = students.splice(2, 1, "Hashir");

// toSpliced(index, how many delete, "New Value"); original array ko change nahi karta, balki new array return karta hai.

const copiedArray = students.toSpliced(2, 1, "Dilmurad Zai");

console.log("Students: ", students);

console.log("Deleted Content: ", deletedContent);

console.log("Copied Array: ", copiedArray);

// | Method        | Original Array     | Kya karta hai                                       |
// | ------------- | ------------------ | --------------------------------------------------- |
// | `slice()`     | ❌ Change nahi      | Part ki copy deta hai                               |
// | `splice()`    | ✅ Change karta hai | Remove/add/replace karta hai                        |
// | `toSpliced()` | ❌ Change nahi      | Splice jaisa remove/add/replace, new array deta hai |

// 🧠 Shortcut
// slice → Copy ka piece nikaalo
// splice → Original ko kaato/change karo
// toSpliced → Copy ko kaato/change karo
