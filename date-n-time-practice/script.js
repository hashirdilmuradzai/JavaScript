let now = new Date();
console.log(now);

let date = now.getDate();
console.log(date);

console.log(now.getFullYear());

console.log(now.getHours());

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "November",
  "December",
];

console.log(months[now.getMonth()]);

console.log(days[now.getDay()]);

let index = now.getDay();
console.log(days[index]);

console.log(now.toString().slice(0, 3));

console.log(now.getMonth());

// ----------------------
// 1) Mon 24 Aug 7:32 PM

let formate = "";
formate += `${days[now.getDay()].slice(0, 3)}`;
formate += ` ${now.getDate()}`;
formate += ` ${months[now.getMonth()].slice(0, 3)}`;
let hour = now.getHours();
let ampm = "";

if (hour === 0) {
  hour = 12;
  ampm = "AM";
} else if (hour === 12) {
  ampm = "PM";
} else if (hour < 12) {
  ampm = "AM";
} else {
  hour = hour - 12;
  ampm = "PM";
}

// value.padStart(length, character) // ye sirf string pr kaam krta hai

formate += ` ${String(hour).padStart(2, 0)}`;
formate += `:${String(now.getMinutes()).padStart(2, 0)}`;
formate += ` ${ampm}`;

console.log(formate);

document.querySelector("#time1").innerHTML = formate;

// 2) 24th/August/2026 07:32:30 PM

formate2 = "";

let date1 = now.getDate();

if (date1 === 1 || date1 === 21 || date1 === 31) {
  date1 = `${date1}st`;
} else if (date1 === 2 || date1 === 22) {
  date1 = `${date1}nd`;
} else if (date1 === 3 || date1 === 23) {
  date1 = `${date1}rd`;
} else {
  date1 = `${date1}th`;
}

formate2 += `${date1}`;
formate2 += `/${months[now.getMonth()]}`;
formate2 += `/${now.getFullYear()}`;

formate2 += ` ${String(hour).padStart(2, 0)}`;

formate2 += `:${String(now.getMinutes()).padStart(2, 0)}`;
formate2 += `:${String(now.getSeconds()).padStart(2, 0)}`;
formate2 += `:${ampm}`;

console.log(formate2);

document.querySelector("#time2").innerHTML = formate2;
