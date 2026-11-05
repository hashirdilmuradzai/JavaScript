let now = new Date();

now = now.getUTCHours();

let previous = new Date(2026, 8, 23);

console.log(previous);

now = previous.getUTCHours();

console.log(previous);

console.log("Date + Time + Timezone:", previous.toString()); // Date + time + timezone sab deta hai.
console.log("Sirf Date:", previous.toDateString()); // Sirf date deta hai. Time aur timezone hata deta hai.
console.log("Sirf Time + Timezone:", previous.toTimeString()); // Sirf time + timezone deta hai.
console.log("Standard UTC date/time format:", previous.toISOString()); // Date ko ISO 8601 format mein deta hai.

// Birthday Calculation

let date = new Date();

console.log(date);

let birthday = new Date("2003-8-4");

console.log(birthday);

let diff = date.getTime() - birthday.getTime();

console.log(diff);

let age = diff / (1000 * 60 * 60 * 24 * 365);

console.log("Age: ", age);
