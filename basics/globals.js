// Globals
// Ref: https://nodejs.org/dist/latest-v18.x/docs/api/globals.html

console.log(global);
console.log(globalThis);

let i = 0;
let interval = setInterval(function () {
  console.log("Hola " + i);
  if (i === 3) {
    clearInterval(interval);
  }
  i++;
}, 1000);

setImmediate(function () {
  console.log("Immediate");
});

console.log(process);
console.log(__dirname);
console.log(__filename);

// Disclaimer: Is not a good idea
global.miVariable = "Holi";

console.log(miVariable);
