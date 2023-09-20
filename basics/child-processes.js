// Child Processes
// Ref: https://nodejs.org/dist/latest-v18.x/docs/api/child_process.html

const { exec, spawn } = require("node:child_process");

exec("ls -la", (err, stdout, sterr) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(stdout);
});

const process = spawn("ls", ["-la"]);
console.log("Process PID: ", process.pid);
console.log("Process PID: ", process.connected);

process.stdout.on("data", function (data) {
  console.log(data.toString());
});

process.on("exit", function () {
  console.log("The process ended");
  console.log(process.killed);
});
