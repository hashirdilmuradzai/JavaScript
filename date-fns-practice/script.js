// https://date-fns.org/v4.4.0/docs/format

let date = new Date();

console.log(date);

let myDate = dateFns.format(date, "EEEE, dd LLLL yyyy"); // Friday, 25 September 2026

console.log(myDate);

let myDate2 = dateFns.formatDistanceToNow("03 August 2003", {
  addSuffix: true, // ago
});

console.log(myDate2);
