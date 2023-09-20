function raiseError() {
  return 3 + z;
}

try {
  raiseError();
} catch (err) {
  console.error(err.message);
}

console.log("it' works");
