// let a = Number(prompt("Enter First Number"));
// let b = Number(prompt("Enter Second Number"));

let a = prompt("Enter First Number");
let b = prompt("Enter Second Number");

try {
  // error find krny keliyee
  alert(parseInt(a) + parseInt(b)); // ismy error nhi hai isliyeee catch nhi chalega
  //   alert(parseInt(aa) + parseInt(bb)); // ismy error hai isliyeee ctach chalega
  if (isNaN(a) || isNaN(b)) {
    throw new Error("Sorry not allowed");
  }
} catch (error) {
  // agr koe error agay ismy show kraty hai
  alert(error.message);
} finally {
  // chaiyee error aaae ya na aae ye chalega
  document.body.innerHTML = `<h1>Hello</h1>`;
}
