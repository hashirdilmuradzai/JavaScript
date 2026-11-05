// kisi code ko bar bar chalane ky liye

// shuru kidher se hoga aur end kidher hoga
// jab condition true hogyi tw loop ki body chale gyi

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// shuru 5 se aur ak number chor kr
for (let i = 5; i <= 10; i = i + 2) {
  console.log(i);
}

// ulta loop
for (let i = 20; i > 9; i--) {
  console.log(i);
}

// ulta loop
for (let i = 5; i >= -5; i--) {
  console.log(i);
}

// trick (ye bhi olta loop)
for (let i = 1; i <= 10; i++) {
  console.log(11 - i);
}

// for (initialization; condition; increment / decrement) {
//   loop_body;
// }

// for ( 1 (aik baar chalega); 2 (condition) ; 4 (baar baar chalega)) {
//    3
// }

// break stop loop
for (let i = 0; i < 20; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// continue skip 1 iteration (jo condition hogy wo skip hoga baqy chalta rahega)
for (let i = 0; i < 20; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

let i = 1;

for (; i <= 10; ) {
  console.log(i);
  i++;
}

let j = 0;

for (console.log("Hello"); j < 10; console.log("Hello 3")) {
  console.log("Hello 2");
  j++;
}
