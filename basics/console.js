// Console
// Ref: https://nodejs.org/dist/latest-v18.x/docs/api/console.html

const table = [
  {
    name: "Alexei",
    lastName: "Mamani",
  },
  {
    name: "JP",
    lastName: "Mamani",
  },
];

console.time("timer");
console.log("This is a simple message");
console.error("This is an error");
console.warn("This is an alias for console.error");

console.log(table);
console.table(table);

console.group("Talk");
console.log("Hi");
console.log("How it's going");
console.log("I'm soo good");
console.log("bye");
console.groupEnd("Talk");

console.count("times");
console.count("times");
console.count("times");
console.count("times");
console.count("times");
console.countReset("times");
console.count("times");
console.timeEnd("timer");
