// File System
// Ref: https://nodejs.org/dist/latest-v18.x/docs/api/fs.html

// Callback Example
const fs = require("node:fs");
const fsPromises = require("node:fs/promises");

function read(route, cb) {
  fs.readFile(route, (err, data) => {
    if (err) {
      console.err("There is an error");
      return;
    }
    cb(data.toString());
  });
}

function writeFile(route, content, cb) {
  fs.writeFile(route, content, function (err) {
    if (err) {
      console.error("Error writing " + err);
      return;
    }

    cb("File written succesfully");
  });
}

async function dropFile(route) {
  try {
    await fsPromises.unlink(route);
    console.log("succesfully deleted! => ", route);
  } catch (error) {
    console.error("There was an error: ", error);
  }
}

read(__dirname + "/file.txt", (data) => {
  console.log(data);
});
writeFile(__dirname + "/file1.txt", "I'm a new file", async function (message) {
  console.log(message);
  await dropFile(__dirname + "/file1.txt");
});
