const accountId = 12345;
let accountEmail = "hashir@google.com";
var accountPassword = "password12";
accountCity = "karachi";
let accountState;

// accountId = 9876; // Not Allowed Const varable change (Error)
accountEmail = "baloch@gmail.com";
accountPassword = "12password";
accountCity = "lahore";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
