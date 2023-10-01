process.on("exit", () => {
  console.log("It finished");
});

process.on("beforeExit", () => {
  console.log("The process is going to finished");
});

process.on("uncaughtException", (err, origin) => {
  console.log(err, origin);
});

console.log("El proces init");
