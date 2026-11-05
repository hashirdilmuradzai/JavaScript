import { a as ab } from "./script.js"; // export krty waqt name change bhi skty ho varable ka name

console.log("a:", ab);

const a = "something"; // ab yha pr a ko as a varible use krskty ho

console.log("a:", a);

import { b, c, add, subtract } from "./script.js"; // multiple bhi export krskty hai

console.log("b:", b);

console.log("c:", c);

console.log("add", add(4, 5));

console.log("subtract", subtract(4, 5));

import hello from "./script.js"; // default export

console.log(hello("Hashir Dilmurad Zai"));
