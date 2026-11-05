// https://pll.harvard.edu/course/cs50-introduction-computer-science

let a = "Hashir"; // Global Variable Ye kese k andr nhi
console.log(a);

{
  let b = "Dilmurad"; // Local scope varable
  console.log(a); // bahar wala andr call hoskta hai andr wala bahar nhi
  console.log(b);
  //   console.log(c); // Error
  {
    let c = "Zai";
    console.log(a);
    console.log(b);
    console.log(c);
  }
}

// console.log(b); // Showing error because ye b kese k andr hai wo local varaible bn gya
