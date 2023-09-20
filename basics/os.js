// OS
// Ref: https://nodejs.org/dist/latest-v18.x/docs/api/os.html

const os = require("node:os");

const SIZE = 1024;

function kb(bytes) {
  return bytes / SIZE;
}

function mb(bytes) {
  return kb(bytes) / SIZE;
}

function gb(bytes) {
  return mb(bytes) / SIZE;
}

console.log(os.arch());
console.log(os.cpus());
console.log(mb(os.freemem()));
console.log(gb(os.totalmem()));
console.log(os.hostname());
console.log(os.machine());
console.log(os.platform());
console.log(os.homedir());
console.log(os.networkInterfaces());
