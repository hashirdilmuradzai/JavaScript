// https://nodejs.org/dist/v24.21.0/node-v24.21.0-x64.msi

// Assignment video 1: https://youtu.be/PPNNrXEwMYs?si=ZUPi5xdL9LRIzGlM
// Assignment video 2: https://youtu.be/sesUsrV5ims?si=xU_85FEngB8aVjaS

// "use strict"
// JavaScript ko kehta hai: “Code mein kuch aisi mistakes hain jinhein chup chaap allow karne ke bajaye error do.”

export const a = "Hashir"; // aesy bhi export krskty hai
const b = "Dilmurad";
const c = "Zai";

function add(a, b) {
  return a + b;
}

const subtract = (a, b) => {
  return a - b;
};

function greet(name) {
  return `Hello ${name}`;
}

export { b, c, add, subtract }; // multiple export bhi krskty hai

export default greet; // JavaScript mein export default ek file mein sirf 1 baar use kar sakte ho. Lekin named exports multiple kar sakte ho.
