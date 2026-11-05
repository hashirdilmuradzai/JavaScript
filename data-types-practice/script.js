// Primitive data types are 7
// 1. String
// 2. Number
// 3. Boolean
// 4. undefined
// 5. null
// 6. BigInt
// 7. Symbol

// BBSSNNU(BigInt, Boolean, String, Symbol, Number, Null, Undefined);

let module_one_passed_students; // Snake Case // Old Era Use
let moduleOnePassedStudents; // Camel Case // New Era Use
// let module-one-passed-students; // Kebab case // Only Use in URLs

alert("Hello World"); // alert aik blocking code element hai jab tak ye nhi chalega agy code run nhi hoga

console.log("Hello \n World"); // \n break line keliyeee use hota hai jesy html me <br/>

let stringType = "This is String";
console.log(stringType, typeof stringType); // String

let numberType = 1234;
console.log(numberType, typeof numberType); // Number

let booleanType = (true, false);
console.log(booleanType, typeof booleanType); // Boolean

let undefinedType;
console.log(undefinedType, typeof undefinedType); // undefined mtlb value abhi de nhi hai isy (empty)

let nullType = null; // null ky data type object show hoty hai
console.log(nullType, typeof nullType); // null means abhi filhaal koe value nhi de hai lekin dengy baad me (intentionally empty)

let bigintType = 1234567890n;
console.log(bigintType, typeof bigintType); // aesy bhi likh skty hai akhir me n lgakr

let bigintType2 = BigInt(1234567890);
console.log(bigintType2, typeof bigintType2); // aesy bhi likhskty hai

let symbolType = Symbol("Hello World");
console.log(symbolType, typeof symbolType);

console.log(5 + 4); // 9
console.log("5+4"); // 5 + 4
console.log("5" + "4"); // 54

console.log("Hashir " + "Dilmurad Zai");

// This is single line comment

/*
This
is
multi
line
comment
*/

document.write("Hashir"); // Html me likhna javascript ky through

console.log(2 + (3 * 4) / 3); // 6
// BODMAS
// B - Brackets (do things inside these first)
// O - Orders (powers, square roots, or indices)
// D & M - Division and Multiplication (work these out from left to right)
// A & S - Addition and Subtraction (work these out from left to right)

console.log("Test " + 2 - 2); // NaN (Error)

console.log("2" + 2 - 2); // 20

console.log("2" - 2 + 2); // 2

console.log("Test" - 2 + 2); // NaN (Error)

console.log("Test" + 2 * 2); // Test4

console.log(("Test" + 2) * 2); // NaN (Error)

console.log("Power ", 3 * 5 ** 4 * 2); // 3750 (Pehly Power wali solve hogy)

console.log((3 + 4) * 5); // 35

console.log(4 * (4 - 55) + 60 / (-4 * 55)); // -204.272727273

// agr koe string me number hai uss string ko kese number ky sath + - * krogy agr us string me
// number ho to javascript automatic us string ko number bnadeta hai agr string text hoto javascript
// usko convert nhi krskta isliyeee NaN error ata hai
