const express = require("express");

const app = express();
const port = 1234;

app.get("/", (req, res) => {
  res.send({ message: "Hello World" });
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
