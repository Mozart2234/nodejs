// HTTP
// Ref: https://nodejs.org/dist/latest-v18.x/docs/api/http.html#http

const http = require("node:http");

const server = http.createServer(function (req, res) {
  console.log("new request");

  console.log(req.url);
  res.writeHead(201, { "Content-Type": "text/plain" });
  res.write("Hello, from nodejs");
  res.end();
});

server.listen(3500, () => {
  console.log("listen on port 3500");
});
