const matrix1 = [
  [8, 5],
  [2, 3],
];

const matrix2 = [
  [9, 5],
  [1, 2],
];

console.log(matrix1[0][0] + matrix2[0][0]); // 17
console.log(matrix1[0][1] + matrix2[0][1]); // 10
console.log(matrix1[1][0] + matrix2[1][0]); // 3
console.log(matrix1[1][1] + matrix2[1][1]); // 5

// Answer
// [
//   [17, 10],
//   [3, 5],
// ];

const matrix3 = [
  [8, 5],
  [2, 3],
];

const matrix4 = [
  [9, 5],
  [1, 2],
];

console.log(matrix3[0][0] - matrix4[0][0]);
console.log(matrix3[0][1] - matrix4[0][1]);
console.log(matrix3[1][0] - matrix4[1][0]);
console.log(matrix3[1][1] - matrix4[1][1]);

// Answer
// [
//   [-1, 0],
//   [1, 1],
// ];

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 4; j++) {
    console.log("Hashir Dilmurad Zai");
  }
}

// Nested Loop Simple Trick pehly loop ky value ko dosry loop k value sy multiply krdo pta chal
// jaega loop kitny baar chalega (5 * 4 = 20)

const matrix5 = [
  [8, 5, 4],
  [2, 3, 0],
  [4, 1, 9],
];

const matrix6 = [
  [11, 2, 7],
  [9, 5, 3],
  [5, 2, 1],
];

console.log(
  matrix5[0][0] + matrix6[0][0],
  matrix5[0][1] + matrix6[0][1],
  matrix5[0][2] + matrix6[0][2],
  matrix5[1][0] + matrix6[1][0],
  matrix5[1][1] + matrix6[1][1],
  matrix5[1][2] + matrix6[1][2],
  matrix5[2][0] + matrix6[2][0],
  matrix5[2][1] + matrix6[2][1],
  matrix5[2][2] + matrix6[2][2],
);

[
  [19, 7, 11],
  [11, 8, 3],
  [9, 3, 10],
];

// -------

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 4; j++) {
    console.log(i);
  }
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 4; j++) {
    console.log(j);
  }
}

// -------

let result = [];

for (let i = 0; i < matrix5.length; i++) {
  // Pehla loop Outer loop Rows keliyee
  for (let j = 0; j < matrix5[i].length; j++) {
    // Dosra loop inner loop Column keliyee
    let sumValue = matrix5[i][j] + matrix6[i][j];

    if (result[i] === undefined) {
      result[i] = [];
    }

    result[i].push(sumValue);
  }
}
console.log("Result Array: ", result);
