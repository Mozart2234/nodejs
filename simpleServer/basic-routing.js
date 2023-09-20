const { readFile } = require("node:fs");
const http = require("node:http");

const desiredPort = process.env.PORT ?? 1234;

const processRequest = (req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("<h1>Welcome to my garden</h1>");
  } else if (req.url === "/image.jpeg") {
    readFile("./image.jpeg", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("<h1>500 Internal Server Error</h1>");
      } else {
        res.setHeader("Content-Type", "image/jpeg");
        res.end(data);
      }
    });
  } else if (req.url === "/contact") {
    res.statusCode = 200;
    res.end("<h1>Welcome to my contact</h1>");
  } else {
    res.statusCode = 404;
    res.end("<h1>404</h1>");
  }
};

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
  console.log(`🚀🚀 Server listening on port http://localhost:${desiredPort}`);
});
